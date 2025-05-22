import React from 'react';

export default function BlogIndexPage() {
  return (
    <div className="h-full flex flex-col justify-center items-center text-center space-y-4">
      <h1 className="text-4xl font-quicksand font-bold mb-2 text-bubblegum">
        Welcome to the SuperNanny Blog
      </h1>
      <p className="text-lg font-nunito text-charcoal">
        Select a blog post from the sidebar to read.
      </p>
    </div>
  );
} 