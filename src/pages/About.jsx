import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const About = () => {
  const isMobile = window.innerWidth <= 768;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  return (
    <div style={styles.page}>
      {/* Stars Background */}
      <div style={styles.stars}>
        {[...Array(50)].map((_, i) => (
          <span
            key={i}
            style={{
              ...styles.star,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Navbar */}
      <div style={styles.navbar}>
        <div style={styles.logo} onClick={() => handleNavigate("/")}>
          ⬢ Tech Savvy <br />
          <span style={{ fontSize: 12 }}>Project Management</span>
        </div>

        {!isMobile && (
          <div style={styles.navLinks}>
            <span onClick={() => handleNavigate("/services")}>Services</span>
            <span
              onClick={() => handleNavigate("/about")}
              style={styles.activeLink}
            >
              About
            </span>
            <button
              style={styles.navBtn}
              onClick={() => handleNavigate("/consultation")}
            >
              Book a Free Consultation
            </button>
          </div>
        )}

        {isMobile && (
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={styles.line}></div>
            <div style={styles.line}></div>
            <div style={styles.line}></div>
          </div>
        )}
      </div>

      {/* Mobile Side Navbar */}
      {isMobile && menuOpen && (
        <div
          style={styles.sideNavbarOverlay}
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        style={{
          ...styles.sideNavbar,
          transform: menuOpen ? "translateX(0)" : "translateX(100%)",
        }}
      >
        <div style={styles.sideNavbarContent}>
          <span onClick={() => handleNavigate("/services")}>Services</span>
          <span
            onClick={() => handleNavigate("/about")}
            style={styles.activeLink}
          >
            About
          </span>
          <button
            style={styles.sideBtn}
            onClick={() => handleNavigate("/consultation")}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* About Content */}
      <div style={styles.content}>
        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? 36 : 48,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          About Tech Savvy
        </h1>
        <p
          style={{
            ...styles.subText,
            textAlign: "center",
            maxWidth: 800,
            margin: "0 auto 60px auto",
            fontSize: 19,
            lineHeight: 1.6,
          }}
        >
          Boutique IT project management and cloud consulting firm delivering
          high-impact, secure, and efficient digital transformations for growing
          businesses.
        </p>

        {/* Mission & Vision Grid */}
        <div style={styles.missionVisionGrid}>
          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Our Mission</h2>
            <p style={styles.cardText}>
              To empower organizations with seamless cloud migrations and
              expertly managed IT projects — minimizing risk, accelerating
              delivery, and building lasting internal capability through
              hands-on partnership and knowledge transfer.
            </p>
          </div>

          <div style={styles.card}>
            <h2 style={styles.cardTitle}>Our Vision</h2>
            <p style={styles.cardText}>
              To be the trusted partner of choice for mid-market and enterprise
              companies seeking pragmatic, high-quality cloud and project
              management expertise — setting the standard for transparency,
              precision, and measurable business outcomes in digital
              transformation.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div style={{ marginTop: 80 }}>
          <h2
            style={{
              fontSize: 32,
              textAlign: "center",
              marginBottom: 40,
              fontWeight: "bold",
            }}
          >
            Why Choose Tech Savvy
          </h2>
          <div style={styles.featuresGrid}>
            {features.map((feature, index) => (
              <div key={index} style={styles.featureItem}>
                <span style={{ fontSize: 24, marginRight: 12 }}>✓</span>
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center", marginTop: 80 }}>
          <button
            style={styles.ctaBtn}
            onClick={() => handleNavigate("/consultation")}
          >
            Start Your Transformation Today
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const features = [
  "Senior-level consultants only — no junior resources",
  "Proven success with enterprise and mid-market clients",
  "Flexible delivery: fixed-scope or agile methodologies",
  "Deep multi-cloud expertise (AWS, Azure, GCP)",
  "Focus on security, compliance, and cost optimization",
  "Transparent communication and predictable results",
];

const styles = {
  page: {
    minHeight: "100vh",
    fontFamily: "Arial, sans-serif",
    background:
      "linear-gradient(135deg, #00326E 0%, #03347F 60%, #0b1d3a 100%)",
    color: "#fff",
    position: "relative",
    overflow: "hidden",
  },
  stars: { position: "absolute", inset: 0, zIndex: 0 },
  star: {
    position: "absolute",
    width: 2,
    height: 2,
    backgroundColor: "#fff",
    borderRadius: "50%",
    animation: "blink 2s infinite ease-in-out",
  },
  navbar: {
    backgroundColor: "#fff",
    color: "#000",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "15px 40px",
    zIndex: 10,
    position: "relative",
  },
  logo: { fontWeight: "bold", cursor: "pointer" },
  navLinks: { display: "flex", gap: 20, alignItems: "center" },
  activeLink: { fontWeight: "bold", textDecoration: "underline" },
  navBtn: {
    backgroundColor: "#0b1d3a",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
  content: {
    padding: "80px 20px",
    maxWidth: 1200,
    margin: "auto",
    position: "relative",
    zIndex: 1,
  },
  heading: { fontWeight: "bold", lineHeight: 1.2 },
  subText: { color: "#dbe4ff" },

  // Mission & Vision
  missionVisionGrid: {
    display: "grid",
    gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "1fr 1fr",
    gap: 40,
    marginBottom: 60,
  },
  card: {
    backgroundColor: "rgba(255, 255, 255, 0.08)",
    backdropFilter: "blur(10px)",
    padding: 40,
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
    border: "1px solid rgba(255, 255, 255, 0.1)",
  },
  cardTitle: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#fff",
  },
  cardText: {
    fontSize: 17,
    lineHeight: 1.7,
    color: "#dbe4ff",
  },

  // Why Choose Us
  featuresGrid: {
    display: "grid",
    gridTemplateColumns: window.innerWidth <= 768 ? "1fr" : "repeat(2, 1fr)",
    gap: 20,
    maxWidth: 900,
    margin: "0 auto",
  },
  featureItem: {
    fontSize: 17,
    lineHeight: 1.6,
    color: "#dbe4ff",
    display: "flex",
    alignItems: "flex-start",
  },

  ctaBtn: {
    padding: "16px 36px",
    backgroundColor: "#fff",
    color: "#0b1d3a",
    border: "none",
    borderRadius: 8,
    fontWeight: "bold",
    fontSize: 18,
    cursor: "pointer",
    transition: "all 0.3s",
  },

  footer: {
    marginTop: 120,
    padding: 40,
    backgroundColor: "#07152c",
    display: "flex",
    justifyContent: "space-around",
    fontSize: 14,
    flexWrap: "wrap",
    gap: 20,
    textAlign: "center",
  },
  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    cursor: "pointer",
  },
  line: { width: 25, height: 3, backgroundColor: "#000" },
  sideNavbarOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    zIndex: 15,
  },
  sideNavbar: {
    position: "fixed",
    top: 0,
    right: 0,
    width: "280px",
    height: "100%",
    backgroundColor: "#ffffff",
    color: "#000",
    zIndex: 20,
    transition: "transform 0.3s ease-in-out",
    boxShadow: "-5px 0 15px rgba(0,0,0,0.2)",
  },
  sideNavbarContent: {
    padding: "80px 30px 30px",
    display: "flex",
    flexDirection: "column",
    gap: 25,
  },
  sideBtn: {
    padding: "12px 20px",
    backgroundColor: "#0b1d3a",
    color: "#fff",
    border: "none",
    borderRadius: 6,
    cursor: "pointer",
    fontWeight: "bold",
    width: "100%",
  },
};

export default About;
