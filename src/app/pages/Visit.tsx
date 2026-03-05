import React, { useState } from 'react';
import { motion } from 'motion/react';
import { MapPin, Clock, Calendar as CalendarIcon, Phone, Mail, Users, Info } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { Button } from '../components/ui/button';
import { CTASection } from '../components/ui/CTASection';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export default function Visit() {
  const [selectedTour, setSelectedTour] = useState<string | null>(null);

  const tourOptions = [
    {
      id: "family",
      title: "Family Farm Tour",
      duration: "2 hours",
      capacity: "Up to 10 people",
      price: "₹500 per person",
      description: "Perfect for families. Walk through our pastures, meet the animals, and learn about ethical farming practices.",
      includes: ["Guided farm tour", "Animal feeding experience", "Fresh produce tasting", "Photo opportunities"]
    },
    {
      id: "educational",
      title: "Educational Workshop",
      duration: "3 hours",
      capacity: "15-25 people",
      price: "₹750 per person",
      description: "Ideal for schools and groups. Hands-on learning about organic farming, sustainability, and animal welfare.",
      includes: ["Interactive sessions", "Farm tour", "Organic lunch", "Educational materials", "Certificate"]
    },
    {
      id: "private",
      title: "Private Experience",
      duration: "4 hours",
      capacity: "2-6 people",
      price: "₹3000 per group",
      description: "An intimate experience for those seeking deeper connection with farm life and organic practices.",
      includes: ["Personalized tour", "Farm-to-table lunch", "Animal interaction", "Farm produce basket", "Photography session"]
    }
  ];

  const visitingGuidelines = [
    "Wear comfortable, closed-toe shoes suitable for walking on uneven terrain",
    "Dress according to weather—farm tours happen rain or shine",
    "Children must be supervised by adults at all times",
    "Please do not feed animals without guidance from staff",
    "Respect the animals' space and approach calmly",
    "Photography is encouraged, but be mindful of flash around animals",
    "Arrive 15 minutes before your scheduled tour time"
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/20 z-10" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1641455459887-6ae7b095d1bb?q=80&w=1920&auto=format&fit=crop"
            alt="Visit Haritha Farms"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="relative z-20 text-center px-6 max-w-4xl mx-auto text-white">
          <FadeIn delay={0.2} direction="up">
            <span className="text-white/90 text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Experience</span>
            <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl leading-tight mb-6">
              Visit the Farm
            </h1>
            <p className="text-lg md:text-xl font-light tracking-wide text-white/90 max-w-2xl mx-auto">
              Experience ethical farming firsthand. Walk our pastures, meet our animals, and discover how we practice transparent, organic agriculture.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <FadeIn>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Choose Your Experience</span>
              <h2 className="text-3xl md:text-5xl font-serif text-primary mb-6">
                Farm Tours & Experiences
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Select the experience that best suits your interests and schedule. All tours are led by our experienced farm team.
              </p>
            </FadeIn>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {tourOptions.map((tour, index) => (
              <FadeIn key={tour.id} delay={0.1 * index}>
                <motion.div
                  className="bg-white border border-border p-8 hover:shadow-lg transition-shadow cursor-pointer"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-2xl font-serif text-primary mb-4">{tour.title}</h3>
                  
                  <div className="space-y-3 mb-6 text-sm">
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Clock size={16} className="text-secondary" />
                      <span>{tour.duration}</span>
                    </div>
                    <div className="flex items-center gap-3 text-muted-foreground">
                      <Users size={16} className="text-secondary" />
                      <span>{tour.capacity}</span>
                    </div>
                  </div>

                  <div className="text-2xl font-serif text-secondary mb-4">{tour.price}</div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {tour.description}
                  </p>

                  <div className="border-t border-border pt-6 mb-6">
                    <p className="text-xs uppercase tracking-widest text-primary font-medium mb-3">Includes:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {tour.includes.map((item, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-secondary mt-1">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Button className="w-full bg-primary hover:bg-primary/90 text-white uppercase tracking-widest text-xs">
                    Book This Tour
                  </Button>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Visiting Information */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-20">
            <FadeIn>
              <div>
                <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Plan Your Visit</span>
                <h2 className="text-3xl md:text-4xl font-serif text-primary mb-8">
                  Important Information
                </h2>
                
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-4 mb-2">
                      <MapPin size={20} className="text-secondary mt-1" />
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-medium text-primary mb-2">Location</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Haritha Farms<br />
                          Village Road, Kodaikanal District<br />
                          Tamil Nadu 624101
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-2">
                      <Clock size={20} className="text-secondary mt-1" />
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-medium text-primary mb-2">Hours</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          Tuesday - Sunday: 9:00 AM - 5:00 PM<br />
                          Closed Mondays<br />
                          Last tour starts at 3:00 PM
                        </p>
                      </div>
                    </div>
                  </div>

                  <div>
                    <div className="flex items-start gap-4 mb-2">
                      <CalendarIcon size={20} className="text-secondary mt-1" />
                      <div>
                        <h4 className="text-sm uppercase tracking-widest font-medium text-primary mb-2">Booking</h4>
                        <p className="text-muted-foreground leading-relaxed mb-4">
                          All visits must be booked at least 48 hours in advance. Walk-ins are not accepted to ensure the best experience.
                        </p>
                        <div className="space-y-2">
                          <a href="tel:+919876543210" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                            <Phone size={14} />
                            <span>+91 98765 43210</span>
                          </a>
                          <a href="mailto:visits@harithafarms.com" className="flex items-center gap-2 text-sm text-primary hover:text-secondary transition-colors">
                            <Mail size={14} />
                            <span>visits@harithafarms.com</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <Info size={20} className="text-secondary mt-1" />
                  <div>
                    <h4 className="text-sm uppercase tracking-widest font-medium text-primary mb-4">Visiting Guidelines</h4>
                    <ul className="space-y-3">
                      {visitingGuidelines.map((guideline, index) => (
                        <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="text-secondary mt-1 flex-shrink-0">•</span>
                          <span>{guideline}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-10 p-6 bg-white border border-border">
                  <h4 className="text-sm uppercase tracking-widest font-medium text-primary mb-3">Special Requests</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    We welcome school groups, corporate teams, and special events. Contact us to discuss customized experiences tailored to your needs.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                What to Expect
              </h2>
              <p className="text-muted-foreground">A glimpse of your farm experience</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.unsplash.com/photo-1758357935338-936a266501d7?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1765460220129-233c27c4eafb?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1560493676-04071c5f467b?q=80&w=600&auto=format&fit=crop",
              "https://images.unsplash.com/photo-1641455459887-6ae7b095d1bb?q=80&w=600&auto=format&fit=crop"
            ].map((image, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <div className="aspect-square overflow-hidden">
                  <ImageWithFallback
                    src={image}
                    alt={`Farm experience ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
                  />
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
         title="Ready to Visit?"
         description="We look forward to welcoming you to our farm and sharing our passion for ethical agriculture."
         primaryAction={{ text: "Contact Us", link: "/contact" }}
         secondaryAction={{ text: "Read FAQ", link: "/faq" }}
      />
    </div>
  );
}
