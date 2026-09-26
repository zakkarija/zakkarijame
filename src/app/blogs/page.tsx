import Link from "next/link";

import { getBlogPosts } from "~/lib/blog";
import { formatPostDate } from "~/lib/format";

export default async function BlogsPage() {
  const posts = await getBlogPosts();

  return (
    <>
      <h1 className="section__heading">Writing</h1>
      <div className="solo">
        <div className="card card--paper blog-card">
          {posts.length === 0 ? (
            <p className="blog-empty">Nothing published yet.</p>
          ) : (
            <ol className="blog-list">
              {posts.map((post) => (
                <li key={post.slug} className="blog-item">
                  <p className="blog-item__meta">
                    <time dateTime={post.date}>{formatPostDate(post.date)}</time>
                    <span>{post.readTime}</span>
                  </p>
                  <h2 className="blog-item__title">
                    <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-item__excerpt">{post.excerpt}</p>
                  {post.tags && post.tags.length > 0 ? (
                    <ul className="tags" aria-label="Topics">
                      {post.tags.map((tag) => (
                        <li key={tag}>{tag}</li>
                      ))}
                    </ul>
                  ) : null}
                </li>
              ))}
            </ol>
          )}
        </div>
      </div>
    </>
  );
}
