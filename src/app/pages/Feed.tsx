import React, { useState } from 'react';
import { Link } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { Leaf, ShieldCheck, Users, Package, CheckCircle, ArrowRight, Wheat, Sprout, ChevronDown, CircleX, Heart, Sparkles } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { Button } from '../components/ui/button';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/ui/CTASection';

import FishFarmingMain from '../../assets/images/Fish-Farming-Main.jpg';
import NatuKodi from '../../assets/images/natu-kodi.jpg';
import sheepLamba from '../../assets/images/Sheep-lamb-feed.jpg';


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
          <ChevronDown size={20} className="text-[#C5A059]" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-muted-foreground leading-relaxed pl-0 pr-8">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Feed() {
  const feedCategories = [
    {
      // icon: "🐑",
      title: "Sheep & Lamb Feed — For Tender, Flavour-Rich Meat",
      description: "Our sheep and lamb are raised on a diverse mix of organic grasses, legumes, green fodder, and native plants — producing naturally tender, aromatic meat with higher nutrient density and improved gut health.",
      benefits: [
        "Softer, more tender meat",
        "Natural aroma and better flavour",
        "Higher nutrient density",
        "Improved gut health"
      ],
      suitableFor: ["Biryani cuts", "Curries & roasts", "Chops", "Premium mutton"],
      image: sheepLamba,
      link: "/farms/sheep"
    },
    {
      // icon: "🐓",
      title: "Country Chicken (Natu Kodi) Feed — Authentic Desi Taste",
      description: "Our free-range Natu Kodi feed includes organic grains, high-chlorophyll green fodder, farm-grown legumes, and naturally foraged insects & herbs — resulting in firm, healthy muscle with authentic desi flavour.",
      benefits: [
        "Firm, healthy muscle",
        "Authentic desi flavour",
        "Higher protein",
        "Leaner meat"
      ],
      suitableFor: ["Country chicken curry", "Pepper fry", "Andhra/Nellore dishes", "Tandoor grills"],
      image: NatuKodi,
      link: "/farms/hen"
    },
    {
      // icon: "🐟",
      title: "Murrel Fish Feed — Clean, Firm, Fresh Meat",
      description: "Murrel thrive when feed and pond inputs are clean and natural. Our organic feed ensures firm, white flesh with clean taste and better spice absorption for Indian recipes — with zero hormones, antibiotics, or synthetic growth boosters.",
      benefits: [
        "Firm, white flesh",
        "Clean smell and clean taste",
        "Better spice absorption for Indian recipes",
        "Consistent quality for curry, fry, or grills"
      ],
      suitableFor: ["Freshwater murrel", "Pond-based aquaculture", "Sustainable fish farms"],
      image: FishFarmingMain,
      link: "/farms/fish"
    }
  ];

  const organicPrinciples = [
    {
      icon: CircleX,
      title: "No synthetic fertilisers"
    },
    {
      icon: ShieldCheck,
      title: "No pesticides / herbicides"
    },
    {
      icon: Leaf,
      title: "No treated or GM seeds"
    },
    {
      icon: Sprout,
      title: "100% organic cultivation"
    }
  ];

  const feedOutcomes = [
    "Steady, natural growth",
    "Strong immunity",
    "Better digestion",
    "Cleaner, richer flavour in the final meat/fish"
  ];

  const nonNegotiables = [
    "Zero synthetic inputs",
    "Zero hormones",
    "Zero commercial chemical feed",
    "Humane, ethical livestock care",
    "Nutrient-dense, multi-crop fodder",
    "100% transparency in farming & feed ingredients"
  ];

  const whyCustomersPrefer = [
    {
      icon: Sparkles,
      title: "Real Taste",
      description: "Organic feed → Natural growth → Authentic Indian flavour."
    },
    {
      icon: Heart,
      title: "Feels Light & Easy to Digest",
      description: "Cleaner feed means cleaner meat."
    },
    {
      icon: Sprout,
      title: "Healthier, Happier Animals",
      description: "Strong immunity, low stress, and healthy growth cycles."
    },
    {
      icon: ShieldCheck,
      title: "Pure, Honest Food",
      description: "Perfect for families, kids, elders, and health-conscious consumers."
    }
  ];

  const manufacturingSteps = [
    {
      step: "01",
      title: "Organic Cultivation",
      description: "Grown on our own fields — no chemicals, no shortcuts"
    },
    {
      step: "02",
      title: "Species-Specific Formulation",
      description: "Balanced nutrition for sheep, poultry, and fish"
    },
    {
      step: "03",
      title: "Clean Harvesting",
      description: "Hand-harvested and sun-dried naturally"
    },
    {
      step: "04",
      title: "Quality Testing",
      description: "Farm-tested on our own livestock before supply"
    },
    {
      step: "05",
      title: "Responsible Packaging",
      description: "Preserves freshness and nutritional value"
    }
  ];

  const reasons = [
    "Used daily on our own farms",
    "Transparent ingredient sourcing",
    "Consistent quality & performance",
    "Ethical brand with farming expertise",
    "Long-term animal health focus"
  ];

  const supplyClients = [
    "Individual farmers",
    "Commercial livestock farms",
    "Poultry farms",
    "Aquaculture operators",
    "Organic & natural farming initiatives"
  ];

  const supplyOptions = [
    "Small farm quantities",
    "Bulk orders for large farms",
    "Long-term supply partnerships",
    "Custom feed guidance (based on farm needs)"
  ];

  const faqs = [
    {
      q: "What makes Haritha Farms' feed organic?",
      a: "Our feed is grown without synthetic fertilisers, pesticides, herbicides, or treated seeds. Everything is cultivated naturally on our own fields to support clean, healthy livestock growth."
    },
    {
      q: "How does organic feed improve meat and fish taste?",
      a: "Pure feed leads to natural growth, which directly improves flavour, tenderness, aroma, and spice absorption."
    },
    {
      q: "Is this feed suitable for hormone-free rearing?",
      a: "Absolutely. Our system is designed for 100% hormone-free and antibiotic-free livestock farming."
    },
    {
      q: "Do you use any artificial boosters?",
      a: "No boosters, no chemical additives, no shortcuts — ever."
    },
    {
      q: "Does organic feed enhance Indian recipes?",
      a: "Yes. Whether it's mutton biryani, country chicken curry, murrel fry, or grills, meat grown on organic feed cooks cleaner and tastes more authentic."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero Section */}
      <section className="relative h-full w-full overflow-hidden flex items-center justify-center">
        <motion.div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-black/40 z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1920&auto=format&fit=crop"
            alt="Organic Livestock Feed"
            className="w-full h-full object-cover"
          />
        </motion.div>

        <div className="relative z-20 text-center mt-39 px-6 max-w-5xl mx-auto text-white">
          <FadeIn delay={0.2} direction="up">
            <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-tight pt-6 mb-6 text-[rgb(241,249,247)]">
              Pure Feed. Honest Farming.<br />
              <span className="italic text-[#C5A059]">Healthier Livestock.</span>
            </h1>
          </FadeIn>

          <FadeIn delay={0.4} direction="up">
            <p className="text-lg md:text-xl font-light tracking-wide mb-10 text-white/90 max-w-3xl mx-auto">
              Great livestock begins with what they eat. At Haritha Farms, every sheep, lamb, country chicken (Natu Kodi) and murrel fish is raised on 100% organic, naturally grown feed — no chemicals, no hormones, no shortcuts.
            </p>
          </FadeIn>

          <FadeIn delay={0.5} direction="up">
            <p className="text-base md:text-lg font-light tracking-wide mb-10 text-[#C5A059]/90 max-w-2xl mx-auto italic font-serif">
              Clean soil → Clean feed → Clean, safe, flavour-rich food for Indian families.
            </p>
          </FadeIn>

          <FadeIn delay={0.6} direction="up">
            <div className="flex flex-col sm:flex-row mb-6 gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-white text-primary hover:bg-white/90 rounded-none px-8 py-6 text-sm tracking-widest">
                <Link to="#feed-range">Explore Our Feed Range</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-primary rounded-none px-8 py-6 text-sm tracking-widest bg-transparent">
                <Link to="/contact">Talk to Our Feed Team</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Organic Feed Philosophy */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Organic Feed Philosophy</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                Made for <span className="italic text-[#C5A059]">Indian Livestock</span>
              </h2>
              <p className="text-xl text-primary font-light leading-relaxed max-w-3xl mx-auto mb-4">
                In India, food isn't just nutrition — it's emotion. It's culture.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Our feed reflects the same values. We grow all fodder on our own lands using strict organic methods. This is the backbone of our chemical-free, hormone-free, high-integrity farming.
              </p>
            </FadeIn>
          </div>

          {/* Organic Principles */}
          <FadeIn delay={0.2}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {organicPrinciples.map((principle, index) => (
                <div key={index} className="bg-white border border-border p-6 text-center">
                  <principle.icon size={40} className="text-secondary mx-auto mb-4" />
                  <h3 className="text-sm font-medium text-primary uppercase tracking-widest leading-relaxed">
                    {principle.title}
                  </h3>
                </div>
              ))}
            </div>
          </FadeIn>

          {/* Feed Outcomes */}
          <FadeIn delay={0.3}>
            <div className="bg-primary/5 p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-serif text-primary mb-8 text-center leading-tight">
                Every Batch Ensures
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
                {feedOutcomes.map((outcome, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle size={18} className="text-secondary flex-shrink-0" />
                    <span className="text-primary">{outcome}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Feed Categories */}
      <section id="feed-range" className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Formulated for Each Livestock</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                Feed <span className="italic text-[#C5A059]">Categories</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Species-specific organic formulations designed for optimal health, natural growth, and authentic Indian flavour
              </p>
            </div>
          </FadeIn>

          <div className="space-y-16">
            {feedCategories.map((category, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? 'md:grid-flow-dense' : ''}`}>
                  <div className={index % 2 === 1 ? 'md:col-start-2' : ''}>
                    <div className="relative aspect-[4/3] overflow-hidden bg-primary/5">
                      <ImageWithFallback
                        src={category.image}
                        alt={category.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className={index % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}>
                    <div className="text-6xl mb-6">{category.icon}</div>
                    <h3 className="text-2xl md:text-3xl font-serif text-primary mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>

                    <div className="mb-6">
                      <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-3">Key Benefits</h4>
                      <ul className="space-y-2">
                        {category.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                            <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-8">
                      <h4 className="text-xs uppercase tracking-widest font-medium text-primary mb-3">Perfect For</h4>
                      <div className="flex flex-wrap gap-2">
                        {category.suitableFor.map((item, i) => (
                          <span key={i} className="px-4 py-2 bg-primary/5 text-xs text-primary uppercase tracking-widest">
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <Button asChild variant="link" className="p-0 h-auto text-secondary hover:text-primary transition-colors text-sm font-bold tracking-widest uppercase group-hover:underline">
                      <Link to={category.link} className="flex items-center">
                        View Farm Details <ArrowRight size={16} className="ml-2" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Why Indian Customers Prefer */}
      <section className="py-24 md:py-32 px-6 bg-[#0A1610] text-[#F2F0E9]">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-[#C5A059] text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Difference</span>
              <h2 className="text-3xl text-white md:text-5xl font-serif mb-6 leading-tight">
                Why Indian Customers <span className="italic text-[#C5A059]">Prefer</span><br />
                Livestock Grown on Our Feed
              </h2>
            </div>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyCustomersPrefer.map((item, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="border border-[#F2F0E9]/10 p-8 text-center hover:border-[#C5A059]/40 transition-colors duration-500 h-full">
                  <item.icon size={36} className="text-[#C5A059] mx-auto mb-6" />
                  <h3 className="font-serif text-xl text-[#F2F0E9] mb-3">{item.title}</h3>
                  <p className="text-[#F2F0E9]/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Our Non-Negotiables */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Standards</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                Our <span className="italic text-[#C5A059]">Non-Negotiables</span>
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {nonNegotiables.map((item, index) => (
                <div key={index} className="flex items-center gap-4 bg-white border border-border p-6 hover:border-[#C5A059]/30 transition-colors">
                  <CheckCircle size={22} className="text-secondary flex-shrink-0" />
                  <span className="text-primary">{item}</span>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* How Our Feed Is Made */}
      <section className="py-24 md:py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-20">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Process</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                How Our Feed Is Made
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-lg font-light">
                From organic cultivation to responsible packaging, every step ensures purity and integrity
              </p>
            </div>
          </FadeIn>

          <div className="relative">
            {/* Horizontal Line for Desktop */}
            <div className="hidden md:block absolute top-[2rem] left-[10%] right-[10%] h-px bg-primary/10" />

            <div className="grid md:grid-cols-5 gap-10 md:gap-4">
              {manufacturingSteps.map((step, index) => (
                <FadeIn key={index} delay={0.1 * index}>
                  <div className="flex flex-col items-center text-center group">
                    <div className="relative z-10 mb-8 transition-transform duration-500 group-hover:-translate-y-1">
                      <div className="w-16 h-16 rounded-full bg-white border border-primary/10 flex items-center justify-center text-xl font-serif text-secondary shadow-sm">
                        {step.step}
                      </div>
                    </div>
                    
                    <div className="px-1">
                      <h4 className="text-xs font-bold text-primary uppercase tracking-widest mb-3 h-8 flex items-center justify-center">
                        {step.title}
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed opacity-80">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Farmers Choose Us */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                Why Farmers Choose Haritha Farms Feed
              </h2>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {reasons.map((reason, index) => (
                <div key={index} className="flex items-start gap-4 bg-primary/5 p-6">
                  <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-primary">{reason}</span>
                </div>
              ))}
            </div>
          </FadeIn>

          <FadeIn delay={0.3}>
            <div className="text-center py-12 border-y border-border">
              <p className="text-2xl md:text-3xl font-serif text-primary italic">
                "Feed we trust for our animals is the only feed we sell."
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Who We Supply */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <FadeIn>
              <div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Partners</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                  Who We Supply
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Our Feed Is Trusted By:
                </p>
                <ul className="space-y-4">
                  {supplyClients.map((client, index) => (
                    <li key={index} className="flex items-center gap-3 text-primary">
                      <div className="w-2 h-2 bg-secondary" />
                      <span>{client}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Options</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                  Bulk & Retail Supply Options
                </h2>
                <ul className="space-y-4">
                  {supplyOptions.map((option, index) => (
                    <li key={index} className="flex items-start gap-3 text-muted-foreground">
                      <CheckCircle size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span>{option}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Quality Commitment */}
      <section className="py-24 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-12">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Promise</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                Quality & Responsibility Commitment
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
                Every bag of Haritha Farms feed reflects our commitment to:
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="grid md:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, text: "Animal welfare" },
                { icon: Users, text: "Farmer success" },
                { icon: Leaf, text: "Environmental balance" },
                { icon: Package, text: "Food safety & transparency" }
              ].map((item, index) => (
                <div key={index} className="text-center p-6 border border-border hover:border-primary/30 transition-colors">
                  <item.icon size={40} className="text-secondary mx-auto mb-4" />
                  <p className="text-sm text-primary uppercase tracking-widest">{item.text}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 md:py-32 px-6 bg-background">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="flex flex-col gap-6 items-center text-center max-w-4xl mx-auto mb-16">
              <div className="flex items-center gap-4">
                <div className="h-px w-8 bg-[#C5A059]" />
                <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">Frequently Asked Questions</span>
                <div className="h-px w-8 bg-[#C5A059]" />
              </div>
              <h2 className="text-4xl md:text-6xl font-serif text-[#0A1610] leading-tight">
                Everything You <span className="italic text-[#C5A059]">Need to Know</span>
              </h2>
            </div>
          </FadeIn>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.q} answer={faq.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Daily Feed Transparency CTA */}
      <section className="py-20 px-6 bg-[#0A1610] text-[#F2F0E9] border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <FadeIn>
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="h-px w-12 bg-[#C5A059]" />
              <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">Transparency</span>
              <div className="h-px w-12 bg-[#C5A059]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-serif mb-6 leading-tight">
  <span className="text-white">Want to Know What's in</span>{" "}
  <span className="italic text-[#C5A059]">Today's Feed?</span>
</h3>
            <p className="text-[#F2F0E9]/70 text-lg font-light mb-10 max-w-2xl mx-auto leading-relaxed">
              We share our daily fodder mix, what greens are growing this month, and how each crop supports livestock health.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button asChild size="lg" className="bg-[#C5A059] text-[#0A1610] hover:bg-white hover:text-[#0A1610] rounded-none px-10 py-6 text-sm font-bold tracking-widest uppercase transition-all duration-300">
                <Link to="/feed/transparency">View Feed Transparency</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-[#F2F0E9]/30 text-[#F2F0E9] hover:bg-[#F2F0E9] hover:text-[#0A1610] rounded-none px-10 py-6 text-sm tracking-widest bg-transparent">
                <Link to="/contact">Bulk Orders — Talk to Us</Link>
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      <CTASection 
        title="Let's Feed Animals the Right Way"
        description="Whether you manage a small farm or a large operation, Haritha Farms feed supports ethical growth, healthier animals, and better outcomes. Because pure feed grows livestock the way nature intended."
        primaryAction={{ text: "Enquire About Feed Supply", link: "/contact" }}
        secondaryAction={{ text: "Speak to a Feed Specialist", link: "/contact" }}
      />
    </div>
  );
}