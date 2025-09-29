import { useEffect, useRef, useState } from "react";
import { ArrowDown, Sparkles } from "lucide-react";
import heroBackground from "../../../assets/hero-bg.jpg";
import lathaPortrait from "../../../assets/latha-portrait.jpg";

const Theme36Hero = () => {
  const parallaxRef = useRef(null);
  const imageRef = useRef(null);
  const [button1Hover, setButton1Hover] = useState(false);
  const [button2Hover, setButton2Hover] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize(); // Set initial value
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (parallaxRef.current && imageRef.current) {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const imageRate = scrolled * -0.3;

        parallaxRef.current.style.transform = `translateY(${rate}px)`;
        imageRef.current.style.transform = `translateY(${imageRate}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToAbout = () => {
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
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
          width: "100%",
          height: "120%",
          marginTop: "-10%",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundImage: `linear-gradient(135deg, hsla(215, 85%, 20%, 0.9) 0%, hsla(215, 85%, 35%, 0.7) 50%, hsla(45, 90%, 55%, 0.8) 100%), url(${heroBackground})`,
        }}
      />

      {/* Floating Elements */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          overflow: "hidden",
          pointerEvents: "none",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: "5rem",
            left: "2.5rem",
            width: "8rem",
            height: "8rem",
            backgroundColor: "hsla(45, 90%, 55%, 0.2)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: "6.5rem",
            right: "5rem",
            width: "1rem",
            height: "1rem",
            backgroundColor: "hsla(215, 85%, 35%, 0.3)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "2s",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "10rem",
            left: "25%",
            width: "1.5rem",
            height: "1.5rem",
            backgroundColor: "hsla(45, 90%, 55%, 0.15)",
            borderRadius: "50%",
            animation: "float 6s ease-in-out infinite",
            animationDelay: "4s",
          }}
        />
      </div>

      {/* Content Container */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          position: "relative",
          zIndex: 10,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
            gap: isMobile ? "2rem" : "3rem",
            alignItems: "center",
            minHeight: "100vh",
          }}
        >
          {/* Text Content */}
          <div
            style={{
              marginBottom: "2rem",
              animation: "slideUp 0.8s ease-out forwards",
              opacity: 0,
              transform: "translateY(40px)",
            }}
          >
            <div style={{ marginBottom: "2rem" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                  color: "hsl(45, 90%, 75%)",
                  fontWeight: "500",
                  fontSize: "0.875rem",
                  textTransform: "uppercase",
                  letterSpacing: "0.05em",
                }}
              >
                <Sparkles size={20} />
                <span>Transforming Lives Through Leadership</span>
              </div>

              <h1
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: isMobile ? "2.5rem" : "3.5rem",
                  fontWeight: "bold",
                  color: "white",
                  lineHeight: "1.1",
                }}
              >
                Latha
                <span
                  className="text-gradient-accent"
                  style={{ display: "block" }}
                >
                  Padiarajan
                </span>
              </h1>

              <p
                style={{
                  fontSize: isMobile ? "1.25rem" : "1.5rem",
                  color: "rgba(255, 255, 255, 0.9)",
                  fontWeight: "300",
                  lineHeight: "1.4",
                }}
              >
                Entrepreneur • Philanthropist • Visionary Leader
              </p>
            </div>

            <p
              style={{
                fontSize: isMobile ? "1rem" : "1.125rem",
                color: "rgba(255, 255, 255, 0.8)",
                lineHeight: "1.6",
                maxWidth: isMobile ? "100%" : "28rem",
              }}
            >
              Co-founder of Ma Foi and CIEL HR Services, pioneering India's HR
              transformation while dedicating life to meaningful social impact
              and community development.
            </p>

            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <button
                style={{
                  backgroundColor: button1Hover
                    ? "hsl(45, 90%, 35%)"
                    : "hsl(45, 90%, 55%)",
                  color: "hsl(215, 30%, 15%)",
                  fontWeight: "600",
                  padding: "1.5rem 2rem",
                  fontSize: "1.125rem",
                  transition: "all 0.3s",
                  transform: button1Hover ? "scale(1.05)" : "scale(1)",
                  boxShadow: button1Hover
                    ? "0 10px 40px -5px hsla(45, 90%, 55%, 0.25)"
                    : "none",
                  border: "none",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
                onClick={scrollToAbout}
                onMouseEnter={() => setButton1Hover(true)}
                onMouseLeave={() => setButton1Hover(false)}
              >
                Discover My Journey
              </button>

              <button
                style={{
                  border: "2px solid white",
                  backgroundColor: button2Hover ? "white" : "transparent",
                  color: button2Hover ? "hsl(215, 85%, 20%)" : "white",
                  fontWeight: "600",
                  padding: "1.5rem 2rem",
                  fontSize: "1.125rem",
                  transition: "all 0.3s",
                  transform: button2Hover ? "scale(1.05)" : "scale(1)",
                  borderRadius: "0.375rem",
                  cursor: "pointer",
                }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                onMouseEnter={() => setButton2Hover(true)}
                onMouseLeave={() => setButton2Hover(false)}
              >
                Connect With Me
              </button>
            </div>
          </div>

          {/* Portrait Image */}
          <div
            ref={imageRef}
            style={{
              position: "relative",
              display: "flex",
              justifyContent: "flex-end",
              animation: "scaleIn 0.6s ease-out forwards",
              opacity: 0,
              transform: "scale(0.9)",
              animationDelay: "0.3s",
            }}
          >
            <div style={{ position: "relative" }}>
              {/* Decorative Elements */}
              <div
                style={{
                  position: "absolute",
                  top: "-1rem",
                  left: "-1rem",
                  right: "-1rem",
                  bottom: "-1rem",
                  background:
                    "linear-gradient(135deg, hsla(45, 90%, 55%, 0.3) 0%, hsla(215, 85%, 35%, 0.3) 100%)",
                  borderRadius: "50%",
                  filter: "blur(40px)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-0.5rem",
                  left: "-0.5rem",
                  right: "-0.5rem",
                  bottom: "-0.5rem",
                  background:
                    "linear-gradient(135deg, hsla(45, 90%, 55%, 0.5) 0%, hsla(215, 85%, 35%, 0.5) 100%)",
                  borderRadius: "50%",
                  filter: "blur(20px)",
                }}
              />

              {/* Main Portrait */}
              <div
                className="hover-lift"
                style={{
                  position: "relative",
                  width: "24rem",
                  height: "24rem",
                  borderRadius: "50%",
                  overflow: "hidden",
                  border: "4px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 20px 60px -10px hsla(215, 85%, 20%, 0.15)",
                }}
              >
                <img
                  src={lathaPortrait}
                  alt="Latha Padiarajan - Entrepreneur and Philanthropist"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Achievement Badge */}
              <div
                style={{
                  position: "absolute",
                  bottom: "-1rem",
                  right: "-1rem",
                  backgroundColor: "hsl(45, 90%, 55%)",
                  color: "hsl(215, 30%, 15%)",
                  borderRadius: "50%",
                  padding: "1rem",
                  boxShadow: "0 10px 40px -5px hsla(45, 90%, 55%, 0.25)",
                  animation: "float 6s ease-in-out infinite",
                }}
              >
                <Sparkles size={24} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        style={{
          position: "absolute",
          bottom: "2rem",
          left: "50%",
          transform: "translateX(-50%)",
          animation: "bounce 1s infinite",
        }}
      >
        <button
          onClick={scrollToAbout}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "0.5rem",
            color: "rgba(255, 255, 255, 0.8)",
            background: "none",
            border: "none",
            cursor: "pointer",
            transition: "color 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.color = "white")}
          onMouseLeave={(e) =>
            (e.currentTarget.style.color = "rgba(255, 255, 255, 0.8)")
          }
        >
          <span style={{ fontSize: "0.875rem", fontWeight: "500" }}>
            Scroll to explore
          </span>
          <ArrowDown size={20} />
        </button>
      </div>
    </section>
  );
};

export default Theme36Hero;
