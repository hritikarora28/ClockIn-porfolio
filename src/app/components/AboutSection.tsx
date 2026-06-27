import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Lightbulb, Layers, Code2, RefreshCw, TrendingUp } from "lucide-react";

const highlights = [
  { icon: Lightbulb, title: "Product-Focused Mindset", desc: "We think like product owners, not just coders." },
  { icon: Layers, title: "Modern Architecture", desc: "Clean, scalable, and future-proof system design." },
  { icon: Code2, title: "Clean Code Practices", desc: "Maintainable, readable, and well-documented code." },
  { icon: RefreshCw, title: "Agile Development", desc: "Iterative delivery with continuous feedback loops." },
  { icon: TrendingUp, title: "Scalable Solutions", desc: "Built to grow with your business from day one." },
];

export function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="py-24 lg:py-32 relative overflow-hidden">
      {/* Subtle background accent */}
      <div
        className="absolute top-1/2 right-0 w-[500px] h-[500px] -translate-y-1/2 opacity-5 dark:opacity-10 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgb(139,92,246), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <motion.span
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5 }}
              className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4"
            >
              About Clockin
            </motion.span>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl leading-tight tracking-tight mb-6"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
            >
              Building Technology{" "}
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                That Scales
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-muted-foreground leading-relaxed mb-5"
            >
              Clockin is a software development company focused on creating high-quality web
              applications, e-commerce solutions, business systems, and intelligent software products.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-muted-foreground leading-relaxed mb-8"
            >
              Our team specializes in modern frontend and backend technologies and follows
              industry-standard development practices to build scalable, secure, and maintainable
              applications.
            </motion.p>

            <motion.a
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.4 }}
              href="#contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-all shadow-lg shadow-blue-500/20"
            >
              Work With Us
            </motion.a>
          </div>

          {/* Right — highlight cards */}
          <div className="grid grid-cols-1 gap-3">
            {highlights.map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
                className="group flex items-start gap-4 p-4 rounded-xl border border-border bg-card/50 hover:bg-card hover:border-blue-500/30 transition-all hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500/20 to-violet-500/20 flex items-center justify-center shrink-0 group-hover:from-blue-500/30 group-hover:to-violet-500/30 transition-all">
                  <Icon size={18} className="text-blue-400" />
                </div>
                <div>
                  <h4
                    className="text-sm font-semibold text-foreground mb-0.5"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >
                    {title}
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
