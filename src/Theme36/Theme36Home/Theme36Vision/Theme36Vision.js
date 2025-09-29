import { useEffect, useRef, useState } from "react";
import { Lightbulb, Compass, Target, Handshake } from "lucide-react";
import styles from "./style.js";

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
      description:
        "Embracing cutting-edge solutions while staying grounded in human values and societal needs.",
      quote: "True innovation serves humanity.",
    },
    {
      icon: Compass,
      title: "Ethical Leadership",
      description:
        "Leading with integrity, transparency, and unwavering commitment to doing what's right.",
      quote: "Character defines true leadership.",
    },
    {
      icon: Target,
      title: "Strategic Excellence",
      description:
        "Pursuing ambitious goals with precision, focus, and measurable impact.",
      quote: "Excellence is not an act, but a habit.",
    },
    {
      icon: Handshake,
      title: "Collaborative Growth",
      description:
        "Building partnerships that create shared value and mutual success.",
      quote: "Together we achieve more.",
    },
  ];

  return (
    <section id="philosophy" ref={sectionRef} style={styles.section}>
      <div style={styles.sectionContainer}>
        <div style={styles.sectionInner}>
          {/* Section Header */}
          <div className="observe-scroll" style={styles.header}>
            <div style={styles.badge}>Guiding Philosophy</div>
            <h2 style={isMobile ? styles.titleMobile : styles.title}>
              Principles That
              <span
                className="text-gradient-primary"
                style={styles.gradientText}
              >
                Drive Change
              </span>
            </h2>
            <p style={styles.subtitle}>
              A leadership philosophy built on the foundation of purpose-driven
              innovation and human-centric business practices.
            </p>
          </div>

          {/* Principles Grid */}
          <div style={isMobile ? styles.gridMobile : styles.grid}>
            {principles.map((principle, index) => (
              <div
                key={index}
                className="observe-scroll hover-lift"
                style={{ ...styles.card, animationDelay: `${index * 0.1}s` }}
              >
                <principle.icon size={40} style={styles.icon} />
                <h3 style={styles.cardTitle}>{principle.title}</h3>
                <p style={styles.cardText}>{principle.description}</p>
                <blockquote style={styles.quote}>
                  "{principle.quote}"
                </blockquote>
              </div>
            ))}
          </div>

          {/* Vision Statement */}
          <div className="observe-scroll" style={styles.visionStatement}>
            <div style={styles.visionCard}>
              <h3 style={styles.visionTitle}>Vision for Tomorrow</h3>
              <p style={styles.visionText}>
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
