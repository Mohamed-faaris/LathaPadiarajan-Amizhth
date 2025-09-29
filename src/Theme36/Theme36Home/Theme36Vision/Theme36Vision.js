import { useEffect, useRef, useState } from "react";
import { Lightbulb, Compass, Target, Handshake } from "lucide-react";
import './style.js';

const Theme36Vision = () => {
  const sectionRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-up");
          }
        });
      },
      { threshold: 0.2 }
    );

    const elements = sectionRef.current?.querySelectorAll(".observe-scroll");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const principles = [
    {
      icon: Lightbulb,
      title: "Innovation with Purpose",
      description: "Embracing cutting-edge solutions while staying grounded in human values and societal needs.",
      quote: "True innovation serves humanity."
    },
    {
      icon: Compass,
      title: "Ethical Leadership",
      description: "Leading with integrity, transparency, and unwavering commitment to doing what's right.",
      quote: "Character defines true leadership."
    },
    {
      icon: Target,
      title: "Strategic Excellence",
      description: "Pursuing ambitious goals with precision, focus, and measurable impact.",
      quote: "Excellence is not an act, but a habit."
    },
    {
      icon: Handshake,
      title: "Collaborative Growth",
      description: "Building partnerships that create shared value and mutual success.",
      quote: "Together we achieve more."
    },
  ];

  return (
    <section
      id="philosophy"
      ref={sectionRef}
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        backgroundColor: "hsl(var(--background))",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
        }}
      >
        <div
          style={{
            maxWidth: "64rem",
            margin: "0 auto",
          }}
        >
          {/* Section Header */}
          <div
            className="observe-scroll"
            style={{
              textAlign: "center",
              marginBottom: "4rem",
            }}
          >
            <div
              style={{
                display: "inline-block",
                marginBottom: "1rem",
                paddingLeft: "1.5rem",
                paddingRight: "1.5rem",
                paddingTop: "0.5rem",
                paddingBottom: "0.5rem",
                fontSize: "0.875rem",
                fontWeight: "500",
                backgroundColor: "hsl(var(--primary))",
                color: "hsl(var(--primary-foreground))",
                borderRadius: "0.375rem",
              }}
            >
              Guiding Philosophy
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)",
                fontSize: isMobile ? "2.5rem" : "3rem",
                fontWeight: "bold",
                color: "hsl(var(--foreground))",
                marginBottom: "1.5rem",
              }}
            >
              Principles That
              <span
                className="text-gradient-primary"
                style={{ display: "block" }}
              >
                Drive Change
              </span>
            </h2>
            <p
              style={{
                fontSize: "1.25rem",
                color: "hsl(var(--muted-foreground))",
                lineHeight: "1.625",
                maxWidth: "48rem",
                margin: "0 auto",
              }}
            >
              A leadership philosophy built on the foundation of purpose-driven
              innovation and human-centric business practices.
            </p>
          </div>

          {/* Principles Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "2rem",
            }}
          >
            {principles.map((principle, index) => (
              <div
                key={index}
                className="observe-scroll hover-lift"
                style={{
                  padding: "2rem",
                  backgroundColor: "hsl(var(--card))",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                  transition: "all 0.3s",
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <principle.icon
                  size={40}
                  style={{
                    color: "hsl(var(--primary))",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.5rem",
                    fontWeight: "600",
                    color: "hsl(var(--foreground))",
                    marginBottom: "1rem",
                  }}
                >
                  {principle.title}
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: "1.625",
                    marginBottom: "1.5rem",
                  }}
                >
                  {principle.description}
                </p>
                <blockquote
                  style={{
                    fontSize: "1rem",
                    fontStyle: "italic",
                    color: "hsl(var(--primary))",
                    borderLeft: "3px solid hsl(var(--primary))",
                    paddingLeft: "1rem",
                  }}
                >
                  "{principle.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div
            className="observe-scroll"
            style={{
              marginTop: "5rem",
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "3rem",
                background:
                  "linear-gradient(135deg, hsla(var(--primary), 0.1) 0%, hsla(var(--accent), 0.1) 100%)",
                border: "1px solid hsla(var(--primary), 0.2)",
                borderRadius: "0.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "2rem",
                  fontWeight: "600",
                  color: "hsl(var(--foreground))",
                  marginBottom: "1.5rem",
                }}
              >
                Vision for Tomorrow
              </h3>
              <p
                style={{
                  fontSize: "1.25rem",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: "1.625",
                  maxWidth: "48rem",
                  margin: "0 auto",
                }}
              >
                To create organizations that not only thrive in the marketplace
                but also contribute meaningfully to societal progress, fostering
                a world where business success and human flourishing go hand in
                hand.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme36Vision;