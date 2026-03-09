import React from 'react';
import { FadeIn } from '../../components/ui/fade-in';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router';

export default function AnimalWelfare() {
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
              Ethics
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              Animal Welfare: Beyond Industry Standards
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                January 2, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                5 min read
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
                src="https://images.unsplash.com/photo-1689969936193-c81e9c149e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpY2FsJTIwZmFybWluZyUyMGFuaW1hbHN8ZW58MXx8fHwxNzY4MTk3ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Free-range animals on ethical farm"
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
                Industry standards for animal welfare exist, and most farms work hard to meet them. But at Haritha Farms, meeting minimum standards was never our goal. We asked a different question: What does it look like to raise animals in a way that honors their nature?
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Space to Live Naturally</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chickens are descendants of jungle fowl, birds that spent their days scratching in leaf litter, foraging for insects, taking dust baths, and roosting in trees at night. Industrial production strips away these behaviors, confining birds to crowded barns where they can barely move, let alone express natural instincts.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our hens have access to spacious barns with roosting bars at different heights, nesting boxes for privacy during laying, and extensive outdoor pasture. They scratch in dirt, chase grasshoppers, sunbathe, and engage in the complex social behaviors chickens naturally exhibit when given the chance.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Five Freedoms</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Animal welfare science recognizes five basic freedoms every animal deserves: freedom from hunger and thirst, freedom from discomfort, freedom from pain, injury or disease, freedom to express normal behavior, and freedom from fear and distress.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We use these as minimum benchmarks, not aspirational goals. Fresh water flows continuously. Shelter protects from weather extremes. Veterinary care addresses health issues promptly. Space and enrichment allow natural behaviors. And perhaps most importantly, we handle animals with gentleness and respect, minimizing stress at every interaction.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Breed Selection Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Modern industrial chickens are bred for one thing: maximum output. Broilers grow so fast their legs can't support their weight. Layers produce so many eggs their bodies deplete calcium, leading to brittle bones. These birds are genetic marvels of productivity—and suffering.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We choose heritage and slower-growing breeds. Our birds take longer to reach market size and lay fewer eggs annually, but they're healthier, hardier, and capable of the behaviors nature designed them for. This choice costs us in efficiency but gains everything in ethics.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Enrichment & Engagement</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Chickens are curious, intelligent birds that benefit from environmental enrichment. We provide stumps and logs for perching, areas of tall grass for hiding, shallow pools for drinking and cooling, and rotate pasture access so there's always something new to explore.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We also practice "chicken tractoring"—moving portable coops to fresh ground regularly. This gives birds new forage, prevents parasite buildup, and distributes their beneficial impact across our land. The birds stay engaged, the land stays healthy.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">End of Life Considerations</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This is the hardest part to discuss, but transparency demands honesty. When animals reach the end of their productive life or when meat birds reach processing age, we ensure humane handling and rapid, stress-free processing.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We work with certified humane processors who use methods approved by animal welfare organizations. Birds are handled calmly, transported short distances, and processed immediately upon arrival. It's not pleasant work, but it's done with respect and gratitude for the life that animal lived.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Moral Cost of Cheap Food</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Raising animals this way costs more. Space costs money. Heritage breeds cost money. Enrichment, veterinary care, and low stocking densities all cost money. These costs show up in the price customers pay.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                But what's the alternative? Cheap eggs from birds that never see daylight? Cheap meat from animals raised in misery? We believe food should reflect its true cost—including the cost of doing right by the animals that produce it. Anything less isn't just cheap food. It's cheap ethics.
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
                  to="/blog/egg-traceability"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Process
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    From Our Hens to Your Table: Traceability Explained
                  </h4>
                </Link>
                <Link 
                  to="/blog/no-antibiotics"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Health
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    No Antibiotics, No Compromise: Our Health Policy
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
