import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { CTASection } from '../components/ui/CTASection';


import sheepFarmingMain from '../../assets/images/sheepFarming.jpg';
import naturalRange from '../../assets/images/goat1.jpg';
import cleanBalanced from '../../assets/images/goat2.jpg';
import pureWater from '../../assets/images/pure-water.jpg';
import preventHealth from '../../assets/images/prevent-health.jpg';
import stressfree from '../../assets/images/stressFree.jpg';
import TheResultGoat from '../../assets/images/the-result-goat.jpg';

import CountryHenFarming from '../../assets/images/country-hen-farming.jpg';
import naturalFeed from '../../assets/images/natural-feed.jpg';
import AntibioticHormone from '../../assets/images/antibiotic-harmone.jpg';
import stressFreeEnvironment from '../../assets/images/environment.jpg';
import cleanWaterImmunity from '../../assets/images/clean-water-immunity.jpg';
import EthicalSustainability from '../../assets/images/ethical-sustainbility.jpg';
import WhyHarithaChicken from '../../assets/images/why-haritha.jpg';
import VisualDiary from '../../assets/images/visiual-diary.jpg';


import sheepFarming1 from '../../assets/images/sheepfarming-1.jpg';

import sheepFarming2 from '../../assets/images/sheepfarming2.jpg';
import sheepFarming3 from '../../assets/images/sheepfarming3.jpg';
import sheepFarming4 from '../../assets/images/sheepfarming4.jpg';

import newFish from '../../assets/images/new-fish.jpg';
import FishFarmingMain from '../../assets/images/Fish-Farming-Main.jpg';
import FishFarmingPesticides from '../../assets/images/pestisides.jpg';
import NaturalPond from '../../assets/images/natural-pond.jpg';
import ChemicalAntiBioticFree from '../../assets/images/chemical-antibiotic-free.jpg';
import NaturalProtienRichFeed from '../../assets/images/natural-protien-rich-feed.jpg';
import StressFreeEnv from '../../assets/images/stress-free-env.jpg';
import SlowHealthGrowth from '../../assets/images/slow-health-growth.jpg';
import WhyHaritha2 from '../../assets/images/why-hrtha.jpg';
import NewNaturalEcoSystem from '../../assets/images/new-natural-pond-ecosystem.jpg';


import groupHens from '../../assets/images/group-hens.jpg';
import RichFeed from '../../assets/images/rich-feed.jpg';

import InsideWater from '../../assets/images/inside-water-fish.jpg';

import ChickenNew from '../../assets/images/Chiken.png';

import Tandoori from '../../assets/images/Tandoori-fish.png';

import FishSVG from '../../assets/images/Murrel-Fish.svg';

import GalleryGoat1 from '../../assets/images/gallery-goat1.jpg';
import GalleryGoat2 from '../../assets/images/gallery-goat2.jpg';
import GalleryGoat3 from '../../assets/images/gallery-goat3.jpg';
import GalleryGoat4 from '../../assets/images/gallery-goat4.jpg';
import GalleryGoat5 from '../../assets/images/gallery-goat5.jpg';
import GalleryGoat6 from '../../assets/images/gallery-goat6.jpg';


import Hen1 from '../../assets/images/hen1.jpg';
import Hen22 from '../../assets/images/hen22.jpg';
import Hen3 from '../../assets/images/hen3.jpg';
import Hen4 from '../../assets/images/hen4.jpg';
import Hen5 from '../../assets/images/hen5.jpg';
import Hen6 from '../../assets/images/hen6.jpg';
import Hen7 from '../../assets/images/hen7.jpg';


// ── Gallery Data ──
type Category = 'all' | 'farm' | 'chicken' | 'sheep' | 'fish';

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [

  // Farm
  { src: sheepFarmingMain, alt: "Sheep farming landscape", category: "farm" },
  { src: naturalRange, alt: "Natural grazing range", category: "farm" },
  { src: cleanBalanced, alt: "Balanced organic farming", category: "farm" },
  { src: pureWater, alt: "Pure water systems on farm", category: "farm" },

  // Chicken
  { src: CountryHenFarming, alt: "Country hen farming", category: "chicken" },
  { src: naturalFeed, alt: "Natural chicken feed", category: "chicken" },
  { src: AntibioticHormone, alt: "Antibiotic free poultry", category: "chicken" },
  { src: stressFreeEnvironment, alt: "Stress free poultry environment", category: "chicken" },
  { src: cleanWaterImmunity, alt: "Clean water immunity system", category: "chicken" },
  { src: EthicalSustainability, alt: "Ethical poultry sustainability", category: "chicken" },
  { src: WhyHarithaChicken, alt: "Why Haritha chicken", category: "chicken" },
  { src: VisualDiary, alt: "Chicken visual diary", category: "chicken" },
  { src: groupHens, alt: "Group of free range hens", category: "chicken" },
  { src:Hen1, alt: "Group of free range hens", category: "chicken" },
  { src: Hen22, alt: "Group of free range hens", category: "chicken" },
  { src: Hen3, alt: "Group of free range hens", category: "chicken" },
  { src: Hen4, alt: "Group of free range hens", category: "chicken" },
  { src: Hen5, alt: "Group of free range hens", category: "chicken" },
  { src: Hen6, alt: "Group of free range hens", category: "chicken" },
  { src: Hen7, alt: "Group of free range hens", category: "chicken" },
 

  // Sheep
 

  { src: sheepFarming3, alt: "Healthy sheep livestock", category: "sheep" },
  { src: sheepFarming4, alt: "Sheep pasture", category: "sheep" },
   { src: GalleryGoat1, alt: "Sheep pasture", category: "sheep" },
    { src: GalleryGoat2, alt: "Sheep pasture", category: "sheep" },
     { src: GalleryGoat3, alt: "Sheep pasture", category: "sheep" },
      { src: GalleryGoat4, alt: "Sheep pasture", category: "sheep" },
       { src: GalleryGoat5, alt: "Sheep pasture", category: "sheep" },
        { src: GalleryGoat6, alt: "Sheep pasture", category: "sheep" },
  { src: TheResultGoat, alt: "Healthy sheep farming result", category: "sheep" },

  // Fish
  { src: FishFarmingMain, alt: "Fish farming pond", category: "fish" },
  { src: newFish, alt: "Fresh murrel fish", category: "fish" },
  { src: FishFarmingPesticides, alt: "Chemical free fish farming", category: "fish" },
  { src: NaturalPond, alt: "Natural pond ecosystem", category: "fish" },
  
 
 
  
  { src: NewNaturalEcoSystem, alt: "Natural fish ecosystem", category: "fish" },
  { src: InsideWater, alt: "Inside water fish habitat", category: "fish" },
  { src: RichFeed, alt: "Fish rich feed", category: "fish" },
 
];

const categories: { key: Category; label: string }[] = [
  { key: 'all', label: 'All Photos' },
  { key: 'farm', label: 'Farm & Land' },
  { key: 'chicken', label: 'Country Chicken' },
  { key: 'sheep', label: 'Sheep & Lamb' },
  { key: 'fish', label: 'Murrel Fish' },
];

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState<Category>('all');
  const [lightbox, setLightbox] = useState<{ src: string; alt: string } | null>(null);

  const filtered = activeCategory === 'all'
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const counts: Record<Category, number> = {
    all: galleryItems.length,
    farm: galleryItems.filter(i => i.category === 'farm').length,
    chicken: galleryItems.filter(i => i.category === 'chicken').length,
    sheep: galleryItems.filter(i => i.category === 'sheep').length,
    fish: galleryItems.filter(i => i.category === 'fish').length,
  };

  return (
    <div className="bg-background pt-24 min-h-screen relative">

      {/* ── Header ── */}
      <section className="py-20 md:py-28 px-6 text-center border-b border-border/40 relative">
        <FadeIn>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-[#C9A84C]/40" />
            <span className="text-secondary text-xs font-bold tracking-[0.25em] uppercase">Visual Stories</span>
            <div className="h-px w-12 bg-[#C9A84C]/40" />
          </div>
          <h1 className="text-5xl md:text-7xl font-serif text-primary mb-6">Life on the Farm</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light leading-relaxed">
            A visual journey through life at Haritha Farms — from grazing sheep and free-range hens to clean fish ponds and the people who care for them every day.
          </p>
        </FadeIn>
      </section>

      {/* ── Filter Bar ── */}
      <section className="sticky top-[0] z-30 border-b border-border/30" style={{ backgroundColor: 'rgba(242, 240, 233, 0.92)', backdropFilter: 'blur(12px)' }}>
        <div className="container mx-auto px-6">
          <div className="flex items-center gap-1 md:gap-2 overflow-x-auto py-4 scrollbar-hide">
            {categories.map(cat => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`
                  relative whitespace-nowrap px-5 py-2.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300 rounded-full shrink-0
                  ${activeCategory === cat.key
                    ? 'bg-primary text-white'
                    : 'text-primary/60 hover:text-primary hover:bg-primary/5'
                  }
                `}
              >
                {cat.label}
                <span className={`ml-1.5 text-[10px] ${activeCategory === cat.key ? 'text-white/60' : 'text-primary/30'}`}>
                  {counts[cat.key]}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery Grid ── */}
      <section className="px-6 py-16 md:py-24 relative">
        <div className="container mx-auto max-w-7xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.35, ease: "easeOut" }}
            >
              <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 640: 2, 1024: 3 }}>
                <Masonry gutter="1rem">
                  {filtered.map((item, i) => (
                    <FadeIn key={item.src} delay={Math.min(i * 0.05, 0.6)}>
                      <div
                        className="overflow-hidden rounded-sm bg-muted/20 cursor-pointer group relative"
                        onClick={() => setLightbox(item)}
                      >
                        <img
                          src={item.src}
                          alt={item.alt}
                          className="w-full h-auto block transition-transform duration-700 group-hover:scale-[1.03]"
                          loading="lazy"
                        />
                        {/* Hover overlay with caption */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 md:p-5">
                          <p className="text-white text-xs md:text-sm font-light leading-relaxed tracking-wide">
                            {item.alt}
                          </p>
                        </div>
                      </div>
                    </FadeIn>
                  ))}
                </Masonry>
              </ResponsiveMasonry>
            </motion.div>
          </AnimatePresence>

          {/* Count */}
          <div className="mt-12 text-center">
            <span className="text-muted-foreground/50 text-xs tracking-[0.2em] uppercase">
              {filtered.length} {filtered.length === 1 ? 'Photo' : 'Photos'}
            </span>
          </div>
        </div>
      </section>

      {/* ── Lightbox ── */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
            onClick={() => setLightbox(null)}
            style={{ backgroundColor: 'rgba(10, 22, 16, 0.92)' }}
          >
            <button
              onClick={() => setLightbox(null)}
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors z-10"
            >
              <X size={28} strokeWidth={1.5} />
            </button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              src={lightbox.src}
              alt={lightbox.alt}
              className="max-w-full max-h-[85vh] object-contain rounded-sm"
              onClick={e => e.stopPropagation()}
            />
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-white/70 text-sm font-light tracking-wide text-center max-w-lg"
              >
                {lightbox.alt}
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ── CTA ── */}
      <CTASection
        title="See it in Person"
        description="Photographs capture moments, but visits capture the soul. We invite you to walk our fields."
        primaryAction={{ text: "Plan a Visit", link: "/visit" }}
      />
    </div>
  );
}
