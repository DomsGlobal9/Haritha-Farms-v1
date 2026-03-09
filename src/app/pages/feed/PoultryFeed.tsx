import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Check, Sun, Feather, Egg } from 'lucide-react';
import { FadeIn } from '../../components/ui/fade-in';
import { Button } from '../../components/ui/button';
import { CTASection } from '../../components/ui/CTASection';

export default function PoultryFeed() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1619951873541-bbfe67621efe?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlja2VuJTIwZWF0aW5nJTIwZ3JhaW4lMjBjbG9zZSUyMHVwJTIwY2luZW1hdGljfGVufDF8fHx8MTc2ODYyOTk2M3ww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Poultry feeding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 text-white">
          <FadeIn>
            <Link to="/feed" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-white mb-8 transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Feed Range
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Golden Yolk <br /> <span className="text-[#C5A059] italic">Heritage</span> Grain
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl">
              A premium mix of maize, broken rice, and natural calcium for country hens. Designed to produce firm shells and rich, deep-orange yolks.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 px-6 bg-[#FDFCF8]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            <FadeIn className="order-2 md:order-1 relative">
               {/* Visual Comparison */}
               <div className="bg-white p-8 shadow-xl border border-gray-100 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-yellow-300 to-orange-600" />
                  <h3 className="text-center font-serif text-xl mb-8">The Yolk Test</h3>
                  
                  <div className="flex justify-center gap-12">
                     <div className="text-center group">
                        <div className="w-24 h-24 rounded-full bg-yellow-200 mb-4 mx-auto shadow-inner border border-yellow-300 transition-transform group-hover:scale-110" />
                        <p className="text-xs uppercase tracking-widest text-muted-foreground">Standard Feed</p>
                        <p className="text-sm font-medium mt-1">Pale Yellow</p>
                     </div>
                     <div className="text-center group">
                        <div className="w-24 h-24 rounded-full bg-[#FF8C00] mb-4 mx-auto shadow-inner border border-orange-600 transition-transform group-hover:scale-110 relative">
                           <motion.div 
                              initial={{ opacity: 0, scale: 0 }}
                              whileInView={{ opacity: 1, scale: 1 }}
                              transition={{ delay: 0.5 }}
                              className="absolute -top-2 -right-2 bg-primary text-white text-[10px] font-bold px-2 py-1 rounded-full"
                           >
                              BETA-CAROTENE RICH
                           </motion.div>
                        </div>
                        <p className="text-xs uppercase tracking-widest text-primary font-bold">Haritha Heritage</p>
                        <p className="text-sm font-medium mt-1">Deep Orange</p>
                     </div>
                  </div>
               </div>
            </FadeIn>

            <FadeIn className="order-1 md:order-2">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Quality Output</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                You Are What You Eat
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Most commercial feeds use synthetic colorants to mimic quality. We use natural sources like yellow maize, marigold petals, and spirulina to naturally enrich the yolk color and nutritional value.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Harder, smoother eggshells (Calcium fortified)",
                  "Higher Omega-3 content",
                  "Better feathering and shine",
                  "Supports natural foraging energy"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-primary font-medium">
                    <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary">
                      <Check size={14} />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* Ingredient Spotlight */}
      <section className="py-24 px-6 bg-[#F5F5F0]">
         <div className="container mx-auto max-w-5xl">
            <FadeIn className="text-center mb-16">
               <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Nature's Best Ingredients</h2>
               <p className="text-muted-foreground">No fillers. Just whole grains and natural supplements.</p>
            </FadeIn>
            
            <div className="grid md:grid-cols-3 gap-6">
               {[
                  { icon: Sun, title: "Yellow Maize", desc: "Energy source and natural pigment for rich yolk color." },
                  { icon: Egg, title: "Shell Grit", desc: "Natural calcium source for strong eggshells and bone health." },
                  { icon: Feather, title: "Soya Doc", desc: "High-quality vegetable protein for feather growth and muscle." }
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1}>
                     <div className="bg-white p-8 text-center hover:-translate-y-2 transition-transform duration-300 border border-transparent hover:border-secondary/20">
                        <div className="w-12 h-12 bg-primary/5 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                           <item.icon size={24} />
                        </div>
                        <h3 className="font-serif text-xl mb-3 text-primary">{item.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      {/* Feeding Schedule */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
             <h2 className="text-3xl md:text-4xl font-serif text-primary mb-12">Recommended Feeding</h2>
             
             <div className="relative border-l-2 border-dashed border-primary/20 ml-6 md:ml-auto md:mr-auto md:w-2/3 md:border-l-0 md:border-t-2 md:flex md:justify-between md:pt-12 md:mt-12 space-y-12 md:space-y-0">
                {[
                   { title: "Chick Mash", age: "Day 1 - Week 8", text: "Fine crumble for easy digestion." },
                   { title: "Grower Mash", age: "Week 9 - Week 18", text: "Supports frame development." },
                   { title: "Layer Mash", age: "Week 19 onwards", text: "Calcium-rich for egg production." }
                ].map((step, i) => (
                   <div key={i} className="relative pl-12 md:pl-0 md:flex-1 md:px-4">
                      <div className="absolute top-0 left-[-9px] w-4 h-4 rounded-full bg-secondary md:top-[-33px] md:left-1/2 md:-translate-x-1/2" />
                      <h3 className="text-lg font-bold text-primary uppercase tracking-wider mb-2">{step.title}</h3>
                      <span className="text-xs font-bold bg-primary/10 text-primary px-3 py-1 rounded-full mb-3 inline-block">{step.age}</span>
                      <p className="text-muted-foreground text-sm">{step.text}</p>
                   </div>
                ))}
             </div>
          </FadeIn>
        </div>
      </section>

      <CTASection
        title="Better Eggs Start Here"
        description="Join thousands of backyard farmers who trust Haritha Heritage Grain for their flock."
        primaryAction={{ text: "Order Trial Bag", link: "/contact" }}
        secondaryAction={{ text: "View Fish Feed", link: "/feed/fish" }}
      />
    </div>
  );
}
