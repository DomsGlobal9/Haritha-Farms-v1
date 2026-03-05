import React from 'react';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { Link } from 'react-router';
import { FadeIn } from './ui/fade-in';
import { CTASection } from './ui/CTASection';

interface BlogPostLayoutProps {
  title: string;
  category: string;
  date: string;
  readTime: string;
  heroImage: string;
  children: React.ReactNode;
}

export function BlogPostLayout({
  title,
  category,
  date,
  readTime,
  heroImage,
  children
}: BlogPostLayoutProps) {
  return (
    <div className="bg-background pt-24">
      {/* Back Navigation */}
      <div className="px-6 py-6 border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/transparency" 
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors group"
          >
            <ArrowLeft size={16} className="transition-transform group-hover:-translate-x-1" />
            <span>Back to Transparency</span>
          </Link>
        </div>
      </div>

      {/* Hero Image */}
      <FadeIn>
        <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
          <img 
            src={heroImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/40 to-transparent" />
        </div>
      </FadeIn>

      {/* Article Header */}
      <article className="px-6 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={0.1}>
            <div className="mb-8">
              {/* Meta */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-secondary/10 text-secondary">
                  <Tag size={14} />
                  <span className="font-bold tracking-[0.2em] uppercase text-xs">{category}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar size={16} />
                  <span>{date}</span>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Clock size={16} />
                  <span>{readTime}</span>
                </div>
              </div>

              {/* Title */}
              <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6 leading-tight">
                {title}
              </h1>
            </div>
          </FadeIn>

          {/* Content */}
          <FadeIn delay={0.2}>
            <div className="prose prose-lg max-w-none">
              {children}
            </div>
          </FadeIn>
        </div>
      </article>

      <CTASection 
        title="Experience Transparency Firsthand"
        description="Visit Haritha Farms to see our ethical practices in action. Book a farm tour and witness our commitment to openness."
        primaryAction={{ text: "Schedule a Visit", link: "/visit" }}
        secondaryAction={{ text: "Read More Stories", link: "/blog" }}
      />
    </div>
  );
}