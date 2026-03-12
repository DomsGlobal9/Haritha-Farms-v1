import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function RecipeLamb() {
  return (
    <BlogPostLayout
      title="Recipe: Slow-Roasted Lamb"
      category="Recipes"
      date="October 28, 2025"
      readTime="8 min read"
      heroImage="https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Pasture-raised lamb has a delicate, grassy flavor that shouldn't be overpowered. This simple slow-roast recipe celebrates the quality of the meat.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Ingredients</h2>
      <ul className="list-disc pl-6 space-y-2 text-muted-foreground font-light mb-8">
        <li>1 Leg of Haritha Farms Pasture-Raised Lamb (approx. 2kg)</li>
        <li>6 cloves of garlic, peeled and halved</li>
        <li>Fresh rosemary sprigs</li>
        <li>Fresh thyme</li>
        <li>Sea salt and cracked black pepper</li>
        <li>Cold-pressed olive oil or ghee</li>
        <li>Lemon zest</li>
      </ul>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Method</h2>
      
      <h3 className="text-xl font-medium text-secondary mb-3">1. Prepare the Meat</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Take the lamb out of the fridge at least an hour before cooking to reach room temperature. This ensures even cooking. Make small incisions all over the leg and stuff them with garlic slivers and rosemary leaves.
      </p>

      <h3 className="text-xl font-medium text-secondary mb-3">2. Season Generously</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Rub the meat with oil/ghee. Season heavily with salt and pepper. The salt helps form a delicious crust.
      </p>

      <h3 className="text-xl font-medium text-secondary mb-3">3. The Slow Roast</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Preheat oven to 160°C (320°F). Place the lamb on a rack in a roasting pan. Roast for about 20 minutes per 500g for medium-rare. Low and slow is the key to tenderness.
      </p>
      
      <h3 className="text-xl font-medium text-secondary mb-3">4. Rest</h3>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        This is the most crucial step. Once out of the oven, cover the lamb loosely with foil and let it rest for at least 20-30 minutes. This allows the juices to redistribute throughout the meat.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Cooking is an act of love. When you start with ingredients raised with love, the result is magical."
        </p>
      </div>
    </BlogPostLayout>
  );
}
