import Link from "next/link";

export default function HomePage() {
  return (
    <div className="bg-white p-6 rounded-md shadow-md">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">
        Welcome to My Blog
      </h1>
      <p className="text-gray-700 text-lg">
        Dive into a world of technology, programming, and development insights.
        Whether you're a beginner or an expert, there's something for everyone
        here.
      </p>
      <p className="text-gray-700 text-lg mt-4">
        Start exploring our articles to learn about cutting-edge frameworks like
        Next.js, TypeScript, Tailwind CSS, and more!
      </p>
      <Link
        href="/post"
        className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700"
      >
        Explore Blogs &rarr;
      </Link>
    </div>
  );
}
