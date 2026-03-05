import React from 'react';
import { FadeIn } from '../components/ui/fade-in';
import { CheckCircle2, HelpCircle, BookOpen } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion"
import { BlogCard } from '../components/BlogCard';
import { CTASection } from '../components/ui/CTASection';
import {
  chickenFarmImage,
  naturalGrazingImage as soilHealthImage,
} from '../../assets';

import WhyHarithaChicken from '../../assets/images/why-haritha.jpg';
import herobird from '../../assets/images/heroBirdImage.jpg';




export default function Transparency() {
  return (
    <div className="bg-background pt-24">
      <section className="py-20 md:py-32 px-6 border-b border-border/40">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Promise</span>
            <h1 className="text-5xl md:text-7xl font-serif text-primary mb-8">
              Trust Built on <br/> Openness
            </h1>
            <p className="text-xl text-muted-foreground font-light max-w-2xl mx-auto leading-relaxed">
              We believe trust is built through openness. Haritha Farms practices complete transparency in how animals are raised and cared for.
            </p>
          </FadeIn>
        </div>
      </section>

      <section className="px-6 py-24 bg-background">
        <div className="container mx-auto max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
          <FadeIn delay={0.2}>
             <h2 className="text-3xl font-serif text-primary mb-8">Our Farming Process</h2>
             <div className="space-y-6">
                {[
                  { title: "Breeding & Selection", desc: "Selecting indigenous breeds suited for local climate." },
                  { title: "Feeding & Care", desc: "Providing natural nutrition and daily attention." },
                  { title: "Health Monitoring", desc: "Regular check-ups without preventive antibiotics." },
                  { title: "Responsible Harvesting", desc: "Ethical processing respecting natural cycles." }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-4 border border-border/40 hover:border-secondary/40 transition-colors bg-white/50">
                    <div className="mt-1 text-secondary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <h3 className="font-serif text-lg text-primary">{item.title}</h3>
                      <p className="text-sm text-muted-foreground font-light">{item.desc}</p>
                    </div>
                  </div>
                ))}
             </div>
          </FadeIn>
          
          <FadeIn delay={0.4}>
            <div className="bg-secondary/5 p-8 md:p-12 rounded-sm">
               <h2 className="text-3xl font-serif text-primary mb-8 flex items-center gap-3">
                 <HelpCircle className="text-secondary" /> FAQ
               </h2>
               <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="text-primary font-medium text-lg">What makes your farming organic?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light">
                    No hormones, no chemicals, natural feed, and ethical care define our organic approach. We strictly adhere to natural farming principles that prioritize ecosystem health over industrial efficiency.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger className="text-primary font-medium text-lg">Can we visit the farm?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light">
                    Yes. We welcome visitors who wish to see our practices firsthand. We believe seeing is believing. Please contact us to schedule a guided tour of our facilities and fields.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger className="text-primary font-medium text-lg">How do we ensure 100% organic feed?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light">
                    We cultivate our own corn and soy, and partner with certified organic local farmers for supplemental grains. Every batch of feed is tested for purity to ensure no synthetic additives enter the food chain.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger className="text-primary font-medium text-lg">What happens if an animal gets sick?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light">
                    We prioritize prevention through nutrition and hygiene. If treatment is needed, we use herbal remedies first. In rare cases requiring antibiotics, that animal is removed from the organic supply chain to maintain our strict standards.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger className="text-primary font-medium text-lg">How transparent is your pricing?</AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-base font-light">
                    We publish a yearly breakdown of our costs—from feed to labor—so you understand exactly where your money goes. We believe in fair wages for our farmers and fair prices for our community.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Section */}
      <section className="px-6 py-24 bg-card border-t border-border/40">
        <div className="container mx-auto max-w-6xl">
          <FadeIn delay={0.1}>
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-3 mb-4">
                <BookOpen className="text-secondary" size={24} />
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase">
                  Transparency Blog
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-serif text-primary mb-6">
                Stories from the Farm
              </h2>
              <p className="text-lg text-muted-foreground font-light max-w-2xl mx-auto">
                Insights into our daily practices, ethical farming techniques, and the journey of bringing transparency to agriculture.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.2}>
              <BlogCard
                featured={true}
                title="The True Cost of Transparency in Modern Farming"
                excerpt="Why we chose to open our doors and share every aspect of our farming process—from the challenges we faced to the trust we've built with our community."
                date="Jan 10, 2026"
                category="Transparency"
                readTime="5 min read"
                image={WhyHarithaChicken}
                slug="transparency-cost"
              />
            </FadeIn>

            <FadeIn delay={0.3}>
              <BlogCard
                title="Soil Health: The Foundation of Ethical Farming"
                excerpt="How regenerative soil practices not only improve the quality of our produce but also support the entire ecosystem on our farm."
                date="Jan 8, 2026"
                category="Practices"
                readTime="4 min read"
                image={herobird}
                slug="soil-health"
              />
            </FadeIn>

            <FadeIn delay={0.4}>
              <BlogCard
                title="From Our Hens to Your Table: Traceability Explained"
                excerpt="A detailed look at how we track every egg from the moment it's laid to when it reaches your kitchen, ensuring complete transparency."
                date="Jan 5, 2026"
                category="Process"
                readTime="6 min read"
                image="https://images.unsplash.com/photo-1554888468-1d0417fe3af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdHJhbnNwYXJlbmN5JTIwZnJlc2glMjBlZ2dzfGVufDF8fHx8MTc2ODE5NzgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                slug="egg-traceability"
              />
            </FadeIn>

            <FadeIn delay={0.5}>
              <BlogCard
                title="Animal Welfare: Beyond Industry Standards"
                excerpt="Why meeting minimum standards isn't enough—our commitment to providing space, natural behavior, and dignified care for every animal."
                date="Jan 2, 2026"
                category="Ethics"
                readTime="5 min read"
                image="https://images.unsplash.com/photo-1689969936193-c81e9c149e36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldGhpY2FsJTIwZmFybWluZyUyMGFuaW1hbHN8ZW58MXx8fHwxNzY4MTk3ODE5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                slug="animal-welfare"
              />
            </FadeIn>

            <FadeIn delay={0.6}>
              <BlogCard
                title="No Antibiotics, No Compromise: Our Health Policy"
                excerpt="How we maintain healthy livestock without preventive antibiotics through proper nutrition, hygiene, and stress-free environments."
                date="Dec 28, 2025"
                category="Health"
                readTime="4 min read"
                image="https://images.unsplash.com/photo-1685023620523-9c726f2c499b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybWluZyUyMHByYWN0aWNlc3xlbnwxfHx8fDE3NjgxOTc4MTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                slug="no-antibiotics"
              />
            </FadeIn>

            <FadeIn delay={0.7}>
              <BlogCard
                title="Building Trust Through Open Farm Visits"
                excerpt="Why we invite customers to visit our farm and see firsthand how transparency creates a stronger connection between farmer and consumer."
                date="Dec 25, 2025"
                category="Community"
                readTime="3 min read"
                image="https://images.unsplash.com/photo-1522184074623-e772ae8ec940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG8lMjB0YWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2ODE5NzgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                slug="farm-visits"
              />
            </FadeIn>
          </div>
        </div>
      </section>

      <CTASection 
         title="Experience Honest Food"
         description="Taste the difference that true transparency makes. Pure, ethical, and responsibly grown."
         primaryAction={{ text: "Shop Now", link: "/contact" }}
         secondaryAction={{ text: "Visit Farm", link: "/visit" }}
      />
    </div>
  );
}