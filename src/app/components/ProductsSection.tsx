import { useRef } from "react";
import { motion, useInView } from "motion/react";
import { ShoppingBag, User, Package, ShoppingCart, Star, Sparkles, ChevronRight } from "lucide-react";

const wishitFeatures = [
  { label: "Product Catalog with search & filters" },
  { label: "Shopping Cart & checkout flow" },
  { label: "User Authentication & profiles" },
  { label: "Order Management dashboard" },
  { label: "Fully Responsive Experience" },
];

const techPills = [
  { label: "Angular", color: "text-red-400 bg-red-500/10 border-red-500/20" },
  { label: "Spring Boot", color: "text-green-400 bg-green-500/10 border-green-500/20" },
  { label: "REST APIs", color: "text-blue-400 bg-blue-500/10 border-blue-500/20" },
  { label: "SQL Database", color: "text-yellow-400 bg-yellow-500/10 border-yellow-500/20" },
];

function WishitMockup() {
  return (
    <div className="relative rounded-2xl border border-border overflow-hidden bg-slate-950 shadow-2xl shadow-black/50">
      {/* Nav bar */}
      <div className="flex items-center justify-between px-4 py-3 bg-slate-900 border-b border-slate-800">
        <div className="flex items-center gap-2">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-blue-500 to-violet-600" />
          <span className="text-xs font-bold text-white" style={{ fontFamily: "'Onest', sans-serif" }}>
            Wishit
          </span>
        </div>
        <div className="flex items-center gap-3 text-slate-400">
          <ShoppingCart size={14} />
          <User size={14} />
        </div>
      </div>

      {/* Banner */}
      <div className="px-4 py-4 bg-gradient-to-r from-blue-600/20 to-violet-600/20 border-b border-slate-800">
        <div className="text-xs text-blue-300 font-medium mb-1">Summer Collection</div>
        <div className="text-base font-bold text-white" style={{ fontFamily: "'Onest', sans-serif" }}>
          Shop the Latest Arrivals
        </div>
        <div className="mt-2 inline-block px-3 py-1 rounded-full bg-blue-500 text-white text-xs font-medium">
          Shop Now
        </div>
      </div>

      {/* Products grid */}
      <div className="p-4 grid grid-cols-3 gap-2">
        {[
          { name: "Pro Sneakers", price: "$129", bg: "from-blue-900/50 to-slate-800" },
          { name: "Smart Watch", price: "$249", bg: "from-violet-900/50 to-slate-800" },
          { name: "Wireless Buds", price: "$79", bg: "from-cyan-900/50 to-slate-800" },
          { name: "Tech Backpack", price: "$89", bg: "from-purple-900/50 to-slate-800" },
          { name: "Slim Wallet", price: "$39", bg: "from-blue-900/50 to-slate-800" },
          { name: "Desk Lamp", price: "$59", bg: "from-indigo-900/50 to-slate-800" },
        ].map(({ name, price, bg }) => (
          <div key={name} className="rounded-lg overflow-hidden border border-slate-800">
            <div className={`h-14 bg-gradient-to-br ${bg} flex items-center justify-center`}>
              <Package size={16} className="text-slate-400" />
            </div>
            <div className="p-1.5 bg-slate-900">
              <div className="text-[9px] text-slate-300 truncate" style={{ fontFamily: "'Onest', sans-serif" }}>{name}</div>
              <div className="text-[9px] text-blue-400 font-semibold">{price}</div>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom nav */}
      <div className="flex border-t border-slate-800 bg-slate-900">
        {[ShoppingBag, ShoppingCart, Star, User].map((Icon, i) => (
          <button
            key={i}
            className={`flex-1 py-2 flex items-center justify-center ${i === 0 ? "text-blue-400" : "text-slate-600"}`}
          >
            <Icon size={13} />
          </button>
        ))}
      </div>
    </div>
  );
}

export function ProductsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="products" className="py-24 lg:py-32 relative overflow-hidden">
      <div
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)",
        }}
      />
      <div
        className="absolute bottom-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(139,92,246,0.4), transparent)",
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
            What We Build
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl tracking-tight mb-4"
            style={{ fontFamily: "'Onest', sans-serif", fontWeight: 800 }}
          >
            Products We've{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Created
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            We don't just build for clients — we build our own products too. Here's what we've
            created in-house to showcase our capabilities.
          </motion.p>
        </div>

        {/* Wishit featured */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.25 }}
          className="relative rounded-3xl border border-border overflow-hidden bg-card/40 backdrop-blur-sm p-8 lg:p-12"
          style={{
            background:
              "linear-gradient(135deg, rgba(99,102,241,0.05) 0%, rgba(139,92,246,0.05) 50%, rgba(34,211,238,0.03) 100%)",
          }}
        >
          {/* Top badge */}
          <div className="flex items-center justify-between flex-wrap gap-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                <ShoppingBag size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'Onest', sans-serif" }}>
                  Wishit
                </h3>
                <p className="text-xs text-muted-foreground">E-Commerce Platform</p>
              </div>
            </div>

            <span className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs font-medium">
              <Sparkles size={11} />
              Featured Internal Product
            </span>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left info */}
            <div>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Wishit is an in-house e-commerce platform developed by Clockin to demonstrate our
                full-stack product development capabilities — from design to deployment.
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {techPills.map(({ label, color }) => (
                  <span
                    key={label}
                    className={`px-3 py-1 rounded-lg border text-xs font-medium ${color}`}
                  >
                    {label}
                  </span>
                ))}
              </div>

              <h4
                className="text-sm font-semibold text-foreground mb-4"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                Platform Features
              </h4>
              <ul className="space-y-2.5">
                {wishitFeatures.map(({ label }) => (
                  <li key={label} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <ChevronRight size={14} className="text-cyan-400 shrink-0 mt-0.5" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Mockup */}
            <div className="max-w-xs mx-auto w-full">
              <WishitMockup />
            </div>
          </div>
        </motion.div>

        {/* Coming soon */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-6 rounded-2xl border border-dashed border-border p-8 text-center"
        >
          <Sparkles size={20} className="text-muted-foreground mx-auto mb-3" />
          <h4
            className="text-sm font-semibold text-foreground mb-1"
            style={{ fontFamily: "'Onest', sans-serif" }}
          >
            More Innovative Products Coming Soon
          </h4>
          <p className="text-xs text-muted-foreground">
            We're continuously building new tools, platforms, and solutions. Stay tuned.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
