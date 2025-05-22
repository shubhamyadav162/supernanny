import React from 'react';
import Link from 'next/link';
import { posts } from './data';

export const metadata = {
  title: 'Blog - SuperNanny',
  description: 'Read our latest childcare and parenting articles',
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-cloud text-charcoal font-nunito">
      <aside className="w-1/4 sticky top-0 h-screen border-r bg-cream p-6 overflow-y-auto">
        <h2 className="text-3xl font-quicksand font-bold mb-6 text-bubblegum">Blog Posts</h2>
        <ul className="space-y-4">
          {posts.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="block px-4 py-2 rounded-lg font-semibold hover:bg-bubblegum/20 transition-colors"
              >
                {post.title}
              </Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="flex-1 p-8">
        {children}
      </main>
    </div>
  );
} 