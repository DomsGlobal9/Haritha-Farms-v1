import React, { useState } from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { CTASection } from '../components/ui/CTASection';

import {
  // Farm & Landscape
  heroBirdImage as imgHeroBird,
  heroImage as imgHeroOld,
  philosophyImage as imgPhilosophy,
  handsSoilImage as imgHandsSoil,
  soilImage as imgSoil,
  farmLandscapeImage as imgFarmLandscape,
  cropFieldImage as imgCropField,
  farmGrassImage as imgFarmGrass,
  farmAerialImage as imgFarmAerial,
  naturalGrazingImage as imgNaturalGrazing,
  fodderImage as imgFodder,
  // Chicken / Hen
  chickenHeroImage as imgChickenHero,
  henCardImage as imgHenCard,
  roosterImage as imgRooster,
  countryChickenImage as imgCountryChicken,
  chickenPractice1 as imgPractice1,
  chickenPractice2 as imgPractice2,
  chickenPractice3 as imgPractice3,
  chickenPractice4 as imgPractice4,
  chickenPractice5 as imgPractice5,
  chickenPractice6 as imgPractice6,
  antibioticFreeChickenImage as imgAntibioticFree,
  stressFreeChickenImage as imgStressFree,
  cleanWaterChickenImage as imgCleanWater,
  ethicalSustainableImage as imgEthical,
  whyHarithaChickenImage as imgWhyHaritha,
  diaryChickenFlockImage as imgDiaryFlock,
  diaryChickenGrassImage as imgDiaryGrass,
  diaryChickenNestImage as imgDiaryNest,
  chickenFeedImage as imgChickenFeed,
  chickenFarmImage as imgChickenFarm,
  freeRangePoultryImage as imgFreeRangePoultry,
  // Sheep
  sheepHeroImage as imgSheepHero,
  sheepCardImage as imgSheepCard,
  sheepAboutImage as imgSheepAbout,
  sheepGrazingImage as imgSheepGrazing,
  goatsImage as imgGoats,
  sheepFeedImage as imgSheepFeed,
  // Fish
  fishCardImage as imgFishCard,
  murrelDetailImage as imgMurrelDetail,
  murrelAboutImage as imgMurrelAbout,
  murrelFarmsImage as imgMurrelFarms,
  murrelFeedImage as imgMurrelFeed,
  fishHeroImage as imgFishHero,
} from '../../assets';

// ── Gallery Data ──
type Category = 'all' | 'farm' | 'chicken' | 'sheep' | 'fish';

interface GalleryItem {
  src: string;
  alt: string;
  category: Category;
}

const galleryItems: GalleryItem[] = [
  // Farm & Landscape
  { src: imgHeroBird, alt: "Bird perched on crops at sunrise — Haritha Farms", category: "farm" },
  { src: imgFarmLandscape, alt: "Panoramic view of Haritha Farms", category: "farm" },
  { src: imgFarmAerial, alt: "Aerial view of farm fields", category: "farm" },
  { src: imgCropField, alt: "Organic crop field at Haritha Farms", category: "farm" },
  { src: imgFarmGrass, alt: "Fresh green grass on farm pastures", category: "farm" },
  { src: imgNaturalGrazing, alt: "Natural grazing land and soil", category: "farm" },
  { src: imgPhilosophy, alt: "Our farming philosophy — clean and honest", category: "farm" },
  { src: imgHandsSoil, alt: "Hands nurturing rich organic soil", category: "farm" },
  { src: imgSoil, alt: "Healthy soil — foundation of clean farming", category: "farm" },
  { src: imgFodder, alt: "Organic fodder grown on-farm", category: "farm" },
  { src: imgHeroOld, alt: "Haritha Farms fields — green pastures", category: "farm" },

  // Chicken / Hen
  { src: imgChickenHero, alt: "Country rooster — free-range at Haritha Farms", category: "chicken" },
  { src: imgRooster, alt: "Rooster portrait — natural rearing", category: "chicken" },
  { src: imgHenCard, alt: "Free-range country hen", category: "chicken" },
  { src: imgCountryChicken, alt: "Country chicken (Natu Kodi)", category: "chicken" },
  { src: imgDiaryFlock, alt: "Flock of chickens on open pasture", category: "chicken" },
  { src: imgDiaryGrass, alt: "White chicken foraging in green grass", category: "chicken" },
  { src: imgDiaryNest, alt: "Black hen with egg in woven basket", category: "chicken" },
  { src: imgFreeRangePoultry, alt: "Free-range poultry in natural environment", category: "chicken" },
  { src: imgChickenFarm, alt: "Daily life at the chicken farm", category: "chicken" },
  { src: imgAntibioticFree, alt: "Antibiotic & hormone-free rearing", category: "chicken" },
  { src: imgStressFree, alt: "Stress-free environment for poultry", category: "chicken" },
  { src: imgCleanWater, alt: "Clean water & natural immunity support", category: "chicken" },
  { src: imgEthical, alt: "Ethical & sustainable poultry care", category: "chicken" },
  { src: imgWhyHaritha, alt: "Why Haritha Chicken — golden-lit hen", category: "chicken" },
  { src: imgPractice1, alt: "Chicken rearing practice — antibiotic-free", category: "chicken" },
  { src: imgPractice2, alt: "Chicken rearing practice — stress-free", category: "chicken" },
  { src: imgPractice3, alt: "Chicken rearing practice — natural feed", category: "chicken" },
  { src: imgPractice4, alt: "Chicken rearing practice — clean water", category: "chicken" },
  { src: imgPractice5, alt: "Chicken rearing practice — ethical care", category: "chicken" },
  { src: imgPractice6, alt: "Chicken rearing practice — why Haritha", category: "chicken" },
  { src: imgChickenFeed, alt: "Organic chicken feed — farm-grown grains", category: "chicken" },

  // Sheep
  { src: imgSheepHero, alt: "Sheep flock grazing on green pastures", category: "sheep" },
  { src: imgSheepCard, alt: "Sheep & lamb — pasture-raised", category: "sheep" },
  { src: imgSheepAbout, alt: "Sheep portrait — natural wool and rearing", category: "sheep" },
  { src: imgSheepGrazing, alt: "Sheep grazing on open farmland", category: "sheep" },
  { src: imgGoats, alt: "Goats on Haritha Farms pastures", category: "sheep" },
  { src: imgSheepFeed, alt: "Organic sheep feed and nutrition", category: "sheep" },

  // Fish
  { src: imgFishHero, alt: "Murrel fish in natural pond — Haritha Farms aquaculture", category: "fish" },
  { src: imgFishCard, alt: "Murrel fish — clean aquaculture", category: "fish" },
  { src: imgMurrelDetail, alt: "Murrel fish close-up — firm and clean", category: "fish" },
  { src: imgMurrelAbout, alt: "Murrel snakehead — natural pond rearing", category: "fish" },
  { src: imgMurrelFarms, alt: "Murrel fish farming — balanced ponds", category: "fish" },
  { src: imgMurrelFeed, alt: "Fish feed — natural aquaculture nutrition", category: "fish" },
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
      <section className="sticky top-[72px] z-30 border-b border-border/30" style={{ backgroundColor: 'rgba(242, 240, 233, 0.92)', backdropFilter: 'blur(12px)' }}>
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
