import React from 'react';
import { BlogPostLayout } from '../../components/BlogPostLayout';

export default function SeasonalRhythms() {
  return (
    <BlogPostLayout
      title="Seasonal Rhythms on the Farm"
      category="Farm Life"
      date="November 22, 2025"
      readTime="4 min read"
      heroImage="https://images.unsplash.com/photo-1641455459887-6ae7b095d1bb?q=80&w=1920&auto=format&fit=crop"
    >
      <p className="text-xl text-muted-foreground font-light leading-relaxed mb-8">
        Farming is not a linear process; it is a circle. Every season dictates a new set of tasks, a new focus, and a new way of living. At Haritha Farms, we don't fight the seasons—we dance with them.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Monsoon: The Season of Renewal</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        When the rains come, the farm transforms. This is the time for planting, for water harvesting, and for watching the pastures explode into green. It's a busy time, but also a hopeful one. We verify our water storage systems and ensure our animals have dry, comfortable shelters.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Winter: The Season of Growth</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Cooler temperatures allow our livestock to graze longer and gain healthy weight. It's a time of abundance in the fields. We focus on maintenance, soil health checks, and planning for the year ahead. The mornings are misty, and the farm is quiet and peaceful.
      </p>

      <h2 className="text-3xl font-serif text-primary mt-12 mb-6">Summer: The Season of Resilience</h2>
      <p className="text-muted-foreground font-light leading-relaxed mb-6">
        Summer tests us. Water conservation becomes paramount. We rely on the fodder we stored during the times of plenty. Our native breeds shine in this season—their resilience to heat and dry conditions proves why indigenous farming is the only sustainable way forward.
      </p>

      <div className="mt-12 p-8 bg-secondary/5 border-l-4 border-secondary">
        <p className="text-lg font-light text-primary italic">
          "To everything there is a season, and a time to every purpose under the heaven."
        </p>
      </div>
    </BlogPostLayout>
  );
}
