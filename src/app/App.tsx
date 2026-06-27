import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ServicesSection } from "./components/ServicesSection";
import { ProductsSection } from "./components/ProductsSection";
import { TechStackSection } from "./components/TechStackSection";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { TeamSection } from "./components/TeamSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  function onToggleTheme() {
    setIsDark((prev) => !prev);
  }

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* MARKER-MAKE-KIT-INVOKED */}
      <Navbar isDark={isDark} onToggleTheme={onToggleTheme} />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <ProductsSection />
      <TechStackSection />
      <WhyChooseSection />
      <TeamSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
