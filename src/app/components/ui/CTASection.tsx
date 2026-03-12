import React from 'react';
import { Link } from 'react-router';
import { Button } from './button';
import { FadeIn } from './fade-in';
import { cn } from '../../../lib/utils';

interface CTAAction {
  text: string;
  link: string;
}

interface CTASectionProps {
  title?: string;
  description?: string;
  primaryAction?: CTAAction;
  secondaryAction?: CTAAction;
  backgroundImage?: string;
  className?: string;
}

export function CTASection({
  title = "Ready to Taste the Difference?",
  description = "Join us in our journey towards ethical, sustainable, and purely delicious farming. Experience the Haritha standard today.",
  primaryAction = { text: "Order Farm Fresh", link: "/contact" },
  secondaryAction = { text: "Learn More", link: "/about" },
  backgroundImage,
  className
}: CTASectionProps) {
  return (
    <section className={cn("relative py-32 px-6 overflow-hidden bg-[#0A1610] text-[#F2F0E9]", className)}>
      {/* Background */}
      {backgroundImage ? (
        <div className="absolute inset-0 z-0">
          <img 
            src={backgroundImage} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1610] via-[#0A1610]/80 to-transparent" />
        </div>
      ) : (
        <div className="absolute inset-0 z-0 opacity-10">
           <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
        </div>
      )}

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <FadeIn>
          <div className="flex flex-col items-center gap-6 mb-8">
             <div className="h-px w-16 bg-[#C5A059]" />
             <span className="text-[#C5A059] text-xs font-bold tracking-[0.25em] uppercase">Join The Movement</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-serif mb-8 leading-tight text-[rgb(247,255,253)]">
            {title}
          </h2>
          
          <p className="text-xl text-[#F2F0E9]/70 font-light leading-relaxed mb-12 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button asChild size="lg" className="bg-[#C5A059] text-[#0A1610] hover:bg-white hover:text-[#0A1610] rounded-none px-10 h-14 text-sm font-bold tracking-widest uppercase transition-all duration-300">
              <Link to={primaryAction.link}>{primaryAction.text}</Link>
            </Button>
            
            {secondaryAction && (
              <Button asChild variant="outline" size="lg" className="border-[#F2F0E9]/30 text-[#F2F0E9] hover:bg-[#F2F0E9] hover:text-[#0A1610] rounded-none px-10 h-14 text-sm font-bold tracking-widest uppercase bg-transparent transition-all duration-300">
                <Link to={secondaryAction.link}>{secondaryAction.text}</Link>
              </Button>
            )}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}