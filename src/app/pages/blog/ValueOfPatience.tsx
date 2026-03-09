import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function ValueOfPatience() {
  return (
    <BlogPostLayout
      title="The Value of Patience"
      category="Philosophy"
      date="November 8, 2025"
      readTime="6 min read"
      heroImage="https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        In a world obsessed with speed—fast food, fast fashion, fast results—we are consciously choosing slow. Slow farming is the antidote to the industrial food system.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Letting Nature Take Its Time</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        An industrial broiler chicken is ready for slaughter in just 40 days. Our country hens take 4 to 5 months. That difference is everything. In those extra months, the bird develops a robust skeletal system, healthy organs, and muscle texture that simply cannot be rushed.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Flavor Comes from Time</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Flavor is a biological process. It takes time for fat to marble correctly, for muscle fibers to mature, and for the animal to assimilate the nutrients from its diet. Fast growth produces watery, bland meat. Slow growth produces dense, nutrient-rich, and deeply flavorful food.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Patience Pays Off</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        This approach costs more. It takes more feed, more labor, and more time to bring a product to market. But the reward is a product that honors the animal and nourishes the human. We believe that good food is worth waiting for.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Nature does not hurry, yet everything is accomplished." — Lao Tzu
        </p>
      </div>
    </BlogPostLayout>
  );
}
