import { NextResponse } from 'next/server';
import { Client, Databases, ID } from 'appwrite';

// Initialize the Appwrite client with proper environment variable checks
const client = new Client();

// Make sure endpoint and project ID are properly defined before using them
if (process.env.APPWRITE_ENDPOINT && process.env.APPWRITE_PROJECT_ID) {
  client
    .setEndpoint(process.env.APPWRITE_ENDPOINT)
    .setProject(process.env.APPWRITE_PROJECT_ID);
} else {
  console.error('Appwrite environment variables are not properly configured');
}

// Set API key as JWT for authentication if provided
if (process.env.APPWRITE_API_KEY) {
  client.setJWT(process.env.APPWRITE_API_KEY);
}

const databases = new Databases(client);

export async function GET(request: Request) {
  const response = await databases.listDocuments(
    '682c1518000ed8cafc1f',
    'bookings'
  );
  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const data = await request.json();
  const document = await databases.createDocument(
    '682c1518000ed8cafc1f',
    'bookings',
    ID.unique(),
    data
  );
  return NextResponse.json(document);
}

export async function PUT(request: Request) {
  const { id, ...updateData } = await request.json();
  const document = await databases.updateDocument(
    '682c1518000ed8cafc1f',
    'bookings',
    id,
    updateData
  );
  return NextResponse.json(document);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await databases.deleteDocument(
    '682c1518000ed8cafc1f',
    'bookings',
    id
  );
  return NextResponse.json({ message: 'Booking canceled', id });
} 