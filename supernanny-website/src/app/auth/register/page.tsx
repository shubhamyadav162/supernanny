"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { account } from '../../../lib/appwrite';
import { ID } from 'appwrite';

export default function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Create user account
      await account.create(ID.unique(), email, password, name);
      // Create session after registration
      await account.createSession(email, password);
      router.push('/profile');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-6">Sign Up</h1>
      <form onSubmit={handleRegister} className="space-y-4 max-w-md">
        {error && <p className="text-red-500">{error}</p>}
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={e => setName(e.target.value)}
          required
          className="w-full p-2 border rounded"
        />
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
          Sign Up
        </button>
      </form>
    </div>
  );
} 