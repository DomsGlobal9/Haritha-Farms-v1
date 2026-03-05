import React from 'react';
import { FadeIn } from '../../components/ui/fade-in';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router';

export default function TransparencyCost() {
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
              Transparency
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              The True Cost of Transparency in Modern Farming
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                January 10, 2026
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
                src="https://images.unsplash.com/photo-1655979990801-b41167329d41?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMGNoaWNrZW5zfGVufDF8fHx8MTc2ODE5NzgxN3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Organic farm with free-range chickens"
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
                When we started Haritha Farms five years ago, we made a decision that would fundamentally shape everything we do: complete transparency. Not the marketing kind—real, unflinching openness about every aspect of our operation.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Hidden Price</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Transparency comes with costs that most farms aren't willing to bear. It means installing cameras throughout our facilities, maintaining detailed digital records of every animal, and opening our doors to unannounced visits. These aren't cheap investments—both in infrastructure and in the vulnerability they create.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                But the real cost isn't financial. It's the emotional labor of knowing that every decision, every mistake, every challenge we face is visible to our customers. There's no hiding behind marketing speak or carefully curated farm photos. When a chicken gets sick, people see it. When we make a mistake in feed ratios, we document it. When weather affects our operations, we share the impact.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Why We Choose Openness</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The industrial farming system thrives on opacity. It's easier to cut corners when no one is watching. It's simpler to use questionable practices when they're hidden behind closed doors. We realized early on that if we truly wanted to farm ethically, we needed accountability—and transparency is the ultimate form of accountability.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our customers aren't just buying eggs or chicken; they're investing in a food system they can trust. That trust can't be built through clever marketing or certification badges alone. It requires seeing the reality—good days and challenging ones—of running a farm that puts ethics first.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Building Community Through Truth</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                What surprised us most wasn't how transparency attracted customers—it was how it created community. People who visit our farm don't just come once. They return with friends and family. They ask questions, offer suggestions, and feel ownership over what we're doing together.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When a customer can log into our system and see exactly which barn their eggs came from, which hens laid them, and what those hens ate that week, something shifts. The transaction becomes a relationship. The product becomes a partnership.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Challenge to Others</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We're not sharing this to pat ourselves on the back. We're sharing it as a challenge to the industry. If we can operate profitably while being completely transparent, why can't others? What are they hiding?
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                The future of food depends on rebuilding trust between farmers and consumers. That trust can't be manufactured through advertising—it must be earned through consistent, demonstrable commitment to doing right by animals, land, and people.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Transparency has a cost. But the cost of continuing the current system—environmental degradation, animal suffering, and broken consumer trust—is far higher. We believe the true cost of transparency isn't a burden. It's an investment in a food system worth sustaining.
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
