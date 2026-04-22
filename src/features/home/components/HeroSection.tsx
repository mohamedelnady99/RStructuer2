import { Link } from "react-router-dom";

function HeroSection() {
  return (
    <section className="relative min-h-screen bg-[#002819] flex items-center overflow-hidden pt-16">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#06402B]/40 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#06402B]/20 blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-[#06402B]/60 border border-[#D4AF37]/30 text-[#D4AF37] text-sm font-medium px-4 py-2 rounded-full">
              <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
              Live GPS Tracking Platform
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Track Every Camel,{" "}
              <span className="text-[#D4AF37]">Every Mile.</span>
            </h1>

            <p className="text-lg text-gray-300 leading-relaxed max-w-lg">
              Real-time GPS tracking, intelligent geofencing, and instant alerts
              — purpose-built for camel ranches and breeding farms. Know where
              your herd is, always.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/auth/sign-up"
                className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#002819] font-bold px-6 py-3 rounded-lg hover:bg-[#c9a430] transition-colors text-base"
              >
                Start Tracking Free
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 border border-[#D4AF37]/40 text-white font-medium px-6 py-3 rounded-lg hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-base"
              >
                See How It Works
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-4 border-t border-white/10">
              {[
                { value: "10K+", label: "Camels Tracked" },
                { value: "99.9%", label: "Uptime" },
                { value: "< 30s", label: "Alert Response" },
              ].map(({ value, label }) => (
                <div key={label}>
                  <div className="text-2xl font-bold text-[#D4AF37]">
                    {value}
                  </div>
                  <div className="text-sm text-gray-400">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: GPS dashboard mockup */}
          <div className="relative hidden lg:block">
            <div className="relative bg-[#06402B]/30 border border-[#D4AF37]/20 rounded-2xl p-6 backdrop-blur-sm">
              {/* Map mockup header */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-white font-semibold text-sm">
                  Live Herd Map
                </span>
                <span className="flex items-center gap-1.5 text-green-400 text-xs">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                  Live
                </span>
              </div>

              {/* Fake map area */}
              <div className="relative bg-[#002819] rounded-xl h-64 overflow-hidden border border-[#D4AF37]/10">
                {/* Grid lines */}
                <div
                  className="absolute inset-0 opacity-10"
                  style={{
                    backgroundImage:
                      "linear-gradient(#D4AF37 1px, transparent 1px), linear-gradient(90deg, #D4AF37 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
                {/* Geofence circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border-2 border-dashed border-[#D4AF37]/40" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full bg-[#D4AF37]/5" />

                {/* Camel GPS dots */}
                {[
                  { top: "45%", left: "48%", active: true },
                  { top: "52%", left: "53%", active: true },
                  { top: "40%", left: "55%", active: false },
                  { top: "58%", left: "44%", active: true },
                  { top: "35%", left: "42%", active: false },
                ].map((dot, i) => (
                  <div
                    key={i}
                    className="absolute"
                    style={{ top: dot.top, left: dot.left }}
                  >
                    <div
                      className={`w-3 h-3 rounded-full border-2 border-white ${dot.active ? "bg-[#D4AF37]" : "bg-gray-500"}`}
                    />
                    {dot.active && (
                      <div className="absolute inset-0 w-3 h-3 rounded-full bg-[#D4AF37] animate-ping opacity-50" />
                    )}
                  </div>
                ))}

                {/* Alert badge */}
                <div className="absolute top-3 right-3 bg-red-500/90 text-white text-xs px-2 py-1 rounded-full font-medium">
                  1 Outside Zone
                </div>
              </div>

              {/* Stats row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Total", value: "247" },
                  { label: "In Zone", value: "244" },
                  { label: "Alerts", value: "3" },
                ].map(({ label, value }) => (
                  <div
                    key={label}
                    className="bg-[#002819]/60 rounded-lg p-3 text-center"
                  >
                    <div className="text-white font-bold text-lg">{value}</div>
                    <div className="text-gray-400 text-xs">{label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating alert card */}
            <div className="absolute -bottom-4 -left-6 bg-[#06402B] border border-[#D4AF37]/30 rounded-xl px-4 py-3 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-red-500/20 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-red-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                    />
                  </svg>
                </div>
                <div>
                  <div className="text-white text-xs font-semibold">
                    Geofence Alert
                  </div>
                  <div className="text-gray-400 text-xs">
                    Camel #142 left zone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
