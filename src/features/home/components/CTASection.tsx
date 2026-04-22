import { Link } from "react-router-dom";

function CTASection() {
  return (
    <section id="cta" className="py-24 bg-[#FAF1F5] relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full bg-[#D4AF37]/10 blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-[#002819]/5 blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="bg-[#002819] rounded-3xl px-8 py-16 sm:px-16 relative overflow-hidden">
          {/* Inner glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-32 bg-[#D4AF37]/10 blur-3xl rounded-full" />

          <span className="relative text-[#D4AF37] text-sm font-semibold uppercase tracking-widest">
            Ready to get started?
          </span>

          <h2 className="relative mt-4 text-3xl sm:text-4xl font-bold text-white">
            Protect your herd with confidence.
          </h2>

          <p className="relative mt-4 text-gray-300 text-lg max-w-xl mx-auto">
            Join hundreds of ranch owners across the region who trust
            CamelTrack to keep their animals safe and their operations running
            smoothly.
          </p>

          <div className="relative mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/auth/sign-up"
              className="inline-flex items-center justify-center gap-2 bg-[#D4AF37] text-[#002819] font-bold px-8 py-3.5 rounded-xl hover:bg-[#c9a430] transition-colors text-base"
            >
              Start Free Trial
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
            <Link
              to="/auth"
              className="inline-flex items-center justify-center border border-white/20 text-white font-medium px-8 py-3.5 rounded-xl hover:border-[#D4AF37]/50 hover:text-[#D4AF37] transition-colors text-base"
            >
              Already have an account? Log In
            </Link>
          </div>

          <p className="relative mt-6 text-gray-500 text-sm">
            No credit card required. 14-day free trial. Cancel anytime.
          </p>
        </div>
      </div>
    </section>
  );
}

export default CTASection;
