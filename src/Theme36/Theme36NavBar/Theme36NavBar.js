import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Theme36NavBar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { label: "About", href: "#about" },
    { label: "Journey", href: "#journey" },
    { label: "Achievements", href: "#achievements" },
    { label: "Philosophy", href: "#philosophy" },
    { label: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 50,
        transition: "all 0.5s",
        backgroundColor: isScrolled ? "hsla(var(--background), 0.95)" : "transparent",
        backdropFilter: isScrolled ? "blur(16px)" : "none",
        boxShadow: isScrolled ? "0 20px 60px -10px hsla(var(--primary), 0.15)" : "none",
        borderBottom: isScrolled ? "1px solid hsla(var(--border), 0.5)" : "none",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* Logo */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
            }}
          >
            <h1
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.5rem",
                fontWeight: "bold",
                transition: "color 0.3s",
                color: isScrolled ? "hsl(var(--primary))" : "white",
              }}
            >
              Latha Padiarajan
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div
            style={{
              display: isMobile ? "none" : "flex",
              alignItems: "center",
              gap: "2rem",
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => scrollToSection(item.href)}
                style={{
                  position: "relative",
                  fontWeight: "500",
                  transition: "color 0.3s",
                  color: isScrolled ? "hsl(var(--foreground))" : "white",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  padding: "0.5rem 0",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "hsl(var(--accent))";
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.width = "100%";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = isScrolled ? "hsl(var(--foreground))" : "white";
                  const span = e.currentTarget.querySelector("span");
                  if (span) span.style.width = "0";
                }}
              >
                {item.label}
                <span
                  style={{
                    position: "absolute",
                    bottom: "-0.25rem",
                    left: 0,
                    width: "0",
                    height: "0.125rem",
                    backgroundColor: "hsl(var(--accent))",
                    transition: "all 0.3s",
                  }}
                ></span>
              </button>
            ))}
            <button
              style={{
                border: "2px solid",
                borderColor: isScrolled ? "hsl(var(--primary))" : "white",
                color: isScrolled ? "hsl(var(--primary))" : "white",
                backgroundColor: "transparent",
                padding: "0.5rem 1rem",
                borderRadius: "0.375rem",
                fontWeight: "500",
                transition: "all 0.3s",
                cursor: "pointer",
              }}
              onClick={() => scrollToSection("#contact")}
              onMouseEnter={(e) => {
                if (isScrolled) {
                  e.currentTarget.style.backgroundColor = "hsl(var(--primary))";
                  e.currentTarget.style.color = "hsl(var(--primary-foreground))";
                } else {
                  e.currentTarget.style.backgroundColor = "white";
                  e.currentTarget.style.color = "hsl(var(--primary))";
                }
                e.currentTarget.style.transform = "scale(1.05)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "transparent";
                e.currentTarget.style.color = isScrolled ? "hsl(var(--primary))" : "white";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              Get In Touch
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            style={{
              display: isMobile ? "block" : "none",
              color: isScrolled ? "hsl(var(--foreground))" : "white",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: "0.5rem",
              borderRadius: "0.375rem",
              transition: "all 0.2s",
            }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "hsl(var(--accent) / 0.1)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
            }}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div
            style={{
              display: isMobile ? "block" : "none",
              position: "absolute",
              top: "100%",
              left: 0,
              right: 0,
              backgroundColor: "hsl(var(--background) / 0.95)",
              backdropFilter: "blur(12px)",
              borderBottom: "1px solid hsl(var(--border) / 0.5)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.12)",
            }}
          >
            <div
              style={{
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => {
                    scrollToSection(item.href);
                    setIsMobileMenuOpen(false);
                  }}
                  style={{
                    display: "block",
                    width: "100%",
                    textAlign: "left",
                    fontWeight: "500",
                    color: "hsl(var(--foreground))",
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    padding: "0.75rem 1rem",
                    borderRadius: "0.375rem",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "hsl(var(--accent) / 0.1)";
                    e.currentTarget.style.color = "hsl(var(--accent))";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "hsl(var(--foreground))";
                  }}
                >
                  {item.label}
                </button>
              ))}
              <button
                style={{
                  width: "100%",
                  border: "2px solid hsl(var(--primary))",
                  color: "hsl(var(--primary))",
                  backgroundColor: "transparent",
                  padding: "0.75rem 1rem",
                  borderRadius: "0.375rem",
                  fontWeight: "500",
                  cursor: "pointer",
                  transition: "all 0.3s",
                }}
                onClick={() => {
                  scrollToSection("#contact");
                  setIsMobileMenuOpen(false);
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--primary))";
                  e.currentTarget.style.color = "hsl(var(--primary-foreground))";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = "hsl(var(--primary))";
                }}
              >
                Get In Touch
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}