import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const isMobile = window.innerWidth <= 768;
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <footer
      style={{
        ...styles.footer,
        flexDirection: isMobile ? "column" : "row",
        gap: isMobile ? 30 : 100,
        padding: isMobile ? "40px 20px" : "40px 60px",
        textAlign: isMobile ? "center" : "left",
      }}
    >
      {/* Logo */}
      <div style={styles.logo} onClick={() => handleNavigate("/")}>
        ⬢ Tech Savvy <br />
        <span style={{ fontSize: 12 }}>Project Management</span>
      </div>

      {/* Navigation Links */}
      <div
        style={{
          display: "flex",
          gap: isMobile ? 20 : 40,
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
        }}
      >
        <span style={styles.link} onClick={() => handleNavigate("/services")}>
          Services
        </span>
        <span style={styles.link} onClick={() => handleNavigate("/about")}>
          About
        </span>
      </div>

      {/* CTA Link - now responsive inline */}
      <span
        style={{
          ...styles.link,
          ...styles.ctaLinkBase,
          padding: isMobile ? "12px 30px" : "10px 20px",
          alignSelf: "center",
        }}
        onClick={() => handleNavigate("/consultation")}
      >
        Book a Free Consultation
      </span>
    </footer>
  );
};

const styles = {
  footer: {
    marginTop: 80,
    backgroundColor: "#07152c",
    color: "#fff",
    fontSize: 15,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },

  logo: {
    fontWeight: "bold",
    fontSize: 18,
    cursor: "pointer",
    lineHeight: 1.4,
  },

  link: {
    cursor: "pointer",
    transition: "opacity 0.3s",
  },

  // Base style for CTA without isMobile reference
  ctaLinkBase: {
    fontWeight: "bold",
    backgroundColor: "#0b1d3a",
    borderRadius: 6,
  },
};

export default Footer;
