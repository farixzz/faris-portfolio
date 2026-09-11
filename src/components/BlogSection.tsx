import React, { useEffect, useState } from 'react';
import { ArrowUpRight, Loader2 } from 'lucide-react';
import FadeIn from './FadeIn';

const MEDIUM_FEED_URL = 'https://medium.com/feed/@farixzz';
const MEDIUM_PROFILE_URL = 'https://medium.com/@farixzz';
const MAX_POSTS = 4;

interface Post {
  title: string;
  link: string;
  pubDate: string;
  excerpt: string;
}

function stripHtml(html: string): string {
  const withoutTags = html.replace(/<[^>]*>/g, ' ');
  return withoutTags.replace(/\s+/g, ' ').trim();
}

function formatDate(dateString: string): string {
  try {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return '';
  }
}

function PostCard({ post }: { post: Post }) {
  return (
    <a href={post.link} target="_blank" rel="noopener noreferrer" className="group rounded-3xl border border-[#2A2D31] bg-[#111214] p-6 sm:p-7 flex flex-col gap-3 transition-colors duration-200 hover:border-[#D7E2EA]/40">
      <PostCardHeader title={post.title} />
      <span className="text-[#8FE3D6] uppercase tracking-widest text-xs">
        {formatDate(post.pubDate)}
      </span>
      <PostCardExcerpt excerpt={post.excerpt} />
    </a>
  );
}

function PostCardHeader({ title }: { title: string }) {
  return (
    <div className="flex items-start justify-between gap-4">
      <h3 className="text-[#D7E2EA] font-medium text-lg sm:text-xl leading-snug">
        {title}
      </h3>
      <ArrowUpRight
        size={20}
        color="#D7E2EA"
        className="flex-shrink-0 opacity-40 transition-opacity duration-200 group-hover:opacity-100"
      />
    </div>
  );
}

function PostCardExcerpt({ excerpt }: { excerpt: string }) {
  if (!excerpt) return null;
  return (
    <p className="text-[#D7E2EA]/60 font-light leading-relaxed text-sm sm:text-base">
      {excerpt}...
    </p>
  );
}

function LoadingState() {
  return (
    <div className="flex flex-col items-center justify-center gap-3 py-16 text-[#D7E2EA]/40">
      <Loader2 size={24} className="animate-spin" />
      <span className="text-xs uppercase tracking-widest">Loading latest posts</span>
    </div>
  );
}

function ErrorState() {
  return (
    <div className="flex flex-col items-center justify-center gap-4 py-16 text-center">
      <p className="text-[#D7E2EA]/50 text-sm uppercase tracking-widest">
        Couldn&apos;t load posts right now
      </p>
      <a href={MEDIUM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border-2 border-[#D7E2EA]/70 text-[#D7E2EA] uppercase tracking-widest text-sm px-8 py-3 transition-all duration-200 hover:border-[#D7E2EA] hover:bg-[#D7E2EA]/10">
        View on Medium
        <ArrowUpRight size={16} />
      </a>
    </div>
  );
}

function PostList({ posts }: { posts: Post[] }) {
  return (
    <div className="flex flex-col gap-4">
      {posts.map((post) => (
        <PostCard key={post.link} post={post} />
      ))}
      <a href={MEDIUM_PROFILE_URL} target="_blank" rel="noopener noreferrer" className="self-center mt-4 text-[#D7E2EA]/60 uppercase tracking-widest text-xs hover:text-[#D7E2EA] transition-colors duration-200">
        Read more on Medium
      </a>
    </div>
  );
}

export default function BlogSection() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [status, setStatus] = useState<'loading' | 'success' | 'error'>('loading');

  useEffect(() => {
    let cancelled = false;

    async function fetchPosts() {
      try {
        const url =
          'https://api.rss2json.com/v1/api.json?rss_url=' +
          encodeURIComponent(MEDIUM_FEED_URL);
        const response = await fetch(url);
        const data = await response.json();

        if (cancelled) return;

        if (data.status !== 'ok' || !Array.isArray(data.items)) {
          setStatus('error');
          return;
        }

        const parsed: Post[] = data.items.slice(0, MAX_POSTS).map((item: any) => ({
          title: item.title,
          link: item.link,
          pubDate: item.pubDate,
          excerpt: stripHtml(item.description || '').slice(0, 160),
        }));

        setPosts(parsed);
        setStatus('success');
      } catch {
        if (!cancelled) setStatus('error');
      }
    }

    fetchPosts();
    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <section id="writing" className="bg-[#0C0C0C] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-28">
      <FadeIn delay={0} y={30}>
        <h2
          className="hero-heading font-black uppercase leading-none tracking-tight text-center mb-4"
          style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
        >
          Writing
        </h2>
      </FadeIn>
      <FadeIn delay={0.1} y={20}>
        <p className="text-[#D7E2EA]/60 uppercase tracking-wide text-sm sm:text-base text-center max-w-lg mx-auto mb-14 sm:mb-16 md:mb-20">
          Breach teardowns and threat research, published on Medium.
        </p>
      </FadeIn>

      <div className="max-w-4xl mx-auto">
        {status === 'loading' && <LoadingState />}
        {status === 'error' && <ErrorState />}
        {status === 'success' && <PostList posts={posts} />}
      </div>
    </section>
  );
}