import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function SoilHealth() {
  return (
    <BlogPostLayout
      title="Soil Health: The Foundation of Ethical Farming"
      category="Practices"
      date="Jan 8, 2026"
      readTime="4 min read"
      heroImage="https://images.unsplash.com/photo-1737943052554-2894fb46f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBzb2lsfGVufDF8fHx8MTc2ODE5NzgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Beneath every healthy plant, every thriving animal, and every nutritious egg lies a foundation that most people never see: the soil. At Haritha Farms, soil health isn't just a practice—it's our philosophy.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Living Soil, Living Farm</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Soil is not just dirt—it's a living ecosystem teeming with billions of microorganisms that work together to create the perfect environment for plant growth. When we treat soil as a living entity rather than an inert growing medium, everything changes.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our regenerative soil practices focus on building organic matter, promoting microbial diversity, and creating a self-sustaining ecosystem. We use composted animal manure, cover crops, and minimal tillage to maintain soil structure and preserve the delicate web of life beneath the surface.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Compost Revolution</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Every bit of organic waste on our farm has value. Chicken manure, bedding materials, food scraps, and plant residues all become part of our composting system. This isn't just waste management—it's nutrient cycling at its finest.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our compost piles are carefully managed to achieve the right balance of carbon and nitrogen, moisture and air. The result is a rich, dark compost that smells like forest floor—earthy and alive. When we spread this compost on our fields, we're not just adding nutrients; we're inoculating the soil with beneficial microorganisms.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Cover Crops and Crop Rotation</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Between growing seasons, our fields are never left bare. We plant cover crops like legumes, grasses, and brassicas that protect the soil, prevent erosion, and add organic matter. Some of these crops fix nitrogen from the air, reducing our need for external inputs.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Crop rotation is another cornerstone of our soil health strategy. By rotating different plant families through our fields, we break pest and disease cycles, balance nutrient demands, and maintain soil structure. What might look like extra work is actually nature's way of maintaining balance.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Measuring Success Underground</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We regularly test our soil not just for NPK levels, but for organic matter content, microbial activity, and biological diversity. These tests tell us a story about the health of our farm ecosystem. Over the years, we've watched our soil transform from compacted, nutrient-depleted earth to rich, living soil that supports abundant life.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        The results speak for themselves: healthier plants, more resilient crops, better water retention during dry spells, and improved drainage during heavy rains. Our chickens benefit from foraging in living soil, accessing minerals and micronutrients that synthetic systems can't provide.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Ripple Effect</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Healthy soil creates a ripple effect throughout our entire farm ecosystem. It supports diverse plant life, which attracts beneficial insects, which support bird populations. Our ponds are cleaner because healthy soil filters runoff naturally. Even the air is better because living soil sequesters carbon.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When you buy eggs from Haritha Farms, you're supporting this entire ecosystem. You're voting for farming practices that build soil rather than deplete it, that work with nature rather than against it. This is the foundation of truly ethical farming.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Take care of the soil, and the soil will take care of everything else. This simple truth guides every decision we make at Haritha Farms."
        </p>
        <p className="text-sm text-muted-foreground mt-4">— Haritha Farms Soil Management Team</p>
      </div>
    </BlogPostLayout>
  );
}
