import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function PastureRotation() {
  return (
    <BlogPostLayout
      title="The Art of Pasture Rotation"
      category="Sheep Farming"
      date="December 18, 2025"
      readTime="6 min read"
      heroImage="https://images.unsplash.com/photo-1758357935338-936a266501d7?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Nature never stays in one place. Herds migrate, seasons change, and grass grows in cycles. At Haritha Farms, we mimic these ancient rhythms through rotational grazing—a practice that heals the land while nourishing our sheep.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">What is Rotational Grazing?</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Instead of letting sheep graze the same field until it's bare, we divide our pastures into smaller paddocks. The flock grazes one area intensively for a short period—usually 1 to 3 days—before moving to fresh ground. This simple act of movement changes everything.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Rest is as Important as Growth</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When the sheep move on, the land rests. This rest period allows grasses to regrow their roots deeper, accessing minerals that were previously out of reach. It breaks parasite cycles, reducing the need for medication. And as the grass recovers, it pulls carbon from the atmosphere and stores it in the soil.
      </p>
      
      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Healthier Sheep, Better Meat</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        For our sheep, every few days brings a fresh salad bar of diverse grasses and herbs. They eat the most nutritious parts of the plant, then move on before they're forced to eat low-quality stubble. This consistent, high-quality diet translates directly into their health and growth.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        The constant movement also keeps them physically active, developing lean muscle rather than excess fat. The result is meat that is distinctively flavorful, tender, and rich in nutrients—a direct reflection of the vibrant pastures they graze.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "We are grass farmers first. If we take care of the grass, the sheep take care of themselves."
        </p>
      </div>
    </BlogPostLayout>
  );
}
