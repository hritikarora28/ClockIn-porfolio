import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { Globe, Building2, ShoppingCart, Code2, Server, Database, Brain, Workflow } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Custom Website Development",
    desc: "Modern responsive business websites and web platforms crafted for performance and conversion.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Building2,
    title: "Enterprise Web Applications",
    desc: "Large-scale applications designed for growth, reliability, and seamless user experience.",
    gradient: "from-violet-500 to-blue-500",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Solutions",
    desc: "Online stores and digital commerce experiences that drive sales and delight customers.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Code2,
    title: "API Development",
    desc: "Secure, well-documented, and scalable REST APIs built for modern integrations.",
    gradient: "from-blue-500 to-violet-500",
  },
  {
    icon: Server,
    title: "Backend Development",
    desc: "Robust server-side systems powered by Spring Boot, Node.js, and NestJS architecture.",
    gradient: "from-violet-500 to-purple-500",
  },
  {
    icon: Database,
    title: "Database Engineering",
    desc: "Optimized SQL and NoSQL database solutions designed for scale and data integrity.",
    gradient: "from-purple-500 to-violet-500",
  },
  {
    icon: Brain,
    title: "AI & Machine Learning",
    desc: "Intelligent business solutions powered by machine learning models and data-driven insights.",
    gradient: "from-cyan-500 to-violet-500",
  },
  {
    icon: Workflow,
    title: "Business Automation",
    desc: "Workflow automation and operational efficiency systems that save time and reduce errors.",
    gradient: "from-blue-500 to-cyan-400",
  },
];

export function ServicesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="services" className="py-24 lg:py-32 relative">
      <div
        className="absolute inset-0 pointer-events-none opacity-30 dark:opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(99,102,241,0.08), transparent)",
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
            What We Do
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
          >
            Services We{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Deliver
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            From web applications to intelligent automation, we build software solutions that
            transform how businesses operate and grow.
          </motion.p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map(({ icon: Icon, title, desc, gradient }, i) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
              className="group p-6 rounded-2xl border border-border bg-card/50 hover:bg-card hover:border-blue-500/30 hover:shadow-xl hover:shadow-blue-500/5 transition-all hover:-translate-y-1 cursor-default"
            >
              <div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br ${gradient} p-0.5 mb-4 shadow-lg`}
              >
                <div className="w-full h-full rounded-[10px] bg-card/90 flex items-center justify-center">
                  <Icon size={18} className="text-foreground" />
                </div>
              </div>

              <h3
                className="text-sm font-semibold text-foreground mb-2 leading-snug"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                {title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
