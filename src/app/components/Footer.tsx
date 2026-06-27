import { Zap, Github, Twitter, Linkedin, ArrowUpRight } from "lucide-react";

const services = [
  "Custom Website Development",
  "Enterprise Web Applications",
  "E-Commerce Solutions",
  "API Development",
  "Backend Systems",
  "AI & Machine Learning",
];

const technologies = [
  "Angular & React",
  "Spring Boot",
  "Node.js & NestJS",
  "MySQL & PostgreSQL",
  "MongoDB",
  "Docker & CI/CD",
];

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "What We Do", href: "#services" },
  { label: "What We Build", href: "#products" },
  { label: "Tech Stack", href: "#tech" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(99,102,241,0.04), transparent)",
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top section */}
        <div className="py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <Zap size={15} className="text-white fill-white" />
              </div>
              <span className="text-lg font-bold" style={{ fontFamily: "'Onest', sans-serif" }}>
                <span className="text-foreground">CLOCK</span>
                <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">IN</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6">
              A modern software development company building scalable web applications,
              e-commerce platforms, APIs, and AI-powered solutions.
            </p>
            <div className="flex gap-2">
              {[
                { icon: Github, label: "GitHub", href: "#" },
                { icon: Twitter, label: "Twitter", href: "#" },
                { icon: Linkedin, label: "LinkedIn", href: "#" },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="w-9 h-9 rounded-lg border border-border bg-card/50 hover:bg-muted/60 hover:border-blue-500/40 flex items-center justify-center transition-all group"
                  aria-label={label}
                >
                  <Icon size={14} className="text-muted-foreground group-hover:text-foreground transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4
              className="text-sm font-semibold text-foreground mb-4"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Services
            </h4>
            <ul className="space-y-2.5">
              {services.map((s) => (
                <li key={s}>
                  <a
                    href="#services"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technologies */}
          <div>
            <h4
              className="text-sm font-semibold text-foreground mb-4"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Technologies
            </h4>
            <ul className="space-y-2.5">
              {technologies.map((t) => (
                <li key={t}>
                  <span className="text-sm text-muted-foreground">{t}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick links + CTA */}
          <div>
            <h4
              className="text-sm font-semibold text-foreground mb-4"
              style={{ fontFamily: "'Onest', sans-serif" }}
            >
              Quick Links
            </h4>
            <ul className="space-y-2.5 mb-8">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-violet-600 text-white text-sm font-medium hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/20"
            >
              Start a Project
              <ArrowUpRight size={13} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="py-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Clockin. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#contact" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
