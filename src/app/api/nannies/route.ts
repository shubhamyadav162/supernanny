import { NextResponse } from 'next/server';
import { Client, Databases, ID } from 'appwrite';

const client = new Client()
  .setEndpoint(process.env.APPWRITE_ENDPOINT!)
  .setProject(process.env.APPWRITE_PROJECT_ID!)
  // @ts-ignore
  .setKey(process.env.APPWRITE_API_KEY!);

const databases = new Databases(client);

export async function GET(request: Request) {
  const response = await databases.listDocuments(
    '682c1518000ed8cafc1f',
    'nannies'
  );
  return NextResponse.json(response);
}

export async function POST(request: Request) {
  const data = await request.json();
  const document = await databases.createDocument(
    '682c1518000ed8cafc1f',
    'nannies',
    ID.unique(),
    data
  );
  return NextResponse.json(document);
} 