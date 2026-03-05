import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function FarmVisits() {
  return (
    <BlogPostLayout
      title="Building Trust Through Open Farm Visits"
      category="Community"
      date="Dec 25, 2025"
      readTime="3 min read"
      heroImage="https://images.unsplash.com/photo-1522184074623-e772ae8ec940?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdG8lMjB0YWJsZSUyMGFncmljdWx0dXJlfGVufDF8fHx8MTc2ODE5NzgxOXww&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Most farms don't want visitors. They operate behind closed doors, citing biosecurity concerns or proprietary methods. At Haritha Farms, we throw our doors wide open. Here's why.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Transparency You Can Touch</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Words on a website can only convey so much. Photos can be staged. Certifications can be confusing. But when you visit our farm, you experience the reality of our practices. You see the space our chickens enjoy, smell the fresh air, observe their natural behaviors, and verify that what we say matches what we do.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        This direct experience builds trust in a way nothing else can. Visitors often tell us that seeing the farm transformed their understanding of ethical farming. The difference between our system and conventional farming becomes immediately obvious when you compare living conditions in person.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Education Through Experience</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Farm visits are educational experiences. Visitors learn where their food comes from, understand the work involved in ethical farming, and appreciate the difference between organic and conventional methods. Children especially benefit, connecting with the source of their food in memorable ways.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We offer guided tours that explain our practices: why we use certain feeding methods, how we manage soil health, what our animal welfare standards mean in practice. Visitors can ask questions, challenge our methods, and leave truly informed about modern organic farming.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Community Connection</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When you visit Haritha Farms, you're not just a customer—you become part of our community. You meet the people who care for your food, understand the challenges we face, and celebrate our successes. This connection transforms the transaction of buying food into a relationship.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Regular visitors often become advocates, sharing their experiences and helping spread awareness about ethical farming. They bring friends and family, creating ripples of awareness that extend far beyond our immediate customer base.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Accountability Through Observation</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Open farm visits keep us accountable. Knowing that customers can show up and inspect our practices keeps us honest and motivated to maintain high standards. We can't hide problems or cut corners when our doors are always open.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        This accountability extends to our entire team. Farm staff know that their daily work might be observed by visitors, which reinforces the importance of proper procedures and animal care. Pride in our work is visible in every corner of the farm.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Biosecurity Without Barriers</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Some might wonder about biosecurity risks from farm visitors. We take biosecurity seriously—visitors follow protocols like footwear cleaning and hand washing. But our healthy, low-stress flocks are naturally resilient. Good biosecurity doesn't require closing the farm; it requires smart management.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We've never experienced disease outbreaks linked to farm visits. In fact, our disease rates are lower than many closed farms. This suggests that the stress reduction from our farming methods provides better disease protection than isolation ever could.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">What Visitors Experience</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        A typical farm visit includes walking through our pastures, observing feeding routines, seeing egg collection and sorting, learning about composting and soil management, and meeting our team. Visitors can photograph anything, ask any question, and spend as much time as they need to satisfy their curiosity.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Many visitors are surprised by how peaceful and quiet the farm is. They expect industrial noise and smells, but instead find a calm environment that feels more like a nature sanctuary than a production facility. This is farming as it should be—harmonious with nature, not fighting against it.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Join Us</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We invite you to visit Haritha Farms and see for yourself. Bring your family, bring your questions, bring your skepticism. We have nothing to hide and everything to share. Farm visits are free, though we ask that you schedule in advance so we can provide proper guidance.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Whether you're a current customer wanting to see where your food comes from, a potential customer evaluating our claims, or simply someone interested in ethical farming, you're welcome. This is your food system—you have the right to see how it works.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "The best certification isn't on paper—it's the open door and the invitation to see for yourself. Come visit. Ask anything. Stay as long as you like. We have nothing to hide."
        </p>
        <p className="text-sm text-muted-foreground mt-4">— Haritha Farms Community Engagement Team</p>
      </div>
    </BlogPostLayout>
  );
}
