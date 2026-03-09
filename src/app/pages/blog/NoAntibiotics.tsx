import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function NoAntibiotics() {
  return (
    <BlogPostLayout
      title="No Antibiotics, No Compromise: Our Health Policy"
      category="Health"
      date="Dec 28, 2025"
      readTime="4 min read"
      heroImage="https://images.unsplash.com/photo-1685023620523-9c726f2c499b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHByYWN0aWNlc3xlbnwxfHx8fDE3NjgxOTc4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        In an age of antibiotic resistance, our policy is simple: no preventive antibiotics, ever. But this isn't about cutting corners—it's about building a farming system where antibiotics aren't necessary.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Antibiotic Problem</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Industrial farming relies heavily on preventive antibiotics—not to treat sick animals, but to compensate for overcrowded, stressful conditions that make animals vulnerable to disease. This practice contributes to antibiotic resistance, one of the greatest threats to global health.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When we started Haritha Farms, we knew we couldn't call ourselves ethical while contributing to this crisis. We committed to raising animals without preventive antibiotics, which meant building an entirely different system—one where health comes from good living conditions, not medication.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Prevention Through Environment</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our primary health strategy is environmental. Low stocking densities mean diseases can't spread rapidly. Access to fresh air and sunshine provides natural disinfection. Rotational grazing breaks parasite lifecycles. Clean water, fresh bedding, and proper waste management prevent most infectious diseases before they start.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We design our facilities for health: good ventilation prevents respiratory issues, dry bedding prevents foot problems, and appropriate perching prevents leg disorders. These aren't add-ons—they're fundamental design requirements.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Nutrition as Medicine</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        A well-nourished animal has a robust immune system. Our feed formulations are designed not just for productivity, but for immune support. We include herbs with natural antimicrobial properties, probiotics for gut health, and minerals essential for immune function.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Foraging provides additional nutrition that no formulated feed can match. Insects provide protein and beneficial compounds, diverse plants offer phytonutrients, and the act of foraging itself promotes gut health through varied microbial exposure.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Stress Reduction, Health Promotion</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Stress suppresses immune function, making animals vulnerable to disease. We minimize stress through gentle handling, stable social groups, protection from predators, and freedom to express natural behaviors. Calm, unstressed animals are healthy animals.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our staff are trained to recognize stress behaviors and adjust management accordingly. If birds seem agitated, we investigate why and fix the underlying cause rather than accepting stress as normal.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Breeding for Health</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We select breeds known for hardiness and disease resistance rather than maximum productivity. Indigenous breeds adapted to local conditions naturally resist local pathogens. This genetic foundation gives our flocks a health advantage no medication can match.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We also practice selective breeding within our flocks, favoring birds that thrive without intervention. Over generations, this creates increasingly robust populations naturally suited to our farming system.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">When Illness Does Occur</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Despite our best efforts, animals sometimes get sick. When they do, we provide appropriate treatment—including antibiotics when veterinarily prescribed for specific bacterial infections. We're against preventive antibiotics, not necessary medical treatment.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Any bird treated with antibiotics is clearly marked, and eggs from treated birds are never sold. We observe withdrawal periods that exceed regulatory requirements. Responsible antibiotic use for genuine health needs is different from routine preventive dosing.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Results Speak</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our disease rates are remarkably low—lower than many farms using preventive antibiotics. Mortality from illness is minimal. Our birds are active, vigorous, and productive. This proves that proper management prevents disease more effectively than medication.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We maintain detailed health records that demonstrate the success of our approach. Veterinary visits are primarily for routine check-ups and preventive care, not emergency interventions. This is what farming should look like.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Your Role in the Solution</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Every time you choose antibiotic-free products, you support farming practices that don't contribute to antibiotic resistance. You vote for a food system that prioritizes animal health and public health over maximum productivity.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        The eggs and meat you consume should come from healthy animals raised in healthy conditions, not sick animals kept alive by medication. At Haritha Farms, we prove this is possible, sustainable, and ultimately more rewarding.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "The best medicine is prevention. The second best is appropriate treatment. The worst is routine medication that creates resistant pathogens. We choose health over convenience, every time."
        </p>
        <p className="text-sm text-muted-foreground mt-4">— Haritha Farms Veterinary Advisory Team</p>
      </div>
    </BlogPostLayout>
  );
}
