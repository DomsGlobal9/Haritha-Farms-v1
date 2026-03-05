import React from 'react';
import { useForm } from 'react-hook-form';
import { FadeIn } from '../components/ui/fade-in';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Phone, Mail, MessageSquare } from 'lucide-react';
import { CTASection } from '../components/ui/CTASection';

type FormData = {
  name: string;
  contact: string;
  date: string;
  message: string;
};

export default function Contact() {
  const { register, handleSubmit, reset, formState: { errors, isSubmitting } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log("Form Submitted:", data);
    // Use alert instead of toast to avoid potential dependency issues
    alert("Request sent successfully! We will get back to you shortly.");
    
    reset();
  };

  return (
    <div className="bg-background pt-24">
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
            
            {/* Contact Info */}
            <FadeIn>
              <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Visit Haritha Farms</span>
              <h1 className="text-4xl md:text-5xl font-serif text-primary mb-8 leading-tight">
                We welcome you to experience organic farming in its truest form.
              </h1>
              <p className="text-lg text-muted-foreground font-light leading-relaxed mb-12">
                Come see how your food is raised—with care, honesty, and respect for nature.
              </p>
              
              <div className="space-y-8">
                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Phone</h3>
                    <p className="text-muted-foreground font-light">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <MessageSquare size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">WhatsApp</h3>
                    <p className="text-muted-foreground font-light">+91 98765 43210</p>
                  </div>
                </div>

                <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors shrink-0">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold uppercase tracking-widest text-primary mb-1">Email</h3>
                    <p className="text-muted-foreground font-light">hello@harithafarms.com</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Form */}
            <FadeIn delay={0.2} className="bg-white p-8 md:p-12 border border-border shadow-sm">
              <h2 className="text-2xl font-serif text-primary mb-8">Request Form</h2>
              <p className="text-xs text-muted-foreground mb-6 italic">
                Note: Since no database is connected, submissions will be logged to the console only.
              </p>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Name</label>
                  <Input 
                    id="name" 
                    {...register("name", { required: "Name is required" })}
                    className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" 
                    placeholder="Your Name" 
                  />
                  {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="contact" className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Contact Number</label>
                  <Input 
                    id="contact" 
                    type="tel" 
                    {...register("contact", { required: "Contact number is required" })}
                    className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" 
                    placeholder="+91 00000 00000" 
                  />
                  {errors.contact && <span className="text-xs text-red-500">{errors.contact.message}</span>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Preferred Date</label>
                  <Input 
                    id="date" 
                    type="date" 
                    {...register("date")}
                    className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent" 
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-xs uppercase tracking-widest font-medium text-muted-foreground">Message</label>
                  <Textarea 
                    id="message" 
                    {...register("message")}
                    className="rounded-none border-x-0 border-t-0 border-b border-primary/20 focus-visible:ring-0 focus-visible:border-primary px-0 bg-transparent min-h-[120px] resize-none" 
                    placeholder="Tell us ..." 
                  />
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-primary text-white hover:bg-secondary rounded-none py-6 uppercase tracking-widest mt-4 disabled:opacity-50"
                >
                  {isSubmitting ? "Sending..." : "Send Request"}
                </Button>
              </form>
            </FadeIn>

          </div>
        </div>
      </section>

      <CTASection 
         title="Have Questions?"
         description="Before you visit, you might want to learn more about our philosophy and common inquiries."
         primaryAction={{ text: "Read FAQ", link: "/faq" }}
         secondaryAction={{ text: "Our Practices", link: "/practices" }}
      />
    </div>
  );
}
