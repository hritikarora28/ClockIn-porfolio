import { useRef } from "react";
import { motion, useInView } from "motion/react";

const categories = [
  {
    label: "Frontend",
    color: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-400",
    techs: ["Angular", "React", "TypeScript", "JavaScript", "HTML5", "CSS3"],
  },
  {
    label: "Backend",
    color: "from-violet-500 to-blue-500",
    iconColor: "text-violet-400",
    techs: ["Spring Boot", "Java", "Node.js", "NestJS", "Express.js"],
  },
  {
    label: "Databases",
    color: "from-cyan-500 to-blue-500",
    iconColor: "text-cyan-400",
    techs: ["MySQL", "PostgreSQL", "MongoDB", "NoSQL Solutions"],
  },
  {
    label: "AI & Data",
    color: "from-purple-500 to-violet-500",
    iconColor: "text-purple-400",
    techs: ["Machine Learning", "Data Analytics", "Predictive Models"],
  },
  {
    label: "DevOps",
    color: "from-blue-500 to-violet-500",
    iconColor: "text-blue-400",
    techs: ["Git", "GitHub", "CI/CD", "Docker"],
  },
];

const techSymbols: Record<string, string> = {
  Angular: "A",
  React: "R",
  TypeScript: "TS",
  JavaScript: "JS",
  HTML5: "H5",
  CSS3: "C3",
  "Spring Boot": "SB",
  Java: "J",
  "Node.js": "N",
  NestJS: "Nt",
  "Express.js": "Ex",
  MySQL: "My",
  PostgreSQL: "PG",
  MongoDB: "Mo",
  "NoSQL Solutions": "NS",
  "Machine Learning": "ML",
  "Data Analytics": "DA",
  "Predictive Models": "PM",
  Git: "G",
  GitHub: "GH",
  "CI/CD": "CI",
  Docker: "D",
};

export function TechStackSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tech" className="py-24 lg:py-32 relative">
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full opacity-5 blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(circle, rgb(99,102,241), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="inline-block text-xs font-semibold tracking-widest text-blue-400 uppercase mb-4"
          >
            Tech Stack
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
          >
            Technologies We{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              Master
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            A modern, battle-tested technology stack covering the full software development
            lifecycle — from frontend to AI.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map(({ label, color, iconColor, techs }, catIdx) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + catIdx * 0.1 }}
              className="p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-blue-500/30 transition-all group"
            >
              {/* Category header */}
              <div className="flex items-center gap-3 mb-5">
                <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}>
                  <span className="text-white text-xs font-bold">{label[0]}</span>
                </div>
                <h3
                  className="font-semibold text-foreground"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  {label}
                </h3>
              </div>

              {/* Tech pills */}
              <div className="flex flex-wrap gap-2">
                {techs.map((tech, techIdx) => (
                  <motion.div
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.3, delay: 0.2 + catIdx * 0.1 + techIdx * 0.04 }}
                    className="group/pill flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-border bg-muted/40 hover:bg-muted hover:border-blue-500/40 transition-all cursor-default"
                  >
                    <span
                      className={`text-[10px] font-bold ${iconColor} w-5 text-center`}
                      style={{ fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {techSymbols[tech] || tech[0]}
                    </span>
                    <span className="text-xs text-muted-foreground group-hover/pill:text-foreground transition-colors">
                      {tech}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}

          {/* All in one card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="sm:col-span-2 lg:col-span-1 p-6 rounded-2xl border border-blue-500/20 bg-gradient-to-br from-blue-500/5 to-violet-500/5 hover:from-blue-500/10 hover:to-violet-500/10 transition-all flex flex-col justify-center"
          >
            <div className="text-center">
              <div
                className="text-4xl font-black bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                15+
              </div>
              <div className="text-sm font-semibold text-foreground mb-1" style={{ fontFamily: "'Onest', sans-serif" }}>
                Technologies
              </div>
              <div className="text-xs text-muted-foreground">
                Across the full stack — from pixel-perfect UIs to intelligent backend systems.
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
