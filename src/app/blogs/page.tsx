import Link from "next/link";
import Image from "next/image";
import { getBlogPosts } from "~/lib/blog";

export default async function BlogsPage() {
  const posts = await getBlogPosts();

  return (
    <div className="space-y-16">
      {/* Featured Post */}
      {posts[0] && (
        <article className="group">
          <Link href={`/blogs/${posts[0].slug}`}>
            {posts[0].image && (
              <div className="aspect-[16/9] relative mb-6 rounded-lg overflow-hidden bg-gray-100">
                <Image 
                  src={posts[0].image} 
                  alt={posts[0].title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            )}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <time className="text-sm text-gray-500">
                  {new Date(posts[0].date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </time>
                <span className="text-gray-300">•</span>
                <span className="text-sm text-gray-500">{posts[0].readTime}</span>
              </div>
              
              <h2 className="text-3xl font-bold text-gray-900 group-hover:text-gray-600 transition-colors">
                {posts[0].title}
              </h2>
              
              <p className="text-lg text-gray-600 leading-relaxed">
                {posts[0].excerpt}
              </p>
              
              {posts[0].tags && posts[0].tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {posts[0].tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </Link>
        </article>
      )}

      {/* Other Posts */}
      {posts.length > 1 && (
        <div className="border-t border-gray-100 pt-16">
          <div className="grid md:grid-cols-2 gap-8">
            {posts.slice(1).map((post) => (
              <article key={post.slug} className="group">
                <Link href={`/blogs/${post.slug}`}>
                  {post.image && (
                    <div className="aspect-[16/9] relative mb-4 rounded-lg overflow-hidden bg-gray-100">
                      <Image 
                        src={post.image} 
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                  )}
                  <div className="space-y-3">
                    <div className="flex items-center gap-3 text-sm text-gray-500">
                      <time>
                        {new Date(post.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric',
                          year: 'numeric'
                        })}
                      </time>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold text-gray-900 group-hover:text-gray-600 transition-colors">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {post.excerpt}
                    </p>
                    
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 2).map((tag) => (
                          <span 
                            key={tag}
                            className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      )}
      
      {posts.length === 0 && (
        <div className="text-center text-gray-500 py-16">
          <p>No posts yet. Check back soon!</p>
        </div>
      )}
    </div>
  );
}