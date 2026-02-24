"use client";

import { useState, useEffect } from "react";
import { ListIcon, XIcon } from "@phosphor-icons/react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

const navItems = [
  { label: "Soluciones", href: "/soluciones/" },
  { label: "Casos", href: "#casos" },
  { label: "Cómo trabajamos", href: "#proceso" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [currentPath, setCurrentPath] = useState("");

  useEffect(() => {
    let observer: IntersectionObserver;
    let scrollElement: Element | Window;
    let handleScroll: () => void;

    const init = () => {
      setCurrentPath(window.location.pathname);
      
      const main = document.querySelector("main");
      scrollElement = main || window;

      handleScroll = () => {
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

      observer = new IntersectionObserver(observerCallback, {
        rootMargin: "-50% 0px -50% 0px",
      });

      const sections = document.querySelectorAll("section[id]");
      sections.forEach((section) => observer.observe(section));

      scrollElement.addEventListener("scroll", handleScroll);
      handleScroll();
    };

    const cleanup = () => {
      if (scrollElement && handleScroll) {
        scrollElement.removeEventListener("scroll", handleScroll);
      }
      if (observer) {
        observer.disconnect();
      }
    };

    init();

    const handlePageLoad = () => {
      cleanup();
      init();
    };

    document.addEventListener("astro:page-load", handlePageLoad);

    return () => {
      cleanup();
      document.removeEventListener("astro:page-load", handlePageLoad);
    };
  }, []);

  const handleNavClick = (href: string, e?: React.MouseEvent) => {
    setIsMobileMenuOpen(false);
    
    if (href.startsWith("#")) {
      if (window.location.pathname !== "/") {
        if (e) e.preventDefault();
        window.location.href = "/" + href;
        return;
      }
      
      if (e) e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else if (e) {
      if (e.currentTarget.tagName !== 'A') {
        window.location.href = href;
      }
    } else {
      window.location.href = href;
    }
  };

  const getHref = (href: string) => {
    if (href.startsWith("#") && currentPath !== "/") {
      return "/" + href;
    }
    return href;
  };

  const isActive = (href: string) => {
    if (href.startsWith("/")) {
      return currentPath.startsWith(href);
    }
    return activeSection === href && currentPath === "/";
  };
  return (
    <>
      <header
        className={cn(
          "fixed left-0 right-0 z-50 transition-all duration-500",
          isScrolled ? "top-4" : "top-0"
        )}
      >
        <nav
          className={cn(
            "mx-auto transition-all duration-500",
            isScrolled
              ? "max-w-4xl rounded-full border border-white/20 bg-white/70 px-4 shadow-lg shadow-black/5 backdrop-blur-xl"
              : "max-w-7xl bg-transparent px-4 sm:px-6 lg:px-8"
          )}
        >
          <div
            className={cn(
              "flex items-center justify-between transition-all duration-500",
              isScrolled ? "h-14" : "h-16 md:h-20"
            )}
          >
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
                <motion.a
                  href={getHref(item.href)}
                  key={item.href}
                  onClick={(e) => handleNavClick(item.href, e)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className={cn(
                    "font-sans text-sm font-medium transition-colors hover:text-brand-600",
                    isActive(item.href)
                      ? "text-brand-600"
                      : "text-gray-600"
                  )}
                >
                  {item.label}
                </motion.a>
              ))}
              <motion.button
                onClick={(e) => handleNavClick("#contacto", e)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 100, damping: 20 }}
                className="font-sans cursor-pointer rounded-full bg-brand-600 px-3 py-1 text-sm font-medium text-white transition-colors hover:bg-brand-700"
              >
                ¿Hablamos?
              </motion.button>
            </div>

            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="rounded-lg p-2 text-gray-600 hover:bg-gray-100 md:hidden"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <XIcon className="h-6 w-6" />
              ) : (
                <ListIcon className="h-6 w-6" />
              )}
            </motion.button>
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
                <motion.button
                  onClick={() => setIsMobileMenuOpen(false)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  className="rounded-lg p-2 text-gray-600 hover:bg-gray-100"
                  aria-label="Close menu"
                >
                  <XIcon className="h-6 w-6" />
                </motion.button>
              </div>
              <nav className="flex flex-col p-4">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={getHref(item.href)}
                    onClick={(e) => handleNavClick(item.href, e)}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0, transition: { delay: index * 0.05 } }}
                    whileHover={{ x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ type: "spring", stiffness: 100, damping: 20 }}
                    className={cn(
                      "font-sans py-3 text-left text-lg font-medium transition-colors",
                      isActive(item.href)
                        ? "text-brand-600"
                        : "text-gray-700 hover:text-brand-600"
                    )}
                  >
                    {item.label}
                  </motion.a>
                ))}
                <motion.button
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0, transition: { delay: navItems.length * 0.05 } }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 100, damping: 20 }}
                  onClick={(e) => handleNavClick("#contacto", e)}
                  className="font-sans mt-4 rounded-full bg-brand-600 px-6 py-3 text-center text-base font-medium text-white transition-colors hover:bg-brand-700"
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
