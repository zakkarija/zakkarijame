import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  readTime: string;
  content: string;
  image?: string;
  tags?: string[];
  author?: string;
}

const postsDirectory = path.join(process.cwd(), 'src/content/posts');

export async function getBlogPosts(): Promise<BlogPost[]> {
  // Ensure directory exists
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames
    .filter((fileName) => fileName.endsWith('.mdx'))
    .map((fileName) => {
      const slug = fileName.replace(/\.mdx$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const { data, content } = matter(fileContents);

      return {
        slug,
        title: (data.title as string) ?? 'Untitled',
        date: (data.date as string) ?? new Date().toISOString().split('T')[0],
        excerpt: (data.excerpt as string) ?? content.substring(0, 150) + '...',
        readTime: (data.readTime as string) ?? '5 min read',
        content,
        image: data.image as string | undefined,
        tags: (data.tags as string[]) ?? [],
        author: (data.author as string) ?? 'Zakkarija Micallef',
      };
    });

  // Sort posts by date (newest first)
  return allPostsData.sort((a, b) => (a.date > b.date ? -1 : 1));
}

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  try {
    const fullPath = path.join(postsDirectory, `${slug}.mdx`);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: (data.title as string) ?? 'Untitled',
      date: (data.date as string) ?? new Date().toISOString().split('T')[0],
      excerpt: (data.excerpt as string) ?? content.substring(0, 150) + '...',
      readTime: (data.readTime as string) ?? '5 min read',
      content,
      image: data.image as string | undefined,
      tags: (data.tags as string[]) ?? [],
      author: (data.author as string) ?? 'Zakkarija Micallef',
    };
  } catch {
    return null;
  }
}