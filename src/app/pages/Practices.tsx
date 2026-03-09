import React, { useRef } from 'react';
import { Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { Sprout, Droplets, Heart, Sun, Wind, CloudRain, ArrowRight, ShieldCheck, Bird, Leaf } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FadeIn } from '../components/ui/fade-in';
import { CTASection } from '../components/ui/CTASection';
import { cn } from '../../lib/utils';
import farmGrassImage from '../../assets/images/farmGrassImage.jpg';
import farmAerialImage from '../../assets/images/farmAerialImage.jpg';
import freeRangePoultryImage from '../../assets/images/freeRangePoultryImage.jpg';

// --- Components ---

function SectionHeader({ number, title, subtitle }: { number: string, title: string, subtitle: string }) {
  return (
    <div className="flex flex-col gap-4 mb-12 md:mb-20">
      <div className="flex items-center gap-4">
        <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">{subtitle}</span>
        <div className="h-px w-12 bg-border/40" />
      </div>
      <div className="flex items-baseline gap-6">
        
        <h2 className="text-4xl md:text-6xl font-serif text-primary leading-none">{title}</h2>
      </div>
    </div>
  );
}

function PracticeCard({ title, desc, icon: Icon, delay = 0 }: any) {
  return (
    <FadeIn delay={delay} className="group">
       <div className="bg-[#F5F5F0] p-8 md:p-10 h-full border border-primary/5 hover:border-primary/20 transition-colors duration-500 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-700">
             <Icon size={120} />
          </div>
          <div className="relative z-10 flex flex-col h-full">
             <div className="w-14 h-14 rounded-full bg-white text-primary flex items-center justify-center mb-6 shadow-sm group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <Icon size={24} strokeWidth={1.5} />
             </div>
             <h3 className="text-2xl font-serif text-primary mb-4">{title}</h3>
             <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                {desc}
             </p>
          </div>
       </div>
    </FadeIn>
  );
}

export default function Practices() {
  const containerRef = useRef(null);

  return (
    <div ref={containerRef} className="bg-background relative">
      
      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[100vh] w-full overflow-hidden flex items-end pb-12 md:pb-24 px-6">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-transparent to-transparent z-10" />
          <motion.img 
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={farmAerialImage} 
            alt="Haritha Farms aerial view" 
            className="w-full h-full object-cover"
          />
        </div>

        <div className="container mx-auto relative z-20">
          <FadeIn>
            <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-4 md:mb-6 block">• Conscious Agriculture</span>
            <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl leading-[1.1] md:leading-[0.9] text-white mb-6 md:mb-10 max-w-5xl font-bold">
              Cultivating Life,<br/>
              <span className="not-italic font-light text-white/90 text-4xl md:text-[96px]">Not Just Food.</span>
            </h1>
            <p className="text-base md:text-xl text-white/80 max-w-2xl font-light leading-relaxed border-l-2 border-white/30 pl-4 md:pl-6">
              Our methods are not new. They are simply forgotten. We return to the wisdom of regenerative farming, where every action heals the land.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- THE PHILOSOPHY (Split Layout) --- */}
      <section className="py-20 md:py-32 px-6 bg-white">
         <div className="container mx-auto">
            <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">
               <div className="lg:w-1/2">
                  <FadeIn>
                     <div className="relative">
                        <div className="aspect-[4/5] overflow-hidden rounded-sm">
                           <img 
                              src={farmGrassImage}
                              alt="Farm landscape" 
                              className="w-full h-full object-cover"
                           />
                        </div>
                        <div className="md:absolute md:-bottom-10 md:-right-10 bg-[#0A1610] p-8 md:p-12 max-w-full md:max-w-sm mt-[-40px] md:mt-0 relative z-10 mx-6 md:mx-0">
                           <h4 className="text-white font-serif text-2xl mb-4">"The soil speaks."</h4>
                           <p className="text-white/70 font-light text-sm leading-relaxed">
                              If we listen, it tells us exactly what it needs. We don't force yield; we nurture capability.
                           </p>
                        </div>
                     </div>
                  </FadeIn>
               </div>
               <div className="lg:w-1/2 mt-8 lg:mt-0">
                  <FadeIn delay={0.2}>
                     <SectionHeader number="01" title="The Symbiotic Cycle" subtitle="Our Philosophy" />
                     <p className="text-lg md:text-xl text-primary/80 font-light leading-relaxed mb-6 md:mb-8">
                        A farm is not a factory. It is a living, breathing organism where plants, animals, and soil microbes are locked in a delicate dance of interdependence.
                     </p>
                     <p className="text-muted-foreground leading-relaxed mb-10">
                        We practice <strong className="text-primary font-medium">Regenerative Agriculture</strong>. This means we don't just sustain the land; we actively improve it. By integrating livestock grazing with crop growth, we create a closed-loop system where waste becomes fuel, and diversity builds resilience.
                     </p>
                     
                     <div className="grid grid-cols-2 gap-8 border-t border-primary/10 pt-8">
                        <div>
                           <h4 className="font-serif text-2xl text-primary mb-2">100%</h4>
                           <p className="text-xs uppercase tracking-widest text-muted-foreground">Chemical Free</p>
                        </div>
                        <div>
                           <h4 className="font-serif text-2xl text-primary mb-2">Zero</h4>
                           <p className="text-xs uppercase tracking-widest text-muted-foreground">Tillage</p>
                        </div>
                     </div>
                  </FadeIn>
               </div>
            </div>
         </div>
      </section>

      {/* --- CORE PRACTICES (Grid) --- */}
      <section className="py-20 md:py-32 px-6 bg-[#F5F5F0]">
         <div className="container mx-auto">
            <FadeIn className="mb-12 md:mb-20 text-center max-w-3xl mx-auto">
               <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">Pillars of Practice</h2>
               <p className="text-base md:text-lg text-muted-foreground font-light">
                  Our commitment to excellence is built on three non-negotiable foundations.
               </p>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
               <PracticeCard 
                  title="Soil Regeneration"
                  desc="We view soil as a living entity. diverse cover crops, composting, and zero-tillage methods ensure our soil remains rich in carbon and microbial life."
                  icon={Sprout}
                  delay={0.1}
               />
               <PracticeCard 
                  title="Ethical Animal Welfare"
                  desc="Animals are partners, not products. They live stress-free lives with open access to pasture, sunlight, and their natural social structures."
                  icon={Heart}
                  delay={0.2}
               />
               <PracticeCard 
                  title="Water Stewardship"
                  desc="Water is sacred. We employ rainwater harvesting, drip irrigation, and natural filtration zones to protect our aquifer and reduce consumption."
                  icon={Droplets}
                  delay={0.3}
               />
            </div>
         </div>
      </section>

      {/* --- IMMERSIVE PARALLAX SECTIONS --- */}
      <div className="relative bg-[#0A1610]">
         {/* 1. ANIMAL WELFARE */}
         <section className="min-h-screen flex items-center relative overflow-hidden py-12 md:py-24">
            <div className="absolute inset-0 opacity-40">
               <img 
                  src={freeRangePoultryImage} 
                  alt="Free range poultry grazing" 
                  className="w-full h-full object-cover"
               />
            </div>
            <div className="container mx-auto px-6 relative z-10">
               <div className="max-w-xl mx-auto md:ml-auto bg-[#1C1C1C]/90 backdrop-blur-md p-6 md:p-16 border-l-4 border-secondary">
                  <FadeIn>
                     <div className="flex items-center gap-4 mb-6">
                        <Bird className="text-secondary" size={24} />
                        <span className="text-white/60 text-xs font-bold tracking-[0.2em] uppercase">Respecting Life</span>
                     </div>
                     <h3 className="text-3xl md:text-5xl font-serif text-white mb-6">Freedom to Roam</h3>
                     <p className="text-white/70 font-light leading-relaxed mb-8">
                        Our animals are never confined to cages or feedlots. They graze rotationally, mimicking wild herd movements. This not only ensures their health but naturally fertilizes the soil.
                     </p>
                     <ul className="space-y-4 text-white/80 text-sm">
                        <li className="flex items-center gap-3">
                           <ShieldCheck size={18} className="text-secondary" /> No Growth Hormones
                        </li>
                        <li className="flex items-center gap-3">
                           <ShieldCheck size={18} className="text-secondary" /> No Routine Antibiotics
                        </li>
                        <li className="flex items-center gap-3">
                           <ShieldCheck size={18} className="text-secondary" /> 100% Natural Diet
                        </li>
                     </ul>
                  </FadeIn>
               </div>
            </div>
         </section>
      </div>

      {/* --- RHYTHM OF THE FARM --- */}
      <section className="py-20 md:py-32 px-6 bg-white overflow-hidden">
         <div className="container mx-auto">
            <div className="flex flex-col md:flex-row items-end justify-between mb-12 md:mb-20">
               <div className="max-w-2xl">
                  <SectionHeader number="02" title="Rhythms of Nature" subtitle="Daily Cycle" />
                  <p className="text-muted-foreground font-light text-base md:text-lg">
                     We don't work against the clock; we work with the sun.
                  </p>
               </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-4 relative">
               {/* Connecting Line */}
               <div className="absolute top-12 left-0 right-0 h-px bg-primary/10 hidden md:block" />

               {[
                  { time: "05:30", icon: Sun, title: "First Light", desc: "Inspection of herds and opening of coops." },
                  { time: "09:00", icon: Sprout, title: "Pasture Rotation", desc: "Moving animals to fresh grazing zones." },
                  { time: "14:00", icon: CloudRain, title: "Resource Care", desc: "Water system checks and feed mixing." },
                  { time: "18:00", icon: Wind, title: "Evening Rest", desc: "Securing animals and evening observation." },
               ].map((item, i) => (
                  <FadeIn key={i} delay={i * 0.1} className="relative md:pt-12">
                     <div className="absolute top-10 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-white border-4 border-primary/20 z-10 hidden md:block" />
                     <div className="bg-[#F9F9F9] p-6 md:p-8 text-center hover:bg-primary hover:text-white group transition-colors duration-500 rounded-sm">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/5 text-primary mb-6 group-hover:bg-white/10 group-hover:text-white">
                           <item.icon size={20} />
                        </div>
                        <span className="block text-xs font-bold tracking-widest opacity-50 mb-2">{item.time}</span>
                        <h4 className="text-xl font-serif mb-4">{item.title}</h4>
                        <p className="text-sm opacity-70 font-light leading-relaxed">{item.desc}</p>
                     </div>
                  </FadeIn>
               ))}
            </div>
         </div>
      </section>

      <CTASection 
         title="Transparency is our promise."
         description="Don't just take our word for it. We maintain an open-gate policy. Come witness our practices firsthand."
         primaryAction={{ text: "Schedule a Visit", link: "/visit" }}
         secondaryAction={{ text: "View Standards", link: "/transparency" }}
      />
    </div>
  );
}