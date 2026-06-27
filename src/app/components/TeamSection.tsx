import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Code2, Server, Database, Brain, Globe, Layers } from "lucide-react";

const skills = [
  { icon: Globe, label: "Frontend Engineering", value: 95, color: "bg-blue-500" },
  { icon: Server, label: "Backend Development", value: 92, color: "bg-violet-500" },
  { icon: Database, label: "Database Architecture", value: 88, color: "bg-cyan-500" },
  { icon: Brain, label: "AI & Machine Learning", value: 80, color: "bg-purple-500" },
  { icon: Code2, label: "API Design", value: 94, color: "bg-blue-500" },
  { icon: Layers, label: "Cloud & DevOps", value: 85, color: "bg-indigo-500" },
];

const avatarColors = [
  "from-blue-500 to-violet-600",
  "from-violet-500 to-purple-600",
  "from-cyan-500 to-blue-600",
  "from-indigo-500 to-blue-600",
];

const initials = ["CK", "JS", "AR", "MP"];

export function TeamSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="team" className="py-24 lg:py-32 relative">
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.4), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4"
          >
            Team & Expertise
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
          >
            Built By Passionate{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Software Engineers
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Our developers have experience working with modern enterprise technologies and building
            scalable applications across web, e-commerce, and business domains. We focus on
            delivering robust, maintainable, and future-ready software solutions.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Avatar group + description */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Avatar stack */}
            <div className="flex items-center gap-4 mb-8">
              <div className="flex -space-x-3">
                {avatarColors.map((gradient, i) => (
                  <div
                    key={i}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${gradient} border-2 border-background flex items-center justify-center shadow-lg`}
                  >
                    <span
                      className="text-white text-xs font-bold"
                      style={{ fontFamily: "'Onest', sans-serif" }}
                    >
                      {initials[i]}
                    </span>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-card border-2 border-border flex items-center justify-center shadow-lg">
                  <span className="text-muted-foreground text-xs font-medium">+</span>
                </div>
              </div>
              <div>
                <p className="text-sm font-semibold text-foreground" style={{ fontFamily: "'Onest', sans-serif" }}>
                  Our Engineering Team
                </p>
                <p className="text-xs text-muted-foreground">Passionate builders, not just coders</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                At Clockin, every engineer is deeply invested in the craft of software development.
                We don't just write code — we architect solutions, think about edge cases, and take
                pride in clean, tested, production-grade implementations.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our team combines deep expertise in both modern frontend frameworks and robust
                backend systems, allowing us to own the full development lifecycle and deliver
                cohesive, high-quality products.
              </p>
            </div>

            {/* Expertise tags */}
            <div className="flex flex-wrap gap-2 mt-6">
              {["Angular", "React", "Spring Boot", "Node.js", "NestJS", "PostgreSQL", "MongoDB", "Machine Learning"].map((tag) => (
                <span
                  key={tag}
                  className="px-3 py-1 rounded-lg bg-muted/60 border border-border text-xs text-muted-foreground hover:text-foreground hover:border-blue-500/40 transition-colors cursor-default"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Skill bars */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-4"
          >
            {skills.map(({ icon: Icon, label, value, color }, i) => (
              <div key={label} className="group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <Icon size={14} className="text-muted-foreground" />
                    <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                      {label}
                    </span>
                  </div>
                  <span className="text-xs font-semibold text-foreground" style={{ fontFamily: "'Onest', sans-serif" }}>
                    {value}%
                  </span>
                </div>
                <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={isInView ? { width: `${value}%` } : {}}
                    transition={{ duration: 1, delay: 0.4 + i * 0.1, ease: "easeOut" }}
                    className={`h-full rounded-full ${color}`}
                  />
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
