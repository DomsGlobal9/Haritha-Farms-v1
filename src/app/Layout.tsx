import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import LivePricesFAB from './components/LivePricesFAB';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-background font-sans text-foreground selection:bg-secondary selection:text-white relative">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <LivePricesFAB />
    </div>
  );
}