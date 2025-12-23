import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const isMobile = window.innerWidth <= 768;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close mobile menu after navigation
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

        {/* Desktop Navigation */}
        {!isMobile && (
          <div style={styles.navLinks}>
            <span onClick={() => handleNavigate("/services")}>Services</span>
            <span onClick={() => handleNavigate("/about")}>About</span>
            <button
              style={styles.navBtn}
              onClick={() => handleNavigate("/consultation")}
            >
              Book a Free Consultation
            </button>
          </div>
        )}

        {/* Mobile Hamburger */}
        {isMobile && (
          <div style={styles.hamburger} onClick={() => setMenuOpen(!menuOpen)}>
            <div style={styles.line}></div>
            <div style={styles.line}></div>
            <div style={styles.line}></div>
          </div>
        )}
      </div>

      {/* Mobile Side Navbar (slides from right) */}
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
          <span onClick={() => handleNavigate("/about")}>About</span>
          <button
            style={styles.sideBtn}
            onClick={() => handleNavigate("/consultation")}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Hero Section */}
      <div style={styles.hero}>
        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? 28 : 40,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Your Partner in <br />
          Cloud Migration & <br />
          IT Project Management
        </h1>

        <p
          style={{
            ...styles.subText,
            textAlign: isMobile ? "center" : "left",
          }}
        >
          Boutique consulting for secure, scalable,
          <br />
          and efficient transformations.
        </p>

        <div style={{ textAlign: isMobile ? "center" : "left" }}>
          <button
            style={styles.ctaBtn}
            onClick={() => handleNavigate("/consultation")}
          >
            Book a Free Consultation
          </button>
        </div>

        {/* Services Cards */}
        <div style={styles.cardWrap}>
          <Card icon="☁️" title="Cloud Migration" />
          <Card icon="🛡️" title="Compliance & Governance" />
          <Card icon="📈" title="Performance & Cost Optimization" />
          <Card icon="🔒" title="Cloud Security" />
        </div>

        {/* Testimonial */}
        <div
          style={{
            ...styles.testimonial,
            flexDirection: isMobile ? "column" : "row",
            textAlign: isMobile ? "center" : "left",
          }}
        >
          <div style={styles.avatar}>T</div>
          <p style={{ margin: 0 }}>
            “Tech Savvy guided us through our cloud migration with exceptional
            expertise and professionalism.”
          </p>
        </div>
      </div>

      {/* Footer */}
      <div
        style={{
          ...styles.footer,
          flexDirection: isMobile ? "column" : "row",
          gap: isMobile ? 20 : 100,
          textAlign: "center",
        }}
      >
        <div style={styles.logo} onClick={() => handleNavigate("/")}>
          ⬢ Tech Savvy <br />
          <span style={{ fontSize: 12 }}>Project Management</span>
        </div>

        <div style={{ display: "flex", gap: 30 }}>
          <span onClick={() => handleNavigate("/services")}>Services</span>
          <span onClick={() => handleNavigate("/about")}>About</span>
        </div>

        <span onClick={() => handleNavigate("/consultation")}>
          Book a Free Consultation
        </span>
      </div>
    </div>
  );
};

const Card = ({ icon, title }) => (
  <div style={styles.card}>
    <div style={{ fontSize: 26 }}>{icon}</div>
    <p style={{ marginTop: 10, fontWeight: 600 }}>{title}</p>
  </div>
);

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

  stars: {
    position: "absolute",
    inset: 0,
    zIndex: 0,
  },

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

  logo: {
    fontWeight: "bold",
    cursor: "pointer",
  },

  navLinks: {
    display: "flex",
    gap: 20,
    alignItems: "center",
  },

  navBtn: {
    backgroundColor: "#0b1d3a",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },

  hero: {
    padding: "60px 20px",
    maxWidth: 1200,
    margin: "auto",
    position: "relative",
    zIndex: 1,
  },

  heading: {
    fontWeight: "bold",
    lineHeight: 1.2,
  },

  subText: {
    marginTop: 15,
    color: "#dbe4ff",
  },

  ctaBtn: {
    marginTop: 20,
    padding: "12px 20px",
    backgroundColor: "#fff",
    color: "#0b1d3a",
    border: "none",
    borderRadius: 6,
    fontWeight: "bold",
    cursor: "pointer",
  },

  cardWrap: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
  },

  card: {
    backgroundColor: "#fff",
    color: "#000",
    padding: 20,
    borderRadius: 10,
    textAlign: "center",
  },

  testimonial: {
    marginTop: 40,
    backgroundColor: "#eef1f8",
    color: "#000",
    padding: 20,
    borderRadius: 10,
    display: "flex",
    gap: 15,
    alignItems: "center",
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: "50%",
    backgroundColor: "#cfd6e6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontWeight: "bold",
  },

  footer: {
    marginTop: 60,
    padding: 20,
    backgroundColor: "#07152c",
    display: "flex",
    justifyContent: "space-around",
    fontSize: 14,
    flexWrap: "wrap",
  },

  hamburger: {
    display: "flex",
    flexDirection: "column",
    gap: 5,
    cursor: "pointer",
  },

  line: {
    width: 25,
    height: 3,
    backgroundColor: "#000",
  },

  // New: Side Navbar Styles
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

// Add the blink animation globally (since it's used in inline styles)
const styleSheet = document.createElement("style");
styleSheet.innerHTML = `
  @keyframes blink {
    0%, 100% { opacity: 0.4; }
    50% { opacity: 1; }
  }
`;
document.head.appendChild(styleSheet);

export default Home;
