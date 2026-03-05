import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Check, TrendingUp, Shield, Activity } from 'lucide-react';
import { FadeIn } from '../../components/ui/fade-in';
import { Button } from '../../components/ui/button';
import { CTASection } from '../../components/ui/CTASection';

const nutritionData = [
  { label: 'Crude Protein', value: 16, color: 'bg-emerald-600' },
  { label: 'Crude Fiber', value: 12, color: 'bg-amber-600' },
  { label: 'Crude Fat', value: 3.5, color: 'bg-yellow-500' },
  { label: 'Moisture', value: 11, color: 'bg-blue-400' },
];

export default function LivestockFeed() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1601284702049-dfe0015ad045?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGVlcCUyMGVhdGluZyUyMGZlZWQlMjB0cm91Z2glMjBmYXJtJTIwY2luZW1hdGljfGVufDF8fHx8MTc2ODYyOTk2Mnww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Sheep feeding"
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
              Ruminant <br /> <span className="text-[#C5A059] italic">Vitality</span> Blend
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl">
              Scientifically balanced nutrition for Sheep & Goats. Optimized for gut health, weight gain, and immunity without synthetic boosters.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* The Difference */}
      <section className="py-24 px-6 bg-[#FDFCF8]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Science of Digestion</span>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Optimizing the Rumen
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Sheep and goats are ruminants—their health depends entirely on a stable rumen environment. Our feed is formulated to balance pH levels, preventing acidosis while maximizing nutrient absorption.
              </p>
              <ul className="space-y-4 mt-8">
                {[
                  "Buffers rumen acidity naturally",
                  "Encourages beneficial microbial growth",
                  "High digestibility (>85%)",
                  "Prevents urinary calculi in male stock"
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
            <FadeIn delay={0.2} className="relative">
              <div className="aspect-square bg-[#0A1610] rounded-sm overflow-hidden relative p-8 flex items-center justify-center">
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
                <div className="text-center">
                  <Activity size={64} className="text-[#C5A059] mx-auto mb-6" />
                  <h3 className="text-white text-2xl font-serif mb-2">Daily Growth Rate</h3>
                  <div className="text-5xl font-bold text-white mb-2">+150g</div>
                  <p className="text-white/60 text-sm">Average daily gain in lambs<br/>on Haritha Vitality Blend</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Nutritional Breakdown (Interactive-ish) */}
      <section className="py-24 px-6 bg-white border-t border-border">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">Nutritional Profile</h2>
              <p className="text-muted-foreground">Guaranteed analysis per kilogram</p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {nutritionData.map((item, index) => (
              <FadeIn key={index} delay={index * 0.1}>
                <div className="flex items-center gap-6">
                  <div className="w-32 text-sm font-bold text-primary uppercase tracking-wider text-right">{item.label}</div>
                  <div className="flex-1 h-12 bg-gray-100 rounded-sm overflow-hidden relative group">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value * 3}%` }} // Scale factor for visual
                      transition={{ duration: 1.5, ease: "easeOut" }}
                      className={`h-full ${item.color} opacity-80 group-hover:opacity-100 transition-opacity`}
                    />
                    <div className="absolute inset-0 flex items-center pl-4 text-xs font-bold text-primary/50 group-hover:text-primary z-10">
                      {item.value}%
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <div className="mt-12 p-6 bg-primary/5 rounded-sm border border-primary/10 text-center">
            <p className="text-sm text-primary/80 italic">
              *Full amino acid profile and mineral breakdown available on request for commercial partners.
            </p>
          </div>
        </div>
      </section>

      {/* Feeding Guide */}
      <section className="py-24 px-6 bg-[#0A1610] text-[#F2F0E9]">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-12">
            <FadeIn className="md:col-span-1">
              <h2 className="text-3xl md:text-4xl font-serif mb-6">Feeding Guide</h2>
              <p className="text-white/70 leading-relaxed mb-8">
                Amounts vary based on breed, age, and grazing availability. Start small and increase gradually over 7 days to allow rumen adaptation.
              </p>
              <Button variant="outline" className="border-[#C5A059] text-[#C5A059] hover:bg-[#C5A059] hover:text-[#0A1610]">
                Download Chart (PDF)
              </Button>
            </FadeIn>

            <div className="md:col-span-2 grid sm:grid-cols-2 gap-6">
              {[
                { stage: "Lamb Starter", age: "2 weeks - 3 months", amount: "Ad libitum (Free choice)", note: "High protein for rapid muscle development" },
                { stage: "Grower", age: "3 - 6 months", amount: "250g - 400g / day", note: "Balanced energy for steady frame growth" },
                { stage: "Finisher", age: "6 months+", amount: "500g - 800g / day", note: "Higher starch for conditioning before market" },
                { stage: "Maintenance / Ewes", age: "Adults", amount: "300g / day", note: "Supports health during gestation & lactation" }
              ].map((stage, i) => (
                <FadeIn key={i} delay={0.1 * i}>
                  <div className="bg-white/5 p-6 border border-white/10 hover:border-[#C5A059]/50 transition-colors">
                    <h3 className="text-[#C5A059] text-lg font-bold uppercase tracking-widest mb-1">{stage.stage}</h3>
                    <div className="text-xs text-white/50 mb-4">{stage.age}</div>
                    <div className="text-2xl font-serif mb-2">{stage.amount}</div>
                    <p className="text-sm text-white/70">{stage.note}</p>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Fuel Your Herd's Potential"
        description="Switch to Haritha Vitality Blend and see the difference in coat shine, activity levels, and growth rates within 3 weeks."
        primaryAction={{ text: "Request Quote", link: "/contact" }}
        secondaryAction={{ text: "View Poultry Feed", link: "/feed/poultry" }}
      />
    </div>
  );
}
