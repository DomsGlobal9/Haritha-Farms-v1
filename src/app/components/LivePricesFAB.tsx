import { useState, useEffect } from "react";

// ─── Types ───────────────────────────────────────────────────────────────────

interface PriceItem {
  label: string;
  price: string;
  unit: string;
  change: "up" | "down" | "stable";
  changePercent: string;
}

// ─── Sample data – replace with your real API / props ────────────────────────

const SAMPLE_PRICES: PriceItem[] = [
  { label: "Tomatoes",    price: "₹45",  unit: "kg", change: "up",    changePercent: "+8%" },
  { label: "Onions",      price: "₹32",  unit: "kg", change: "down",  changePercent: "-5%" },
  { label: "Potatoes",    price: "₹28",  unit: "kg", change: "stable",changePercent: "0%"  },
  { label: "Brinjal",     price: "₹38",  unit: "kg", change: "up",    changePercent: "+12%"},
  { label: "Green Chili", price: "₹85",  unit: "kg", change: "down",  changePercent: "-3%" },
  { label: "Coriander",   price: "₹120", unit: "kg", change: "up",    changePercent: "+15%"},
];

// ─── Sub-components ──────────────────────────────────────────────────────────

const ArrowUpIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 10V2M2 6l4-4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowDownIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M6 2v8M2 6l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const CloseIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M12 4L4 12M4 4l8 8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
  </svg>
);

const ChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M2 14l4-4 3 3 4-6 3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <rect x="1" y="1" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5"/>
  </svg>
);

// ─── Main FAB Component ───────────────────────────────────────────────────────

interface LivePricesFABProps {
  /**
   * Array of price items to display in the panel.
   * Defaults to sample farm-produce prices if omitted.
   */
  prices?: PriceItem[];
  /**
   * Panel title shown in the header.
   */
  title?: string;
  /**
   * Position of the FAB on the screen.
   * @default "bottom-right"
   */
  position?: "bottom-right" | "bottom-left";
}

export default function LivePricesFAB({
  prices = SAMPLE_PRICES,
  title = "Live Farm Prices",
  position = "bottom-right",
}: LivePricesFABProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isPulsing, setIsPulsing] = useState(true);

  // Stop the attention-pulse after first open
  useEffect(() => {
    if (isOpen) setIsPulsing(false);
  }, [isOpen]);

  const positionClass =
    position === "bottom-right"
      ? "bottom-6 right-6"
      : "bottom-6 left-6";

  return (
    <>
      {/* ── Backdrop (mobile) ── */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* ── Container ── */}
      <div className={`fixed ${positionClass} z-50 flex flex-col items-end gap-3`}>

        {/* ── Panel ── */}
        <div
          className={`
            w-72 rounded-2xl shadow-2xl overflow-hidden
            transition-all duration-300 ease-in-out origin-bottom-right
            ${isOpen
              ? "opacity-100 scale-100 translate-y-0 pointer-events-auto"
              : "opacity-0 scale-95 translate-y-2 pointer-events-none"}
          `}
          style={{
            background: "linear-gradient(145deg, #1a2e1a 0%, #0f1f0f 100%)",
            border: "1px solid rgba(134,197,87,0.25)",
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3"
            style={{ borderBottom: "1px solid rgba(134,197,87,0.15)" }}
          >
            <div className="flex items-center gap-2">
              {/* Live dot */}
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
              </span>
              <span className="text-sm font-semibold text-white">{title}</span>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-400 hover:text-white transition-colors rounded-md p-0.5 hover:bg-white/10"
              aria-label="Close price panel"
            >
              <CloseIcon />
            </button>
          </div>

          {/* Price list */}
          <div className="divide-y divide-white/5 max-h-64 overflow-y-auto">
            {prices.map((item) => (
              <div
                key={item.label}
                className="flex items-center justify-between px-4 py-2.5 hover:bg-white/5 transition-colors"
              >
                <span className="text-gray-300 text-sm">{item.label}</span>
                <div className="flex items-center gap-2">
                  <span className="text-white font-semibold text-sm">
                    {item.price}
                    <span className="text-gray-500 font-normal text-xs">/{item.unit}</span>
                  </span>
                  <span
                    className={`flex items-center gap-0.5 text-xs font-medium px-1.5 py-0.5 rounded-full ${
                      item.change === "up"
                        ? "text-green-400 bg-green-400/15"
                        : item.change === "down"
                        ? "text-red-400 bg-red-400/15"
                        : "text-gray-400 bg-gray-400/15"
                    }`}
                  >
                    {item.change === "up" && <ArrowUpIcon />}
                    {item.change === "down" && <ArrowDownIcon />}
                    {item.changePercent}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer */}
          <div
            className="px-4 py-2 text-center"
            style={{ borderTop: "1px solid rgba(134,197,87,0.15)" }}
          >
            <span className="text-xs text-gray-500">
              Updated: {new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}
            </span>
          </div>
        </div>

        {/* ── FAB Button ── */}
        <button
          onClick={() => setIsOpen((v) => !v)}
          className={`
            relative flex items-center gap-2 px-4 py-3 rounded-full
            font-semibold text-sm text-white shadow-lg
            transition-all duration-200 active:scale-95
            ${isOpen ? "pr-3" : ""}
          `}
          style={{
            background: "linear-gradient(135deg, #5a9e2f 0%, #3d7a1a 100%)",
            boxShadow: "0 4px 20px rgba(90,158,47,0.45)",
          }}
          aria-expanded={isOpen}
          aria-label="Toggle live prices panel"
        >
          {/* Pulse ring (before first open) */}
          {isPulsing && (
            <span
              className="absolute inset-0 rounded-full animate-ping"
              style={{ background: "rgba(90,158,47,0.35)" }}
            />
          )}

          <ChartIcon />
          <span className="relative">Live Prices</span>

          {/* Chevron */}
          <svg
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="none"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          >
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </div>
    </>
  );
}
