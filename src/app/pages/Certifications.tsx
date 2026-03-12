import React from 'react';
import { motion } from 'motion/react';
import { Award, CheckCircle, FileText, Shield, ExternalLink } from 'lucide-react';
import { FadeIn } from '../components/ui/fade-in';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { CTASection } from '../components/ui/CTASection';

export default function Certifications() {
  const certifications = [
    {
      title: "India Organic Certification",
      issuer: "Agricultural and Processed Food Products Export Development Authority (APEDA)",
      year: "2023",
      scope: "All livestock and aquaculture operations",
      description: "Certified under National Programme for Organic Production (NPOP) standards, ensuring compliance with Indian organic farming regulations.",
      verificationId: "IND-ORG-2023-8734",
      icon: Award
    },
    {
      title: "USDA Organic Certification",
      issuer: "United States Department of Agriculture",
      year: "2024",
      scope: "Sheep, Country Hen operations",
      description: "Meets stringent USDA organic standards for production, handling, and labeling of organic agricultural products.",
      verificationId: "USDA-ORG-2024-1142",
      icon: Award
    },
    {
      title: "Animal Welfare Approved",
      issuer: "A Greener World",
      year: "2023",
      scope: "All farm animal operations",
      description: "Highest welfare standards certification for farm animals, verifying pasture-based farming with continuous outdoor access.",
      verificationId: "AWA-2023-5621",
      icon: Shield
    },
    {
      title: "Certified Humane",
      issuer: "Humane Farm Animal Care",
      year: "2023",
      scope: "Sheep and Country Hen farming",
      description: "Meets comprehensive animal welfare standards covering diet, housing, natural behavior, and humane handling.",
      verificationId: "CH-IND-2023-0891",
      icon: CheckCircle
    }
  ];

  const standards = [
    {
      category: "Organic Feed Standards",
      items: [
        "100% certified organic, non-GMO feed for all species",
        "No synthetic pesticides, herbicides, or chemical fertilizers",
        "No animal by-products or growth hormones",
        "Locally sourced when possible to reduce carbon footprint",
        "Regular feed testing and documentation"
      ]
    },
    {
      category: "Animal Welfare Standards",
      items: [
        "Continuous outdoor access appropriate to species needs",
        "Natural behaviors encouraged and supported",
        "Low-stress handling and transport practices",
        "No confinement systems or cages",
        "Proper veterinary care with minimal interventions",
        "Humane end-of-life practices when necessary"
      ]
    },
    {
      category: "Environmental Standards",
      items: [
        "Rotational grazing to enhance soil health",
        "Water conservation and quality management",
        "Biodiversity preservation and native species planting",
        "Waste management through composting",
        "Renewable energy utilization",
        "Carbon footprint monitoring and reduction"
      ]
    },
    {
      category: "Traceability Standards",
      items: [
        "Complete record-keeping from birth/hatching to sale",
        "Regular third-party inspections and audits",
        "Product labeling with farm and certification details",
        "Open-door policy for customer farm visits",
        "Published annual sustainability reports"
      ]
    }
  ];

  const reports = [
    {
      title: "2025 Annual Sustainability Report",
      date: "January 2026",
      size: "2.4 MB",
      description: "Comprehensive overview of our environmental impact, animal welfare metrics, and sustainability goals."
    },
    {
      title: "Third-Party Audit Report - NPOP",
      date: "November 2025",
      size: "1.8 MB",
      description: "Independent audit results from National Programme for Organic Production inspection."
    },
    {
      title: "Animal Welfare Assessment",
      date: "September 2025",
      size: "1.2 MB",
      description: "Detailed welfare evaluation across all species conducted by certified animal welfare auditors."
    },
    {
      title: "Water Quality Testing Results",
      date: "August 2025",
      size: "856 KB",
      description: "Quarterly water quality analysis for fish ponds and general farm water sources."
    }
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24 px-6 bg-primary/5">
        <div className="container mx-auto max-w-5xl text-center">
          <FadeIn>
            <span className="text-secondary text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Verified & Trusted</span>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-primary mb-6 leading-tight">
              Certifications & Standards
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-2xl mx-auto">
              Our commitment to ethical farming is independently verified through rigorous certifications and transparent practices.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Official Certifications
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Independently verified by internationally recognized certification bodies
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <motion.div
                  className="bg-white border border-border p-8 hover:shadow-lg transition-all"
                  whileHover={{ y: -4 }}
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className="bg-primary/10 p-4 rounded-full">
                      <cert.icon size={28} className="text-primary" />
                    </div>
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium">
                      {cert.year}
                    </span>
                  </div>

                  <h3 className="text-2xl font-serif text-primary mb-3">
                    {cert.title}
                  </h3>

                  <p className="text-sm text-secondary uppercase tracking-wide mb-4">
                    {cert.issuer}
                  </p>

                  <div className="mb-4 pb-4 border-b border-border">
                    <span className="text-xs uppercase tracking-widest text-muted-foreground font-medium block mb-2">
                      Scope
                    </span>
                    <p className="text-sm text-primary">{cert.scope}</p>
                  </div>

                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {cert.description}
                  </p>

                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-widest text-muted-foreground block mb-1">
                        Verification ID
                      </span>
                      <code className="text-xs font-mono text-primary">
                        {cert.verificationId}
                      </code>
                    </div>
                    <button className="text-secondary hover:text-primary transition-colors">
                      <ExternalLink size={18} />
                    </button>
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Standards We Follow */}
      <section className="py-20 md:py-32 px-6 bg-white">
        <div className="container mx-auto max-w-7xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Standards We Follow
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Beyond certifications, we maintain rigorous internal standards across all operations
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-12">
            {standards.map((standard, index) => (
              <FadeIn key={index} delay={0.1 * index}>
                <div>
                  <h3 className="text-xl font-serif text-primary mb-6 pb-3 border-b border-border">
                    {standard.category}
                  </h3>
                  <ul className="space-y-3">
                    {standard.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <CheckCircle size={16} className="text-secondary flex-shrink-0 mt-0.5" />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Audit Reports & Documents */}
      <section className="py-20 md:py-32 px-6 bg-primary/5">
        <div className="container mx-auto max-w-5xl">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif text-primary mb-4">
                Transparency Reports
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Download our audit reports, sustainability assessments, and compliance documents
              </p>
            </div>
          </FadeIn>

          <div className="space-y-4">
            {reports.map((report, index) => (
              <FadeIn key={index} delay={0.05 * index}>
                <motion.div
                  className="bg-white border border-border p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:border-primary/30 transition-colors"
                  whileHover={{ x: 4 }}
                >
                  <div className="flex items-start gap-4 flex-1">
                    <div className="bg-primary/10 p-3 rounded">
                      <FileText size={24} className="text-primary" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-serif text-lg text-primary mb-1">
                        {report.title}
                      </h4>
                      <p className="text-sm text-muted-foreground mb-2">
                        {report.description}
                      </p>
                      <div className="flex items-center gap-4 text-xs text-muted-foreground">
                        <span>{report.date}</span>
                        <span>•</span>
                        <span>{report.size}</span>
                      </div>
                    </div>
                  </div>
                  <button className="px-6 py-3 border border-primary text-primary hover:bg-primary hover:text-white transition-colors uppercase tracking-widest text-xs font-medium whitespace-nowrap">
                    Download PDF
                  </button>
                </motion.div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <CTASection 
        title="Verify Our Claims"
        description="All certification numbers can be verified directly with issuing bodies. We encourage transparency and welcome verification of our practices."
        primaryAction={{ text: "Visit Our Farm", link: "/visit" }}
        secondaryAction={{ text: "View Transparency", link: "/transparency" }}
      />
    </div>
  );
}
