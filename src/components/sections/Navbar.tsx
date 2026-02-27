"use client";

import { useState, useEffect } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Soluciones", href: "#soluciones" },
  { label: "Casos de éxito", href: "#casos" },
  { label: "Cómo trabajamos", href: "#proceso" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const main = document.querySelector("main");
    const scrollElement = main || window;

    const handleScroll = () => {
      const scrollTop = main ? main.scrollTop : window.scrollY;
      setIsScrolled(scrollTop > 20);
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(`#${entry.target.id}`);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      rootMargin: "-50% 0px -50% 0px",
    });

    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    scrollElement.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      scrollElement.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className="fixed top-0 left-0 right-0 z-50"
      >
        <nav
          className={cn(
            "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 transition-colors duration-300",
            isScrolled
              ? "bg-gray-50/80 backdrop-blur-xl border-b border-gray-200/80 shadow-sm"
              : "bg-transparent"
          )}
        >
          <div className="flex h-16 md:h-20 items-center justify-between">
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/logos/cadly_logo.avif"
                alt="Cadly Labs"
                width={40}
                height={40}
                className="h-8 w-8 md:h-10 md:w-10"
              />
              <span className="font-heading text-xl font-bold text-gray-900 ">
                Cadly Labs
              </span>
            </a>

            <div className="hidden items-center align-middle gap-8 md:flex">
              {navItems.map((item) => (
                <a
                  href={item.href}
                  key={item.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-brand-600",
                    activeSection === item.href
                      ? "text-brand-600"
                      : "text-gray-600"
                  )}
                >
                  {item.label}
                </a>
              ))}
              <button
                onClick={() => handleNavClick("#contacto")}
                className="rounded-none bg-brand-600 px-5 py-2 text-sm font-medium text-white transition-colors hover:bg-brand-700 cursor-pointer "
              >
                ¿Hablamos?
              </button>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <ListIcon className="h-6 w-6" />
              )}
            </button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 z-50 w-80 max-w-[85vw] bg-white shadow-xl md:hidden"
            >
              <div className="flex h-16 items-center justify-between border-b px-4">
                <span className="font-heading text-lg font-bold text-gray-900">
                  Menú
                </span>
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <XIcon className="h-6 w-6" />
                </button>
              </div>
              <nav className="flex flex-col p-4">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "py-3 text-left text-lg font-medium transition-colors",
                      activeSection === item.href
                        ? "text-brand-600"
                        : "text-gray-700 hover:text-brand-600"
                    )}
                  >
                    {item.label}
                  </motion.button>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: navItems.length * 0.05 }}
                  onClick={() => handleNavClick("#contacto")}
                  className="mt-4 rounded-none bg-brand-600 px-8 py-4 text-center text-base font-medium text-white transition-colors hover:bg-brand-700"
                >
                   ¿Hablamos?
                </motion.button>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
