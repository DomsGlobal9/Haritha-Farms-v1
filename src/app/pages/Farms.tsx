import React from 'react';
import { Link } from 'react-router';
import { FadeIn } from '../components/ui/fade-in';
import { ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { CTASection } from '../components/ui/CTASection';
import murrelFishImage from '../../assets/images/murrelFarmsImage.jpg';
import goatsImage from '../../assets/images/goatsImage.jpg';
import countryHenImage from '../../assets/images/diaryChickenNestImage.jpg';

export default function Farms() {
  return (
    <div className="bg-background pt-24">
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl text-center mb-24">
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Our Livestock</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">
              Raised as Nature Intended
            </h1>
            <p className="text-xl font-light text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We focus exclusively on native breeds that thrive in our local climate. By honoring their natural behaviors, we ensure food that is not just organic, but truly wholesome.
            </p>
          </FadeIn>
        </div>

        <div className="container mx-auto">
          {/* 1. The Native Sheep */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24 mb-32">
            <FadeIn className="w-full md:w-1/2" direction="right">
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
                <img 
                  src={goatsImage} 
                  alt="Native Indian Sheep Grazing" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </FadeIn>
            <div className="w-full md:w-1/2">
              <FadeIn direction="left">
                <div className="flex items-center gap-4 mb-6">
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-primary">The Native Sheep</h3>
                </div>
                <h4 className="text-lg font-medium text-secondary mb-4 tracking-wide uppercase text-xs">Grazing & Raising</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 text-lg">
                  We raise exclusively native Indian breeds, resilient and perfectly adapted to our land. Unlike commercial farms, our sheep are never stall-fed. They spend their days roaming free on open pastures, grazing on a diverse diet of natural grasses and herbs.
                </p>
                <h4 className="text-lg font-medium text-secondary mb-4 tracking-wide uppercase text-xs">Health & Nutrition</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 text-lg">
                  This active lifestyle and natural diet result in meat that is lean, distinct in flavor, and rich in essential nutrients. By avoiding artificial feed and confinement, we ensure the animal's health—which directly translates to the health quality of the meat you consume.
                </p>
                <Button asChild variant="link" className="text-primary hover:text-secondary p-0 h-auto text-sm uppercase tracking-widest font-bold">
                  <Link to="/farms/sheep">View Sheep Farming <ArrowRight size={14} className="ml-2" /></Link>
                </Button>
              </FadeIn>
            </div>
          </div>

          {/* 2. Country Hen */}
          <div className="flex flex-col md:flex-row-reverse items-center gap-12 md:gap-24 mb-32">
            <FadeIn className="w-full md:w-1/2" direction="left">
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
                <img 
                  src={countryHenImage} 
                  alt="Free Range Country Hen" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </FadeIn>
            <div className="w-full md:w-1/2">
              <FadeIn direction="right">
                <div className="flex items-center gap-4 mb-6">
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-primary">Country Hen</h3>
                </div>
                <h4 className="text-lg font-medium text-secondary mb-4 tracking-wide uppercase text-xs">Foraging & Growth</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 text-lg">
                  True country hens (Nattu Kozhi) cannot be factory-farmed. Ours live outdoors, basking in sunlight and scratching the earth for insects, worms, and seeds. This natural foraging behavior is crucial for their mental and physical well-being.
                </p>
                <h4 className="text-lg font-medium text-secondary mb-4 tracking-wide uppercase text-xs">Taste & Quality</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 text-lg">
                  Because they grow slowly and naturally without growth promoters, the meat develops a firm texture and a deep, authentic taste that commercial broilers simply cannot match. It's a difference you can taste in every bite.
                </p>
                <Button asChild variant="link" className="text-primary hover:text-secondary p-0 h-auto text-sm uppercase tracking-widest font-bold">
                  <Link to="/farms/hen">View Poultry Farming <ArrowRight size={14} className="ml-2" /></Link>
                </Button>
              </FadeIn>
            </div>
          </div>

          {/* 3. Murrel Fish */}
          <div className="flex flex-col md:flex-row items-center gap-12 md:gap-24">
            <FadeIn className="w-full md:w-1/2" direction="right">
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden">
                <img 
                  src={murrelFishImage} 
                  alt="Murrel Snakehead Fish" 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
                />
              </div>
            </FadeIn>
            <div className="w-full md:w-1/2">
              <FadeIn direction="left">
                <div className="flex items-center gap-4 mb-6">
                  
                  <h3 className="text-3xl md:text-4xl font-serif text-primary">Murrel Fish</h3>
                </div>
                <h4 className="text-lg font-medium text-secondary mb-4 tracking-wide uppercase text-xs">Pristine Waters</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-6 text-lg">
                  Specializing in Murrel (Korameenu), we maintain pond ecosystems that mimic natural riverbeds. We strictly avoid chemical water treatments, ensuring the fish thrive in clean, oxygen-rich water with plenty of space to swim.
                </p>
                <h4 className="text-lg font-medium text-secondary mb-4 tracking-wide uppercase text-xs">Pure Nutrition</h4>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 text-lg">
                  Murrel is prized for its healing properties and high protein content. By feeding them natural, organic plant-based feed, we ensure the fish is free from heavy metals and toxins, providing you with seafood that is as safe as it is delicious.
                </p>
                <Button asChild variant="link" className="text-primary hover:text-secondary p-0 h-auto text-sm uppercase tracking-widest font-bold">
                  <Link to="/farms/fish">View Aqua Farming <ArrowRight size={14} className="ml-2" /></Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>
      
      <CTASection 
        title="Taste the Purest Harvest"
        description="Ready to experience the difference of ethically raised, chemically free produce? Order directly from our farm today."
        primaryAction={{ text: "Order Now", link: "/contact" }}
        secondaryAction={{ text: "Our Practices", link: "/practices" }}
      />
    </div>
  );
}