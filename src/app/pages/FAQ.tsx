import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, Minus } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { CTASection } from '../components/ui/CTASection';
import { cn } from '../../lib/utils';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqCategories = [
    {
      category: "Visiting the Farm",
      questions: [
        {
          question: "Do I need to book in advance?",
          answer: "Yes, all farm visits must be booked at least 48 hours in advance. This helps us prepare for your visit and ensure you have the best experience. Walk-ins cannot be accommodated."
        },
        {
          question: "What should I wear to the farm?",
          answer: "We recommend comfortable, closed-toe shoes suitable for walking on uneven terrain. Dress according to the weather, and bring layers as farm temperatures can vary. Avoid loose clothing that might catch on fences or equipment."
        },
        {
          question: "Is the farm suitable for young children?",
          answer: "Absolutely! Our farm tours are family-friendly and children often enjoy meeting the animals. However, children must be supervised by adults at all times for their safety and the animals' wellbeing."
        },
        {
          question: "Can I bring my pet?",
          answer: "Unfortunately, we cannot allow pets on the farm. This policy protects both your pet and our farm animals from potential stress or health issues."
        },
        {
          question: "What happens if it rains?",
          answer: "Farm tours proceed rain or shine unless weather conditions are dangerous. We recommend checking the forecast and dressing appropriately. In severe weather, we will contact you to reschedule."
        }
      ]
    },
    {
      category: "Our Farming Practices",
      questions: [
        {
          question: "Are your animals truly organic?",
          answer: "Yes. All our animals are raised following strict organic standards—no hormones, no antibiotics, no chemical feed additives. They graze on natural pastures and are fed organic, non-GMO feed. Our practices are transparent and verifiable."
        },
        {
          question: "What does 'free-range' mean at Haritha Farms?",
          answer: "Free-range at our farm means animals have continuous access to outdoor spaces appropriate to their species. Our hens roam freely during daylight hours, our sheep graze on open pastures, and our fish live in natural pond ecosystems with ample space."
        },
        {
          question: "Do you use any medications on your animals?",
          answer: "We prioritize prevention through proper nutrition, clean environments, and low-stress handling. If an animal becomes ill, we use natural remedies first. Conventional medications are used only as a last resort for animal welfare, and those animals are clearly marked and not sold as organic."
        },
        {
          question: "How do you maintain pond water quality without chemicals?",
          answer: "We use natural biological filtration, beneficial plants, adequate oxygenation, and proper stocking density. Regular monitoring and natural ecosystem balance keep water clean without synthetic chemicals."
        },
        {
          question: "What certifications do you have?",
          answer: "We maintain organic certifications from recognized Indian and international bodies. Details of all our certifications, audit reports, and compliance documents are available on our Certifications page and during farm visits."
        }
      ]
    },
    {
      category: "Products & Availability",
      questions: [
        {
          question: "Where can I buy your products?",
          answer: "Currently, products are available for purchase directly at the farm or through our partner stores in select cities. We're working on an online ordering system. Contact us for current availability and locations."
        },
        {
          question: "Do you sell meat products?",
          answer: "We occasionally offer limited quantities of ethically raised meat products when animals complete their natural lifecycle. These are pre-order only and subject to availability. Contact us for current offerings."
        },
        {
          question: "Can I buy fresh eggs?",
          answer: "Yes, fresh free-range eggs are available at the farm shop daily (except Mondays). Quantities are limited based on daily production. We also deliver to select areas—contact us for details."
        },
        {
          question: "Do you offer subscriptions or regular deliveries?",
          answer: "We offer weekly egg subscriptions for customers within our delivery range. For other products, we're developing subscription options. Express your interest by contacting us."
        }
      ]
    },
    {
      category: "Sustainability & Ethics",
      questions: [
        {
          question: "How do you handle animal welfare?",
          answer: "Animal welfare is our top priority. We follow the Five Freedoms: freedom from hunger and thirst, discomfort, pain and disease, fear and distress, and freedom to express natural behavior. Every decision considers the animal's wellbeing first."
        },
        {
          question: "What happens to animals at the end of their productive life?",
          answer: "Animals that no longer produce (eggs, wool, etc.) continue to live at the farm with full care. We believe they've earned peaceful retirement. Some are available for ethical harvesting only when they naturally complete their lifecycle."
        },
        {
          question: "How do you minimize environmental impact?",
          answer: "We practice rotational grazing to restore soil health, use animal waste as natural fertilizer, harvest rainwater, generate some solar power, and maintain biodiversity through native plantings. Our goal is regenerative farming that leaves land healthier than we found it."
        },
        {
          question: "Are you climate positive?",
          answer: "We're working toward it. Our practices sequester carbon through soil restoration, and we minimize external inputs. We conduct regular assessments and are committed to transparent reporting of our environmental impact."
        }
      ]
    },
    {
      category: "Working with Us",
      questions: [
        {
          question: "Do you offer internships or volunteer opportunities?",
          answer: "Yes, we welcome dedicated individuals interested in learning organic farming. Opportunities vary by season. Visit our Careers section or contact us with your background and interests."
        },
        {
          question: "Can I host an event at the farm?",
          answer: "We host educational workshops, small private events, and corporate team-building activities. Contact us to discuss your needs and we'll work with you to create an appropriate experience."
        },
        {
          question: "Do you offer educational programs for schools?",
          answer: "Absolutely. We have tailored programs for different age groups focused on sustainable agriculture, animal welfare, and environmental stewardship. Teachers can contact us for curriculum details and booking."
        }
      ]
    }
  ];

  const allQuestions = faqCategories.flatMap((category, categoryIndex) =>
    category.questions.map((q, qIndex) => ({
      ...q,
      category: category.category,
      globalIndex: faqCategories
        .slice(0, categoryIndex)
        .reduce((acc, cat) => acc + cat.questions.length, 0) + qIndex
    }))
  );

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Support</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about our practices, visits, products, and philosophy.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 md:py-24 px-6">
        <div className="container mx-auto max-w-4xl">
          {faqCategories.map((category, categoryIndex) => (
            <FadeIn key={categoryIndex} delay={0.1 * categoryIndex}>
              <div className="mb-16">
                <h2 className="text-2xl md:text-3xl font-serif text-primary mb-8 pb-4 border-b border-border">
                  {category.category}
                </h2>

                <div className="space-y-2">
                  {category.questions.map((item, qIndex) => {
                    const globalIndex = faqCategories
                      .slice(0, categoryIndex)
                      .reduce((acc, cat) => acc + cat.questions.length, 0) + qIndex;
                    
                    const isOpen = openIndex === globalIndex;

                    return (
                      <div
                        key={qIndex}
                        className="border border-border bg-white overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenIndex(isOpen ? null : globalIndex)}
                          className="w-full px-6 md:px-8 py-6 flex items-start justify-between gap-4 text-left hover:bg-primary/5 transition-colors"
                        >
                          <span className="font-serif text-lg md:text-xl text-primary flex-1">
                            {item.question}
                          </span>
                          <motion.div
                            animate={{ rotate: isOpen ? 180 : 0 }}
                            transition={{ duration: 0.3 }}
                            className="flex-shrink-0 text-secondary"
                          >
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                          </motion.div>
                        </button>

                        <AnimatePresence initial={false}>
                          {isOpen && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3, ease: "easeInOut" }}
                              className="overflow-hidden"
                            >
                              <div className="px-6 md:px-8 pb-6 text-muted-foreground leading-relaxed">
                                {item.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <CTASection 
        title="Still Have Questions?"
        description="We're here to help. Reach out to us and we'll respond within 24 hours."
        primaryAction={{ text: "Contact Us", link: "/contact" }}
        secondaryAction={{ text: "Plan a Visit", link: "/visit" }}
      />
    </div>
  );
}
