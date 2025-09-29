import { Heart, Linkedin, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

const Theme36Footer = () => {
  const currentYear = new Date().getFullYear();
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const quickLinks = [
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
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      style={{
        backgroundColor: "hsl(var(--secondary))",
        color: "hsl(var(--secondary-foreground))",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          paddingTop: "4rem",
          paddingBottom: "4rem",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(4, 1fr)",
            gap: "2rem",
          }}
        >
          {/* Brand Section */}
          <div
            style={{
              gridColumn: isMobile ? "span 1" : "span 2",
            }}
          >
            <button
              onClick={scrollToTop}
              style={{
                fontFamily: "var(--font-display)",
                fontSize: "1.875rem",
                fontWeight: "bold",
                color: "white",
                marginBottom: "1rem",
                background: "none",
                border: "none",
                cursor: "pointer",
                transition: "color 0.3s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "hsl(var(--accent))";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "white";
              }}
            >
              Latha Padiarajan
            </button>
            <p
              style={{
                color: "rgba(255, 255, 255, 0.8)",
                fontSize: "1.125rem",
                lineHeight: "1.625",
                marginBottom: "1.5rem",
              }}
            >
              Entrepreneur, Philanthropist, and Visionary Leader dedicated to
              transforming business and society through innovation, integrity, and impact.
            </p>
            <div
              style={{
                display: "flex",
                gap: "1rem",
              }}
            >
              <a
                href="mailto:latha@cielhr.com"
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  transition: "all 0.3s",
                  textDecoration: "none",
                }}
                aria-label="Email Latha Padiarajan"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--accent))";
                  e.currentTarget.style.color = "hsl(var(--accent-foreground))";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Mail size={20} />
              </a>
              <a
                href="https://linkedin.com/in/lathapadiarajan"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  padding: "0.75rem",
                  borderRadius: "0.5rem",
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                  color: "white",
                  transition: "all 0.3s",
                  textDecoration: "none",
                }}
                aria-label="Connect on LinkedIn"
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "hsl(var(--accent))";
                  e.currentTarget.style.color = "hsl(var(--accent-foreground))";
                  e.currentTarget.style.transform = "scale(1.1)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
                  e.currentTarget.style.color = "white";
                  e.currentTarget.style.transform = "scale(1)";
                }}
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              style={{
                fontWeight: "600",
                color: "white",
                fontSize: "1.125rem",
                marginBottom: "1rem",
              }}
            >
              Quick Links
            </h3>
            <ul
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
              }}
            >
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    style={{
                      color: "rgba(255, 255, 255, 0.8)",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      transition: "color 0.3s",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = "hsl(var(--accent))";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)";
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3
              style={{
                fontWeight: "600",
                color: "white",
                fontSize: "1.125rem",
                marginBottom: "1rem",
              }}
            >
              Get In Touch
            </h3>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "0.75rem",
                color: "rgba(255, 255, 255, 0.8)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <Mail size={16} />
                <span>latha@cielhr.com</span>
              </div>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                }}
              >
                <MapPin size={16} />
                <span>Bangalore, India</span>
              </div>
            </div>
          </div>
        </div>

        {/* Companies */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
          }}
        >
          <div
            style={{
              textAlign: "center",
              marginBottom: "2rem",
            }}
          >
            <h4
              style={{
                fontWeight: "600",
                color: "white",
                fontSize: "1.125rem",
                marginBottom: "1rem",
              }}
            >
              Companies Founded
            </h4>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "hsl(var(--accent))",
                    marginBottom: "0.25rem",
                  }}
                >
                  Ma Foi
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.875rem",
                  }}
                >
                  1992 - 2004
                </div>
              </div>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: "bold",
                    color: "hsl(var(--accent))",
                    marginBottom: "0.25rem",
                  }}
                >
                  CIEL HR
                </div>
                <div
                  style={{
                    color: "rgba(255, 255, 255, 0.6)",
                    fontSize: "0.875rem",
                  }}
                >
                  2015 - Present
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{
            marginTop: "2rem",
            paddingTop: "2rem",
            borderTop: "1px solid rgba(255, 255, 255, 0.2)",
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <div
            style={{
              color: "rgba(255, 255, 255, 0.6)",
              fontSize: "0.875rem",
              marginBottom: isMobile ? "1rem" : "0",
            }}
          >
            © {currentYear} Latha Padiarajan. All rights reserved.
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              color: "rgba(255, 255, 255, 0.8)",
              fontSize: "0.875rem",
            }}
          >
            <span>Made with</span>
            <Heart size={16} style={{ color: "hsl(var(--accent))" }} />
            <span>for positive impact</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Theme36Footer;