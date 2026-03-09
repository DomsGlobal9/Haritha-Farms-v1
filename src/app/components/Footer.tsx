import React from 'react';
import { Link } from 'react-router';
import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { logo } from '../../assets';
import svgPaths from '../../imports/svg-cbksx2x016';
import sheepSvgPaths from '../../imports/svg-phe9usc7h3';
import { Button } from './ui/button';
import { Input } from './ui/input';

/* ── Animation variants ──────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.15 + i * 0.12, duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  }),
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.07, delayChildren: 0.25 },
  },
};

const staggerItem = {
  hidden: { opacity: 0, x: -10 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
  },
};

const lineReveal = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

/* ── Animal silhouettes ──────────────────────────────────────────────────── */
function SheepSilhouette() {
  return (
    <svg viewBox="0 0 80 80" fill="none" className="w-full h-full">
      <path
        d={sheepSvgPaths.p2c8b9100}
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
    </svg>
  );
}

function HenSilhouette() {
  return (
    <svg viewBox="0 0 64 64" fill="none" className="w-full h-full">
      <path
        d="M48 18c0-3-2-5.5-4.5-6.5C43 10 42 9 40.5 8.5c-1-.3-2 0-2.5.8l-1 1.7c-.5.8-1.5 1-2.3.5l-.7-.5c-.8-.5-1.8-.2-2.2.6L31 13c-.3.6-.2 1.3.3 1.8l1.2 1.2c-3 1-5.5 3-7 5.5L15 22c-.5 0-1 .3-1.2.8L12 27c-.3.8.3 1.5 1 1.5h3l-.5 2c-.2.8-.3 1.6-.3 2.5 0 2 .5 3.8 1.3 5.5l-2 8c-.2.8.2 1.5 1 1.8l2 .5c.8.2 1.5-.2 1.8-1l1.5-5.8c1.5 1 3.2 1.8 5 2.2l-.3 4.8c0 .8.5 1.5 1.3 1.5h2.5c.7 0 1.2-.5 1.3-1.2l.5-5.3h2l.5 5.3c.1.7.6 1.2 1.3 1.2h2.5c.8 0 1.4-.7 1.3-1.5L37 43.5c2-.5 3.8-1.5 5.2-2.8l1 4.5c.2.8.9 1.2 1.7 1l2-.5c.8-.2 1.2-.9 1-1.7l-1.5-6.5c.8-1.8 1.2-3.8 1.2-5.8 0-1-.1-2-.3-3h1c.8 0 1.3-.7 1-1.5l-1.5-4.5c-.2-.5-.6-.8-1.2-.8l-3 .2c0-.3.1-.5.1-.8 1.5-.5 2.8-1.5 3.3-3z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
        strokeLinecap="round"
      />
      <circle cx="35" cy="15.5" r="1" fill="currentColor" />
      <path d="M42 11.5c1-.5 2.5-.3 3 .5s0 2-1 2.5" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
    </svg>
  );
}

function FishSilhouette() {
  return (
    <svg viewBox="0 0 72 40" fill="none" className="w-full h-full">
      <path
        d="M8 20c0 0 4-4 8-6s10-3 16-3c8 0 14 2 18 5 3 2.5 5 4 5 4s-2 1.5-5 4c-4 3-10 5-18 5-6 0-12-1-16-3S8 20 8 20z"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
        strokeLinejoin="round"
      />
      <path d="M5 20c2-3 4-5 4-5M5 20c2 3 4 5 4 5M2 20c1.5-4 3.5-7 3.5-7M2 20c1.5 4 3.5 7 3.5 7" stroke="currentColor" strokeWidth="0.8" fill="none" strokeLinecap="round" />
      <circle cx="48" cy="19" r="1.5" fill="currentColor" />
      <path d="M20 15c4-1 10-1.5 16-1 5 .5 8 1.5 10 2.5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
      <path d="M20 25c4 1 10 1.5 16 1 5-.5 8-1.5 10-2.5" stroke="currentColor" strokeWidth="0.5" strokeLinecap="round" opacity="0.5" />
      <path d="M28 17v6M33 16v8M38 16.5v7" stroke="currentColor" strokeWidth="0.4" opacity="0.3" />
    </svg>
  );
}

function AnimatedAnimals() {
  return (
    <div className="relative w-full h-24 sm:h-28 overflow-hidden mt-10 mb-4">
      {/* Ground line */}
      <motion.div
        className="absolute bottom-6 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent 0%, rgba(201,168,76,0.15) 20%, rgba(201,168,76,0.15) 80%, transparent 100%)' }}
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Sheep — walks slowly left to right */}
      <motion.div
        className="absolute bottom-4 text-[rgba(201,168,76,0.18)] w-14 h-14 sm:w-16 sm:h-16"
        initial={{ x: '-10%', opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: ['5%', '25%', '5%'] }}
        transition={{
          x: { duration: 20, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1, delay: 0.5 },
        }}
      >
        <motion.div
          animate={{ y: [0, -2, 0, -1, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <SheepSilhouette />
        </motion.div>
      </motion.div>

      {/* Hen — pecks around the middle */}
      <motion.div
        className="absolute bottom-5 text-[rgba(201,168,76,0.15)] w-10 h-10 sm:w-12 sm:h-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: ['280%', '360%', '300%', '340%', '280%'] }}
        transition={{
          x: { duration: 16, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1, delay: 0.8 },
        }}
      >
        <motion.div
          animate={{ rotate: [0, -8, 0, 5, 0], y: [0, 2, 0, -1, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
        >
          <HenSilhouette />
        </motion.div>
      </motion.div>

      {/* Second Hen — slightly behind */}
      <motion.div
        className="absolute bottom-6 text-[rgba(201,168,76,0.1)] w-8 h-8 sm:w-10 sm:h-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: ['350%', '420%', '380%', '400%', '350%'] }}
        transition={{
          x: { duration: 18, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1, delay: 1.2 },
        }}
      >
        <motion.div
          animate={{ rotate: [0, 6, 0, -4, 0], y: [0, -1, 0, 2, 0] }}
          transition={{ duration: 2.8, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
        >
          <HenSilhouette />
        </motion.div>
      </motion.div>

      {/* Fish — swims smoothly right side */}
      <motion.div
        className="absolute bottom-8 text-[rgba(201,168,76,0.14)] w-16 h-10 sm:w-20 sm:h-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ x: ['800%', '700%', '750%', '820%', '800%'] }}
        transition={{
          x: { duration: 22, repeat: Infinity, ease: 'easeInOut' },
          opacity: { duration: 1, delay: 1 },
        }}
      >
        <motion.div
          animate={{ y: [0, -4, 0, -2, 0], rotate: [0, -3, 0, 3, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FishSilhouette />
        </motion.div>
      </motion.div>

      {/* Small grass tufts along the ground */}
      {[8, 18, 32, 45, 58, 72, 85].map((left, i) => (
        <motion.div
          key={i}
          className="absolute bottom-6"
          style={{ left: `${left}%` }}
          initial={{ opacity: 0, scaleY: 0 }}
          whileInView={{ opacity: 1, scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
        >
          <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
            <path d={`M6 10 C6 10 4 ${5 - (i % 3)} 3 1`} stroke="rgba(201,168,76,0.12)" strokeWidth="0.6" strokeLinecap="round" />
            <path d={`M6 10 C6 10 6 ${4 - (i % 2)} 6 0`} stroke="rgba(201,168,76,0.15)" strokeWidth="0.6" strokeLinecap="round" />
            <path d={`M6 10 C6 10 8 ${5 - (i % 3)} 9 2`} stroke="rgba(201,168,76,0.1)" strokeWidth="0.6" strokeLinecap="round" />
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

/* ── DOMS Global attribution ─────────────────────────────────────────────── */
function DomsAttribution() {
  return (
    <motion.a
      href="https://domsglobal.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Handcrafted by DOMS Global"
      className="group flex items-center gap-2 opacity-40 hover:opacity-75 transition-opacity duration-500"
      whileHover={{ x: 3 }}
      transition={{ duration: 0.3 }}
    >
      <motion.span
        className="block w-6 h-px bg-[#C9A84C]"
        whileHover={{ width: 40 }}
        transition={{ duration: 0.4 }}
      />
      <span className="text-[10px] tracking-[1.8px] uppercase text-white/70" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 300 }}>
        Handcrafted by
      </span>
      <span className="text-[11px] tracking-[3.08px] uppercase text-[#C9A84C] group-hover:text-[#E0BF6E] transition-colors duration-300" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic', fontWeight: 400 }}>
        DOMS Global
      </span>
      <svg className="shrink-0" width="9" height="9" viewBox="0 0 9 9" fill="none">
        <g clipPath="url(#doms-ext)">
          <path d="M5.625 1.125H7.875V3.375" stroke="#C9A84C" strokeOpacity="0.6" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M3.75 5.25L7.875 1.125" stroke="#C9A84C" strokeOpacity="0.6" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.p2d143d00} stroke="#C9A84C" strokeOpacity="0.6" strokeWidth="0.75" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs><clipPath id="doms-ext"><rect fill="white" height="9" width="9" /></clipPath></defs>
      </svg>
    </motion.a>
  );
}

/* ── Social icon ─────────────────────────────────────────────────────────── */
function SocialIcon({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <motion.a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="text-white/50 hover:text-[#C9A84C] transition-colors duration-300"
      style={{ '--stroke-0': 'currentColor', '--fill-0': 'currentColor' } as React.CSSProperties}
      whileHover={{ scale: 1.25, y: -3 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: 'spring', stiffness: 400, damping: 17 }}
    >
      {children}
    </motion.a>
  );
}

/* ── Animated footer link ────────────────────────────────────────────────── */
function FooterLink({ to, children }: { to: string; children: React.ReactNode }) {
  return (
    <motion.li variants={staggerItem}>
      <Link
        to={to}
        className="text-[14px] text-white/60 hover:text-[#C9A84C] transition-colors duration-300 relative group inline-block"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
        <span className="absolute left-0 -bottom-0.5 w-0 h-px bg-[#C9A84C]/50 group-hover:w-full transition-all duration-400" />
      </Link>
    </motion.li>
  );
}

/* ══════════════════════════════════════════════════════════════════════════ */
export function Footer() {
  return (
    <motion.footer
      className="relative overflow-hidden bg-[#0A1610]"
      initial={{ opacity: 0, clipPath: 'inset(20% 0% 0% 0%)' }}
      whileInView={{ opacity: 1, clipPath: 'inset(0% 0% 0% 0%)' }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Subtle grain / texture overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.9\' numOctaves=\'4\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")', backgroundRepeat: 'repeat' }} />

      <div className="relative z-10 w-full max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-20 pt-20 sm:pt-28 pb-8">

        {/* ── Header Row: Logo + Certified badge ── */}
        <div className="flex flex-col sm:flex-row justify-between items-start mb-16 sm:mb-20 gap-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/" className="inline-block group">
              <motion.img
                src={logo}
                alt="Haritha Farms"
                className="h-20 sm:h-24 w-auto brightness-[1.2] contrast-[0.9]"
                whileHover={{ scale: 1.04 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              />
              <motion.span
                className="block text-[11px] uppercase tracking-[4px] text-[#C9A84C]/70 mt-3"
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                Ethical Farming
              </motion.span>
            </Link>
          </motion.div>

          {/* Certified badge */}
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="text-right">
              <span className="block text-[24px] text-white/80" style={{ fontFamily: "'Playfair Display', serif", fontStyle: 'italic' }}>
                Certified
              </span>
              <span className="block text-[10px] uppercase tracking-[1.5px] text-white/35 mt-1">
                Organic &amp; Ethical
              </span>
            </div>
            <motion.div
              className="h-12 w-12 rounded-full flex items-center justify-center"
              style={{ border: '1px solid rgba(201,168,76,0.3)' }}
              whileHover={{ scale: 1.12, borderColor: 'rgba(201,168,76,0.6)' }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <span className="text-[12px] text-[#C9A84C]" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 700 }}>100%</span>
            </motion.div>
          </motion.div>
        </div>

        {/* ── Divider line ── */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-14 origin-left"
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* ── 4-Column Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">

          {/* Column 1: Company Info */}
          <motion.div
            variants={fadeUp}
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-[16px] text-white/90 mb-3" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>
              Haritha Farms Pvt Ltd
            </h4>
            <p className="text-[12px] leading-[19.5px] text-white/35 max-w-[200px] mt-2" style={{ fontFamily: "'Inter', sans-serif" }}>
              CIN: U74999KA2024PTC123456
            </p>
            <div className="text-[12px] leading-[19.5px] text-white/35 max-w-[240px] mt-5" style={{ fontFamily: "'Inter', sans-serif" }}>
              <p className="text-white/50 mb-1" style={{ fontWeight: 500 }}>Registered Office:</p>
              <p>
                SY 199/C, 207/E2/1, Julakal, Waddepalle Mandal,
                Jogulamba Gadwal District, Telangana — 509 126.
              </p>
            </div>
          </motion.div>

          {/* Column 2: Explore */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-[18px] text-white/80 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              variants={staggerItem}
            >
              Explore
            </motion.h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink to="/farms">Our Farms</FooterLink>
              <FooterLink to="/feed">Feed Supply</FooterLink>
              <FooterLink to="/practices">Why Choose Haritha?</FooterLink>
              <FooterLink to="/transparency">Lab Reports &amp; Transparency</FooterLink>
              <FooterLink to="/about">Our Story</FooterLink>
            </ul>
          </motion.div>

          {/* Column 3: Legal */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.h4
              className="text-[18px] text-white/80 mb-6"
              style={{ fontFamily: "'Playfair Display', serif" }}
              variants={staggerItem}
            >
              Legal
            </motion.h4>
            <ul className="flex flex-col gap-3.5">
              <FooterLink to="/terms">Terms &amp; Conditions</FooterLink>
              <FooterLink to="/privacy">Privacy Policy</FooterLink>
              <FooterLink to="/shipping">Shipping Policy</FooterLink>
              <FooterLink to="/refund">Refund Policy</FooterLink>
              <FooterLink to="/sitemap">Site Map</FooterLink>
              <FooterLink to="/Transparency">Transparency</FooterLink>
            </ul>
          </motion.div>

          {/* Column 4: Contact Us */}
          <motion.div
            variants={fadeUp}
            custom={3}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h4 className="text-[18px] text-white/80 mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
              Contact Us
            </h4>
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] uppercase tracking-[1.5px] text-[#C9A84C]/40" style={{ fontFamily: "'Inter', sans-serif" }}>Phone</span>
                <a href="tel:+919632791544" className="text-[14px] text-white/60 hover:text-[#C9A84C] transition-colors duration-300" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  +91 9632791544
                </a>
              </div>
              <div className="flex flex-col gap-1.5">
                <span className="text-[11px] uppercase tracking-[1.5px] text-[#C9A84C]/40" style={{ fontFamily: "'Inter', sans-serif" }}>Email</span>
                <a href="mailto:operations@harithafarms.in" className="text-[14px] text-white/60 hover:text-[#C9A84C] transition-colors duration-300 underline decoration-white/20 hover:decoration-[#C9A84C]/40" style={{ fontFamily: "'Inter', sans-serif", fontWeight: 500 }}>
                  operations@harithafarms.in
                </a>
              </div>

              {/* Social icons */}
              <motion.div
                className="flex items-center gap-5 mt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
              >
                {/* Facebook */}
                <SocialIcon href="https://www.facebook.com/profile.php?id=61588157122488" label="Facebook">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p1f29de80} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </SocialIcon>
                {/* Instagram */}
                <SocialIcon href="https://www.instagram.com/theharithafarms/" label="Instagram">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p1aaf0300} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d={svgPaths.p1a50b2f0} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M14.1667 5.83333H14.175" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </SocialIcon>
                {/* X / Twitter */}
                <SocialIcon href="https://x.com/theharithafarms" label="X / Twitter">
                  <svg className="w-4 h-[14.5px]" viewBox="0 0 16 14.5006" fill="none">
                    <path d={svgPaths.p2836c100} fill="currentColor" />
                  </svg>
                </SocialIcon>
                {/* YouTube */}
                <SocialIcon href="https://www.youtube.com/@theharithafarms" label="YouTube">
                  <svg className="w-5 h-5" viewBox="0 0 20 20" fill="none">
                    <path d={svgPaths.p39f21d00} stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                    <path d="M8.33333 11.6667L12.5 8.33333L8.33333 5V11.6667Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
                  </svg>
                </SocialIcon>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* ── Animated animal silhouettes ── */}
        <AnimatedAnimals />

        {/* ── Newsletter pill ── */}
        <motion.div
          className="flex justify-center mt-16 sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="bg-white/[0.06] backdrop-blur-sm rounded-full p-2 pl-6 flex items-center w-full max-w-[448px]"
            style={{ border: '1px solid rgba(255,255,255,0.1)' }}
            whileHover={{ y: -4, borderColor: 'rgba(201,168,76,0.25)', boxShadow: '0 20px 50px rgba(0,0,0,0.4)' }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
          >
            <Input
              type="email"
              placeholder="Enter your email"
              className="border-none shadow-none focus-visible:ring-0 bg-transparent text-white/80 placeholder:text-white/25 h-10 text-[14px] flex-1"
            />
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            >
              <Button className="rounded-full w-10 h-10 p-0 shrink-0 bg-[#C9A84C] hover:bg-[#B8973E] text-[#0A1610]">
                <ArrowRight size={16} />
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Bottom divider ── */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/8 to-transparent mt-14 mb-6 origin-center"
          variants={lineReveal}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        />

        {/* ── Copyright bar ── */}
        <motion.div
          className="flex flex-col sm:flex-row justify-between items-center gap-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.7 }}
        >
          <p className="text-[11px] text-white/25 uppercase tracking-[1.5px]" style={{ fontFamily: "'Inter', sans-serif" }}>
            &copy; {new Date().getFullYear()} Haritha Farms. Powered by Nature.
          </p>
          <DomsAttribution />
        </motion.div>
      </div>
    </motion.footer>
  );
}