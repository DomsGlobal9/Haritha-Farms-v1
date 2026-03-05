import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { cn } from './ui/utils';
import { Button } from './ui/button';
import Logo from '../../assets/images/logo.png';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollDelta = currentScrollY - lastScrollY.current;

      // Determine visibility
      // Always visible if at the very top (buffer of 50px)
      if (currentScrollY < 50) {
        setIsVisible(true);
      } else if (scrollDelta > 0) {
        // Scrolling DOWN -> Hide
        setIsVisible(false);
      } else if (scrollDelta < -10) {
        // Scrolling UP (with small threshold to prevent jitter) -> Show
        setIsVisible(true);
      }

      // Determine scrolled styling state
      setIsScrolled(currentScrollY > 20);

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Practices', path: '/practices' },
    { 
      name: 'Our Farms', 
      path: '/farms',
      dropdown: [
        { name: 'Sheep Farming', path: '/farms/sheep' },
        { name: 'Country Hen', path: '/farms/hen' },
        { name: 'Fish Farming', path: '/farms/fish' },
      ]
    },
    { name: 'Feed Supply', path: '/feed' },
    { name: 'Transparency', path: '/transparency' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  // Logic for header visibility on dark backgrounds
  // Only the Home page and Feed page have a dark hero section requiring white text
  const isDarkHeroRoute = location.pathname === "/" || location.pathname === "/feed";
  const useWhiteText = !isScrolled && !isMobileMenuOpen && isDarkHeroRoute;

  return (
    <motion.header 
      initial={{ y: 0 }}
      animate={{ 
        y: isVisible || isMobileMenuOpen || !isScrolled ? 0 : "-100%" 
      }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled || isMobileMenuOpen
          ? "bg-background/90 backdrop-blur-xl py-4 border-b border-primary/5 shadow-sm" 
          : "bg-transparent py-6 lg:py-8"
      )}
    >
      <div className="relative container mx-auto px-6 grid grid-cols-[1fr_auto_1fr] items-center gap-4">
        
        {/* Desktop Navigation - Left */}
        <nav className="hidden lg:flex items-center justify-start gap-8">
          {navLinks.slice(1, 4).map((link) => (
            <div key={link.name} className="relative group">
              <Link 
                to={link.path}
                className={cn(
                  "relative text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 block",
                  location.pathname === link.path || location.pathname.startsWith(link.path + '/') 
                    ? "text-secondary" 
                    : (useWhiteText && !isScrolled ? "text-white/90 hover:text-white" : "text-primary/80 hover:text-secondary")
                )}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-px bg-secondary"
                  />
                )}
              </Link>
              
              {link.dropdown && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out z-50">
                    <div className="bg-background/95 backdrop-blur-xl border border-primary/10 shadow-2xl rounded-sm py-2 min-w-[200px] flex flex-col">
                      {link.dropdown.map((dropItem) => (
                        <Link 
                          key={dropItem.path} 
                          to={dropItem.path}
                          className="text-xs uppercase tracking-widest font-medium text-primary/70 hover:text-secondary hover:bg-secondary/5 transition-all px-6 py-3 block text-left"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
            </div>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="lg:hidden flex justify-start">
          <button 
            className={cn(
              "z-50 p-2 -ml-2 relative group transition-colors w-10 h-10 flex items-center justify-center",
              useWhiteText && !isScrolled ? "text-white" : "text-primary"
            )}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <div className="relative w-6 h-4">
              {/* Top Line */}
              <span className={cn(
                "absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out origin-center",
                isMobileMenuOpen ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
              )} />
              
              {/* Middle Line */}
              <span className={cn(
                "absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out top-1/2 -translate-y-1/2",
                isMobileMenuOpen ? "opacity-0 scale-0" : "opacity-100 scale-100"
              )} />
              
              {/* Bottom Line */}
              <span className={cn(
                "absolute left-0 w-full h-0.5 bg-current transition-all duration-300 ease-in-out origin-center",
                isMobileMenuOpen ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
              )} />
            </div>
          </button>
        </div>

        {/* Logo - Centered */}
        <div className="flex justify-center items-center">
          <Link to="/" className="z-50 relative block group">
            <img 
              src={Logo} 
              alt="Haritha Farms" 
              className={cn(
                "transition-all duration-700 ease-[0.16,1,0.3,1] w-auto object-contain",
                isScrolled ? "h-26 md:h-28" : "h-26 md:h-30",
                useWhiteText && !isScrolled && "brightness-0 invert" 
              )}
            />
          </Link>
        </div>

        {/* Desktop Navigation - Right & CTA */}
        <div className="hidden lg:flex items-center justify-end gap-8">
          <nav className="flex items-center gap-8">
            {navLinks.slice(4, 7).map((link) => (
              <div key={link.name} className="relative group">
                <Link 
                  to={link.path}
                  className={cn(
                    "relative text-xs uppercase tracking-[0.2em] font-medium transition-colors py-2 flex items-center gap-1 whitespace-nowrap",
                    location.pathname === link.path || location.pathname.startsWith(link.path + '/') 
                        ? "text-secondary" 
                        : (useWhiteText && !isScrolled ? "text-white/90 hover:text-white" : "text-primary/80 hover:text-secondary")
                  )}
                >
                  {link.name}
                  {link.dropdown && <ChevronDown size={12} className="opacity-500 group-hover:opacity-100 transition-opacity" />}
                  {location.pathname === link.path && (
                    <motion.div
                      layoutId="underline"
                      className="absolute bottom-0 left-0 right-0 h-px bg-secondary"
                    />
                  )}
                </Link>
                
                {link.dropdown && (
                  <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 ease-out">
                    <div className="bg-background/95 backdrop-blur-xl border border-primary/10 shadow-2xl rounded-sm py-2 min-w-[200px] flex flex-col">
                      {link.dropdown.map((dropItem) => (
                        <Link 
                          key={dropItem.path} 
                          to={dropItem.path}
                          className="text-xs uppercase tracking-widest font-medium text-primary/70 hover:text-secondary hover:bg-secondary/5 transition-all px-6 py-3 block text-left"
                        >
                          {dropItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>
          
          <Button 
            asChild
            variant="outline" 
            className={cn(
                "rounded-full uppercase tracking-[0.15em] text-[10px] font-bold h-10 px-8 transition-all duration-300",
                useWhiteText && !isScrolled
                    ? "border-white/30 text-white hover:bg-white hover:text-primary" 
                    : "border-primary/20 text-primary hover:border-primary hover:bg-primary hover:text-white"
            )}
          >
            <Link 
              to="/contact" 
              className={cn(
                "bg-[#f5f5f0] flex items-center justify-center px-[33px] py-[9px] relative rounded-full transition-colors border-none hover:bg-[#eaeaea]",
                "text-[#1a3c34] hover:text-[#1a3c34]"
              )}
            >
              <div aria-hidden="true" className="absolute border border-[rgba(26,60,52,0.2)] inset-0 pointer-events-none rounded-full" />
              <span className="font-bold leading-[15px] relative shrink-0 text-[#1a3c34] text-[10px] tracking-[1.5px] uppercase">
                Contact Us
              </span>
            </Link>
          </Button>
        </div>

        {/* Mobile Spacer - Right */}
        <div className="lg:hidden flex justify-end">
             <Link 
               to="/contact"
               className={cn(
                  "text-xs font-bold uppercase tracking-widest border border-current rounded-full px-4 py-2 transition-colors",
                  useWhiteText && !isScrolled ? "text-white border-white/30" : "text-primary border-primary/20"
               )}
             >
               Visit
             </Link>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed inset-0 top-0 bg-background z-40 flex flex-col pt-32 px-6 lg:hidden overflow-y-auto min-h-screen"
            >
              <nav className="flex flex-col items-center gap-6 text-center w-full max-w-md mx-auto pb-12">
                {navLinks.slice(1).map((link, i) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 + i * 0.05, duration: 0.5, ease: "easeOut" }}
                    className="flex flex-col items-center gap-3 w-full border-b border-primary/5 pb-4 last:border-0"
                  >
                    <Link 
                      to={link.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-2xl font-serif text-primary hover:text-secondary transition-colors"
                    >
                      {link.name}
                    </Link>
                    {link.dropdown && (
                      <div className="flex flex-col gap-3 pt-1">
                        {link.dropdown.map((dropItem) => (
                          <Link 
                            key={dropItem.path} 
                            to={dropItem.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="text-sm font-sans tracking-widest uppercase text-muted-foreground hover:text-primary transition-colors"
                          >
                            {dropItem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
                
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="mt-6 w-full"
                >
                  <Button 
                    asChild
                    className="w-full bg-primary text-white hover:bg-secondary rounded-sm uppercase tracking-widest h-14 text-sm"
                  >
                    <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>Contact us</Link>
                  </Button>
                </motion.div>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
}