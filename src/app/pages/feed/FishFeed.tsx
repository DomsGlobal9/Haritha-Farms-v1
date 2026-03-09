import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowLeft, Droplets, Anchor, Wind, CheckCircle } from 'lucide-react';
import { FadeIn } from '../../components/ui/fade-in';
import { Button } from '../../components/ui/button';
import { CTASection } from '../../components/ui/CTASection';
import { murrelDetailImage as murrelFishImage } from '../../../assets';

export default function FishFeed() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="relative h-[80vh] flex items-end pb-24 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2 }}
            src="https://images.unsplash.com/photo-1768475162965-690edd41ad82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaXNoJTIwZmFybSUyMGZlZWRpbmclMjB0aW1lJTIwc3BsYXNoJTIwY2luZW1hdGljfGVufDF8fHx8MTc2ODYyOTk2Mnww&ixlib=rb-4.1.0&q=80&w=1920"
            alt="Fish farm feeding"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#001a1a] via-[#001a1a]/40 to-transparent" />
        </div>

        <div className="container mx-auto relative z-10 text-white">
          <FadeIn>
            <Link to="/feed" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-cyan-200/70 hover:text-cyan-200 mb-8 transition-colors">
              <ArrowLeft size={14} className="mr-2" /> Back to Feed Range
            </Link>
            <h1 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
              Aqua <br /> <span className="text-cyan-400 italic">Balance</span> Pro
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80 max-w-2xl">
              High-protein extruded feed for Murrel and freshwater fish. Engineered for low water pollution and high Feed Conversion Ratio (FCR).
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Technology Highlight: Floating vs Sinking */}
      <section className="py-24 px-6 bg-[#F0F8FF]">
        <div className="container mx-auto max-w-6xl">
           <FadeIn className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-[#003366] mb-4">Precision Buoyancy Technology</h2>
              <p className="text-[#003366]/70 max-w-2xl mx-auto">
                 Different fish feed differently. Our specialized extrusion process creates pellets that behave exactly how your fish need them to.
              </p>
           </FadeIn>

           <div className="grid md:grid-cols-2 gap-8">
              {/* Floating */}
              <FadeIn delay={0.1} className="bg-white p-8 md:p-12 border-t-4 border-cyan-400 shadow-sm group">
                 <div className="flex justify-between items-start mb-6">
                    <div className="bg-cyan-50 p-4 rounded-full text-cyan-600">
                       <Wind size={32} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-cyan-600 bg-cyan-50 px-3 py-1 rounded-full">Surface Feeders</span>
                 </div>
                 <h3 className="text-2xl font-serif text-[#003366] mb-4">Floating Pellets</h3>
                 <p className="text-[#003366]/70 leading-relaxed mb-6">
                    Remains on the surface for visible feeding monitoring. Ideal for species like Katla, Rohu, and Tilapia. Reduces waste by allowing farmers to stop feeding when fish are full.
                 </p>
                 <div className="h-32 bg-cyan-100/30 rounded-lg relative overflow-hidden border border-cyan-100">
                    <div className="absolute top-4 left-0 right-0 flex justify-center gap-4">
                       {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-3 h-3 rounded-full bg-[#8B4513] animate-bounce" style={{ animationDelay: `${i * 0.2}s` }} />
                       ))}
                    </div>
                    <div className="absolute bottom-0 w-full h-1/2 bg-cyan-200/20 backdrop-blur-sm" />
                 </div>
              </FadeIn>

              {/* Sinking */}
              <FadeIn delay={0.2} className="bg-white p-8 md:p-12 border-t-4 border-[#003366] shadow-sm group">
                 <div className="flex justify-between items-start mb-6">
                    <div className="bg-blue-50 p-4 rounded-full text-[#003366]">
                       <Anchor size={32} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-widest text-[#003366] bg-blue-50 px-3 py-1 rounded-full">Bottom Feeders</span>
                 </div>
                 <h3 className="text-2xl font-serif text-[#003366] mb-4">Slow-Sinking Pellets</h3>
                 <p className="text-[#003366]/70 leading-relaxed mb-6">
                    Designed to drift slowly to the bottom. Perfect for carnivorous fish like Murrel and Prawns that prefer to hunt in the water column or substrate.
                 </p>
                 <div className="h-32 bg-cyan-100/30 rounded-lg relative overflow-hidden border border-cyan-100">
                    <div className="absolute w-full h-full flex justify-center gap-4 pt-4">
                       {[1,2,3,4,5].map(i => (
                          <motion.div 
                             key={i} 
                             initial={{ y: 0 }}
                             animate={{ y: 80 }}
                             transition={{ duration: 3, repeat: Infinity, ease: "linear", delay: i * 0.5 }}
                             className="w-3 h-3 rounded-full bg-[#5D4037]" 
                          />
                       ))}
                    </div>
                    <div className="absolute bottom-0 w-full h-1/2 bg-cyan-200/20 backdrop-blur-sm" />
                 </div>
              </FadeIn>
           </div>
        </div>
      </section>

      {/* Water Quality & FCR */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
           <div className="grid md:grid-cols-2 gap-16 items-center">
              <FadeIn>
                 <img 
                    src={murrelFishImage}
                    alt="Healthy Fish"
                    className="w-full object-contain drop-shadow-2xl"
                 />
                 <div className="mt-8 grid grid-cols-2 gap-4">
                    <div className="text-center p-4 bg-gray-50 rounded-sm">
                       <div className="text-3xl font-bold text-[#003366] mb-1">1:1.2</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-wider">Target FCR</div>
                    </div>
                    <div className="text-center p-4 bg-gray-50 rounded-sm">
                       <div className="text-3xl font-bold text-[#003366] mb-1">45%</div>
                       <div className="text-xs text-muted-foreground uppercase tracking-wider">Protein Content</div>
                    </div>
                 </div>
              </FadeIn>
              
              <FadeIn delay={0.2}>
                 <span className="text-cyan-600 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Water Management</span>
                 <h2 className="text-4xl md:text-5xl font-serif text-[#003366] mb-6">
                    Clearer Water, <br/>Healthier Harvest
                 </h2>
                 <p className="text-muted-foreground leading-relaxed mb-6">
                    Poor quality feed disintegrates instantly, fouling the water and spiking ammonia levels. Our pellets are water-stable for up to 2 hours, ensuring nutrients go into the fish, not the pond filter.
                 </p>
                 <ul className="space-y-4">
                    {[
                       "Reduces frequency of water changes",
                       "Lowers ammonia and nitrate spikes",
                       "Prevents gill clogging in fish",
                       "Better oxygen retention in pond"
                    ].map((item, i) => (
                       <li key={i} className="flex items-center gap-3 text-[#003366] font-medium">
                          <CheckCircle size={18} className="text-cyan-500" />
                          {item}
                       </li>
                    ))}
                 </ul>
              </FadeIn>
           </div>
        </div>
      </section>

      <CTASection
        title="Scale Your Aquaculture"
        description="Get feed that pays for itself through better survival rates and faster growth."
        primaryAction={{ text: "Get Bulk Pricing", link: "/contact" }}
        secondaryAction={{ text: "View Livestock Feed", link: "/feed/livestock" }}
      />
    </div>
  );
}