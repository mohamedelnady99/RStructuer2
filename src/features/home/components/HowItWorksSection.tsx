interface Step {
  step: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const steps: Step[] = [
  {
    step: 1,
    title: "Register Your Ranch",
    description:
      "Create your account, set up your ranch profile, and invite your team members — owners, managers, and field operators.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
        />
      </svg>
    ),
  },
  {
    step: 2,
    title: "Attach GPS Devices",
    description:
      "Pair lightweight solar-powered GPS collars to each camel. Devices are ruggedized for desert conditions and charge in sunlight.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0"
        />
      </svg>
    ),
  },
  {
    step: 3,
    title: "Define Your Geofences",
    description:
      "Draw safe zones directly on the map — grazing areas, water sources, restricted zones. Set different rules for day and night.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    step: 4,
    title: "Monitor & Respond",
    description:
      "Watch your herd live on the dashboard. Receive instant alerts when something needs your attention and act immediately from anywhere.",
    icon: (
      <svg
        className="w-7 h-7"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17H4a2 2 0 01-2-2V5a2 2 0 012-2h16a2 2 0 012 2v10a2 2 0 01-2 2h-1"
        />
      </svg>
    ),
  },
];

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-[#002819]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Getting Started
          </span>
          <h2 className="mt-3 text-3xl sm:text-4xl font-bold text-white">
            Up and running in 4 simple steps
          </h2>
          <p className="mt-4 text-gray-400 text-lg">
            No technical expertise required. If you can use a smartphone, you
            can use CamelTrack.
          </p>
        </div>

        {/* Steps */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connector line (desktop only) */}
          <div className="hidden lg:block absolute top-10 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-transparent via-[#D4AF37]/30 to-transparent" />

          {steps.map((step) => (
            <div key={step.step} className="relative flex flex-col items-center text-center">
              {/* Step number + icon */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-2xl bg-[#06402B] border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37]">
                  {step.icon}
                </div>
                <div className="absolute -top-3 -right-3 w-7 h-7 rounded-full bg-[#D4AF37] text-[#002819] text-xs font-bold flex items-center justify-center">
                  {step.step}
                </div>
              </div>

              <h3 className="text-white font-semibold text-lg mb-3">
                {step.title}
              </h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorksSection;
