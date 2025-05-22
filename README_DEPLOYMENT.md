# Deployment Instructions

## Environment Variables

Create an `.env.local` file in the root directory with the following content:

```
# Appwrite configuration
APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
APPWRITE_PROJECT_ID=your-project-id
APPWRITE_API_KEY=your-api-key
```

Replace the placeholders with your actual Appwrite credentials. You can find these in your Appwrite console under Project Settings.

## Vercel Deployment

1. Make sure to add the above environment variables in your Vercel project settings under "Environment Variables".
2. Ensure that all Tailwind CSS classes used in the project are either in the standard Tailwind library or properly defined in your `tailwind.config.js`.
3. The `bg-bubblegum` class is used throughout the project and should be available through the theme extensions in your Tailwind config.

## Local Development

1. Install dependencies: `npm install`
2. Run the development server: `npm run dev`
3. Build for production: `npm run build`

## Troubleshooting

If you encounter build errors related to Tailwind CSS classes, check:
1. That all custom colors are defined in `tailwind.config.js`
2. That your CSS files properly import Tailwind directives (`@tailwind base`, `@tailwind components`, `@tailwind utilities`)
3. That custom classes are defined within `@layer components {}`

For API errors, ensure that:
1. All environment variables are properly set
2. Your Appwrite instance is properly configured and accessible
