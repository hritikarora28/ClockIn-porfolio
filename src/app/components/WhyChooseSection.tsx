import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { CheckCircle2 } from "lucide-react";

const reasons = [
  { title: "Modern Technology Stack", desc: "We use the latest, proven technologies to build future-ready applications." },
  { title: "Scalable Architecture", desc: "Systems designed from day one to scale with your user base and data." },
  { title: "Clean & Maintainable Code", desc: "Readable, well-structured code that's easy to extend and hand off." },
  { title: "Responsive Design", desc: "Pixel-perfect interfaces that work flawlessly on every device and screen." },
  { title: "Performance Focused", desc: "Fast load times, optimized queries, and lean bundles that users notice." },
  { title: "Security Best Practices", desc: "Industry-standard security from authentication to data storage." },
  { title: "AI Integration Capabilities", desc: "Bring machine learning and intelligent features into your product." },
  { title: "Long-Term Maintainability", desc: "Built with documentation, tests, and clean patterns for the long haul." },
];

export function WhyChooseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="py-24 lg:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div
        className="absolute inset-0 pointer-events-none opacity-50 dark:opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 50%, rgba(99,102,241,0.06), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4"
            >
              Why Choose Clockin
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-6"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
            >
              Built for{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Excellence
              </span>
              {" "}at Every Layer
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Clockin doesn't cut corners. From architecture decisions to code quality to post-launch
              support, we hold ourselves to enterprise-level standards on every project.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.35 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:opacity-90 transition-all shadow-xl shadow-blue-500/25"
            >
              Start a Project
            </motion.a>
          </div>

          {/* Right — reasons grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map(({ title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                className="p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-blue-500/30 transition-all group"
              >
                <div className="flex items-start gap-3">
                  <CheckCircle2
                    size={16}
                    className="text-cyan-400 shrink-0 mt-0.5"
                  />
                  <div>
                    <h4
                      className="text-sm font-semibold text-foreground mb-1"
                      style={{ fontFamily: "'Onest', sans-serif" }}
                    >
                      {title}
                    </h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
