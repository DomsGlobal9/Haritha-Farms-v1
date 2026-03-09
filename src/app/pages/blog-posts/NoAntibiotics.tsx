import React from 'react';
import { FadeIn } from '../../components/ui/fade-in';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router';

export default function NoAntibiotics() {
  return (
    <div className="bg-background pt-24">
      {/* Hero Section */}
      <section className="py-12 px-6 border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/transparency" 
            className="inline-flex items-center gap-2 text-secondary text-sm uppercase tracking-wide mb-8 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Transparency
          </Link>
          
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Health
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              No Antibiotics, No Compromise: Our Health Policy
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                December 28, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                4 min read
              </span>
              <button className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={0.2}>
            <div className="aspect-[21/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1685023620523-9c726f2c499b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHByYWN0aWNlc3xlbnwxfHx8fDE3NjgxOTc4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthy organic farming practices"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-12">
        <div className="container mx-auto max-w-3xl">
          <FadeIn delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                The overuse of antibiotics in agriculture is creating a public health crisis. Bacteria are evolving resistance faster than we can develop new drugs. At Haritha Farms, we took a stand: no preventive antibiotics, ever.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Industry Problem</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Industrial farms use antibiotics not just to treat sick animals, but routinely—mixed into feed to prevent disease and promote faster growth. This constant, low-level exposure creates perfect conditions for drug-resistant bacteria to evolve.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The World Health Organization identifies antibiotic resistance as one of the top ten global public health threats. Agriculture contributes significantly to this crisis, accounting for over 70% of medically important antibiotic use in many countries.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Our Alternative Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We maintain healthy flocks through prevention, not medication. This starts with genetics—choosing breeds that are naturally hardy and disease-resistant. It continues with environment—providing space, fresh air, sunlight, and clean water that support strong immune systems.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nutrition plays a crucial role. Our birds receive a carefully balanced diet with probiotics that support gut health, the foundation of immunity. We source organic feed, avoiding GMOs and pesticide residues that can compromise health over time.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Stress Reduction</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Stress suppresses immune function, making animals vulnerable to infection. Industrial confinement creates chronic stress—crowding, lack of natural behavior, constant artificial light, and social disruption all take a toll.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We design our system around minimizing stress. Birds have space to establish natural social hierarchies. They can escape into outdoor areas when they choose. They experience natural light cycles. These aren't luxuries—they're health interventions that work.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Hygiene & Biosecurity</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Prevention also means rigorous hygiene. We maintain strict biosecurity protocols: footbaths at barn entrances, sanitized equipment, controlled visitor access, and quarantine procedures for new birds. Our barns are cleaned thoroughly between flocks, with natural sunlight and fresh air as natural disinfectants.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We monitor flock health daily, looking for early signs of problems. Catching issues early—before they spread—makes intervention simpler and avoids the need for blanket treatment of healthy animals.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">When Illness Happens</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Despite best practices, animals sometimes get sick. When this happens, we consult with veterinarians and use targeted treatment for affected individuals—never preventive dosing of entire flocks. If antibiotics are necessary for animal welfare, we use them judiciously, then extend withdrawal periods beyond minimum requirements before those animals' products enter our food chain.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We also explore alternatives: herbal remedies, probiotics, and other supportive therapies that can help animals recover without contributing to antibiotic resistance.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Mortality Question</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Critics argue that refusing preventive antibiotics increases animal mortality. This misses the point: in healthy systems with proper management, preventive antibiotics shouldn't be necessary. High disease rates are symptoms of systemic problems—overcrowding, poor nutrition, stress, inadequate hygiene.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our mortality rates are comparable to or lower than conventional operations using antibiotics. The difference is that our birds die of natural causes, accidents, or predation—not preventable diseases caused by inhumane conditions.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">A Public Health Responsibility</h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Choosing not to use preventive antibiotics isn't just about organic certification or marketing. It's about recognizing that farms have a responsibility beyond their own gates. The resistant bacteria we create through careless antibiotic use affect everyone—patients in hospitals, children in schools, vulnerable populations everywhere. Ethical farming means considering these broader impacts, even when it costs more or requires more careful management.
              </p>
            </div>
          </FadeIn>

          {/* Author & Share Section */}
          <FadeIn delay={0.4}>
            <div className="border-t border-border/40 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Written by</p>
                  <p className="font-serif text-lg text-primary">Haritha Farms Editorial Team</p>
                </div>
                <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs uppercase tracking-wide">
                  Share Article
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Related Articles */}
          <FadeIn delay={0.5}>
            <div className="mt-16 pt-8 border-t border-border/40">
              <h3 className="text-2xl font-serif text-primary mb-8">Continue Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/soil-health"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Practices
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    Soil Health: The Foundation of Ethical Farming
                  </h4>
                </Link>
                <Link 
                  to="/blog/animal-welfare"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Ethics
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    Animal Welfare: Beyond Industry Standards
                  </h4>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
}
