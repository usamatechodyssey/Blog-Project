"use client";

import { useState, useEffect } from "react";

// Define blog post types
const blogPosts: Record<string, { title: string; content: string }> = {
  "1": {
    title: "Learning Next.js 14",
    content: "Detailed content about Next.js 14...",
  },
  "2": {
    title: "TypeScript for Beginners",
    content: "Detailed content about TypeScript...",
  },
  "3": {
    title: "Why Tailwind CSS?",
    content: "Detailed content about Tailwind CSS...",
  },
};

export default function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const [resolvedParams, setResolvedParams] = useState<{ id: string } | null>(
    null
  );
  const [post, setPost] = useState<{ title: string; content: string } | null>(
    null
  );
  const [comments, setComments] = useState<string[]>([]);
  const [comment, setComment] = useState("");

  // Resolve params promise
  useEffect(() => {
    const fetchParams = async () => {
      const resolved = await params;
      setResolvedParams(resolved);
    };
    fetchParams();
  }, [params]);

  // Fetch the post once params are resolved
  useEffect(() => {
    if (resolvedParams) {
      const post = blogPosts[resolvedParams.id];
      setPost(post || null); // Set post or null if not found
    }
  }, [resolvedParams]);

  const addComment = () => {
    if (comment.trim()) {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  if (!post) {
    return <h1 className="text-2xl font-bold text-red-600">Post not found</h1>;
  }

  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">{post.title}</h1>
      <p className="text-gray-700 text-lg">{post.content}</p>
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Comments</h2>
        <ul className="space-y-2">
          {comments.map((c, index) => (
            <li key={index} className="bg-gray-100 p-2 rounded-md shadow-sm">
              {c}
            </li>
          ))}
        </ul>
        <div className="mt-4 flex space-x-2">
          <input
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment"
            className="flex-1 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={addComment}
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
