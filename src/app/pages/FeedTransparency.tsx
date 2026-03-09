import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { AlertTriangle, CheckCircle, Leaf, ShieldCheck, FileText, Microscope, ArrowRight } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/ui/CTASection';

export default function FeedTransparency() {
  const whatWeUse = [
    {
      category: "Grains & Cereals",
      items: ["Organic corn", "Wheat", "Sorghum", "Millet", "Barley"],
      source: "Locally sourced from certified organic farms"
    },
    {
      category: "Protein Sources",
      items: ["Fish meal (for aquaculture)", "Soybean meal", "Groundnut cake", "Sesame cake"],
      source: "Non-GMO, organically processed"
    },
    {
      category: "Minerals & Vitamins",
      items: ["Calcium carbonate", "Rock salt", "Natural mineral premix", "Trace elements"],
      source: "Food-grade, naturally derived"
    },
    {
      category: "Natural Additives",
      items: ["Turmeric powder", "Moringa leaf powder", "Neem leaf powder", "Herbal immunity boosters"],
      source: "Traditional ingredients for natural health support"
    }
  ];

  const whatWeDontUse = [
    {
      item: "Growth hormones or synthetic growth promoters",
      impact: "These force unnatural rapid growth, weakening animal immunity and affecting meat/egg quality"
    },
    {
      item: "Antibiotics as feed additives",
      impact: "Routine antibiotic use creates drug-resistant bacteria and leaves residues in animal products"
    },
    {
      item: "Artificial colors or flavors",
      impact: "Mislead consumers and add unnecessary chemicals to the food chain"
    },
    {
      item: "GMO ingredients",
      impact: "Genetically modified feed affects long-term animal health and environmental balance"
    },
    {
      item: "Chemical preservatives",
      impact: "We use proper storage and packaging instead of synthetic preservatives"
    },
    {
      item: "Animal by-products (in non-fish feed)",
      impact: "Herbivores and poultry shouldn't consume animal-based protein"
    }
  ];

  const healthImpact = [
    {
      aspect: "Digestive Health",
      feedRole: "Natural fiber and grain balance supports healthy gut flora, reducing digestive issues and improving nutrient absorption",
      longTerm: "Better digestion = stronger immunity and disease resistance"
    },
    {
      aspect: "Immunity & Disease Resistance",
      feedRole: "Herbal additives like turmeric and moringa provide natural immunity support without antibiotics",
      longTerm: "Animals naturally resist common infections, reducing medication needs"
    },
    {
      aspect: "Growth Rate & Body Composition",
      feedRole: "Balanced protein-to-energy ratio encourages steady, natural growth without forced fattening",
      longTerm: "Animals develop proper muscle mass and bone density for healthy longevity"
    },
    {
      aspect: "Reproductive Health",
      feedRole: "Adequate vitamins and minerals support fertility and healthy offspring",
      longTerm: "Better breeding outcomes and generational health"
    },
    {
      aspect: "Product Quality (Meat/Eggs/Fish)",
      feedRole: "What animals eat directly affects taste, texture, and nutritional value of their products",
      longTerm: "Natural feed = authentic taste and higher omega-3, vitamins, and minerals"
    }
  ];

  const sourcingPrinciples = [
    {
      title: "Local Sourcing Priority",
      description: "We source raw materials from local, certified organic farms whenever possible to reduce carbon footprint and support regional agriculture."
    },
    {
      title: "Supplier Verification",
      description: "Every supplier undergoes quality audits. We verify organic certifications and visit farms to ensure ethical practices."
    },
    {
      title: "Seasonal Adaptation",
      description: "Our formulations adjust slightly based on seasonal ingredient availability while maintaining nutritional consistency."
    },
    {
      title: "No Middle-Chain Ambiguity",
      description: "We know exactly where each ingredient comes from—no anonymous bulk purchases or unclear supply chains."
    },
    {
      title: "Testing at Entry",
      description: "All raw materials are tested for contaminants, moisture content, and nutritional value before entering production."
    }
  ];

  const faqs = [
    {
      question: "Can I see the exact ingredient list for each feed type?",
      answer: "Yes. We provide detailed ingredient breakdowns on product packaging and can share formulation details with commercial clients. Contact our feed team for specific product information."
    },
    {
      question: "How do you ensure feed doesn't contain banned substances?",
      answer: "We conduct third-party lab testing on every production batch. Test reports are available on request and kept on file for regulatory compliance."
    },
    {
      question: "Why is your feed more expensive than conventional options?",
      answer: "Our feed costs reflect the true price of quality: organic ingredients, no synthetic fillers, ethical sourcing, and rigorous testing. The long-term benefits—healthier animals, better products, lower veterinary costs—outweigh the upfront difference."
    },
    {
      question: "Do you customize feed formulations for specific farms?",
      answer: "For large orders and long-term partnerships, we can adjust formulations based on your animals' specific needs, local conditions, and production goals."
    },
    {
      question: "How should I store Haritha Farms feed?",
      answer: "Store in a cool, dry place away from direct sunlight and moisture. Use within 3 months of purchase for optimal freshness. Avoid storing near chemicals or strong odors."
    },
    {
      question: "What's your policy on transparency with customers?",
      answer: "Complete transparency. We welcome farm visits, share test reports, and provide ingredient sourcing details. If you have questions about any aspect of our feed, we'll answer them."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Complete Transparency</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
              Feed Transparency & Ingredients
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Exactly what goes into our feed, why we choose it, and how it impacts animal health and food quality.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* What We Use */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                What We Use
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Every ingredient is selected for nutritional value, digestibility, and safety
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {whatWeUse.map((section, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-white border border-border p-8">
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <h3 className="text-xl font-serif text-primary">{section.category}</h3>
                  </div>
                  
                  <ul className="space-y-2 mb-6">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                        <span className="w-1.5 h-1.5 bg-secondary rounded-full" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-border">
                    <p className="text-xs uppercase tracking-widest text-secondary font-medium mb-2">Source</p>
                    <p className="text-sm text-muted-foreground">{section.source}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* What We Don't Use */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                What We Don't Use
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Our commitment to animal health means saying no to harmful shortcuts
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {whatWeDontUse.map((item, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="bg-primary/5 border-l-4 border-secondary p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <AlertTriangle size={24} className="text-secondary flex-shrink-0 mt-1" />
                    <div className="flex-1">
                      <h3 className="text-lg font-serif text-primary mb-2">{item.item}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        <span className="font-medium text-primary">Why it matters:</span> {item.impact}
                      </p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* How Feed Impacts Health */}
      <section className="py-20 md:py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Science & Impact</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                How Feed Impacts Animal Health
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Understanding the direct connection between nutrition and wellbeing
              </p>
            </div>
          </FadeIn>

          <div className="space-y-8">
            {healthImpact.map((item, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="bg-white border border-border p-8">
                  <h3 className="text-xl font-serif text-primary mb-4 flex items-center gap-3">
                    <Microscope size={24} className="text-secondary" />
                    {item.aspect}
                  </h3>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-secondary font-medium mb-2">Feed's Role</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.feedRole}</p>
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-widest text-secondary font-medium mb-2">Long-Term Impact</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{item.longTerm}</p>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Ingredient Sourcing Philosophy */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <FadeIn>
            <div className="text-center mb-16">
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Standards</span>
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Ingredient Sourcing Philosophy
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparency begins with knowing exactly where our ingredients come from
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {sourcingPrinciples.map((principle, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div className="bg-white border border-border p-6 hover:border-primary/30 transition-colors h-full">
                  <div className="bg-primary/10 w-12 h-12 flex items-center justify-center mb-4">
                    <Leaf size={24} className="text-primary" />
                  </div>
                  <h3 className="text-lg font-serif text-primary mb-3">{principle.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{principle.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Testing & Verification */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <FadeIn>
              <div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Quality Assurance</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-6">
                  Testing & Verification
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Every batch of Haritha Farms feed undergoes rigorous testing before reaching your farm.
                </p>
                <ul className="space-y-4">
                  {[
                    "Third-party laboratory analysis",
                    "Nutritional composition verification",
                    "Contaminant and pathogen screening",
                    "Heavy metal testing",
                    "Moisture content and shelf-life testing",
                    "On-farm performance monitoring"
                  ].map((test, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <ShieldCheck size={20} className="text-secondary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-primary">{test}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="bg-primary text-white p-8 md:p-12">
                <FileText size={48} className="text-white/80 mb-6" />
                <h3 className="text-2xl font-serif text-white mb-4">
                  Request Test Reports
                </h3>
                <p className="text-white/80 mb-6 leading-relaxed">
                  We maintain complete documentation for every production batch. Commercial clients can request detailed lab reports and certificates of analysis.
                </p>
                <Link 
                  to="/contact"
                  className="inline-flex items-center text-white border-b border-white pb-1 hover:text-white/80 transition-colors uppercase tracking-widest text-xs font-medium"
                >
                  Contact Feed Team <ArrowRight size={14} className="ml-2" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 md:py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-4xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Transparency FAQs
              </h2>
              <p className="text-muted-foreground">
                Common questions about our feed ingredients and practices
              </p>
            </div>
          </FadeIn>

          <div className="space-y-6">
            {faqs.map((faq, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="bg-white border border-border p-6 md:p-8">
                  <h3 className="text-lg font-serif text-primary mb-3">{faq.question}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
         title="Still Have Questions?"
         description="We're committed to complete transparency. Contact our feed specialists for detailed information about ingredients, sourcing, or custom formulations."
         primaryAction={{ text: "Contact Feed Team", link: "/contact" }}
         secondaryAction={{ text: "Back to Feed Products", link: "/feed" }}
      />
    </div>
  );
}