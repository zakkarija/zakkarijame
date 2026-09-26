import { type Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Zakkarija Micallef",
  description: "Thoughts, ideas, and insights on technology and development",
};

export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <header className="mb-16">
          <Link href="/" className="text-sm text-gray-500 hover:text-gray-700 mb-8 inline-block">
            ← Back to portfolio
          </Link>
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Blog
          </h1>
          <p className="text-gray-600">
            Thoughts on development, design, and technology
          </p>
        </header>
        {children}
      </div>
    </div>
  );
}