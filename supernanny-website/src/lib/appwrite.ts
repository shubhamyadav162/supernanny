import { Client, Account, Databases } from 'appwrite';

// Fallback to default values if environment variables are not loaded (avoids needing a server restart)
const appwriteEndpoint = process.env.NEXT_PUBLIC_APPWRITE_ENDPOINT || 'https://fra.cloud.appwrite.io/v1';
const appwriteProject = process.env.NEXT_PUBLIC_APPWRITE_PROJECT || '682bfd4b001634b59a0b';
const client = new Client()
  .setEndpoint(appwriteEndpoint)
  .setProject(appwriteProject);

// Services
export const account = new Account(client);
export const databases = new Databases(client); 