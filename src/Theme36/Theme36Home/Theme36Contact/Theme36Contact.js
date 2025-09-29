import { useState, useEffect } from "react";
import { Mail, Phone, MapPin, Send, Linkedin } from "lucide-react";
import './style.js';

const Theme36Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      alert("Message sent successfully! Thank you for reaching out.");
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "latha@cielhr.com",
      link: "mailto:latha@cielhr.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 80 4000 1000",
      link: "tel:+918040001000"
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Bangalore, India",
      link: "#"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with Latha",
      link: "https://linkedin.com/in/lathapadiarajan"
    }
  ];

  return (
    <section
      id="contact"
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
            maxWidth: "72rem",
            margin: "0 auto",
          }}
        >
          {/* Section Header */}
          <div
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
                border: "1px solid hsl(var(--primary))",
                color: "hsl(var(--primary))",
                borderRadius: "0.375rem",
                backgroundColor: "transparent",
              }}
            >
              Get In Touch
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
              Let's Start a
              <span
                className="text-gradient-primary"
                style={{ display: "block" }}
              >
                Meaningful Conversation
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
              Whether you're interested in collaboration, seeking guidance, or simply want to connect,
              I'd love to hear from you.
            </p>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
              gap: "4rem",
            }}
          >
            {/* Contact Information */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "2rem",
              }}
            >
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-display)",
                    fontSize: "1.875rem",
                    fontWeight: "600",
                    color: "hsl(var(--foreground))",
                    marginBottom: "1.5rem",
                  }}
                >
                  Connect & Collaborate
                </h3>
                <p
                  style={{
                    fontSize: "1.125rem",
                    color: "hsl(var(--muted-foreground))",
                    lineHeight: "1.625",
                    marginBottom: "2rem",
                  }}
                >
                  Open to meaningful partnerships, mentoring opportunities, and initiatives
                  that create positive impact in business and society.
                </p>
              </div>

              {/* Contact Cards */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                  gap: "1rem",
                }}
              >
                {contactInfo.map((info, index) => (
                  <div
                    key={index}
                    className="hover-lift"
                    style={{
                      padding: "1.5rem",
                      backgroundColor: "hsl(var(--card))",
                      borderRadius: "0.5rem",
                      boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
                      transition: "all 0.3s",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: "1rem",
                      }}
                    >
                      <div
                        style={{
                          padding: "0.75rem",
                          borderRadius: "0.5rem",
                          backgroundColor: "hsla(var(--primary), 0.1)",
                          color: "hsl(var(--primary))",
                        }}
                      >
                        <info.icon size={20} />
                      </div>
                      <div>
                        <h4
                          style={{
                            fontWeight: "600",
                            color: "hsl(var(--foreground))",
                          }}
                        >
                          {info.title}
                        </h4>
                        {info.link === "#" ? (
                          <p style={{ color: "hsl(var(--muted-foreground))" }}>
                            {info.value}
                          </p>
                        ) : (
                          <a
                            href={info.link}
                            style={{
                              color: "hsl(var(--primary))",
                              transition: "color 0.3s",
                            }}
                            target={info.title === "LinkedIn" ? "_blank" : undefined}
                            rel={info.title === "LinkedIn" ? "noopener noreferrer" : undefined}
                            onMouseEnter={(e) => {
                              e.currentTarget.style.color = "hsl(var(--primary-dark))";
                            }}
                            onMouseLeave={(e) => {
                              e.currentTarget.style.color = "hsl(var(--primary))";
                            }}
                          >
                            {info.value}
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Areas of Interest */}
              <div
                style={{
                  padding: "2rem",
                  backgroundColor: "hsla(var(--primary), 0.05)",
                  border: "1px solid hsla(var(--primary), 0.2)",
                  borderRadius: "0.5rem",
                }}
              >
                <h4
                  style={{
                    fontWeight: "600",
                    color: "hsl(var(--foreground))",
                    marginBottom: "1rem",
                  }}
                >
                  Areas of Interest
                </h4>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.75rem",
                    color: "hsl(var(--muted-foreground))",
                  }}
                >
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                      }}
                    />
                    <span>HR Technology & Innovation</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                      }}
                    />
                    <span>Entrepreneurship & Startups</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                      }}
                    />
                    <span>Women's Empowerment</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                      }}
                    />
                    <span>Education & Healthcare Initiatives</span>
                  </div>
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "0.5rem",
                    }}
                  >
                    <div
                      style={{
                        width: "0.5rem",
                        height: "0.5rem",
                        borderRadius: "50%",
                        backgroundColor: "hsl(var(--primary))",
                      }}
                    />
                    <span>Sustainable Business Practices</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div
              style={{
                padding: "2rem",
                backgroundColor: "hsl(var(--card))",
                borderRadius: "0.5rem",
                boxShadow: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "1.5rem",
                  fontWeight: "600",
                  color: "hsl(var(--foreground))",
                  marginBottom: "1.5rem",
                }}
              >
                Send a Message
              </h3>
              <form
                onSubmit={handleSubmit}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)",
                    gap: "1rem",
                  }}
                >
                  <div>
                    <label
                      htmlFor="name"
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "hsl(var(--foreground))",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.375rem",
                        backgroundColor: "hsl(var(--background))",
                        color: "hsl(var(--foreground))",
                        transition: "all 0.3s",
                      }}
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      style={{
                        display: "block",
                        fontSize: "0.875rem",
                        fontWeight: "500",
                        color: "hsl(var(--foreground))",
                        marginBottom: "0.5rem",
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      style={{
                        width: "100%",
                        padding: "0.75rem",
                        border: "1px solid hsl(var(--border))",
                        borderRadius: "0.375rem",
                        backgroundColor: "hsl(var(--background))",
                        color: "hsl(var(--foreground))",
                        transition: "all 0.3s",
                      }}
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "hsl(var(--foreground))",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Subject *
                  </label>
                  <input
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.375rem",
                      backgroundColor: "hsl(var(--background))",
                      color: "hsl(var(--foreground))",
                      transition: "all 0.3s",
                    }}
                    placeholder="What would you like to discuss?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    style={{
                      display: "block",
                      fontSize: "0.875rem",
                      fontWeight: "500",
                      color: "hsl(var(--foreground))",
                      marginBottom: "0.5rem",
                    }}
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    style={{
                      width: "100%",
                      padding: "0.75rem",
                      border: "1px solid hsl(var(--border))",
                      borderRadius: "0.375rem",
                      backgroundColor: "hsl(var(--background))",
                      color: "hsl(var(--foreground))",
                      transition: "all 0.3s",
                      resize: "vertical",
                    }}
                    placeholder="Share your thoughts, ideas, or how we might collaborate..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  style={{
                    width: "100%",
                    backgroundColor: isSubmitting ? "hsl(var(--muted))" : "hsl(var(--primary))",
                    color: "hsl(var(--primary-foreground))",
                    fontWeight: "600",
                    padding: "1.5rem 2rem",
                    fontSize: "1.125rem",
                    borderRadius: "0.375rem",
                    border: "none",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "0.5rem",
                  }}
                  onMouseEnter={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "hsl(var(--primary-dark))";
                      e.currentTarget.style.transform = "scale(1.05)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isSubmitting) {
                      e.currentTarget.style.backgroundColor = "hsl(var(--primary))";
                      e.currentTarget.style.transform = "scale(1)";
                    }
                  }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Theme36Contact;