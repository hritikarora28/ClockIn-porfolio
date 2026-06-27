import { motion } from "motion/react";
import { ArrowRight, CheckCircle2, BarChart3, Code2, Cpu, ShoppingBag, Globe, Layers, TrendingUp } from "lucide-react";

const features = [
  { icon: Code2, label: "Full-Stack Development" },
  { icon: ShoppingBag, label: "E-Commerce Solutions" },
  { icon: Globe, label: "API Development" },
  { icon: Cpu, label: "AI & Machine Learning" },
  { icon: Layers, label: "Cloud-Ready Architecture" },
];

const barHeights = [35, 55, 42, 78, 52, 90, 68, 82, 60, 95];

function DashboardCard() {
  return (
    <motion.div
      animate={{ y: [-10, 6, -10] }}
      transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      className="absolute top-8 right-0 w-68 lg:w-72 rounded-2xl border border-white/10 dark:border-white/8 bg-white/10 dark:bg-slate-900/80 backdrop-blur-2xl shadow-2xl shadow-black/40 p-5 z-10"
      style={{ width: "270px" }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <BarChart3 size={14} className="text-blue-400" />
          <span className="text-xs text-muted-foreground font-medium" style={{ fontFamily: "'Onest', sans-serif" }}>
            Project Analytics
          </span>
        </div>
        <span className="text-xs text-emerald-400 bg-emerald-400/10 px-2 py-0.5 rounded-full flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
          Live
        </span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {[
          { value: "2.4k", label: "Users", color: "text-blue-400" },
          { value: "$18k", label: "Revenue", color: "text-violet-400" },
          { value: "99.9%", label: "Uptime", color: "text-cyan-400" },
        ].map(({ value, label, color }) => (
          <div key={label} className="text-center">
            <div className={`text-lg font-bold ${color}`} style={{ fontFamily: "'Onest', sans-serif" }}>{value}</div>
            <div className="text-xs text-muted-foreground">{label}</div>
          </div>
        ))}
      </div>

      <div className="flex items-end gap-1 h-14">
        {barHeights.map((h, i) => (
          <motion.div
            key={i}
            initial={{ scaleY: 0 }}
            animate={{ scaleY: 1 }}
            transition={{ delay: 0.5 + i * 0.07, duration: 0.6, ease: "easeOut" }}
            className="flex-1 rounded-sm origin-bottom"
            style={{
              height: `${h}%`,
              background: i >= barHeights.length - 3
                ? "linear-gradient(to top, rgb(99,102,241), rgb(139,92,246))"
                : "rgba(99,102,241,0.2)"
            }}
          />
        ))}
      </div>

      <div className="mt-3 flex items-center gap-1.5 text-xs text-emerald-400">
        <TrendingUp size={11} />
        <span>+24% this month</span>
      </div>
    </motion.div>
  );
}

function CodeCard() {
  return (
    <motion.div
      animate={{ y: [6, -8, 6] }}
      transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      className="absolute bottom-24 right-8 rounded-xl border border-white/10 dark:bg-slate-950/90 bg-slate-900/80 backdrop-blur-xl shadow-2xl shadow-black/40 p-4 z-20"
      style={{ width: "230px" }}
    >
      <div className="flex items-center gap-1.5 mb-3">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
        <span className="ml-2 text-xs text-slate-500">app.tsx</span>
      </div>
      <pre className="text-xs leading-relaxed" style={{ fontFamily: "'JetBrains Mono', monospace" }}>
        <span className="text-violet-400">const</span>
        <span className="text-slate-300"> Product </span>
        <span className="text-blue-400">= </span>
        <span className="text-yellow-400">{"() =>"}</span>
        <span className="text-slate-300"> {"{"}</span>
        {"\n"}
        <span className="text-slate-300">  </span>
        <span className="text-violet-400">return</span>
        <span className="text-slate-300"> (</span>
        {"\n"}
        <span className="text-slate-300">    </span>
        <span className="text-cyan-400">{"<App"}</span>
        {"\n"}
        <span className="text-slate-300">      </span>
        <span className="text-green-400">data</span>
        <span className="text-slate-400">={"{products}"}</span>
        {"\n"}
        <span className="text-cyan-400">    {"/>"}</span>
        {"\n"}
        <span className="text-slate-300">  )</span>
        {"\n"}
        <span className="text-slate-300">{"}"}</span>
      </pre>
    </motion.div>
  );
}

function StatusBadge({
  label,
  color,
  delay,
  className = "",
}: {
  label: string;
  color: string;
  delay: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.5, type: "spring" }}
      className={`absolute flex items-center gap-2 bg-card/90 dark:bg-slate-900/90 backdrop-blur-xl border border-border rounded-full px-3 py-1.5 shadow-lg text-xs font-medium text-foreground z-30 ${className}`}
    >
      <span className={`w-2 h-2 rounded-full ${color} animate-pulse`} />
      {label}
    </motion.div>
  );
}

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Gradient orbs */}
        <div
          className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 dark:opacity-15 blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(99,102,241), transparent 70%)" }}
        />
        <div
          className="absolute top-1/2 -right-40 w-[500px] h-[500px] rounded-full opacity-15 dark:opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(139,92,246), transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-3xl"
          style={{ background: "radial-gradient(circle, rgb(34,211,238), transparent 70%)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.04] dark:opacity-[0.06]"
          style={{
            backgroundImage: "radial-gradient(circle, rgb(148,163,184) 1px, transparent 1px)",
            backgroundSize: "32px 32px"
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center py-16 lg:py-24">
          {/* Left column */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-card/50 backdrop-blur-sm text-xs text-muted-foreground mb-6"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
              Premium Software Development Agency
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-4xl sm:text-5xl lg:text-6xl leading-[1.08] tracking-tight mb-6"
              style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
            >
              Building Modern{" "}
              <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Digital Products
              </span>{" "}
              For Growing Businesses
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-muted-foreground leading-relaxed mb-8 max-w-xl"
              style={{ fontSize: "1.05rem" }}
            >
              Clockin helps businesses transform ideas into scalable digital products using modern
              technologies including Angular, React, Spring Boot, Node.js, NestJS, SQL, NoSQL, and
              Machine Learning.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap gap-3 mb-12"
            >
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 text-white font-medium hover:opacity-90 transition-all shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:-translate-y-0.5"
              >
                Start Your Project
                <ArrowRight size={16} />
              </a>
              <a
                href="#products"
                className="flex items-center gap-2 px-6 py-3 rounded-xl border border-border bg-card/50 backdrop-blur-sm text-foreground font-medium hover:bg-muted/50 transition-all"
              >
                Explore Our Work
              </a>
            </motion.div>

            {/* Feature badges */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.65 }}
              className="flex flex-wrap gap-2"
            >
              {features.map(({ icon: Icon, label }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-card/60 dark:bg-card/40 border border-border backdrop-blur-sm text-xs text-muted-foreground hover:text-foreground hover:border-blue-500/50 transition-colors cursor-default"
                >
                  <Icon size={12} className="text-blue-400" />
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Right column — floating UI */}
          <div className="relative h-[460px] lg:h-[520px] hidden lg:block">
            <DashboardCard />
            <CodeCard />
            <StatusBadge
              label="Build deployed ✓"
              color="bg-emerald-400"
              delay={1.2}
              className="top-2 left-4"
            />
            <StatusBadge
              label="AI model ready"
              color="bg-cyan-400"
              delay={1.5}
              className="bottom-12 left-0"
            />

            {/* Decorative ring */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-dashed border-blue-500/20 pointer-events-none"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-dashed border-violet-500/20 pointer-events-none"
            />

            {/* Center glow */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full blur-2xl opacity-30"
              style={{ background: "radial-gradient(circle, rgb(99,102,241), transparent)" }}
            />
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
        className="absolute bottom-0 inset-x-0 border-t border-border bg-card/30 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap justify-center gap-8">
          {[
            { label: "Technologies Mastered", value: "15+" },
            { label: "Development Approach", value: "Agile" },
            { label: "Code Quality", value: "Enterprise" },
            { label: "Architecture", value: "Scalable" },
          ].map(({ label, value }) => (
            <div key={label} className="flex items-center gap-3">
              <CheckCircle2 size={14} className="text-cyan-400 shrink-0" />
              <span className="text-sm text-muted-foreground">
                <span className="text-foreground font-medium" style={{ fontFamily: "'Onest', sans-serif" }}>{value}</span>
                {" "}{label}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
