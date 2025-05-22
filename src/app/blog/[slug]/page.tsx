import React from 'react';
import { notFound } from 'next/navigation';
import { posts } from '../data';

interface Props {
  params: { slug: string };
}

export default function PostPage({ params }: Props) {
  const post = posts.find((p) => p.slug === params.slug);

  if (!post) {
    notFound();
  }

  return (
    <article className="max-w-3xl mx-auto space-y-6">
      <h1 className="text-4xl font-quicksand font-bold mb-4 text-bubblegum">
        {post.title}
      </h1>
      <div className="space-y-4 text-base md:text-lg font-nunito text-charcoal leading-relaxed">
        {post.content}
      </div>
    </article>
  );
} 