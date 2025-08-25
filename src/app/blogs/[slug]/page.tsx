import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { getBlogPost, getBlogPosts } from '~/lib/blog';
import { MDXRemote } from 'next-mdx-remote/rsc';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  
  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} - Zakkarija Micallef`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : [],
    },
  };
}

export default async function BlogPost({ 
  params 
}: { 
  params: Promise<{ slug: string }> 
}) {
  const { slug } = await params;
  const post = await getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <article>
      <header className="mb-12">
        <Link 
          href="/blogs" 
          className="text-sm text-gray-500 hover:text-gray-700 mb-8 inline-flex items-center gap-2"
        >
          ← All posts
        </Link>
        
        <div className="space-y-6">
          <div className="flex items-center gap-4 text-sm text-gray-500">
            <time>
              {new Date(post.date).toLocaleDateString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric'
              })}
            </time>
            <span>•</span>
            <span>{post.readTime}</span>
            {post.author && (
              <>
                <span>•</span>
                <span>by {post.author}</span>
              </>
            )}
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 leading-tight">
            {post.title}
          </h1>
          
          <p className="text-xl text-gray-600 leading-relaxed">
            {post.excerpt}
          </p>
          
          {post.tags && post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
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
        
        {post.image && (
          <div className="aspect-[16/9] relative mt-8 rounded-lg overflow-hidden">
            <Image 
              src={post.image} 
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </header>

      <div className="prose prose-lg prose-gray max-w-none">
        <MDXRemote source={post.content} />
      </div>
      
      <footer className="mt-16 pt-8 border-t border-gray-100">
        <div className="flex justify-between items-center">
          <Link 
            href="/blogs" 
            className="text-sm text-gray-500 hover:text-gray-700 flex items-center gap-2"
          >
            ← More posts
          </Link>
          {post.tags && post.tags.length > 0 && (
            <div className="flex gap-2">
              {post.tags.map((tag) => (
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
      </footer>
    </article>
  );
}