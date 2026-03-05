import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';
import { murrelDetailImage as murrelFishImage } from '../../../assets';

export default function CleanWaterFish() {
  return (
    <BlogPostLayout
      title="Clean Water, Healthy Fish"
      category="Fish Farming"
      date="December 1, 2025"
      readTime="7 min read"
      heroImage="https://images.unsplash.com/photo-1739257453543-a9f5962fc00e?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        In aquaculture, water is everything. It is the air the fish breathe and the environment that sustains them. Our approach to fish farming starts with a commitment to pristine, living water.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Mimicking Nature</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Commercial fish farms often rely on chemicals and antibiotics to keep fish alive in overcrowded, dirty water. We take a different path. We design our ponds to mimic natural river and lake ecosystems. Aquatic plants filter the water, beneficial bacteria break down waste, and natural currents provide oxygen.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Murrel's Needs</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our specialty, the Murrel (Snakehead), is a fish that demands clean environments to thrive. It is sensitive to pollutants. By maintaining high water quality standards without synthetic interventions, we ensure our fish are robust, healthy, and completely free from muddy off-flavors often found in farmed fish.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">A Closed Loop</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Nutrient-rich water from our fish ponds isn't waste—it's fertilizer. We use it to irrigate our fodder crops, which in turn feed our sheep. This integrated system reduces waste and closes the nutrient loop on our farm.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Clean water equals clean fish. There are no shortcuts."
        </p>
      </div>
    </BlogPostLayout>
  );
}