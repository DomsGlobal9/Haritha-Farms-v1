import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function CommunityFood() {
  return (
    <BlogPostLayout
      title="Building Community Through Food"
      category="Community"
      date="October 15, 2025"
      readTime="5 min read"
      heroImage="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Food has always been the great connector. It brings families to the table and strangers together. At Haritha Farms, we see our farm not just as a production unit, but as a community hub.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Knowing Your Farmer</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        There is a profound shift that happens when you shake the hand of the person who grew your food. It changes the relationship from transaction to connection. Our customers aren't just consumers; they are partners in our mission to heal the land.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Farm Visits and Workshops</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We host regular farm visits and workshops because we believe that knowledge should be shared. Seeing children pull a carrot from the ground or feed a hen is a reminder of why we do this. We are reconnecting a generation to the source of their nourishment.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">A Shared Table</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We envision a future where local food systems are the norm, not the exception. Where communities support local farmers, and farmers support their communities with healthy, safe food. This symbiosis is the only path to a sustainable future.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "The table is a meeting place, a gathering ground, the source of sustenance and nourishment, festivity, safety, and satisfaction." — Laurie Colwin
        </p>
      </div>
    </BlogPostLayout>
  );
}
