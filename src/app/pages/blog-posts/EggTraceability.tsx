import React from 'react';
import { FadeIn } from '../../components/ui/fade-in';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router';

export default function EggTraceability() {
  return (
    <div className="bg-background pt-24">
      {/* Hero Section */}
      <section className="py-12 px-6 border-b border-border/40">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/transparency" 
            className="inline-flex items-center gap-2 text-secondary text-sm uppercase tracking-wide mb-8 hover:text-primary transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Transparency
          </Link>
          
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">
              Process
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              From Our Hens to Your Table: Traceability Explained
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                January 5, 2026
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                6 min read
              </span>
              <button className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Share2 size={16} />
                Share
              </button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="px-6 py-8">
        <div className="container mx-auto max-w-4xl">
          <FadeIn delay={0.2}>
            <div className="aspect-[21/9] overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1554888468-1d0417fe3af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdHJhbnNwYXJlbmN5JTIwZnJlc2glMjBlZ2dzfGVufDF8fHx8MTc2ODE5NzgxOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Fresh farm eggs"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Article Content */}
      <article className="px-6 py-12">
        <div className="container mx-auto max-w-3xl">
          <FadeIn delay={0.3}>
            <div className="prose prose-lg max-w-none">
              <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
                When you crack open an egg from Haritha Farms, you're not just getting breakfast. You're getting a product with a complete documented history—from the hen who laid it to the journey it took to reach your kitchen.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Traceability System</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Every egg carton from our farm carries a unique QR code. Scan it with your phone, and you'll access a detailed record of that specific batch: which barn it came from, the date of collection, which flock laid those eggs, what those birds ate that week, and even the names of the team members who collected and packed them.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This level of traceability isn't required by law. Most farms batch eggs from multiple sources, making individual tracking impossible. We built this system because transparency isn't just a value we claim—it's a practice we demonstrate with every product.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">From Nest to Collection</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our laying hens have access to nesting boxes filled with fresh straw. They instinctively seek these private spaces to lay eggs, exhibiting natural behavior that stressed or confined birds cannot. We collect eggs three times daily, handling each one carefully to prevent cracks or contamination.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                During collection, we note the barn, the approximate time, and any observations about the flock's behavior or health. Eggs are placed in sanitized collection trays, never touching the ground, and moved immediately to our on-site processing facility.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Quality Control & Candling</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                In our processing room, every egg passes through candling—a time-honored method using bright light to inspect the interior without cracking the shell. We check for proper air cell size, yolk position, and any defects that would compromise quality.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Eggs that don't meet our standards aren't sold to customers. Instead, they're used in our farm kitchen or donated locally. Only eggs meeting strict quality criteria—smooth shells, centered yolks, no blood spots—earn the Haritha Farms label.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Digital Trail</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                As eggs are packed, our system logs each carton into a database linked to that day's collection data. The QR code printed on each carton becomes a portal to this information. Customers can see not just where their eggs came from, but photos of the barn, details about the flock, and even the specific feed formulation used that week.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This digital trail serves multiple purposes. For customers, it provides unprecedented transparency. For us, it creates accountability and allows rapid response if any quality issue arises. If someone reports a problem with a carton, we can trace it back within minutes and investigate the entire batch.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Temperature & Transport</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Traceability doesn't end at our farm gate. We track storage temperature from collection through customer delivery. Our coolers maintain eggs at 45°F, and we use insulated transport with temperature logging to ensure the cold chain never breaks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Delivery drivers scan cartons when they leave our facility and again when they reach distribution points. This creates a complete timeline showing exactly how long eggs have been in transit and confirming proper temperature maintenance throughout.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Why It Matters</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Complete traceability transforms how customers relate to food. When you know the hen that laid your egg spent the previous day foraging in pasture, pecking at insects, and dust-bathing in the sun, breakfast becomes different. The egg isn't a commodity—it's a connection to a specific place, specific animals, and specific people doing their best to farm ethically.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                This system costs more to operate than conventional methods. But the trust it builds, the accountability it creates, and the relationship it forges between farmer and customer make it worth every penny. Traceability isn't just about tracking products—it's about keeping promises.
              </p>
            </div>
          </FadeIn>

          {/* Author & Share Section */}
          <FadeIn delay={0.4}>
            <div className="border-t border-border/40 pt-8 mt-12">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Written by</p>
                  <p className="font-serif text-lg text-primary">Haritha Farms Editorial Team</p>
                </div>
                <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-colors text-xs uppercase tracking-wide">
                  Share Article
                </button>
              </div>
            </div>
          </FadeIn>

          {/* Related Articles */}
          <FadeIn delay={0.5}>
            <div className="mt-16 pt-8 border-t border-border/40">
              <h3 className="text-2xl font-serif text-primary mb-8">Continue Reading</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Link 
                  to="/blog/animal-welfare"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Ethics
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    Animal Welfare: Beyond Industry Standards
                  </h4>
                </Link>
                <Link 
                  to="/blog/farm-visits"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Community
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    Building Trust Through Open Farm Visits
                  </h4>
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </article>
    </div>
  );
}
