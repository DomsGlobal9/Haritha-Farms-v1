import React from 'react';
// Module graph refresh v5 — forces Vite HMR re-evaluation
// Must be the very first import so the XML injection runs before React mounts
import { IS_SITEMAP_XML_REQUEST } from './sitemap-xml-handler';
// Must be the second import — intercepts /robots.txt before React mounts
import { IS_ROBOTS_TXT_REQUEST } from './robots-txt-handler';
import { BrowserRouter, Routes, Route } from 'react-router';
import { Layout } from './Layout';
import Home from './pages/Home';
import About from './pages/About';
import Farms from './pages/Farms';
import FarmDetail from './pages/FarmDetail';
import Contact from './pages/Contact';
import Practices from './pages/Practices';
import Transparency from './pages/Transparency';

import Gallery from './pages/Gallery';
import Blog from './pages/Blog';
import Visit from './pages/Visit';
import FAQ from './pages/FAQ';
import Certifications from './pages/Certifications';
import Feed from './pages/Feed';
import FeedTransparency from './pages/FeedTransparency';
import LivestockFeed from './pages/feed/LivestockFeed';
import PoultryFeed from './pages/feed/PoultryFeed';
import FishFeed from './pages/feed/FishFeed';
import RobotsTxt from './pages/RobotsTxt';
import SitemapXml from './pages/SitemapXml';

// Blog Posts
import TransparencyCost from './pages/blog/TransparencyCost';
import SoilHealth from './pages/blog/SoilHealth';
import EggTraceability from './pages/blog/EggTraceability';
import AnimalWelfare from './pages/blog/AnimalWelfare';
import NoAntibiotics from './pages/blog/NoAntibiotics';
import FarmVisits from './pages/blog/FarmVisits';
import PastureRotation from './pages/blog/PastureRotation';
import FreeRangeMatters from './pages/blog/FreeRangeMatters';
import CleanWaterFish from './pages/blog/CleanWaterFish';
import SeasonalRhythms from './pages/blog/SeasonalRhythms';
import TraditionalFeed from './pages/blog/TraditionalFeed';
import ValueOfPatience from './pages/blog/ValueOfPatience';
import RecipeLamb from './pages/blog/RecipeLamb';
import CommunityFood from './pages/blog/CommunityFood';

// Placeholder for pages not yet implemented
const PlaceholderPage = ({ title }: { title: string }) => (
  <div className="pt-32 pb-20 px-6 min-h-[60vh] flex flex-col items-center justify-center text-center">
    <h1 className="text-5xl font-serif text-primary mb-6">{title}</h1>
    <p className="text-muted-foreground max-w-md mx-auto mb-8">
      This page is currently being cultivated. Check back soon for full details.
    </p>
    <a href="/" className="text-xs uppercase tracking-widest border-b border-primary pb-1 hover:text-secondary hover:border-secondary transition-colors">
      Return Home
    </a>
  </div>
);

export default function App() {
  // Handlers attempt document.write() as a first-pass (fastest path).
  // If document.write() was blocked by the browser, do NOT return null —
  // fall through to the React Router routes below which render the content
  // as a reliable <pre> fallback. This mirrors Next.js getServerSideProps.
  //
  //   IS_SITEMAP_XML_REQUEST / IS_ROBOTS_TXT_REQUEST are kept as imports
  //   so the module-level side-effect (document.write attempt) still runs
  //   at the earliest possible moment, before React touches the DOM.
  void IS_SITEMAP_XML_REQUEST;
  void IS_ROBOTS_TXT_REQUEST;

  return (
    <BrowserRouter>
      <Routes>
        {/* ── Static-file routes — no Layout chrome, mirror Next.js pattern ── */}
        <Route path="/sitemap.xml" element={<SitemapXml />} />
        <Route path="/sitemap" element={<SitemapXml />} />
        <Route path="/robots.txt" element={<RobotsTxt />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="farms" element={<Farms />} />
          <Route path="farms/:type" element={<FarmDetail />} />
          <Route path="contact" element={<Contact />} />
          
          <Route path="practices" element={<Practices />} />
          <Route path="transparency" element={<Transparency />} />
          <Route path="gallery" element={<Gallery />} />
          
          <Route path="blog" element={<Blog />} />
          <Route path="visit" element={<Visit />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="certifications" element={<Certifications />} />
          
          <Route path="feed" element={<Feed />} />
          <Route path="feed/livestock" element={<LivestockFeed />} />
          <Route path="feed/poultry" element={<PoultryFeed />} />
          <Route path="feed/fish" element={<FishFeed />} />
          <Route path="feed-transparency" element={<FeedTransparency />} />
          
          {/* Blog Post Routes */}
          <Route path="blog/transparency-cost" element={<TransparencyCost />} />
          <Route path="blog/soil-health" element={<SoilHealth />} />
          <Route path="blog/egg-traceability" element={<EggTraceability />} />
          <Route path="blog/animal-welfare" element={<AnimalWelfare />} />
          <Route path="blog/no-antibiotics" element={<NoAntibiotics />} />
          <Route path="blog/farm-visits" element={<FarmVisits />} />
          <Route path="blog/pasture-rotation" element={<PastureRotation />} />
          <Route path="blog/free-range-matters" element={<FreeRangeMatters />} />
          <Route path="blog/clean-water-fish" element={<CleanWaterFish />} />
          <Route path="blog/seasonal-rhythms" element={<SeasonalRhythms />} />
          <Route path="blog/traditional-feed" element={<TraditionalFeed />} />
          <Route path="blog/value-of-patience" element={<ValueOfPatience />} />
          <Route path="blog/recipe-lamb" element={<RecipeLamb />} />
          <Route path="blog/community-food" element={<CommunityFood />} />
          
          <Route path="*" element={<PlaceholderPage title="Page Not Found" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}