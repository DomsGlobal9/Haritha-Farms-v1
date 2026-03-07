import React from 'react';
// Module refresh v5
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight, Leaf, Droplets, Sun, Heart, ShieldCheck, Sprout, Wind, Award, Eye, Users, Phone, MessageCircle, MapPin, Wheat, Ban, ChefHat } from 'lucide-react';
import { Button } from '../components/ui/button';
import { FadeIn } from '../components/ui/fade-in';
import { cn } from '../../lib/utils';
// Direct imports for images from assets/images
import newHeroImage from '../../assets/images/heroBirdImage.jpg';
import fishImage from '../../assets/images/fishimage.jpg';
import henImage from '../../assets/images/henimage.jpg';
import sheepImage from '../../assets/images/sheep-hen.jpg';
// Reuse available images as placeholders for missing assets
const philosophyImage = newHeroImage;
const imgImageHandsHoldingSoil = newHeroImage;

import { CTASection } from '../components/ui/CTASection';

// --- Components ---

function SectionHeading({ children, color = "text-primary" }: { children: React.ReactNode, color?: string }) {
  return (
    <h2 className={cn("text-4xl md:text-6xl lg:text-7xl font-serif leading-[1.1]", color)}>
      {children}
    </h2>
  );
}

export default function Home() {
  return (
    <div className="bg-background relative">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-[123vh] md:h-[95vh] w-full overflow-hidden flex items-end pb-12 md:pb-24 px-6 pt-32 md:pt-40">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/30 z-10" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-[#0F1C15]/60 to-transparent z-10" />
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src={newHeroImage}
            alt="Haritha Farms — Naturally Raised, Ethically Grown, Truly Clean Farming"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 h-full container mx-auto flex flex-col justify-end pb-0 md:px-6">
          <FadeIn delay={0.2} direction="up">
            <div className="flex items-center gap-4  mb-6 md:mb-8">
              <div className="h-[1px] w-8 md:w-12 bg-white/60"></div>
              <span className="text-white/80 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase"> • Clean Farming</span>
            </div>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-8xl lg:text-9xl leading-[0.9] text-white mb-6 md:mb-8 max-w-5xl">
              <span className="block text-white font-bold text-4xl sm:text-6xl md:text-7xl lg:text-[88px]">Naturally Raised.</span>
              <span className="block not-italic text-white/90 font-light text-3xl sm:text-4xl md:text-6xl lg:text-[80px]">Ethically Grown.</span>
              <span className="block italic text-[#C9A84C] font-light text-2xl sm:text-3xl md:text-5xl lg:text-[64px] mt-2">Truly Clean Farming.</span>
            </h1>
          </FadeIn>

          <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 md:gap-12 w-full border-t pt-0 md:pt-10 mt-0" style={{ borderColor: 'rgba(255, 255, 255, 0.2)' }}>
            <FadeIn delay={0.4} direction="up">
              <p className="text-base md:text-xl font-light tracking-wide text-white/80 mt-0 max-w-xl leading-relaxed">
                We raise sheep &amp; lamb, country chicken (Natu Kodi), and murrel fish the right way—organic, pesticide‑free fodder, hormone‑free rearing, and natural, stress‑free environments for healthier livestock and honest flavour.
              </p>
              <p className="text-sm md:text-base text-[#C9A84C]/80 mt-4 tracking-wide font-light">
                Clean fields → Clean feed → Healthier livestock for Indian families.
              </p>
            </FadeIn>

            <FadeIn delay={0.6} direction="up">
              <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                <Button asChild size="lg" className="w-full sm:w-auto bg-white text-primary hover:bg-secondary hover:text-white border-0 rounded-none px-8 md:px-10 py-6 md:py-7 text-xs tracking-[0.15em] transition-all duration-300 font-bold justify-center">
                  <Link to="/farms">EXPLORE OUR FARMS</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-primary rounded-none px-8 md:px-10 py-6 md:py-7 text-xs tracking-[0.15em] bg-transparent backdrop-blur-sm font-bold justify-center">
                  <Link to="/practices">OUR PRACTICES</Link>
                </Button>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* --- TRUST STRIP (4 badges) --- */}
      <section className="bg-[#0A1610] border-t border-white/5">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4  divide-white/5">
            {[
              { icon: Ban, label: "Hormone‑Free Rearing" },
              { icon: Wheat, label: "Organic, Pesticide‑Free Fodder" },
              { icon: Heart, label: "Ethical, Humane Care" },
              { icon: Leaf, label: "Natural, Stress‑Free Growth" },
            ].map((badge, i) => (
              <FadeIn key={i} delay={0.15 * i} direction="up">
                <div className="flex flex-col items-center text-center py-8 md:py-10 px-4 group">
                  <badge.icon className="text-[#C9A84C] mb-3 group-hover:scale-110 transition-transform duration-500" size={24} strokeWidth={1.5} />
                  <span className="text-white/60 text-[11px] md:text-xs tracking-[0.15em] uppercase font-light">{badge.label}</span>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- WHAT WE RAISE (Product / Livestock Section) --- */}
      <section className="bg-[#1C1C1C] text-[#F2F0E9] overflow-hidden flex flex-col min-h-screen md:h-screen md:max-h-[1080px]">
        {/* Section Header */}
        <div className="container mx-auto px-[24px] py-8 md:py-12 shrink-0">
          <FadeIn>
            <div className="flex items-center gap-6 mb-4">
              <div className="h-px w-16 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold tracking-[0.3em] uppercase">What We Raise</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-serif max-w-3xl leading-none text-[rgb(187,241,228)]">
              Honest livestock, raised right.<br />
              <span className="text-[#F2F0E9]/40">No hormones. No shortcuts.</span>
            </h2>
          </FadeIn>
        </div>

        {/* Elastic Gallery */}
        <div className="flex flex-col md:flex-row flex-1 w-full border-t border-[#F2F0E9]/5 min-h-0">
          {[
            {
              title: "Murrel Fish",
              subtitle: "Snakehead / Jungle Fish",
              desc: "Raised in nature‑balanced ponds with clean water and careful stewardship—no hormones, no antibiotics—for firm, clean fish that thrive naturally.",
              img: fishImage,
              icon: Droplets,
              link: "/farms/fish",
              cta: "Learn about Murrel"
            },
            {
              title: "Country Chicken",
              subtitle: "Natu Kodi",
              desc: "Free‑range desi chicken that forages, moves, and grows at its own pace. Hormone‑free, nourished on organic greens & grains for authentic flavour and strong natural immunity.",
              img: henImage,
              icon: Sun,
              link: "/farms/hen",
              cta: "Learn about Country Chicken"
            },
            {
              title: "Sheep & Lamb",
              subtitle: "Pasture‑Raised",
              desc: "Pasture‑raised on our organic fodder with open movement and gentle handling. Natural growth, better resilience, and clean, layered characteristics families love.",
              img: sheepImage,
              icon: Wind,
              link: "/farms/sheep",
              cta: "Learn about Sheep & Lamb"
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group relative flex-1 min-h-[300px] md:min-h-full border-b md:border-b-0 md:border-r border-[#F2F0E9]/10 hover:flex-[1.5] lg:hover:flex-[2] transition-[flex] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)] overflow-hidden bg-[#242424]"
            >
              {/* Background Layer */}
              <div className="absolute inset-0 z-0">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover grayscale opacity-20 group-hover:grayscale-0 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1C1C1C] via-[#1C1C1C]/70 to-transparent" />
              </div>

              {/* Content Container */}
              <div className="relative z-10 h-full flex flex-col justify-end p-6 md:p-10 lg:p-12">
                {/* Static Header */}
                <div className="mb-auto flex justify-between items-start w-full transform md:-translate-y-4 md:group-hover:translate-y-0 transition-transform duration-700">
                  <item.icon className="text-[#C5A059] opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 -translate-y-4 group-hover:translate-y-0" size={28} />
                </div>

                {/* Animated Content */}
                <div className="max-w-xl">
                  <span className="text-[#C5A059] text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase mb-2 block opacity-100 md:opacity-0 md:translate-y-4 md:group-hover:opacity-100 md:group-hover:translate-y-0 transition-all duration-700 delay-100">
                    {item.subtitle}
                  </span>
                  <h3 className="text-2xl md:text-4xl font-serif text-[#F2F0E9] mb-4 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <div className="grid grid-rows-[1fr] md:grid-rows-[0fr] md:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-[cubic-bezier(0.25,1,0.5,1)]">
                    <div className="overflow-hidden">
                      <p className="text-[#F2F0E9]/70 font-light leading-relaxed text-sm md:text-base border-l border-[#C5A059] pl-4 mb-4 line-clamp-none md:line-clamp-none">
                        {item.desc}
                      </p>
                      <Link to={item.link} className="inline-flex items-center gap-2 text-[#C5A059] text-xs tracking-[0.15em] uppercase hover:text-white transition-colors duration-300">
                        {item.cta} <ArrowRight size={14} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- WHY HARITHA FARMS (3 value props) --- */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto">
          <FadeIn>
            <div className="mb-12 md:mb-20 max-w-3xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-12 bg-primary/30" />
                <span className="text-primary text-xs font-bold tracking-[0.2em] uppercase">The Difference</span>
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-primary mb-6">Why Haritha Farms</h2>
              <p className="text-lg md:text-xl text-muted-foreground font-light leading-relaxed">
                Beyond organic labels, we build trust through practice. Here is what sets us apart.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-12 md:gap-y-16">
            {[
              {
                title: "Fodder‑First Farming",
                desc: "We grow our own organic feed—no synthetic fertilisers, no pesticides, no treated/GM seed—so nutrition stays clean from soil to livestock.",
                icon: Wheat
              },
              {
                title: "Hormone‑Free. No Shortcuts.",
                desc: "We never use hormones or artificial growth promoters. Rearing follows nature's rhythm for healthier animals and honest characteristics.",
                icon: ShieldCheck
              },
              {
                title: "Taste India Prefers",
                desc: "Livestock raised on clean feed develop true desi flavour and consistency Indian homes and chefs expect—from everyday curries to festive menus.",
                icon: ChefHat
              },
            ].map((item, index) => (
              <FadeIn key={index} delay={index * 0.15}>
                <div className="group flex flex-col h-full">
                  <div className="w-16 h-16 rounded-2xl bg-primary/5 text-primary flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors duration-500 mb-8">
                    <item.icon strokeWidth={1.5} size={28} />
                  </div>
                  <h3 className="text-2xl font-serif text-primary mb-4">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed flex-grow font-light">
                    {item.desc}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* --- OUR PRACTICES (Explainer + editorial image) --- */}
      <section className="py-20 md:py-48 px-6 bg-[#F5F5F0] overflow-hidden">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

            {/* Editorial Image */}
            <div className="w-full lg:w-5/12 relative group">
              <FadeIn delay={0.2}>
                <div className="relative aspect-[20/35] overflow-hidden bg-[#E6E2D6]">
                  <motion.img
                    initial={{ scale: 1.2 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    viewport={{ once: true }}
                    src={philosophyImage}
                    alt="Organic farming practices at Haritha Farms"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 w-full h-full pointer-events-none">
                    <img alt="" className="absolute inset-0 w-full h-full object-cover" src={imgImageHandsHoldingSoil} />
                    <div className="absolute inset-0 w-full h-full">
                      <img alt="" className="absolute inset-0 w-full h-full object-cover" src={philosophyImage} />
                    </div>
                    <div className="absolute inset-0 w-full h-full overflow-hidden">
                      <div className="absolute inset-0 w-full h-full">
                        <img alt="" className="absolute h-full max-w-none w-[200.18%] left-[-61.74%] top-[-0.08%] object-cover" src={philosophyImage} />
                      </div>
                    </div>
                    <div className="absolute inset-0 bg-[#0A1610]/10 mix-blend-multiply" />
                  </div>
                </div>
                {/* Decorative Border Offset */}
                <div className="absolute -top-6 -right-6 w-full h-full border border-[#1C1C1C]/10 z-[-1] transition-transform duration-700 group-hover:translate-x-2 group-hover:-translate-y-2" />
              </FadeIn>
            </div>

            {/* Editorial Content */}
            <div className="w-full lg:w-7/12">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6 md:mb-8">
                  <div className="h-px w-12 bg-[#0A1610]/30" />
                  <span className="text-[#0A1610] text-xs font-bold tracking-[0.2em] uppercase">Our Practices</span>
                </div>

                <h2 className="text-4xl md:text-7xl lg:text-8xl font-serif text-[#1C1C1C] leading-[0.9] mb-8 md:mb-10 -ml-1">
                  Clean Fields. <br />
                  <span className="italic text-[#0A1610]/80">Clean Feed.</span>
                </h2>

                <p className="text-lg md:text-2xl text-[#1C1C1C]/70 font-light leading-relaxed mb-10 md:mb-12 max-w-2xl">
                  Our fields stay synthetic‑free, our ponds stay balanced, and our livestock are reared with patience and respect. It's a system designed for steady health, better immunity, and traceable purity—without processing, without shortcuts.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 border-t border-[#1C1C1C]/10 pt-8 md:pt-10 mb-10">
                  <div className="group">
                    <h4 className="text-3xl font-serif text-[#1C1C1C] mb-2 group-hover:text-[#0A1610] transition-colors">0%</h4>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/50 mb-2 block">Chemicals &amp; Pesticides</span>
                    <p className="text-sm text-[#1C1C1C]/60 leading-relaxed max-w-[200px]">Complete rejection of synthetic fertilizers, GM seed, and treated inputs.</p>
                  </div>
                  <div className="group">
                    <h4 className="text-3xl font-serif text-[#1C1C1C] mb-2 group-hover:text-[#0A1610] transition-colors">100%</h4>
                    <span className="text-xs font-bold uppercase tracking-[0.15em] text-[#1C1C1C]/50 mb-2 block">Traceable Purity</span>
                    <p className="text-sm text-[#1C1C1C]/60 leading-relaxed max-w-[200px]">Open gates policy. See how your food is raised—soil to table.</p>
                  </div>
                </div>

                <Button asChild className="rounded-none bg-primary text-white hover:bg-secondary px-10 h-14 text-xs uppercase tracking-[0.15em] font-bold transition-all duration-300">
                  <Link to="/practices">See Our Practices &amp; Organic Feed <ArrowRight size={14} className="ml-2" /></Link>
                </Button>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* --- THE FARMS (Sticky Scroll Layout) --- */}
      <section className="bg-[#E6E2D6] px-6 py-20 md:py-32 relative">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
            {/* Sticky Left Content */}
            <div className="lg:w-1/3 relative">
              <div className="relative lg:sticky lg:top-32">
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Collection</span>
                <SectionHeading>Our Farms</SectionHeading>
                <p className="mt-6 md:mt-8 text-primary/70 text-lg font-light leading-relaxed mb-8 md:mb-12">
                  Three distinct environments, one unified approach to ethical farming. Explore our specialized divisions.
                </p>
                <Button asChild className="rounded-full h-14 md:h-16 px-8 md:px-10 bg-primary text-white hover:bg-secondary text-xs uppercase tracking-widest transition-all w-full md:w-auto">
                  <Link to="/farms">View Full Catalog</Link>
                </Button>
              </div>
            </div>

            {/* Scrolling Right Content */}
            <div className="lg:w-2/3 flex flex-col gap-16 md:gap-24 lg:gap-40 pt-0 md:pt-12 lg:pt-0">
              <FarmCard
                number="01"
                title="Sheep & Lamb"
                subtitle="Pasture‑Raised on Organic Fodder"
                desc="Pasture‑raised on our organic fodder with open movement and gentle handling. Natural growth, better resilience, and clean, layered characteristics families love."
                img={sheepImage}
                link="/farms/sheep"
              />
              <FarmCard
                number="02"
                title="Country Chicken"
                subtitle="Free‑Range Natu Kodi"
                desc="Free‑range desi chicken that forages, moves, and grows at its own pace. Hormone‑free, nourished on organic greens & grains for authentic flavour and strong natural immunity."
                img={henImage}
                link="/farms/hen"
              />
              <FarmCard
                number="03"
                title="Murrel Fish"
                subtitle="Nature‑Balanced Aquaculture"
                desc="Raised in nature‑balanced ponds with clean water and careful stewardship—no hormones, no antibiotics—for firm, clean fish that thrive naturally."
                img={fishImage}
                link="/farms/fish"
              />
            </div>
          </div>
        </div>
      </section>

      {/* --- BULK ENQUIRIES / FARM VISITS --- */}
      <section className="relative py-24 md:py-32 px-6 overflow-hidden bg-[#0A1610] text-[#F2F0E9]">
        <div className="absolute inset-0 z-0 opacity-10">
          <div className="absolute inset-0" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />
        </div>

        <div className="container mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-start">

            {/* Left content */}
            <div className="lg:w-1/2">
              <FadeIn>
                <div className="flex items-center gap-4 mb-6">
                  <div className="h-px w-16 bg-[#C5A059]" />
                  <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">Get In Touch</span>
                </div>

                <h2 className="text-4xl md:text-6xl font-serif mb-6 leading-tight text-[rgb(247,255,253)]">
                  Bulk Enquiries <br />
                  <span className="italic text-[#F2F0E9]/50">&amp; Farm Visits</span>
                </h2>

                <p className="text-lg text-[#F2F0E9]/70 font-light leading-relaxed mb-10 max-w-lg">
                  We welcome bulk enquiries for livestock (sheep, lamb, country chicken, murrel) and farm‑level partnerships, as well as scheduled farm visits to understand our feed and rearing programs.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button asChild size="lg" className="bg-[#C5A059] text-[#0A1610] hover:bg-white hover:text-[#0A1610] rounded-none px-10 h-14 text-xs font-bold tracking-widest uppercase transition-all duration-300">
                    <Link to="/visit">Schedule a Farm Visit</Link>
                  </Button>
                  <Button asChild variant="outline" size="lg" className="border-[#F2F0E9]/30 text-[#F2F0E9] hover:bg-[#F2F0E9] hover:text-[#0A1610] rounded-none px-10 h-14 text-xs font-bold tracking-widest uppercase bg-transparent transition-all duration-300">
                    <Link to="/contact">Contact Us</Link>
                  </Button>
                </div>
              </FadeIn>
            </div>

            {/* Right contact cards */}
            <div className="lg:w-1/2 w-full">
              <div className="flex flex-col gap-6">
                <FadeIn delay={0.1}>
                  <div className="bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 group hover:bg-white/[0.08] transition-colors duration-500" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ border: '1px solid rgba(201,168,76,0.3)' }}>
                        <Phone size={18} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-[1.5px] text-[#C9A84C]/60 block mb-2">Phone</span>
                        <a href="tel:+919632791544" className="text-lg text-[#F2F0E9]/80 hover:text-[#C9A84C] transition-colors">+91 9632791544</a>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                  <div className="bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 group hover:bg-white/[0.08] transition-colors duration-500" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ border: '1px solid rgba(201,168,76,0.3)' }}>
                        <MessageCircle size={18} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-[1.5px] text-[#C9A84C]/60 block mb-2">WhatsApp</span>
                        <a href="https://wa.me/919632791544" target="_blank" rel="noopener noreferrer" className="text-lg text-[#F2F0E9]/80 hover:text-[#C9A84C] transition-colors">+91 9632791544</a>
                      </div>
                    </div>
                  </div>
                </FadeIn>

                <FadeIn delay={0.3}>
                  <div className="bg-white/[0.04] backdrop-blur-sm p-6 md:p-8 group hover:bg-white/[0.08] transition-colors duration-500" style={{ border: '1px solid rgba(255,255,255,0.06)' }}>
                    <div className="flex items-start gap-5">
                      <div className="w-12 h-12 rounded-full flex items-center justify-center shrink-0" style={{ border: '1px solid rgba(201,168,76,0.3)' }}>
                        <MapPin size={18} className="text-[#C9A84C]" />
                      </div>
                      <div>
                        <span className="text-[11px] uppercase tracking-[1.5px] text-[#C9A84C]/60 block mb-2">Farm Location</span>
                        <p className="text-sm text-[#F2F0E9]/60 leading-relaxed">SY 199/C, 207/E2/1, Julakal, Waddepalle Mandal, Jogulamba Gadwal District, Telangana — 509 126</p>
                      </div>
                    </div>
                  </div>
                </FadeIn>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* --- FOOTER REASSURANCE CTA --- */}
      <CTASection
        title="Clean Farming. Honest Rearing. Ethical Growth."
        description="A better way to raise livestock. A better way to nourish the future."
        primaryAction={{ text: "Read Our Story", link: "/about" }}
        secondaryAction={{ text: "Explore Farms", link: "/farms" }}
        backgroundImage="https://images.unsplash.com/photo-1653135536246-662d5ea1fc5a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmFzcyUyMHdpdGglMjBkZXclMjBkYXJrJTIwZ3JlZW4lMjBtb29keSUyMGNsb3NlJTIwbXV0YXR1cmV8ZW58MXx8fHwxNzcwMzgzMTk5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
      />
    </div>
  );
}

function FarmCard({ number, title, subtitle, desc, img, link }: any) {
  return (
    <div className="group">
      <div className="relative aspect-[16/10] overflow-hidden mb-8 rounded-sm">
        <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors z-10" />
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
        />
      </div>
      <div className="flex items-baseline gap-4 mb-4">
        <h3 className="text-4xl font-serif text-primary">{title}</h3>
      </div>
      <div className="flex flex-col md:flex-row md:items-start justify-between gap-8 border-t border-primary/10 pt-6">
        <div className="max-w-md">
          <span className="text-xs font-bold uppercase tracking-wider text-primary/50 block mb-2">{subtitle}</span>
          <p className="text-muted-foreground font-light leading-relaxed">{desc}</p>
        </div>
        <Link to={link} className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-primary/20 hover:bg-primary hover:text-white transition-all">
          <ArrowRight size={18} />
        </Link>
      </div>
    </div>
  )
}