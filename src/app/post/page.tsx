import Link from "next/link";

const blogPosts = [
  {
    id: "1",
    title: "Learning Next.js 14",
    excerpt: "Explore the amazing features of Next.js 14...",
  },
  {
    id: "2",
    title: "TypeScript for Beginners",
    excerpt: "Learn how TypeScript improves your code quality...",
  },
  {
    id: "3",
    title: "Why Tailwind CSS?",
    excerpt: "Tailwind CSS simplifies your styling process...",
  },
];

export default function BlogList() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">Blog Posts</h1>
      <ul className="space-y-4">
        {blogPosts.map((post) => (
          <li key={post.id} className="border-b pb-4">
            <h2 className="text-2xl font-semibold text-gray-800">
              <Link href={`/post/${post.id}`} className="hover:underline">
                {post.title}
              </Link>
            </h2>
            <p className="text-gray-600 mt-2">{post.excerpt}</p>
            <Link
              href={`/post/${post.id}`}
              className="text-blue-600 hover:underline mt-2 inline-block"
            >
              Read more →
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
