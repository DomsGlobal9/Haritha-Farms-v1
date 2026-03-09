import React from 'react';
import { FadeIn } from '../../components/ui/fade-in';
import { Calendar, Clock, ArrowLeft, Share2 } from 'lucide-react';
import { Link } from 'react-router';

export default function FarmVisits() {
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
              Community
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-primary mb-6">
              Building Trust Through Open Farm Visits
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground mb-8">
              <span className="flex items-center gap-2">
                <Calendar size={16} />
                December 25, 2025
              </span>
              <span className="flex items-center gap-2">
                <Clock size={16} />
                3 min read
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
                src="https://images.unsplash.com/photo-1522184074623-e772ae8ec940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG8lMjB0YWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2ODE5NzgxOXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Farm to table community visit"
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
                Most farms don't welcome visitors. There are legitimate reasons—biosecurity, liability, privacy. But there's also something they don't want you to see. At Haritha Farms, our doors are open. Here's why that matters.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Disconnect</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Somewhere along the way, we lost touch with where food comes from. Eggs appear in cartons at grocery stores. Chicken arrives plastic-wrapped and anonymous. The living animals, the land they lived on, the people who cared for them—all invisible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This disconnect serves industrial agriculture well. When consumers can't see the reality of factory farming, they don't demand change. Out of sight becomes out of mind, and unethical practices continue unchallenged.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Invitation to See</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We invite customers to visit not because our farm is perfect—it isn't. We invite them because transparency requires more than documents and certifications. It requires firsthand experience. Come see how chickens actually behave when given space and freedom. Watch them dust-bathe, forage, establish pecking orders, care for chicks.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                See the barns where they shelter—clean, well-ventilated, filled with natural light. Walk the pastures where they spend their days. Ask questions. Hold us accountable. That's what open doors mean.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">What Visitors Discover</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                People who visit our farm often share similar reactions. Surprise that chickens have distinct personalities. Wonder at how different these birds look and behave compared to what they imagined. Relief that the food they're buying actually comes from the kind of place they hoped it did.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Children who visit become lifelong advocates for ethical food. Adults reconnect with agricultural realities their grandparents knew but they'd never experienced. Food becomes more than fuel—it becomes a relationship with land, animals, and farmers.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Accountability Factor</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Open doors create powerful accountability. When we know customers might show up unannounced, we maintain standards every day, not just when inspectors arrive. When children tour our barns, we're reminded that our practices must be defensible, explicable, worthy of the trust families place in us.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                This accountability makes us better farmers. It pushes us to constantly improve, to solve problems creatively, to never become complacent. Every visitor is a potential teacher, showing us our farm through fresh eyes, asking questions we need to answer.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Building Community</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Farm visits create community in unexpected ways. Regular visitors bring friends and family, creating networks of people who share values around food and farming. Children who collect eggs during visits beg their parents to return. Adults volunteer during busy seasons, experiencing firsthand the work that produces their food.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We've hosted school groups, nursing home residents, food justice organizations, and skeptical journalists. Each visit strengthens the social fabric connecting our farm to the wider community. People don't just buy our products—they become stakeholders in our mission.
              </p>

              <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Challenge</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                We challenge other farms: if you're proud of your practices, open your doors. If your methods would disturb visitors, change your methods. The future of farming depends on rebuilding the connection between eaters and growers, and that connection requires visibility.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Every visit to Haritha Farms is an investment in transparency, education, and community. We don't just grow food—we grow understanding. And in a food system desperate for trust, that might be the most important crop of all.
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
                  to="/blog/transparency-cost"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Transparency
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    The True Cost of Transparency in Modern Farming
                  </h4>
                </Link>
                <Link 
                  to="/blog/egg-traceability"
                  className="p-6 border border-border/40 hover:border-secondary/40 transition-colors group"
                >
                  <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase block mb-2">
                    Process
                  </span>
                  <h4 className="font-serif text-lg text-primary group-hover:text-secondary transition-colors">
                    From Our Hens to Your Table: Traceability Explained
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
