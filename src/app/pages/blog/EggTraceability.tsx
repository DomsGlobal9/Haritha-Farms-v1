import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function EggTraceability() {
  return (
    <BlogPostLayout
      title="From Our Hens to Your Table: Traceability Explained"
      category="Process"
      date="Jan 5, 2026"
      readTime="6 min read"
      heroImage="https://images.unsplash.com/photo-1554888468-1d0417fe3af6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwdHJhbnNwYXJlbmN5JTIwZnJlc2glMjBlZ2dzfGVufDF8fHx8MTc2ODE5NzgxOHww&ixlib=rb-4.1.0&q=80&w=1080"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Have you ever wondered about the journey your eggs take before reaching your kitchen? At Haritha Farms, we can tell you the complete story of every single egg we produce.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">The Journey Begins</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our traceability system starts with the hen. Each flock has a unique identifier, and we maintain detailed records of their breed, age, health history, and living conditions. We know which pasture they roam, what they eat, and how they're cared for. This isn't just data—it's a story of responsible farming.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When a hen lays an egg, that egg inherits the flock's story. We collect eggs multiple times daily to ensure freshness and immediately sort them by size and quality. Any egg that doesn't meet our standards never leaves the farm—it's that simple.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Batch Tracking and Date Coding</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Every batch of eggs receives a unique code that captures essential information: the collection date, the flock identifier, and the packing location. This code is stamped on each carton, creating a permanent record that travels with the eggs.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We maintain digital records of every batch, linking it to specific quality control checks, storage conditions, and distribution details. If you call us with a batch number from your egg carton, we can tell you exactly which hens laid those eggs, when they were collected, and every step they took to reach you.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Quality Control at Every Step</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Traceability isn't just about tracking—it's about accountability. Our eggs undergo multiple quality checks: visual inspection for cracks or abnormalities, candling to check internal quality, and weight sorting for consistency. Each check is recorded in our system.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We also conduct regular random testing for freshness indicators like Haugh unit measurements and yolk color scores. These scientific measures complement our visual inspections, ensuring that only premium quality eggs reach our customers.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Cold Chain Integrity</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Temperature control is critical for egg freshness. From the moment eggs are collected, they're kept in temperature-controlled environments. Our cold storage facilities maintain consistent temperatures, and we use temperature loggers to track conditions throughout storage and transportation.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        This cold chain data is part of our traceability system. We can verify that your eggs were never exposed to temperature fluctuations that could compromise quality. It's peace of mind backed by data.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Distribution and Delivery</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Our distribution network is designed for minimal handling and maximum freshness. We know exactly when each batch leaves the farm, which route it takes, and when it arrives at its destination. For direct customers, we can even provide delivery notifications and estimated freshness windows.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We work only with distributors who share our commitment to quality and can maintain the cold chain. Each delivery is logged, creating a complete chain of custody from farm to retailer.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Technology Meets Tradition</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        While we embrace modern tracking technology, our traceability system is built on old-fashioned values: honesty, accountability, and pride in our work. The technology simply makes it easier to share what we've always done—keep detailed records and take responsibility for every product we sell.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        We're currently implementing blockchain technology to make our traceability even more transparent and tamper-proof. Soon, you'll be able to scan a QR code on your egg carton and see the complete journey of your eggs, including photos and videos from the farm.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Why It Matters</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        In an era of food safety concerns and anonymous supply chains, traceability is power. It's the power to know exactly where your food comes from, how it was produced, and who's responsible for its quality.
      </p>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        At Haritha Farms, we believe you have the right to this information. Every egg tells a story, and we're committed to making sure that story is one of ethical farming, quality care, and absolute transparency.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "Traceability isn't a burden—it's a privilege. It means we're confident enough in our practices to let customers follow every step of the journey."
        </p>
        <p className="text-sm text-muted-foreground mt-4">— Haritha Farms Quality Assurance Team</p>
      </div>
    </BlogPostLayout>
  );
}
