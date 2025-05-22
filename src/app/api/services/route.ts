import { NextResponse } from 'next/server';
import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!);

// Set API key as JWT for authentication if provided
if (process.env.APPWRITE_API_KEY) {
  client.setJWT(process.env.APPWRITE_API_KEY);
}

const databases = new Databases(client);

export async function GET(request: Request) {
  const response = await databases.listDocuments(
    '682c1518000ed8cafc1f',
    'services'
  );
  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const data = await request.json();
  const document = await databases.createDocument(
    '682c1518000ed8cafc1f',
    'services',
    ID.unique(),
    data
  );
  return NextResponse.json(document);
}

export async function PUT(request: Request) {
  const { id, ...updateData } = await request.json();
  const document = await databases.updateDocument(
    '682c1518000ed8cafc1f',
    'services',
    id,
    updateData
  );
  return NextResponse.json(document);
}

export async function DELETE(request: Request) {
  const { id } = await request.json();
  await databases.deleteDocument(
    '682c1518000ed8cafc1f',
    'services',
    id
  );
  return NextResponse.json({ message: 'Service deleted', id });
} 