"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../../lib/appwrite';
import { OAuthProvider } from 'appwrite';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  // Google OAuth login handler
  const handleGoogleLogin = async () => {
    try {
      // Initiate Google OAuth2 session with redirect on success/failure
      await account.createOAuth2Session(
        OAuthProvider.Google,
        window.location.origin + '/profile',
        window.location.origin + '/auth/login'
      );
    } catch (err: any) {
      setError(err.message);
    }
  };
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await account.createSession(email, password);
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Sign In</h1>
      {/* Google OAuth Button */}
      <button
        type="button"
        onClick={handleGoogleLogin}
        className="w-full mb-4 py-2 px-4 bg-red-600 text-white rounded"
      >
        Sign in with Google
      </button>
      <form onSubmit={handleLogin} className="space-y-4 max-w-md">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
        <button
          type="submit"
          className="w-full py-2 px-4 bg-primary text-white rounded"
        >
          Sign In
        </button>
      </form>
    </div>
  );
} 