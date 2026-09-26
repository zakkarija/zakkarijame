import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";

import { getBlogPost, getBlogPosts } from "~/lib/blog";
import { formatPostDate } from "~/lib/format";

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Post not found" };

  return {
    title: post.title,
    description: post.excerpt,
    openGraph: {
      type: "article",
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

function BackIcon() {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      <path d="M10 3.5 5.5 8l4.5 4.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();

  return (
    <div className="solo">
      <article className="card card--paper post">
        <div className="post__column">
          <Link href="/blogs" className="post__back">
            <BackIcon />
            All writing
          </Link>

          <header className="post__header">
            <p className="post__meta">
              <time dateTime={post.date}>{formatPostDate(post.date)}</time>
              <span>{post.readTime}</span>
            </p>
            <h1 className="post__title">{post.title}</h1>
            <p className="post__lead">{post.excerpt}</p>
            {post.tags && post.tags.length > 0 ? (
              <ul className="tags" aria-label="Topics">
                {post.tags.map((tag) => (
                  <li key={tag}>{tag}</li>
                ))}
              </ul>
            ) : null}
          </header>

          {post.image ? (
            <figure className="post__figure">
              <Image
                src={post.image}
                alt=""
                fill
                sizes="(min-width: 800px) 720px, 100vw"
                priority
              />
            </figure>
          ) : null}

          <div className="prose">
            <MDXRemote source={post.content} />
          </div>

          <footer className="post__footer">
            <Link href="/blogs" className="post__back">
              <BackIcon />
              More writing
            </Link>
          </footer>
        </div>
      </article>
    </div>
  );
}
