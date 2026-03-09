import React from 'react';
import { FadeIn } from '../../components/ui/fade-in';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router';

export default function SoilHealth() {
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
              Practices
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              Soil Health: The Foundation of Ethical Farming
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                January 8, 2026
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
                src="https://images.unsplash.com/photo-1737943052554-2894fb46f3ad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXN0YWluYWJsZSUyMGZhcm1pbmclMjBzb2lsfGVufDF8fHx8MTc2ODE5NzgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Healthy organic soil"
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
                Everything begins with the soil. It's not just dirt beneath our feet—it's a living ecosystem that determines the health of our animals, the quality of our feed, and ultimately, the integrity of our entire operation.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Understanding Living Soil</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                A single teaspoon of healthy soil contains more microorganisms than there are people on Earth. These bacteria, fungi, protozoa, and nematodes form a complex web that breaks down organic matter, cycles nutrients, and creates the conditions for life to flourish.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Industrial agriculture treats soil as an inert growing medium—something to hold plants upright while synthetic fertilizers provide nutrition. This approach has degraded millions of acres worldwide, creating soil that's technically productive but biologically dead.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Our Regenerative Approach</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                At Haritha Farms, we practice regenerative agriculture—a philosophy that views soil health as central to everything we do. Our chickens aren't just livestock; they're partners in soil building. As they forage, their scratching aerates the soil, their droppings add nutrients, and their movement mimics the natural patterns that built the world's richest grasslands.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We practice rotational grazing, moving birds regularly to fresh pasture. This prevents overgrazing, allows land to recover, and distributes nutrients evenly. The areas they've grazed show measurable improvements in soil organic matter, water retention, and microbial diversity within months.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Compost Connection</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Nothing leaves our farm as waste. Bedding from our chicken coops, combined with plant matter and manure, becomes rich compost through carefully managed thermophilic decomposition. This compost returns to our pastures, closing the nutrient loop and eliminating the need for external inputs.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We test our compost regularly, ensuring proper carbon-to-nitrogen ratios and monitoring for pathogens. The process takes time—six months minimum—but the result is black gold that feeds the soil food web and sequesters carbon in the process.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Measuring Progress</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We conduct annual soil tests across our property, tracking organic matter percentage, pH levels, nutrient availability, and microbial biomass. The data tells a story of steady improvement—soil that's becoming richer, more resilient, and more productive each year.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                When we started, our soil had 2.1% organic matter—typical for degraded agricultural land. Five years later, we're averaging 4.8% and climbing. That increase represents thousands of pounds of carbon pulled from the atmosphere and stored underground, doing its part to combat climate change while growing better food.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Ripple Effect</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Healthy soil means healthy plants, which means nutritious feed for our animals. That nutrition shows up in the eggs they produce—richer color, better flavor, higher nutrient density. Our customers can literally taste the difference that soil health makes.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Beyond our farm, healthy soil means cleaner water, more biodiversity, and resilient land that can withstand drought and flooding. It's regenerative in the truest sense—leaving the land better than we found it, building wealth in the soil that will benefit generations to come.
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
                  to="/blog/transparency-cost"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Transparency
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    The True Cost of Transparency in Modern Farming
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
