import { useEffect, useRef, useState } from "react";
import { Building, TrendingUp, Heart, Users, Globe, Award } from "lucide-react";
import achievementsBg from "@/assets/achievements-bg.jpg";

const Theme36Testimonials = () => {
  const sectionRef = useRef(null);
  const parallaxRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
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

    const handleScroll = () => {
      if (parallaxRef.current) {
        const scrolled = window.pageYOffset;
        const element = parallaxRef.current;
        const rect = element.getBoundingClientRect();
        const speed = 0.3;

        if (rect.top < window.innerHeight && rect.bottom > 0) {
          const yPos = -(scrolled * speed);
          element.style.transform = `translateY(${yPos}px)`;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const achievements = [
    {
      icon: Building,
      title: "Industry Pioneer",
      description: "Co-founded Ma Foi in 1992, pioneering India's HR services industry and establishing it as a cornerstone of modern business practices.",
      metric: "30+ Years",
      metricLabel: "of Leadership"
    },
    {
      icon: TrendingUp,
      title: "Strategic Exit Success",
      description: "Successfully sold Ma Foi to Dutch multinational Vedior NV in 2004, validating the company's market value and industry credibility.",
      metric: "2004",
      metricLabel: "Exit Year"
    },
    {
      icon: Heart,
      title: "Philanthropic Impact",
      description: "Dedicated to social causes including education, healthcare, and women's empowerment through various charitable initiatives.",
      metric: "1000+",
      metricLabel: "Lives Impacted"
    },
    {
      icon: Users,
      title: "Team Leadership",
      description: "Built and led high-performing teams that transformed industries and created lasting positive change in the business landscape.",
      metric: "5000+",
      metricLabel: "Professionals Mentored"
    },
    {
      icon: Globe,
      title: "Global Recognition",
      description: "Earned international recognition for innovative HR practices and contributions to business excellence in the Asia-Pacific region.",
      metric: "Global",
      metricLabel: "Impact"
    },
    {
      icon: Award,
      title: "Excellence Awards",
      description: "Received numerous industry awards and recognitions for outstanding contributions to HR innovation and business leadership.",
      metric: "25+",
      metricLabel: "Awards Won"
    },
  ];

  return (
    <section
      id="achievements"
      ref={sectionRef}
      style={{
        position: "relative",
        paddingTop: "6rem",
        paddingBottom: "6rem",
        overflow: "hidden",
      }}
    >
      {/* Parallax Background */}
      <div
        ref={parallaxRef}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: `url(${achievementsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          opacity: 0.1,
          zIndex: -1,
        }}
      />

      {/* Overlay */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "hsl(var(--background))",
          opacity: 0.95,
          zIndex: -1,
        }}
      />

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
                backgroundColor: "hsl(var(--accent))",
                color: "hsl(var(--accent-foreground))",
                borderRadius: "0.375rem",
              }}
            >
              Achievements & Impact
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
              A Legacy of
              <span
                className="text-gradient-accent"
                style={{ display: "block" }}
              >
                Excellence & Innovation
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
              Three decades of transformative leadership that have shaped
              industries, built successful companies, and created lasting
              positive impact.
            </p>
          </div>

          {/* Achievements Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)",
              gap: "2rem",
            }}
          >
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="observe-scroll hover-lift"
                style={{
                  padding: "2rem",
                  backgroundColor: "hsl(var(--card))",
                  borderRadius: "0.5rem",
                  boxShadow:
                    "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
                  transition: "all 0.3s",
                  animationDelay: `${index * 0.1}s`,
                  border: "1px solid hsl(var(--border))",
                }}
              >
                <achievement.icon
                  size={40}
                  style={{
                    color: "hsl(var(--accent))",
                    marginBottom: "1.5rem",
                  }}
                />
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.25rem",
                    fontWeight: "600",
                    color: "hsl(var(--foreground))",
                    marginBottom: "1rem",
                  }}
                >
                  {achievement.title}
                </h3>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: "1.625",
                    marginBottom: "1.5rem",
                  }}
                >
                  {achievement.description}
                </p>
                <div
                  style={{
                    paddingTop: "1.5rem",
                    borderTop: "1px solid hsl(var(--border))",
                  }}
                >
                  <div
                    style={{
                      fontSize: "2rem",
                      fontWeight: "bold",
                      color: "hsl(var(--accent))",
                      marginBottom: "0.25rem",
                    }}
                  >
                    {achievement.metric}
                  </div>
                  <div
                    style={{
                      fontSize: "0.875rem",
                      color: "hsl(var(--muted-foreground))",
                      fontWeight: "500",
                    }}
                  >
                    {achievement.metricLabel}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Impact Statement */}
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
                backgroundColor: "hsla(var(--accent), 0.05)",
                border: "1px solid hsla(var(--accent), 0.2)",
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
                Continuing the Journey
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
                Today, through CIEL HR Services, Latha continues to innovate and
                lead, proving that true success comes from the ability to adapt,
                evolve, and always put people first.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme36Testimonials;