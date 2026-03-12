import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function TransparencyCost() {
  return (
    <BlogPostLayout
      title="The True Cost of Transparency in Modern Farming"
      category="Transparency"
      date="Jan 10, 2026"
      readTime="5 min read"
      heroImage="https://images.unsplash.com/photo-1655979990801-b41167329d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGNoaWNrZW5zfGVufDF8fHx8MTc2ODE5NzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        When we started Haritha Farms, we made a decision that would define everything we do: complete transparency. But what does that really mean, and what does it cost?
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Hidden Price of Openness</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Transparency isn't just a marketing buzzword for us—it's a fundamental commitment that comes with real costs. We open our doors to visitors, maintain detailed records of every process, and invest in systems that track our products from farm to table. This level of openness requires additional staff, technology infrastructure, and countless hours of documentation.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Traditional farms can operate behind closed doors, making decisions that maximize short-term profits without public scrutiny. We've chosen a different path. Every practice we implement, every feed choice we make, every animal welfare decision—all are open for inspection and questioning.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">What We Gained</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        The financial costs of transparency are significant, but what we've gained is invaluable: trust. Our customers don't just buy our products—they believe in our mission. They know exactly how their food is produced because they can see it, touch it, and verify it themselves.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        This trust translates into a community of supporters who value quality over convenience, ethics over economy. They understand that truly organic, ethically-raised food costs more because it should. The true cost isn't just in rupees—it's in the commitment to doing things right, even when no one is watching.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Challenges We Face</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Being transparent means being vulnerable. When we face challenges—whether it's a disease outbreak, a failed crop, or difficult weather conditions—we share these struggles openly. Some might see this as weakness, but we see it as honesty. Farming is unpredictable, and pretending otherwise would betray the very transparency we promise.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We've learned that our customers appreciate this honesty. They understand that organic farming isn't about perfection—it's about doing our best with natural methods, learning from setbacks, and continuously improving our practices.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Building a Transparent Future</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        As we look to the future, we're committed to deepening our transparency efforts. We're implementing blockchain technology for complete traceability, creating more opportunities for farm visits, and documenting our processes through video and photography.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        The cost of transparency will always be higher than opacity, but the return on investment—measured in trust, community, and peace of mind—is immeasurable. We believe this is the future of farming, and we're proud to be leading the way.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Transparency isn't a cost center—it's an investment in the future of farming and the trust of our community. Every rupee spent on openness returns to us tenfold in customer loyalty and peace of mind."
        </p>
        <p className="text-sm text-muted-foreground mt-4">— Haritha Farms Team</p>
      </div>
    </BlogPostLayout>
  );
}
