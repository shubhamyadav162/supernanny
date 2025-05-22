"use client";
import { useState, useEffect, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import { account, databases } from '../../lib/appwrite';
import { Query, OAuthProvider, Permission, Role } from 'appwrite';

export default function ProfilePage() {
  const [user, setUser] = useState<any>(null);
  const [bookings, setBookings] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  // State to show Google login option when unauthenticated
  const [isUnauthenticated, setIsUnauthenticated] = useState(false);
  // Profile state and form
  const [profile, setProfile] = useState<any>(null);
  const [loadingProfile, setLoadingProfile] = useState(true);
  const [profileForm, setProfileForm] = useState<{ phone: string; role: string; address: string }>({ phone: '', role: 'parent', address: '' });

  // Google OAuth login handler for profile page
  const handleGoogleLogin = async () => {
    try {
      await account.createOAuth2Session(
        OAuthProvider.Google,
        window.location.origin + '/profile',
        window.location.origin + '/profile'
      );
    } catch (err: any) {
      setError(err.message);
    }
  };
  const router = useRouter();

  // Handle profile creation
  const handleProfileSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '682c1518000ed8cafc1f';
      const profilesCollection = 'profiles';
      const newProfile = await databases.createDocument(
        databaseId,
        profilesCollection,
        user.$id,
        {
          name: user.name,
          email: user.email,
          phone: profileForm.phone,
          role: profileForm.role,
          address: profileForm.address
        },
        // grant current user read and write permissions
        [
          Permission.read(Role.user(user.$id)),
          Permission.write(Role.user(user.$id))
        ]
      );
      setProfile(newProfile);
    } catch (err: any) {
      // Treat unauthorized (401) and forbidden (403) as not allowed
      if (err.code === 403 || err.code === 401) {
        setError('You are not authorized to create a profile. Please contact support.');
      } else {
        setError(err.message);
      }
    }
  };

  useEffect(() => {
    async function fetchData() {
      try {
        const sessionUser = await account.get();
        setUser(sessionUser);
        const databaseId = process.env.NEXT_PUBLIC_APPWRITE_DATABASE_ID || '682c1518000ed8cafc1f';
        // Check if profile exists
        let profileDoc;
        try {
          profileDoc = await databases.getDocument(databaseId, 'profiles', sessionUser.$id);
        } catch (err: any) {
          if (err.code === 404 || err.code === 403) {
            // Treat missing or unauthorized access as no existing profile
            profileDoc = null;
          } else {
            throw err;
          }
        }
        setLoadingProfile(false);
        if (!profileDoc) {
          // Auto-create profile for new Google users
          try {
            const newProfile = await databases.createDocument(
              databaseId,
              'profiles',
              sessionUser.$id,
              { name: sessionUser.name, email: sessionUser.email },
              [Permission.read(Role.user(sessionUser.$id)), Permission.write(Role.user(sessionUser.$id))]
            );
            setProfile(newProfile);
          } catch (err: any) {
            console.error(err);
            if (err.code === 403) {
              console.warn('Permission denied to auto-create profile, continuing to manual profile completion.');
            } else {
              setError(err.message);
            }
            return;
          }
        } else {
          setProfile(profileDoc);
        }
        // Fetch bookings for this user
        try {
          const bookingsRes = await databases.listDocuments(
            databaseId,
            'bookings',
            [ Query.equal('customer_id', sessionUser.$id) ]
          );
          setBookings(bookingsRes.documents);
        } catch (err: any) {
          if (err.code === 403 || err.code === 404) {
            console.warn('Permission denied or not found when fetching bookings, continuing with empty list.');
            setBookings([]);
          } else {
            throw err;
          }
        }
      } catch (err: any) {
        // If not logged in or unauthorized, show Google login option
        if (err.code === 401 || err.code === 403) {
          setIsUnauthenticated(true);
          setLoadingProfile(false);
          return;
        }
        setError(err.message);
      }
    }
    fetchData();
  }, [router]);

  // If user not authenticated, prompt Google login
  if (isUnauthenticated) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Welcome!</h1>
        {error && <p className="text-red-500 mb-4">Error: {error}</p>}
        <button
          type="button"
          onClick={handleGoogleLogin}
          className="w-full py-2 px-4 bg-red-600 text-white rounded"
        >
          Continue with Google
        </button>
      </div>
    );
  }
  if (error) return <p className="text-red-500 p-4">Error: {error}</p>;
  if (!user) return <p className="p-4">Loading...</p>;
  if (loadingProfile) return <p className="p-4">Loading profile...</p>;
  if (!profile) {
    return (
      <div className="container mx-auto py-10 px-4">
        <h1 className="text-2xl font-bold mb-6">Complete Your Profile</h1>
        {error && <p className="text-red-500 mb-4">Error: {error}</p>}
        <form onSubmit={handleProfileSubmit} className="space-y-4 max-w-md">
          <input
            type="text"
            placeholder="Phone"
            value={profileForm.phone}
            onChange={e => setProfileForm({ ...profileForm, phone: e.target.value })}
            required
            className="w-full p-2 border rounded"
          />
          <select
            value={profileForm.role}
            onChange={e => setProfileForm({ ...profileForm, role: e.target.value })}
            required
            className="w-full p-2 border rounded"
          >
            <option value="parent">Parent</option>
            <option value="nanny">Nanny</option>
            <option value="admin">Admin</option>
          </select>
          <input
            type="text"
            placeholder="Address"
            value={profileForm.address}
            onChange={e => setProfileForm({ ...profileForm, address: e.target.value })}
            className="w-full p-2 border rounded"
          />
          <button type="submit" className="w-full py-2 px-4 bg-primary text-white rounded">
            Save Profile
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-2xl font-bold mb-4">Welcome, {user.name}</h1>
      <h2 className="text-xl font-semibold mb-2">Email: {user.email}</h2>

      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Your Bookings</h2>
        {bookings.length === 0 ? (
          <p>No bookings found.</p>
        ) : (
          <ul className="space-y-4">
            {bookings.map((booking) => (
              <li key={booking.$id} className="p-4 border rounded">
                <p><strong>Service:</strong> {booking.serviceName}</p>
                <p><strong>Date:</strong> {booking.date}</p>
                <p><strong>Status:</strong> {booking.status}</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
} 