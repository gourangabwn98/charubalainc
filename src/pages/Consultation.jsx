import React from "react";
import { useNavigate } from "react-router-dom";

const Consultation = () => {
  const isMobile = window.innerWidth <= 768;
  const [menuOpen, setMenuOpen] = React.useState(false);
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(
      "Thank you! Your consultation request has been submitted. We'll contact you soon."
    );
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
            <span onClick={() => handleNavigate("/about")}>About</span>
            <button
              style={{ ...styles.navBtn, ...styles.activeBtn }}
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
          <span onClick={() => handleNavigate("/about")}>About</span>
          <button
            style={{ ...styles.sideBtn, ...styles.activeBtn }}
            onClick={() => handleNavigate("/consultation")}
          >
            Book a Free Consultation
          </button>
        </div>
      </div>

      {/* Consultation Content */}
      <div style={styles.content}>
        <h1
          style={{
            ...styles.heading,
            fontSize: isMobile ? 32 : 42,
            textAlign: "center",
            marginBottom: 20,
          }}
        >
          Book a Free Consultation
        </h1>
        <p
          style={{
            ...styles.subText,
            textAlign: "center",
            maxWidth: 700,
            margin: "0 auto 50px auto",
            fontSize: 18,
          }}
        >
          Let's discuss your cloud migration or IT project needs. No obligation
          — just expert advice tailored to your goals.
        </p>

        {/* Form Container with responsive padding */}
        <div
          style={{
            ...styles.formContainerBase,
            padding: isMobile ? 30 : 50,
          }}
        >
          <form onSubmit={handleSubmit}>
            {/* Responsive Row */}
            <div
              style={{
                ...styles.formRowBase,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div style={styles.formGroup}>
                <label style={styles.label}>Full Name *</label>
                <input
                  type="text"
                  required
                  style={styles.input}
                  placeholder="John Doe"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Company *</label>
                <input
                  type="text"
                  required
                  style={styles.input}
                  placeholder="Acme Corp"
                />
              </div>
            </div>

            {/* Another Responsive Row */}
            <div
              style={{
                ...styles.formRowBase,
                flexDirection: isMobile ? "column" : "row",
              }}
            >
              <div style={styles.formGroup}>
                <label style={styles.label}>Email *</label>
                <input
                  type="email"
                  required
                  style={styles.input}
                  placeholder="john@company.com"
                />
              </div>
              <div style={styles.formGroup}>
                <label style={styles.label}>Phone</label>
                <input
                  type="tel"
                  style={styles.input}
                  placeholder="+1 (555) 123-4567"
                />
              </div>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>How can we help you? *</label>
              <select required style={styles.select}>
                <option value="">Select an option</option>
                <option value="cloud-migration">Cloud Migration</option>
                <option value="compliance">Compliance & Governance</option>
                <option value="cost-optimization">
                  Cost & Performance Optimization
                </option>
                <option value="security">Cloud Security</option>
                <option value="project-management">
                  IT Project Management
                </option>
                <option value="other">Other / General Inquiry</option>
              </select>
            </div>

            <div style={styles.formGroup}>
              <label style={styles.label}>Message (optional)</label>
              <textarea
                rows="5"
                style={styles.textarea}
                placeholder="Tell us more about your project, timeline, or challenges..."
              />
            </div>

            <div style={{ textAlign: "center", marginTop: 30 }}>
              <button type="submit" style={styles.submitBtn}>
                Submit Request
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Footer */}
      <div style={styles.footer}>
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
  navBtn: {
    backgroundColor: "#0b1d3a",
    color: "#fff",
    border: "none",
    padding: "8px 14px",
    borderRadius: 6,
    cursor: "pointer",
  },
  activeBtn: {
    backgroundColor: "#001f4d",
    boxShadow: "0 0 10px rgba(255,255,255,0.3)",
  },
  content: {
    padding: "80px 20px",
    maxWidth: 900,
    margin: "auto",
    position: "relative",
    zIndex: 1,
  },
  heading: { fontWeight: "bold", lineHeight: 1.2 },
  subText: { color: "#dbe4ff" },

  // Base styles (non-responsive parts)
  formContainerBase: {
    backgroundColor: "rgba(255, 255, 255, 0.1)",
    backdropFilter: "blur(10px)",
    borderRadius: 16,
    boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
  },
  formRowBase: {
    display: "flex",
    gap: 20,
    marginBottom: 20,
  },
  formGroup: { flex: 1 },
  label: {
    display: "block",
    marginBottom: 8,
    fontWeight: "600",
    color: "#fff",
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    boxSizing: "border-box",
  },
  select: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    borderRadius: 6,
    border: "none",
    backgroundColor: "#fff",
    color: "#000",
    fontSize: 16,
    resize: "vertical",
    boxSizing: "border-box",
  },
  submitBtn: {
    padding: "16px 40px",
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

export default Consultation;
