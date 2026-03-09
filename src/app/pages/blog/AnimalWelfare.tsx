import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function AnimalWelfare() {
  return (
    <BlogPostLayout
      title="Animal Welfare: Beyond Industry Standards"
      category="Ethics"
      date="Jan 2, 2026"
      readTime="5 min read"
      heroImage="https://images.unsplash.com/photo-1689969936193-c81e9c149e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpY2FsJTIwZmFybWluZyUyMGFuaW1hbHN8ZW58MXx8fHwxNzY4MTk3ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Meeting minimum animal welfare standards isn't enough. At Haritha Farms, we believe animals deserve more than the bare minimum—they deserve dignity, space, and the ability to live as nature intended.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Redefining Welfare Standards</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Industry standards for animal welfare often represent the minimum legal requirements, not the ideal conditions. These standards focus on preventing the worst abuses rather than promoting positive welfare. We've chosen a different approach.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our welfare philosophy is based on the "Five Freedoms": freedom from hunger and thirst, freedom from discomfort, freedom from pain and disease, freedom to express normal behavior, and freedom from fear and distress. But we go further—we actively promote positive experiences and natural behaviors.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Space to Roam, Room to Live</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our chickens aren't confined to cages or overcrowded barns. They have access to spacious pastures where they can forage, dust bathe, and exhibit natural behaviors. We calculate stocking density not by profit margins, but by what allows each bird to thrive.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        The shelters we provide are designed for comfort, not just efficiency. Proper ventilation, natural light, comfortable roosting areas, and clean bedding are non-negotiables. We want our birds to be comfortable in all weather conditions, protected from predators, yet free to explore.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Natural Behavior, Natural Living</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Chickens are intelligent, social animals with complex behaviors. They form social hierarchies, communicate with varied vocalizations, forage for insects and plants, and engage in dust bathing rituals. Our farm design supports all these natural behaviors.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We provide enrichment opportunities: diverse terrain for exploration, shrubs for shade and hiding, perches at different heights, and dust bathing areas with appropriate substrate. These aren't luxuries—they're necessities for psychological well-being.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Healthcare Without Overmedication</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We maintain animal health through prevention rather than treatment. Good nutrition, clean living conditions, low stress, and appropriate stocking densities prevent most health issues before they start. When animals do fall ill, we provide prompt, appropriate care—but we never use preventive antibiotics.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our veterinary partnerships focus on holistic health management. Regular check-ups, parasite monitoring, and early intervention when needed ensure our animals stay healthy without unnecessary medication. We believe healthy animals in healthy environments rarely need intensive medical intervention.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Respecting Natural Lifecycles</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Industrial farming often treats animals as production units, discarding them when productivity declines. We see our animals as living beings deserving of respect throughout their entire lives. When birds reach the end of their productive laying period, they're not simply culled—they're retired with dignity.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We maintain a sanctuary area for older birds where they can live out their natural lives. Some continue to provide companionship to younger flocks, teaching natural behaviors and maintaining social structures. This might not be the most economically efficient approach, but it's the right one.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Human Element</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Animal welfare isn't just about facilities and policies—it's about people. Our farm staff are trained in animal behavior, stress recognition, and gentle handling techniques. We hire people who genuinely care about animals, not just those who can follow procedures.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Daily interaction with our animals isn't rushed or stressful. Our team takes time to observe behavior, notice changes, and respond to individual needs. This attentive care creates calm, trusting relationships between caretakers and animals.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Measuring What Matters</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We track welfare metrics that go beyond productivity: activity levels, social behavior, feather quality, and stress indicators. Regular welfare audits help us continuously improve our practices. We're not satisfied with "good enough"—we're always striving for better.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When you choose Haritha Farms, you're choosing products from animals who lived well, not just survived. You're supporting a model of farming that proves ethical treatment and quality production can coexist. This is farming as it should be.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Animals aren't production units—they're living beings who deserve our respect and care. Superior welfare isn't optional; it's fundamental to who we are."
        </p>
        <p className="text-sm text-muted-foreground mt-4">— Haritha Farms Animal Care Team</p>
      </div>
    </BlogPostLayout>
  );
}
