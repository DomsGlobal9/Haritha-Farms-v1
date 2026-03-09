import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function FreeRangeMatters() {
  return (
    <BlogPostLayout
      title="Why Free-Range Matters"
      category="Country Hen"
      date="December 10, 2025"
      readTime="5 min read"
      heroImage="https://images.unsplash.com/photo-1765460220129-233c27c4eafb?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        "Free-range" is a term often used but rarely fully practiced. At Haritha Farms, it means exactly what it sounds like: total freedom to roam, scratch, and live under the open sky.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">More Than Just Space</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        True free-range farming isn't just about square footage; it's about the quality of the environment. Our country hens spend their days exploring diverse terrains—grassy patches, shaded groves, and dust-bathing areas. This variety encourages natural behaviors that are suppressed in confinement.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Diet Difference</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        A hen that forages eats a diet rich in insects, worms, seeds, and greens. This natural variety adds depth to the flavor of both the meat and the eggs. The yolks are richer, deeper in color, and structurally stronger than their factory-farmed counterparts.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Stress and Quality</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Stress affects taste. Animals raised in crowded, artificial conditions produce meat that can be tough or bland due to stress hormones. Our hens live low-stress lives, following the sun's rhythm. This psychological well-being is a key ingredient in the quality of our produce.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "A happy hen lays a healthy egg. It's not just a saying; it's biological fact."
        </p>
      </div>
    </BlogPostLayout>
  );
}
