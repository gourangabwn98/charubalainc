import React from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";

const Services = () => {
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
            <span
              onClick={() => handleNavigate("/services")}
              style={styles.activeLink}
            >
              Services
            </span>
            <span onClick={() => handleNavigate("/about")}>About</span>
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
          <span
            onClick={() => handleNavigate("/services")}
            style={styles.activeLink}
          >
            Services
          </span>
          <span onClick={() => handleNavigate("/about")}>About</span>
          <button
            style={styles.sideBtn}
            onClick={() => handleNavigate("/consultation")}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Services Content */}
      <div style={styles.content}>
        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? 32 : 42,
            textAlign: "center",
          }}
        >
          Our Services
        </h1>
        <p
          style={{
            ...styles.subText,
            textAlign: "center",
            maxWidth: 800,
            margin: "20px auto",
          }}
        >
          We deliver end-to-end project management and cloud transformation
          solutions tailored to your business needs.
        </p>

        <div style={styles.servicesGrid}>
          <ServiceCard
            icon="☁️"
            title="Cloud Migration"
            description="Seamless transition to AWS, Azure, or GCP with zero downtime and full data integrity."
          />
          <ServiceCard
            icon="🛡️"
            title="Compliance & Governance"
            description="Ensure regulatory compliance (GDPR, HIPAA, SOC2) with robust policies and audits."
          />
          <ServiceCard
            icon="📈"
            title="Performance & Cost Optimization"
            description="Reduce cloud spend by up to 40% while improving application performance."
          />
          <ServiceCard
            icon="🔒"
            title="Cloud Security"
            description="Implement zero-trust architecture, encryption, and continuous threat monitoring."
          />
          <ServiceCard
            icon="🚀"
            title="DevOps & Automation"
            description="CI/CD pipelines, Infrastructure as Code, and automated scaling for faster deployments."
          />
          <ServiceCard
            icon="💼"
            title="IT Project Management"
            description="Agile/Scrum expertise to deliver complex projects on time and within budget."
          />
        </div>

        <div style={{ textAlign: "center", marginTop: 50 }}>
          <button
            style={styles.ctaBtn}
            onClick={() => handleNavigate("/consultation")}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ServiceCard = ({ icon, title, description }) => (
  <div style={styles.serviceCard}>
    <div style={{ fontSize: 40, marginBottom: 15 }}>{icon}</div>
    <h3 style={{ margin: "0 0 15px 0", fontSize: 20 }}>{title}</h3>
    <p style={{ margin: 0, color: "#444", lineHeight: 1.5 }}>{description}</p>
  </div>
);

const styles = {
  // Reuse all styles from Home + add new ones
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
  ctaBtn: {
    padding: "14px 28px",
    backgroundColor: "#fff",
    color: "#0b1d3a",
    border: "none",
    borderRadius: 6,
    fontWeight: "bold",
    fontSize: 16,
    cursor: "pointer",
  },
  servicesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: 30,
    marginTop: 50,
  },
  serviceCard: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 30,
    borderRadius: 12,
    textAlign: "center",
    boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
  },
  footer: {
    marginTop: 100,
    padding: 30,
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

export default Services;
