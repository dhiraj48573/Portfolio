import { blogPosts } from '@/src/data/candidate';
import { notFound } from 'next/navigation';
import BlogPost from '@/src/components/BlogPost';
import Nav from '@/src/components/Nav';
import Footer from '@/src/components/Footer';

export async function generateStaticParams() {
  return blogPosts.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    return {
      title: 'Post Not Found',
    };
  }

  return {
    title: `${post.title} | Dhiraj Kumar`,
    description: post.excerpt,
    keywords: [...post.tags, 'Dhiraj Kumar', 'Engineering Blog', 'Tech Articles'],
    alternates: {
      canonical: `https://dhirajkumar.me/blog/${post.slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://dhirajkumar.me/blog/${post.slug}`,
      type: 'article',
      publishedTime: post.date,
      authors: ['Dhiraj Kumar'],
      tags: post.tags,
      images: post.image ? [{ url: post.image, width: 1200, height: 630, alt: post.title }] : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: post.image ? [post.image] : undefined,
    },
  };
}

export default async function BlogPostPage({ params }) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const jsonLdArticle = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.excerpt,
    image: post.image ? `https://dhirajkumar.me${post.image}` : undefined,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      '@id': 'https://dhirajkumar.me/#person',
      name: 'Dhiraj Kumar',
      url: 'https://dhirajkumar.me',
    },
    publisher: {
      '@id': 'https://dhirajkumar.me/#person',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `https://dhirajkumar.me/blog/${post.slug}`,
    },
    url: `https://dhirajkumar.me/blog/${post.slug}`,
    keywords: post.tags.join(', '),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdArticle) }}
      />
      <div className="min-h-screen bg-[#09090B] text-[#FAFAFA]">
        <Nav />
        <main className="pt-24 pb-16">
          <BlogPost slug={slug} />
        </main>
        <Footer />
      </div>
    </>
  );
}
