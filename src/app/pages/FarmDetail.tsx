import React, { useRef, useState } from 'react';
import { useParams, Link } from 'react-router';
import { motion, useScroll, useTransform } from 'motion/react';
import { FadeIn } from '../components/ui/fade-in';
import { Button } from '../components/ui/button';
import { ArrowLeft, ArrowRight, Sprout, Wheat, Droplets, Stethoscope, Heart, Award, CheckCircle2, ChevronDown } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';
import Sheep from '../../imports/Sheep';


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













import {
  murrelDetailImage as murrelFishImage,
  sheepGrazingImage,
  cropFieldImage,
  roosterImage,
  sheepHeroImage as heroFarmImage,
  chickenPractice1 as practiceImage1,
  chickenPractice2 as practiceImage2,
  chickenPractice3 as practiceImage3,
  chickenPractice4 as practiceImage4,
  chickenPractice5 as practiceImage5,
  chickenPractice6 as practiceImage6,
  chickenFeedImage,
  naturalGrazingImage,
  antibioticFreeChickenImage,
  stressFreeChickenImage,
  cleanWaterChickenImage,
  ethicalSustainableImage,
  whyHarithaChickenImage,
  diaryChickenFlockImage as diaryChickenFlock,
  diaryChickenGrassImage as diaryChickenGrass,
  diaryChickenNestImage as diaryChickenNest,
  chickenHeroImage,
  fishHeroImage,
  murrelFeedImage,
} from '../../assets';

// --- Data ---
const farmData: any = {
  sheep: {
    title: "Sheep Farming",
    heroImage: sheepFarmingMain,
    intro: "Pasture-Raised Sheep & Lamb — Pure Taste, Honest Farming. Every day begins on open pastures. Sheep and lambs grazing slowly, sunlight on clean greens, calm care in every routine. No hormones. No artificial growth promoters. Just natural grazing, organic fodder, and ethical rearing that respects the animal and the land.",
    anatomyImage: { sheepFarmingMain },
    product: {
      headline: "Sheep Meat (Mutton & Lamb) — Pasture-Raised & Hormone-Free",
      description: "Discover lamb and mutton that taste the way nature intended. Our flock is pasture-raised, hormone-free, and nurtured on organically grown fodder, producing meat that's clean, nutrient-dense, and full of authentic character.",
      whyDifferent: [
        "True pasture-raised for deeper, natural flavour",
        "Hormone-free rearing — zero artificial growth promoters",
        "Organic fodder for clean, balanced nutrition",
        "Naturally tender texture ideal for quick-cook lamb and slow-cook mutton"
      ],
      perfectFor: [
        { label: "Slow-cooked mutton curries & gravies", image: "https://images.unsplash.com/photo-1708782340377-882559d544fb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbG93JTIwY29va2VkJTIwbGFtYiUyMGN1cnJ5JTIwZ3JhdnklMjBib3dsfGVufDF8fHx8MTc3MjQzMjE2N3ww&ixlib=rb-4.1.0&q=80&w=1080" },
        { label: "Classic mutton biryani", image: "https://images.unsplash.com/photo-1752162958264-22f6f5aecd96?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtdXR0b24lMjBiaXJ5YW5pJTIwSW5kaWFuJTIwdHJhZGl0aW9uYWwlMjBkaXNofGVufDF8fHx8MTc3MjQzMjE2NHww&ixlib=rb-4.1.0&q=80&w=1080" },
        { label: "Lamb chops, grills, roasts & festive menus", image: "https://images.unsplash.com/photo-1720569594980-0b7a5450d989?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYW1iJTIwbWVhdCUyMGN1dHMlMjBwbGF0dGVyJTIwcnVzdGljJTIwZGFyayUyMHdvb2R8ZW58MXx8fHwxNzcyNDMyMTYzfDA&ixlib=rb-4.1.0&q=80&w=1080" }
      ],
      whatYouGet: [
        "Traceable, responsibly raised lamb and mutton",
        "Consistent quality and clean taste",
        "Farming you can trust, from pasture to plate"
      ],
      microCta: "Ready to order? Experience pasture-raised, hormone-free lamb and mutton with authentic flavour.",
      sectionTitle: { plain: "Pasture-Raised", highlight: "Lamb & Mutton" },
      whatsappMsg: "Hi%2C%20I%27d%20like%20to%20check%20today%27s%20lamb%20%26%20mutton%20availability"
    },
    anatomy: [
      {
        label: "Nutrition", title: "Wild Forage Diet",
        desc: "Grazing on diverse medicinal herbs creates a complex, robust flavor profile that grain-fed sheep lack."
      },
      {
        label: "Constitution", title: "Active Muscle",
        desc: "Constant movement oxygenates the blood, resulting in lean, textured meat with healthy iron levels."
      },
      {
        label: "Environment", title: "Zero Stress",
        desc: "Gentle handling prevents cortisol spikes, ensuring the meat remains tender and free from hormonal toughening."
      },
      {
        label: "Composition", title: "Healthy Fats",
        desc: "Natural growth develops rich Omega-3 fatty acids instead of the unhealthy saturated fats found in factory farming."
      }
    ],
    practices: {
      title: "Our Sheep Farming Practices",
      subtitle: "Naturally Raised. Nutritionally Superior. Ethically Farmed.",
      description: "At Haritha Farms, sheep farming is not just about production — it’s about raising healthier animals that produce cleaner, safer, and more nutritious meat. Our practices are deeply rooted in natural grazing, balanced nutrition, animal welfare, and chemical-free care.",
      items: [
        {
          title: "Natural & Free-Range Grazing",
          icon: Sprout,
          image: naturalRange,
          content: (
            <div className="space-y-4">
              <p>Our sheep are free-range raised, allowing them to graze naturally on open pastures instead of being confined.</p>
              <div className="bg-[#FDFCF8] border border-[#C5A059]/20 p-4 rounded-sm">
                <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Benefits:</strong>
                <ul className="space-y-2">
                  {[
                    "Improves muscle development and meat texture",
                    "Enhances natural fat balance",
                    "Reduces stress, leading to better meat quality"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-1">Free movement and fresh air directly impact the taste, tenderness, and nutritional value of the meat.</p>
            </div>
          )
        },
        {
          title: "Clean & Balanced Nutrition",
          icon: Wheat,
          image: cleanBalanced,
          content: (
            <div className="space-y-4">
              <p>We follow a natural feeding system, combining native grasses, green fodder, and farm-grown feed free from harmful chemicals.</p>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-[#0A1610]/5 p-3 rounded-sm">
                  <strong className="block text-[#0A1610] text-xs font-bold uppercase tracking-widest mb-2">We Use</strong>
                  <ul className="text-sm space-y-1 text-muted-foreground">
                    <li>• Native grasses & green fodder</li>
                    <li>• Farm-grown chemical-free feed</li>
                    <li>• Seasonal nutritional planning</li>
                  </ul>
                </div>
                <div className="bg-red-50 p-3 rounded-sm border border-red-100">
                  <strong className="block text-red-800 text-xs font-bold uppercase tracking-widest mb-2">We Avoid</strong>
                  <ul className="text-sm space-y-1 text-red-900/70">
                    <li>🚫 No artificial growth boosters</li>
                    <li>🚫 No synthetic feed enhancers</li>
                  </ul>
                </div>
              </div>
              <div className="pt-2">
                <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Result:</strong>
                <div className="flex flex-wrap gap-2">
                  {["Higher Protein", "Lower Unhealthy Fat", "Rich in Minerals"].map((tag, i) => (
                    <span key={i} className="bg-[#C5A059]/10 text-[#0A1610] text-[10px] font-bold px-2 py-1 uppercase tracking-wider rounded-sm">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Pure Water & Hygiene",
          icon: Droplets,
          image: pureWater,
          content: (
            <div className="space-y-4">
              <p>Clean water and hygienic shelters are non-negotiable at Haritha Farms.</p>
              <ul className="space-y-2">
                {[
                  "Fresh water supplied daily",
                  "Regular cleaning of shelters",
                  "Proper ventilation and space per animal"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#C5A059]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#0A1610]">A clean environment means lower disease risk and healthier livestock.</p>
            </div>
          )
        },
        {
          title: "Preventive Health Care",
          icon: Stethoscope,
          image: preventHealth,
          content: (
            <div className="space-y-4">
              <p>Instead of excessive medication, we focus on preventive and natural health management.</p>
              <div className="bg-[#FDFCF8] border border-[#0A1610]/10 p-4">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Regular Checkups</strong>
                      <span className="text-muted-foreground">Routine veterinary visits.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Natural Immunity</strong>
                      <span className="text-muted-foreground">Supplements to build resistance.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Responsible Care</strong>
                      <span className="text-muted-foreground">Minimal medicine use.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-sm italic text-[#C5A059]">Ensures meat free from unnecessary antibiotic residues.</p>
            </div>
          )
        },
        {
          title: "Stress-Free Handling",
          icon: Heart,
          image: stressfree,
          content: (
            <div className="space-y-4">
              <p>Stress affects meat quality. Our sheep are handled with care, patience, and respect at every stage.</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🌤️</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">No Overcrowding</span>
                </div>
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🤲</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Gentle Handling</span>
                </div>
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🤫</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Low Noise</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#0A1610]">Stress-free animals produce tender, better-tasting meat.</p>
            </div>
          )
        },
        {
          title: "The Result",
          icon: Award,
          image: TheResultGoat,
          content: (
            <div className="space-y-4">
              <p className="font-serif text-lg text-[#0A1610]">Healthier, Cleaner & Tastier Meat.</p>
              <p className="text-sm text-muted-foreground">Because of our practices, Haritha Farms sheep meat is:</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Naturally Tender",
                  "Rich in Protein",
                  "Chemical Free",
                  "Safe for Families"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center p-3 bg-[#C5A059] text-[#0A1610] text-xs font-bold uppercase tracking-wider text-center">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-center font-serif italic text-[#0A1610] pt-2">From pasture to plate — every step is thoughtfully managed.</p>
            </div>
          )
        }
      ]
    },
    culinary: {
      subtitle: "Real Farming, Real Purity",
      titleStart: "Taste the",
      titleHighlight: "Difference.",
      description: "Tender, richly flavored lamb and mutton with a clean finish — food you feel proud to serve and confident to share. Because purity, ethics, and flavour belong together.",
      cta: "Order Farm Fresh"
    },
    faqs: [
      {
        q: "What makes Haritha Farms Lamb and Mutton different?",
        a: "Our lamb and sheep are pasture-raised, hormone-free, and naturally grown, resulting in meat with deeper flavour, cleaner nutrition, and superior texture. We rely on organic fodder grown on our own land, ensuring purity from pasture to plate."
      },
      {
        q: "Is your lamb and mutton completely hormone-free?",
        a: "Yes. We never use hormones or artificial growth promoters. Our animals grow naturally, through open grazing, stress-free environments, and clean feed — ensuring pure, safe, and honest meat for your family."
      },
      {
        q: "What do your sheep and lamb eat?",
        a: "They graze freely on organic grasses, legumes, and leafy greens grown on our own farmland. No pesticides, no treated seeds, no synthetic feed — just clean, natural nutrition that builds healthier animals and tastier meat."
      },
      {
        q: "Is lamb more tender than mutton?",
        a: "Yes. Lamb comes from younger animals, making it naturally more tender and ideal for grilling, roasting, and quick-cook dishes. Mutton has a richer, deeper flavour perfect for curries, biryanis, and slow-cooked recipes. We offer both — raised naturally for clean, authentic taste."
      },
      {
        q: "Does pasture-raised mutton taste better?",
        a: "Absolutely. Natural grazing and slow growth develop layered flavour, firmer texture, and better aroma. Pasture-raised mutton carries the authenticity that commercial, fast-grown livestock cannot match."
      },
      {
        q: "Is Haritha Farms lamb safe for kids and elders?",
        a: "Yes. Our lamb and mutton are hormone-free, naturally raised, and free from artificial additives — making them a healthier choice for children, elders, and anyone seeking clean, nutritious meat."
      },
      {
        q: "Is your lamb and mutton fresh or frozen?",
        a: "We supply freshly processed lamb and mutton, harvested and packed with minimal time between farm and customer. This preserves natural flavour, tenderness, and aroma."
      },
      {
        q: "Do you accept bulk orders for lamb or mutton?",
        a: "Yes, we accept bulk and wholesale requests. For bulk orders of lamb or mutton, please reach us via our contact page or WhatsApp."
      },
      {
        q: "What cuts of lamb/mutton do you offer?",
        a: "We offer a variety of cuts including curry cut, biryani cut, chops, ribs, shoulder, leg pieces, and premium lamb cuts. Custom cuts are available on request."
      },
      {
        q: "How do you ensure the quality and safety of your lamb and mutton?",
        a: "Quality begins at the pasture — open grazing, natural growth, organic fodder, ethical treatment, and careful handling. Every step is designed to ensure premium-grade, safe, traceable meat."
      }
    ],
    ctaText: "Visit Our Farm"
  },
  hen: {
    title: "Country Hen Farming",
    heroImage: CountryHenFarming,
    intro: "Experience chicken the way it was always meant to be. Haritha Farms' country chicken (Natu Kodi) is raised free-range, allowed to roam naturally, and nurtured with organic, farm-grown fodder. No hormones, no artificial growth promoters — just slow, natural growth that produces genuinely clean meat with unmatched flavour.",
    anatomyImage: roosterImage,
    product: {
      headline: "Country Chicken (Natu Kodi) — Free-Range, Hormone-Free, Naturally Raised",
      description: "Each bird grows at its own natural pace, resulting in meat that is leaner, richer, and far more nutritious — an ideal choice for families seeking true country chicken.",
      whyDifferent: [
        "Free-range & naturally active, building real muscle and depth of flavour",
        "100% hormone-free rearing, with zero artificial interventions",
        "Organic fodder diet, grown on our own farmland",
        "Superior texture compared to commercial broiler chicken",
        "Authentic desi taste rooted in natural movement and sunlight"
      ],
      perfectFor: [
        { label: "Traditional Natu Kodi pulusu (country chicken curry)", image: "https://images.unsplash.com/photo-1764304733301-3a9f335f0c67?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3VudHJ5JTIwY2hpY2tlbiUyMGN1cnJ5JTIwSW5kaWFuJTIwdHJhZGl0aW9uYWwlMjBib3dsfGVufDF8fHx8MTc3MjQzMzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
        { label: "Grilled or roasted desi chicken dishes", image: "https://images.unsplash.com/photo-1753775290395-09e3cb0b6f70?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmlsbGVkJTIwcm9hc3RlZCUyMHdob2xlJTIwY2hpY2tlbiUyMHJ1c3RpYyUyMHBsYXRlfGVufDF8fHx8MTc3MjQzMzM4M3ww&ixlib=rb-4.1.0&q=80&w=1080" },
        { label: "High-protein, clean-eating & authentic Telangana recipes", image: "https://images.unsplash.com/photo-1736680056361-6a2f6e35fa50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxJbmRpYW4lMjBob21lJTIwY29va2VkJTIwY2hpY2tlbiUyMHNwaWNlcyUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc3MjQzMzM4NXww&ixlib=rb-4.1.0&q=80&w=1080" }
      ],
      whatYouGet: [
        "Traceable, responsibly raised country chicken / Natu Kodi",
        "Clean, pure meat with deep natural flavour",
        "Farming built on ethics, transparency, and respect"
      ],
      microCta: "Choose Haritha Farms Country Chicken — a return to purity, honesty, and real taste.",
      sectionTitle: { plain: "Free-Range", highlight: "Country Chicken" },
      whatsappMsg: "Hi%2C%20I%27d%20like%20to%20check%20today%27s%20country%20chicken%20availability"
    },
    anatomyImage: ChickenNew,
    anatomy: [
      {
        label: "Nutrition", title: "Natural Foraging",
        desc: "Pecking at seeds, insects, and greens ensures a diet rich in natural proteins and essential vitamins."
      },
      {
        label: "Constitution", title: "Natural Growth",
        desc: "Slow, unhurried growth develops firm, textured meat distinct from soft, water-filled commercial broiler meat."
      },
      {
        label: "Environment", title: "Sun & Soil",
        desc: "Daily exposure to sunlight promotes natural Vitamin D synthesis and healthy bone development."
      },
      {
        label: "Composition", title: "Rich Flavor",
        desc: "The active lifestyle and varied diet result in meat with a deeper, more savory flavor profile and superior broth quality."
      }
    ],
    practices: {
      title: "Healthy & Ethical Chicken Farming",
      subtitle: "Naturally raised, antibiotic-free chicken for healthier meals.",
      description: "At Haritha Farms, our chicken farming practices are designed to deliver nutritious, clean, and naturally grown meat while ensuring the highest standards of animal welfare and sustainability.",
      items: [
        {
          title: "Natural Feed & Nutrition",
          icon: Wheat,
          image: naturalFeed,
          content: (
            <div className="space-y-4">
              <p>Our chickens are fed a carefully formulated natural diet rich in grains, plant proteins, and essential minerals.</p>
              <div className="bg-[#FDFCF8] border border-[#C5A059]/20 p-4 rounded-sm">
                <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Standards:</strong>
                <ul className="space-y-2">
                  {[
                    "No harmful growth boosters",
                    "No artificial fat enhancers",
                    "Feed supports lean muscle growth"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-1">This results in protein-rich, low-fat, and better-tasting meat.</p>
            </div>
          )
        },


        //   import CountryHenFarming from '../../assets/images/country-hen-farming.jpg';
        // import naturalFeed from '../../assets/images/natural-feed.jpg';
        // import AntibioticHormone from '../../assets/images/antibiotic-harmone.jpg';
        // import stressFreeEnvironment from '../../assets/images/environment.jpg';
        // import cleanWaterImmunity from '../../assets/images/clean-water-immunity.jpg';
        // import EthicalSustainability from '../../assets/images/ethical-sustainbility.jpg';
        // import WhyHarithaChicken from '../../assets/images/why-haritha.jpg';
        // import VisualDiary from '../../assets/images/visiual-diary.jpg';
        {
          title: "Antibiotic & Hormone-Free",
          icon: Stethoscope,
          image: AntibioticHormone,
          content: (
            <div className="space-y-4">
              <p>We follow strict antibiotic-free and hormone-free farming practices.</p>
              <ul className="space-y-2">
                {[
                  "Antibiotics avoided unless medically required",
                  "No growth hormones at any stage",
                  "Preventive health through nutrition"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#C5A059]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#0A1610]">This ensures safer meat with no chemical residues.</p>
            </div>
          )
        },
        {
          title: "Stress-Free Environment",
          icon: Heart,
          image: stressFreeEnvironment,
          content: (
            <div className="space-y-4">
              <p>Healthy chickens grow in a clean, well-ventilated, low-stress environment.</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🏠</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Spacious</span>
                </div>
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🧼</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Sanitized</span>
                </div>
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🌬️</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Airflow</span>
                </div>
              </div>
              <p className="text-sm font-medium text-[#0A1610]">Reduced stress leads to better meat texture.</p>
            </div>
          )
        },
        {
          title: "Clean Water & Immunity",
          icon: Droplets,
          image: cleanWaterImmunity,
          content: (
            <div className="space-y-4">
              <p>We provide filtered, clean drinking water at all times.</p>
              <div className="bg-[#FDFCF8] border border-[#0A1610]/10 p-4">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Natural Supplements</strong>
                      <span className="text-muted-foreground">Improve digestion.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Herbal Boosters</strong>
                      <span className="text-muted-foreground">Reduce disease risk.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-sm italic text-[#C5A059]">Strengthens natural resistance without chemicals.</p>
            </div>
          )
        },
        {
          title: "Ethical & Sustainable",
          icon: Sprout,
          image: EthicalSustainability,
          content: (
            <div className="space-y-4">
              <p>Our poultry practices align with ethical and eco-friendly farming principles.</p>
              <ul className="space-y-2">
                {[
                  "Responsible waste management",
                  "Minimal environmental impact",
                  "Respect for animal welfare"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#C5A059]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#0A1610]">Sustainability ensures consistent quality.</p>
            </div>
          )
        },
        {
          title: "Why Haritha Chicken?",
          icon: Award,
          image: WhyHarithaChicken,
          content: (
            <div className="space-y-4">
              <p className="font-serif text-lg text-[#0A1610]">Healthier, Safer & Tastier.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "High Protein",
                  "No Antibiotics",
                  "Naturally Tender",
                  "Farm Fresh"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center p-3 bg-[#C5A059] text-[#0A1610] text-xs font-bold uppercase tracking-wider text-center">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-center font-serif italic text-[#0A1610] pt-2">Safe for families and children.</p>
            </div>
          )
        }
      ]
    },
    culinary: {
      subtitle: "Authentic Natu Kodi",
      titleStart: "Real",
      titleHighlight: "Country Flavor.",
      description: "Firm texture, distinct aroma, and nutrition that only comes from free-range living. Haritha Farms Country Chicken — real farming, real purity, real taste.",
      cta: "Order Country Chicken"
    },
    faqs: [
      {
        q: "What makes Haritha Farms Country Chicken (Natu Kodi) different from regular chicken?",
        a: "Our country chicken is free-range, naturally active, and 100% hormone-free, resulting in richer flavour, firmer texture, and higher nutrition than commercial broiler chicken. Birds grow at their natural pace and are nourished with organic, farm-grown fodder."
      },
      {
        q: "Is your country chicken completely hormone-free?",
        a: "Yes. We never use hormones or artificial growth promoters. Natu Kodi grows naturally with outdoor movement, sunlight, and clean nutrition — delivering pure, honest meat."
      },
      {
        q: "What do your country chickens eat?",
        a: "They forage freely and are supplemented with organically grown fodder from our farm — natural greens, grains, and farm-grown nutrition with no treated seeds or synthetic additives."
      },
      {
        q: "Does country chicken taste different from broiler chicken?",
        a: "Absolutely. Slow growth and natural activity create deeper flavour, firmer bite, richer aroma, and better nutrient density — ideal for traditional curries and slow-cooked dishes."
      },
      {
        q: "Is Haritha Farms Country Chicken suitable for kids and elders?",
        a: "Yes. Our hormone-free, naturally raised country chicken is valued for being clean and nutrient-dense, making it a family-friendly choice."
      },
      {
        q: "Do you accept bulk or wholesale orders for country chicken?",
        a: "Yes. For bulk country chicken / Natu Kodi orders, please reach us via our contact page or WhatsApp."
      },
      {
        q: "Is your country chicken fresh or frozen?",
        a: "We supply freshly processed country chicken with minimal time from farm to customer, preserving flavour, nutrition, and aroma."
      },
      {
        q: "How do you ensure quality and safety?",
        a: "Quality begins at the farm — free-range movement, organic nutrition, clean handling, and ethical rearing. We maintain transparent processes for consistent, premium quality."
      }
    ],
    ctaText: "Enquire Now"
  },
  fish: {
    title: "Fish Farming",
    heroImage: FishFarmingMain,
    intro: "Murrel Fish — Raised by Water. Perfected by Patience. Some foods don't need persuasion — only the right environment. Our murrel fish grow in carefully balanced ponds that mirror nature. No hormones. No antibiotics. No artificial growth promoters. Just clean water, natural nutrition, and attentive care. The result is firm, clean-tasting murrel with authentic character — the kind you can trust for family meals and signature recipes alike.",
    product: {
      headline: "Murrel Fish (Snakehead / Jungle Fish) — Naturally Raised, Hormone-Free",
      description: "Discover murrel the way it's meant to be. Haritha Farms murrel fish are nurtured in nature-mimicking ponds where water quality, habitat balance, and natural feeding rhythms come first. We use no hormones, no antibiotics, and no artificial growth promoters, ensuring clean, firm-textured fish with a pure, mild flavour.",
      whyDifferent: [
        "Hormone-free rearing — zero artificial growth promoters",
        "Antibiotic-free — clean water practices and attentive pond care",
        "Nature-balanced ponds — habitat that supports healthy growth and texture",
        "Consistent, clean flavour that stands out in home cooking and restaurant menus"
      ],
      perfectFor: [
        { label: "Classic murrel fish curry and pepper fry", image: "https://images.unsplash.com/photo-1620894580123-466ad3a0ca06?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
        { label: "Steamed or pan-seared fillets for clean eating", image: "https://images.unsplash.com/photo-1602022131768-033a8796e78d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYW4lMjBzZWFyZWQlMjBmaXNoJTIwZmlsbGV0JTIwY2xlYW4lMjBwbGF0ZXxlbnwxfHx8fDE3NzI0MzQ0Njd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
        { label: "Grills, tandoor, and slow poaching for delicate texture", image: Tandoori }
      ],
      whatYouGet: [
        "Traceable, responsibly raised murrel fish",
        "Naturally firm bite and authentic flavour",
        "Ethical, transparent aquaculture you can trust"
      ],
      microCta: "Ready to order? Experience hormone-free, antibiotic-free murrel with clean flavour and firm texture.",
      sectionTitle: { plain: "Naturally Raised", highlight: "Murrel Fish" },
      whatsappMsg: "Hi%2C%20I%27d%20like%20to%20order%20Murrel%20Fish"
    },
    anatomyImage: FishSVG,
    anatomy: [
      {
        label: "Nutrition", title: "Clean Diet",
        desc: "Fed on plant-based organic feed and natural pond organisms, free from synthetic additives or waste products."
      },
      {
        label: "Constitution", title: "Active Swimmers",
        desc: "Ample swimming space builds healthy muscle tone and firm texture, unlike crowded tank-raised fish."
      },
      {
        label: "Environment", title: "Living Water",
        desc: "Oxygen-rich, chemically untreated water mimics their natural river habitat, preventing disease naturally."
      },
      {
        label: "Composition", title: "Purity",
        desc: "Free from heavy metals and muddy tastes often found in stagnant water farming. Clean, sweet, and healthy."
      }
    ],
    practices: {
      title: "Murrel Fish Farming",
      subtitle: "Naturally Raised. Nutritionally Superior. Responsibly Farmed.",
      description: "At Haritha Farms, we practice traditional yet scientifically guided Murrel (Korameenu) fish farming that prioritizes fish health, natural growth, and superior meat quality. Murrel fish is known for its high medicinal value, lean protein, and easy digestibility—especially beneficial for children, elders, and recovering patients.",
      items: [
        {
          title: "Natural Pond Ecosystem",
          icon: Droplets,
          image: NewNaturalEcoSystem,
          content: (
            <div className="space-y-4">
              <p>We raise Murrel fish in freshwater earthen ponds that closely mimic their natural habitat.</p>
              <div className="bg-[#FDFCF8] border border-[#C5A059]/20 p-4 rounded-sm">
                <strong className="block text-[#0A1610] font-serif mb-2 text-sm">Our Methods:</strong>
                <ul className="space-y-2">
                  {[
                    "Clean, mineral-rich water",
                    "Controlled stocking density to avoid stress",
                    "Regular water quality monitoring"
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#C5A059] flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <p className="text-sm italic text-[#C5A059] border-l-2 border-[#C5A059] pl-3 py-1">Allows fish to grow naturally, improving muscle strength and meat quality.</p>
            </div>
          )
        },
        {
          title: "Chemical & Antibiotic-Free",
          icon: Stethoscope,
          image: FishFarmingPesticides,
          content: (
            <div className="space-y-4">
              <p>We follow zero-antibiotic and zero-hormone practices.</p>
              <ul className="space-y-2">
                {[
                  "No growth enhancers",
                  "No harmful chemicals",
                  "No artificial color or feed boosters"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#C5A059]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#0A1610]">Healthy fish grow at their own pace, producing safe, residue-free meat.</p>
            </div>
          )
        },
        {
          title: "Natural & Protein-Rich Feed",
          icon: Wheat,
          image: RichFeed,
          content: (
            <div className="space-y-4">
              <p>Our Murrel fish are fed with a balanced natural diet, including high-quality protein sources and natural ingredients.</p>
              <div className="grid grid-cols-3 gap-2 text-center">
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">🐟</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Omega-3</span>
                </div>
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">💪</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Lean Meat</span>
                </div>
                <div className="bg-[#0A1610]/5 p-2 rounded-sm">
                  <span className="block text-xl mb-1">😋</span>
                  <span className="text-[10px] uppercase font-bold text-[#0A1610]">Better Taste</span>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "Stress-Free Environment",
          icon: Heart,
          image: NaturalPond,
          content: (
            <div className="space-y-4">
              <p>Stress directly affects fish health and meat quality. At Haritha Farms, ponds are not overcrowded and handling is minimal.</p>
              <div className="bg-[#FDFCF8] border border-[#0A1610]/10 p-4">
                <ul className="space-y-3">
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Low Stress</strong>
                      <span className="text-muted-foreground">Stronger immunity.</span>
                    </div>
                  </li>
                  <li className="flex gap-3">
                    <div className="w-1.5 h-1.5 bg-[#C5A059] rounded-full mt-2" />
                    <div className="text-sm">
                      <strong className="block text-[#0A1610]">Careful Harvest</strong>
                      <span className="text-muted-foreground">Better digestion.</span>
                    </div>
                  </li>
                </ul>
              </div>
              <p className="text-sm italic text-[#C5A059]">Low stress means healthier meat.</p>
            </div>
          )
        },
        {
          title: "Slow & Healthy Growth",
          icon: Sprout,
          image: FishFarmingMain,
          content: (
            <div className="space-y-4">
              <p>Unlike fast commercial farming, we allow Murrel fish to grow slowly and naturally.</p>
              <ul className="space-y-2">
                {[
                  "Firmer flesh",
                  "Higher protein content",
                  "Better nutrient absorption"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 size={14} className="text-[#C5A059]" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-sm font-medium text-[#0A1610]">Natural growth = better medicinal value.</p>
            </div>
          )
        },
        {
          title: "Why Haritha Murrel Fish?",
          icon: Award,
          image: InsideWater,
          content: (
            <div className="space-y-4">
              <p className="font-serif text-lg text-[#0A1610]">Healthier, Safer & Tastier.</p>
              <div className="grid grid-cols-2 gap-3">
                {[
                  "Lean Protein",
                  "Essential Amino Acids",
                  "Easily Digestible",
                  "Recovery Diet"
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-center p-3 bg-[#C5A059] text-[#0A1610] text-xs font-bold uppercase tracking-wider text-center">
                    {item}
                  </div>
                ))}
              </div>
              <p className="text-center font-serif italic text-[#0A1610] pt-2">Fully traceable to its pond of origin.</p>
            </div>
          )
        }
      ]
    },
    culinary: {
      subtitle: "Fresh Catch",
      titleStart: "Pure",
      titleHighlight: "Water Harvest.",
      description: "From our pristine ponds to your kitchen. Enjoy fish that tastes of fresh water and nature, harvested responsibly for peak freshness.",
      cta: "Order Fresh Fish"
    },
    faqs: [
      {
        q: "Is Haritha Farms murrel fish hormone-free?",
        a: "Yes. We never use hormones or artificial growth promoters. Our murrel grow at a natural pace in balanced ponds, resulting in clean, firm, great-tasting fish."
      },
      {
        q: "Do you use antibiotics in murrel farming?",
        a: "No. We rely on clean water practices, habitat balance, and attentive care — not antibiotics. This keeps our murrel pure and trustworthy for your family."
      },
      {
        q: "What gives murrel its firm texture and clean taste?",
        a: "The combination of nature-mimicking ponds, natural feeding rhythms, and stress-free growth produces murrel with a naturally firm bite and a clean, mild flavour that adapts well to many cuisines."
      },
      {
        q: "How should I cook murrel for best results?",
        a: "Murrel holds texture beautifully. Try pepper fry, curry, grills, or pan-sear/steam to highlight its clean flavour and firm flesh."
      },
      {
        q: "Do you accept bulk or wholesale orders for murrel fish?",
        a: "Yes. For bulk murrel fish orders, please reach us via our contact page or WhatsApp."
      },
      {
        q: "Is your murrel fresh or frozen?",
        a: "We supply freshly processed murrel with minimal time from pond to pack, preserving flavour, texture, and nutrition."
      }
    ],
    ctaText: "Visit Fish Farm"
  }
};

// --- Components ---

function HeaderTitle({ children, subtitle }: { children: React.ReactNode, subtitle: string }) {
  return (
    <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto">
      <div className="flex items-center gap-4">
        <div className="h-px w-8 bg-[#C5A059]" />
        <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">{subtitle}</span>
        <div className="h-px w-8 bg-[#C5A059]" />
      </div>
      <h2 className="text-4xl md:text-6xl font-serif text-[#0A1610] leading-tight">
        {children}
      </h2>
    </div>
  );
}

function FAQItem({ question, answer, index }: { question: string; answer: string; index: number }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.06, duration: 0.5 }}
      className="border-b border-[#0A1610]/10"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-start justify-between gap-4 py-6 text-left group cursor-pointer"
      >
        <span className="text-[#0A1610] font-serif text-lg pr-4 group-hover:text-[#C5A059] transition-colors">
          {question}
        </span>
        <motion.span
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="mt-1 shrink-0"
        >
          <ChevronDown size={18} className="text-[#C5A059]" />
        </motion.span>
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? "auto" : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-muted-foreground leading-relaxed pl-0 pr-8">
          {answer}
        </p>
      </motion.div>
    </motion.div>
  );
}

export default function FarmDetail() {
  const { type } = useParams();
  const data = farmData[type as keyof typeof farmData];
  const heroRef = useRef(null);

  // Parallax for Hero
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  if (!data) return <div className="pt-32 text-center">Farm not found</div>;

  return (
    <div className="relative bg-[#FDFCF8] min-h-screen">

      {/* --- HERO SECTION --- */}
      <section ref={heroRef} className="relative h-[110vh] w-full overflow-hidden flex items-end justify-center pb-24 pt-28  md:pt-36">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <img
            src={data.heroImage}
            alt={data.title}
            className="w-full h-full object-left"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-black/20 to-transparent opacity-90" />
        </motion.div>

        <div className="container mx-auto px-6 relative z-10 text-center">
          <FadeIn>
            <Link to="/farms" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-white/70 hover:text-[#C5A059] mb-12 transition-colors duration-300 backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full border border-white/10">
              <ArrowLeft size={12} className="mr-3" /> Back to Farms
            </Link>
            <h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-[#F2F0E9] mb-8 leading-[0.9] drop-shadow-lg">
              {data.title.split(' ').map((word: string, i: number) => (
                <span key={i} className="block md:inline mr-4">{word}</span>
              ))}
            </h1>
            <div className="h-1 w-24 bg-[#C5A059] mx-auto mb-8" />
            <p className="text-xl md:text-2xl text-[#F2F0E9]/90 font-light max-w-3xl mx-auto leading-relaxed">
              {data.intro}
            </p>
          </FadeIn>
        </div>
      </section>

      {/* --- CONTENT SECTION --- */}
      <section className="py-24 md:py-32 px-6 bg-[#FDFCF8] relative z-20">
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#0A1610] to-transparent opacity-5 pointer-events-none" />

        <div className="container mx-auto max-w-6xl">

          <div className="space-y-40">
            {/* --- ANATOMY OF QUALITY --- */}
            <FadeIn>
              <HeaderTitle subtitle="Anatomy of Quality">
                Honoring the Life <br />
                <span className="italic text-[#C5A059]">behind the food.</span>
              </HeaderTitle>

              <div className="relative w-full max-w-7xl mx-auto min-h-[700px] hidden md:flex items-center justify-center mt-20">

                {/* Connecting Lines SVG Layer */}
                <svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" viewBox="0 0 1000 600">
                  <defs>
                    <linearGradient id="goldGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="#C5A059" stopOpacity="0.2" />
                      <stop offset="50%" stopColor="#C5A059" stopOpacity="0.8" />
                      <stop offset="100%" stopColor="#C5A059" stopOpacity="0.2" />
                    </linearGradient>
                  </defs>
                  {[
                    { d: "M 200 150 L 420 280", delay: 0, cx: 200, cy: 150 },
                    { d: "M 800 150 L 580 280", delay: 0.2, cx: 800, cy: 150 },
                    { d: "M 200 450 L 420 320", delay: 0.4, cx: 200, cy: 450 },
                    { d: "M 800 450 L 580 320", delay: 0.6, cx: 800, cy: 450 }
                  ].map((line, i) => (
                    <g key={i}>
                      <motion.path
                        d={line.d}
                        fill="none"
                        stroke="url(#goldGradient)"
                        strokeWidth="1.5"
                        initial={{ pathLength: 0 }}
                        whileInView={{ pathLength: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, delay: line.delay, ease: "easeInOut" }}
                      />
                      <circle cx={line.cx} cy={line.cy} r="3" fill="#C5A059" className="animate-pulse" />
                    </g>
                  ))}
                </svg>

                {/* Central Image */}
                <motion.div
                  initial={{ scale: 0.9, opacity: 0, y: 20 }}
                  whileInView={{ scale: 1, opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="relative z-10 w-[500px] h-[500px] drop-shadow-2xl flex items-center justify-center"
                >
                  {type === 'sheep' ? (
                    <Sheep />
                  ) : (
                        <div className="relative w-[500px] h-[500px] flex items-center justify-center">
            <img
              src={data.anatomyImage}
              alt={data.title}
              className="w-full h-full object-contain transform hover:scale-105 transition-transform duration-700"
            />
          </div>
                  )}
                </motion.div>

                {/* Content Nodes */}
                {[
                  { top: "8%", left: "0%", align: "right", delay: 0.5 },
                  { top: "8%", right: "0%", align: "left", delay: 0.7 },
                  { bottom: "12%", left: "0%", align: "right", delay: 0.9 },
                  { bottom: "12%", right: "0%", align: "left", delay: 1.1 }
                ].map((pos: any, i) => {
                  const item = data.anatomy[i];
                  return (
                    <motion.div
                      key={i}
                      className={`absolute w-72 text-${pos.align}`}
                      style={{ top: pos.top, bottom: pos.bottom, left: pos.left, right: pos.right }}
                      initial={{ opacity: 0, x: pos.align === 'left' ? 30 : -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: pos.delay }}
                    >
                      <span className="text-[#C5A059] text-[10px] font-bold tracking-widest uppercase mb-2 block">{i + 1}. {item.label}</span>
                      <h3 className="text-3xl font-serif text-[#0A1610] mb-3">{item.title}</h3>
                      <p className={`text-sm text-muted-foreground leading-relaxed font-light ${pos.align === 'right' ? 'border-r-2 pr-4' : 'border-l-2 pl-4'} border-[#C5A059]/30`}>
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </div>

              {/* Mobile Stack */}
              <div className="md:hidden grid gap-8 mt-12">
                {data.anatomy.map((item: any, i: number) => (
                  <div key={i} className="bg-white p-8 border-l-2 border-[#C5A059] shadow-sm">
                    <span className="text-[#C5A059] text-xs font-bold mb-2 block">0{i + 1}</span>
                    <h3 className="text-2xl font-serif text-[#0A1610] mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-light">{item.desc}</p>
                  </div>
                ))}
              </div>
            </FadeIn>

            {/* --- DETAILED PRACTICES SECTION (Added) --- */}
            {data.practices && (
              <FadeIn>
                <div className="w-full relative">
                  {/* Section Header */}
                  <div className="max-w-7xl mx-auto px-6 mb-12 text-center">
                    <motion.span
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-[#C5A059] text-[10px] font-bold tracking-[0.3em] uppercase block mb-6"
                    >
                      Our Standards
                    </motion.span>
                    <motion.h2
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1 }}
                      className="text-4xl md:text-6xl font-serif text-[#0A1610] mb-8 leading-tight"
                    >
                      {data.practices.title}
                    </motion.h2>
                    <motion.div
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2, duration: 0.8 }}
                      className="w-px h-16 bg-[#C5A059]/30 mx-auto mb-8 origin-top"
                    />
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.3 }}
                      className="text-xl md:text-2xl font-serif italic text-[#0A1610]/80 mb-8 leading-relaxed"
                    >
                      {data.practices.subtitle}
                    </motion.p>
                    <motion.p
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.4 }}
                      className="max-w-3xl mx-auto text-muted-foreground font-light leading-loose text-lg"
                    >
                      {data.practices.description}
                    </motion.p>
                  </div>

                  {/* Stacking Sticky Cards Layout */}
                  <div className="relative">
                    {data.practices.items.map((item: any, i: number) => {
                      // Fallback images mapped to index
                      const images = [
                        practiceImage1,
                        practiceImage2,
                        practiceImage3,
                        practiceImage4,
                        practiceImage5,
                        practiceImage6,
                        cropFieldImage
                      ];

                      return (
                        <div
                          key={i}
                          className="relative md:sticky md:top-0 min-h-screen md:h-screen flex flex-col md:flex-row bg-[#FDFCF8] md:overflow-hidden border-t border-[#0A1610]/5"
                        >
                          {/* Text Side - Alternating Order */}
                          <div className={`flex-1 flex flex-col justify-center p-8 md:p-24 relative z-10 ${i % 2 === 1 ? 'md:order-2' : ''}`}>
                            <motion.div
                              initial={{ opacity: 0, y: 40 }}
                              whileInView={{ opacity: 1, y: 0 }}
                              viewport={{ once: true }}
                              transition={{ duration: 0.8, delay: 0.2 }}
                            >
                              <div className="flex items-center gap-6 mb-8">

                                <div className="p-4 rounded-full bg-[#C5A059]/10 text-[#C5A059]">
                                  <item.icon size={28} strokeWidth={1.5} />
                                </div>
                              </div>

                              <h3 className="text-4xl md:text-5xl font-serif text-[#0A1610] mb-8 leading-tight">{item.title}</h3>

                              <div className="text-muted-foreground font-light leading-loose text-lg">
                                {item.content}
                              </div>
                            </motion.div>
                          </div>

                          {/* Image Side - Alternating Order */}
                          <div className={`flex-1 h-[50vh] md:h-auto relative overflow-hidden ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                            <motion.div
                              className="w-full h-full relative"
                              initial={{ scale: 1.1 }}
                              whileInView={{ scale: 1 }}
                              transition={{ duration: 1.5 }}
                            >
                              <img
                                src={item.image || images[i]}
                                alt={item.title}
                                className="w-full h-full object-cover"
                              />
                              <div className="absolute inset-0 bg-[#0A1610]/10 mix-blend-multiply" />
                            </motion.div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Editorial CTA */}
                  <div className="relative bg-[#FDFCF8] py-32 px-6 text-center z-10">
                    <div className="max-w-4xl mx-auto">
                      <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                      >
                        <div className="inline-block p-4 rounded-full border border-[#C5A059]/20 mb-8">
                          <Award size={32} className="text-[#C5A059]" />
                        </div>
                        <h4 className="font-serif text-3xl md:text-5xl text-[#0A1610] mb-12 leading-tight">
                          Experience truly healthy meat — <br />
                          <span className="italic text-[#C5A059]">raised naturally, the Haritha Farms way.</span>
                        </h4>
                        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
                          <Link to="/transparency" className="group relative px-8 py-4 bg-white border border-[#0A1610]/20 overflow-hidden transition-all hover:border-[#C5A059]">
                            <span className="relative flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-[#0A1610]">
                              Our Standards <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                          <Link to="/contact" className="group relative px-8 py-4 bg-[#0A1610] overflow-hidden transition-all hover:bg-[#C5A059]">
                            <span className="relative flex items-center gap-3 text-xs font-bold tracking-[0.2em] uppercase text-white">
                              Get in Touch <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                            </span>
                          </Link>
                        </div>
                      </motion.div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* --- SEO PRODUCT DESCRIPTION --- */}
            {data.product && (
              <FadeIn>
                <div className="w-full">
                  <HeaderTitle subtitle="What You're Choosing">
                    {data.product.sectionTitle.plain} <span className="italic text-[#C5A059]">{data.product.sectionTitle.highlight}</span>
                  </HeaderTitle>

                  <div className="mt-16 max-w-4xl mx-auto">
                    <p className="text-xl text-muted-foreground leading-relaxed text-center mb-16">
                      {data.product.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-20">
                      {data.product.whyDifferent.map((item: string, i: number) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: i * 0.1, duration: 0.6 }}
                          className="flex items-start gap-4 p-6 bg-white border border-[#0A1610]/5 hover:border-[#C5A059]/30 transition-colors"
                        >
                          <CheckCircle2 size={18} className="text-[#C5A059] mt-0.5 shrink-0" />
                          <span className="text-[#0A1610]">{item}</span>
                        </motion.div>
                      ))}
                    </div>

                    <div className="mb-20">
                      <div className="flex items-center gap-4 justify-center mb-10">
                        <div className="h-px w-8 bg-[#C5A059]" />
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">Perfect For</span>
                        <div className="h-px w-8 bg-[#C5A059]" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.product.perfectFor.map((dish: any, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.15, duration: 0.7 }}
                            className="group relative overflow-hidden aspect-[3/4]"
                          >
                            <img src={dish.image} alt={dish.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                              <p className="text-white font-serif text-lg leading-snug">{dish.label}</p>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <div className="mb-16">
                      <div className="flex items-center gap-4 justify-center mb-10">
                        <div className="h-px w-8 bg-[#C5A059]" />
                        <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">What You Get</span>
                        <div className="h-px w-8 bg-[#C5A059]" />
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {data.product.whatYouGet.map((item: string, i: number) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="text-center p-8 border border-[#0A1610]/5 bg-white"
                          >
                            <div className="w-10 h-10 rounded-full bg-[#C5A059]/10 flex items-center justify-center mx-auto mb-4">
                              <span className="text-[#C5A059] font-serif text-lg">{i + 1}</span>
                            </div>
                            <p className="text-[#0A1610] font-light">{item}</p>
                          </motion.div>
                        ))}
                      </div>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      className="text-center bg-[#0A1610] p-10 md:p-14 border border-[#C5A059]/20"
                    >
                      <p className="text-[#F2F0E9] font-serif text-xl md:text-2xl italic mb-8 leading-relaxed">
                        {data.product.microCta}
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button asChild size="lg" className="bg-[#C5A059] text-[#0A1610] hover:bg-white hover:text-[#0A1610] rounded-none px-10 py-6 text-xs font-bold tracking-widest uppercase transition-all duration-300">
                          <Link to="/contact">Order Now</Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="border-[#F2F0E9]/30 text-[#F2F0E9] hover:bg-[#C5A059] hover:text-[#0A1610] hover:border-[#C5A059] rounded-none px-10 py-6 text-xs font-bold tracking-widest uppercase bg-transparent transition-all duration-300">
                          <a href={`https://wa.me/919876543210?text=${data.product.whatsappMsg}`} target="_blank" rel="noopener noreferrer">WhatsApp Us</a>
                        </Button>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </FadeIn>
            )}

            {/* --- FAQ SECTION --- */}
            {data.faqs && (
              <FadeIn>
                <div className="w-full">
                  <HeaderTitle subtitle="Frequently Asked Questions">
                    Everything You <span className="italic text-[#C5A059]">Need to Know</span>
                  </HeaderTitle>

                  <div className="mt-16 max-w-3xl mx-auto">
                    {data.faqs.map((faq: { q: string; a: string }, i: number) => (
                      <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
                    ))}
                  </div>
                </div>
              </FadeIn>
            )}

            {/* --- CULINARY EXCELLENCE CTA --- */}
            <FadeIn>
              <div className="relative overflow-hidden bg-[#0A1610] text-[#F2F0E9] p-12 md:p-24 text-center mx-auto max-w-5xl border border-[#F2F0E9]/10">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/40 z-0" />
                <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] pointer-events-none z-0" />

                <div className="relative z-10 flex flex-col items-center">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="h-px w-12 bg-[#C5A059]" />
                    <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">{data.culinary.subtitle}</span>
                    <div className="h-px w-12 bg-[#C5A059]" />
                  </div>

                  <h3 className="text-4xl md:text-6xl font-serif mb-8 leading-tight">
                    {data.culinary.titleStart} <span className="italic text-[#C5A059]">{data.culinary.titleHighlight}</span>
                  </h3>

                  <p className="text-[#F2F0E9]/70 text-lg md:text-xl font-light mb-12 max-w-2xl mx-auto leading-relaxed">
                    {data.culinary.description}
                  </p>

                  <Button asChild size="lg" className="bg-[#C5A059] text-[#0A1610] hover:bg-white hover:text-[#0A1610] rounded-none px-12 py-8 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                    <Link to="/contact">{data.culinary.cta}</Link>
                  </Button>
                </div>
              </div>
            </FadeIn>
          </div>

        </div>
      </section>

      {/* --- VISUAL DIARY (Gallery) --- */}
      <section className="py-24 bg-[#0A1610] text-[#F2F0E9] px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <h3 className="text-3xl md:text-4xl font-serif">Visual Diary</h3>
            <Link to="/gallery" className="hidden md:flex items-center text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059] hover:text-white transition-colors">
              View Full Gallery <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:h-[600px]">

            {/* Large Item */}
            <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden">
              <img src={sheepFarming1} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>

            {/* Small Items */}
            {[sheepFarming3, groupHens].map((src, i) => (
              <div key={i} className="relative group overflow-hidden">
                <img src={src} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
              </div>
            ))}

            {/* Wide Item */}
            <div className="md:col-span-2 relative group overflow-hidden">
              <img src={FishFarmingMain} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100" />
            </div>

          </div>

          <div className="mt-12 text-center md:hidden">
            <Link to="/gallery" className="inline-flex items-center text-xs font-bold tracking-[0.2em] uppercase text-[#C5A059]">
              View Full Gallery <ArrowRight size={14} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={`Experience our ${data.title}`}
        description="From our farm to your table, we ensure the highest standards of quality and ethics."
        primaryAction={{ text: data.ctaText, link: "/contact" }}
        secondaryAction={{ text: "View All Farms", link: "/farms" }}
      />
    </div>
  );
}
