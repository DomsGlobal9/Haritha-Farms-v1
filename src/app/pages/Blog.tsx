import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/ui/CTASection';

export default function Blog() {
  const blogPosts = [
    {
      id: 1,
      title: "The Art of Pasture Rotation",
      excerpt: "How traditional grazing methods improve soil health and produce healthier livestock.",
      category: "Sheep Farming",
      date: "December 18, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1758357935338-936a266501d7?q=80&w=1080&auto=format&fit=crop",
      featured: true,
      slug: "pasture-rotation"
    },
    {
      id: 2,
      title: "Why Free-Range Matters",
      excerpt: "Understanding the difference between truly free-range hens and conventional farming.",
      category: "Country Hen",
      date: "December 10, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1765460220129-233c27c4eafb?q=80&w=1080&auto=format&fit=crop",
      featured: true,
      slug: "free-range-matters"
    },
    {
      id: 3,
      title: "Clean Water, Healthy Fish",
      excerpt: "Our chemical-free approach to maintaining pond ecosystems naturally.",
      category: "Fish Farming",
      date: "December 1, 2025",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1739257453543-a9f5962fc00e?q=80&w=1080&auto=format&fit=crop",
      featured: false,
      slug: "clean-water-fish"
    },
    {
      id: 4,
      title: "Seasonal Rhythms on the Farm",
      excerpt: "How we work with nature's cycles to raise healthier animals year-round.",
      category: "Farm Life",
      date: "November 22, 2025",
      readTime: "4 min read",
      image: "https://images.unsplash.com/photo-1641455459887-6ae7b095d1bb?q=80&w=1080&auto=format&fit=crop",
      featured: false,
      slug: "seasonal-rhythms"
    },
    {
      id: 5,
      title: "Traditional Feed Practices",
      excerpt: "Why we still use ancestral grain mixes and natural foraging for our animals.",
      category: "Practices",
      date: "November 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1080&auto=format&fit=crop",
      featured: false,
      slug: "traditional-feed"
    },
    {
      id: 6,
      title: "The Value of Patience",
      excerpt: "How slow farming produces better quality and happier animals.",
      category: "Philosophy",
      date: "November 8, 2025",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1080&auto=format&fit=crop",
      featured: false,
      slug: "value-of-patience"
    },
    {
      id: 7,
      title: "Recipe: Slow-Roasted Lamb",
      excerpt: "A traditional recipe that honors the quality of pasture-raised meat.",
      category: "Recipes",
      date: "October 28, 2025",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1080&auto=format&fit=crop",
      featured: false,
      slug: "recipe-lamb"
    },
    {
      id: 8,
      title: "Building Community Through Food",
      excerpt: "Stories from visitors and customers who share our values.",
      category: "Community",
      date: "October 15, 2025",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1080&auto=format&fit=crop",
      featured: false,
      slug: "community-food"
    }
  ];

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Journal</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
              Stories from the Farm
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Insights, practices, and reflections on ethical farming, seasonal living, and the animals we care for.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <span className="text-xs tracking-[0.2em] uppercase text-secondary font-medium mb-12 block">Featured</span>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 md:gap-12 mb-24">
            {featuredPosts.map((post, index) => (
              <FadeIn key={post.id} delay={0.1 * index}>
                <Link to={`/blog/${post.slug}`} className="group cursor-pointer block">
                  <article>
                    <div className="relative overflow-hidden mb-6 aspect-[4/3] bg-primary/5">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center gap-4 text-xs text-muted-foreground uppercase tracking-widest">
                        <span className="text-secondary font-medium">{post.category}</span>
                        <span className="flex items-center gap-1.5">
                          <Calendar size={12} />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1.5">
                          <Clock size={12} />
                          {post.readTime}
                        </span>
                      </div>
                      
                      <h2 className="text-2xl md:text-3xl font-serif text-primary group-hover:text-secondary transition-colors">
                        {post.title}
                      </h2>
                      
                      <p className="text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                      
                      <div className="inline-flex items-center text-primary border-b border-primary pb-1 group-hover:text-secondary group-hover:border-secondary transition-colors uppercase tracking-widest text-xs font-medium mt-4">
                        Read Article <ArrowRight size={14} className="ml-2" />
                      </div>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* All Posts Grid */}
      <section className="py-16 md:py-24 px-6 bg-white/50">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <span className="text-xs tracking-[0.2em] uppercase text-secondary font-medium mb-12 block">All Articles</span>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 md:gap-10">
            {regularPosts.map((post, index) => (
              <FadeIn key={post.id} delay={0.05 * index}>
                <Link to={`/blog/${post.slug}`} className="group cursor-pointer block">
                  <article>
                    <div className="relative overflow-hidden mb-5 aspect-[3/2] bg-primary/5">
                      <ImageWithFallback
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex items-center gap-3 text-[10px] text-muted-foreground uppercase tracking-widest">
                        <span className="text-secondary font-medium">{post.category}</span>
                        <span>{post.readTime}</span>
                      </div>
                      
                      <h3 className="text-xl font-serif text-primary group-hover:text-secondary transition-colors leading-tight">
                        {post.title}
                      </h3>
                      
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>
                  </article>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Stay Connected to the Land"
        description="Receive monthly stories, seasonal updates, and farm wisdom. Or better yet, come see it for yourself."
        primaryAction={{ text: "Subscribe to Newsletter", link: "/contact" }}
        secondaryAction={{ text: "Plan a Visit", link: "/visit" }}
      />
    </div>
  );
}