import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
import { Link } from 'react-router';

interface BlogCardProps {
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
  featured?: boolean;
  slug: string;
}

export function BlogCard({ 
  title, 
  excerpt, 
  date, 
  category, 
  readTime, 
  image,
  featured = false,
  slug
}: BlogCardProps) {
  return (
    <article 
      className={`group relative overflow-hidden bg-card border border-border/40 hover:border-secondary/40 transition-all duration-500 ${
        featured ? 'md:col-span-2' : ''
      }`}
    >
      {/* Image Container */}
      <Link to={`/blog/${slug}`} className="block">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img 
            src={image} 
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>

      {/* Content */}
      <div className={`p-6 ${featured ? 'md:p-8' : ''}`}>
        {/* Meta */}
        <div className="flex items-center gap-4 mb-4 text-xs">
          <span className="text-secondary font-bold tracking-[0.2em] uppercase">
            {category}
          </span>
          <span className="flex items-center gap-2 text-muted-foreground">
            <Calendar size={14} />
            {date}
          </span>
          <span className="text-muted-foreground">
            {readTime}
          </span>
        </div>

        {/* Title */}
        <Link to={`/blog/${slug}`}>
          <h3 className={`font-serif text-primary mb-3 group-hover:text-secondary transition-colors ${
            featured ? 'text-2xl md:text-3xl' : 'text-xl'
          }`}>
            {title}
          </h3>
        </Link>

        {/* Excerpt */}
        <p className="text-muted-foreground font-light mb-4 leading-relaxed">
          {excerpt}
        </p>

        {/* Read More */}
        <Link to={`/blog/${slug}`}>
          <button className="flex items-center gap-2 text-primary font-medium text-xs tracking-wide uppercase hover:text-secondary transition-colors group/btn">
            <span>Read Article</span>
            <ArrowRight 
              size={16} 
              className="transition-transform group-hover/btn:translate-x-1" 
            />
          </button>
        </Link>
      </div>
    </article>
  );
}