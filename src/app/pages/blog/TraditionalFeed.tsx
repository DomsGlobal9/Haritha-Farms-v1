import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function TraditionalFeed() {
  return (
    <BlogPostLayout
      title="Traditional Feed Practices"
      category="Practices"
      date="November 15, 2025"
      readTime="5 min read"
      heroImage="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Modern industrial feed is often a cocktail of soy, corn, synthetic amino acids, and growth promoters. We looked back to move forward, reviving traditional feeding wisdom that prioritizes gut health and natural immunity.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Power of Fermentation</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We use fermented feeds and natural probiotics. Fermentation breaks down anti-nutrients in grains, making them easier to digest and unlocking more nutrition. It also introduces beneficial bacteria to the animal's gut, which is the first line of defense against disease.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Herbal Supplements</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Instead of antibiotics, we use nature's pharmacy. Turmeric for inflammation, neem for parasite control, and garlic for immunity. These ingredients have been used in Indian agriculture for centuries because they work—without the side effects of synthetic drugs.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Local Grains</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We source grains locally—millets, sorghum, and rice bran. These are crops that grow well in our region without heavy irrigation or pesticides. By using local ingredients, we support local farmers and reduce the carbon footprint of our feed.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Food is medicine. This applies to our animals just as much as it applies to us."
        </p>
      </div>
    </BlogPostLayout>
  );
}
