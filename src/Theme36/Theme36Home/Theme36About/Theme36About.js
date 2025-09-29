import { useEffect, useRef, useState } from "react";
import { Heart, Users, TrendingUp, Award } from "lucide-react";

const Theme36About = () => {
  const sectionRef = useRef(null);
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

    return () => observer.disconnect();
  }, []);

  const values = [
    {
      icon: Heart,
      title: "Compassionate Leadership",
      description:
        "Leading with empathy and understanding, putting people at the heart of every decision.",
    },
    {
      icon: Users,
      title: "Community Impact",
      description:
        "Dedicated to creating meaningful change that uplifts communities and transforms lives.",
    },
    {
      icon: TrendingUp,
      title: "Innovation Pioneer",
      description:
        "Constantly pushing boundaries in HR technology and business transformation.",
    },
    {
      icon: Award,
      title: "Excellence Driven",
      description:
        "Committed to the highest standards of quality and integrity in all endeavors.",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        paddingTop: "6rem",
        paddingBottom: "6rem",
        background:
          "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--muted)) 100%)",
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
                backgroundColor: "hsl(var(--secondary))",
                color: "hsl(var(--secondary-foreground))",
                borderRadius: "0.375rem",
              }}
            >
              About Latha
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
              A Life Dedicated to
              <span
                className="text-gradient-primary"
                style={{ display: "block" }}
              >
                Purpose & Progress
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
              With over three decades of transformative leadership, Latha
              Padiarajan has redefined what it means to build businesses that
              serve both profit and purpose.
            </p>
          </div>

          {/* Story Content */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: isMobile ? "3rem" : "4rem",
              alignItems: "center",
              marginBottom: "5rem",
            }}
          >
            <div
              className="observe-scroll"
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "1.5rem",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.875rem",
                  fontWeight: "600",
                  color: "hsl(var(--foreground))",
                }}
              >
                From Vision to Impact
              </h3>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                  fontSize: "1.125rem",
                  color: "hsl(var(--muted-foreground))",
                  lineHeight: "1.625",
                }}
              >
                <p>
                  In 1992, alongside K. Pandia Rajan, Latha co-founded{" "}
                  <strong style={{ color: "hsl(var(--primary))" }}>
                    Ma Foi
                  </strong>
                  , pioneering India's HR services industry when the concept was
                  still nascent. What began as a bold vision transformed into
                  one of India's most respected HR companies.
                </p>
                <p>
                  After successfully exiting Ma Foi to Vedior NV in 2004, Latha
                  didn't rest on her laurels. In 2015, she returned to
                  entrepreneurship, co-founding{" "}
                  <strong style={{ color: "hsl(var(--primary))" }}>
                    CIEL HR Services
                  </strong>
                  , bringing cutting-edge analytics and technology to redefine
                  HR excellence.
                </p>
                <p>
                  Beyond business success, Latha's philanthropic initiatives
                  focus on education, healthcare, and women's empowerment,
                  believing that true success is measured by the positive impact
                  we create in others' lives.
                </p>
              </div>
            </div>

            {/* Values Grid */}
            <div
              className="observe-scroll"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(2, 1fr)",
                gap: "1.5rem",
              }}
            >
              {values.map((value, index) => (
                <div
                  key={index}
                  className="hover-lift"
                  style={{
                    padding: "1.5rem",
                    textAlign: "center",
                    backgroundColor: "hsl(var(--card))",
                    borderRadius: "0.5rem",
                    boxShadow:
                      "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                    transition: "all 0.3s",
                    animationDelay: `${index * 0.1}s`,
                  }}
                >
                  <value.icon
                    size={32}
                    style={{
                      color: "hsl(var(--primary))",
                      margin: "0 auto 1rem",
                    }}
                  />
                  <h4
                    style={{
                      fontWeight: "600",
                      color: "hsl(var(--foreground))",
                      marginBottom: "0.5rem",
                    }}
                  >
                    {value.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "0.875rem",
                      color: "hsl(var(--muted-foreground))",
                      lineHeight: "1.625",
                    }}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Philosophy Quote */}
          <div
            className="observe-scroll"
            style={{
              textAlign: "center",
            }}
          >
            <div
              style={{
                padding: "3rem",
                backgroundColor: "hsla(var(--primary), 0.05)",
                border: "1px solid hsla(var(--primary), 0.2)",
                borderRadius: "0.5rem",
              }}
            >
              <blockquote
                style={{
                  fontSize: isMobile ? "1.5rem" : "1.875rem",
                  fontFamily: "var(--font-display)",
                  fontWeight: "500",
                  color: "hsl(var(--primary))",
                  lineHeight: "1.625",
                }}
              >
                "Any organization does not sustain only on profits. It is much
                more than that – it's about creating value, building
                relationships, and making a meaningful difference in the world
                around us."
              </blockquote>
              <footer
                style={{
                  marginTop: "1.5rem",
                  color: "hsl(var(--muted-foreground))",
                }}
              >
                <cite style={{ fontWeight: "600" }}>— Latha Padiarajan</cite>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme36About;