// // import React from "react";

// // function App() {
// //   return (
// //     <div style={styles.page}>
// //       {/* Navbar */}
// //       <div style={styles.navbar}>
// //         <div style={styles.logo}>
// //           ⬢ Tech Savvy
// //           <br />
// //           <span style={{ fontSize: 12 }}>Project Management</span>
// //         </div>
// //         <div style={styles.navLinks}>
// //           <span>Services</span>
// //           <span>About</span>
// //           <button style={styles.navBtn}>Book a Free Consultation</button>
// //         </div>
// //       </div>

// //       {/* Hero Section */}
// //       <div style={styles.hero}>
// //         <h1 style={styles.heading}>
// //           Your Partner in <br /> Cloud Migration & <br /> IT Project Management
// //         </h1>
// //         <p style={styles.subText}>
// //           Boutique consulting for secure, scalable, <br />
// //           and efficient transformations.
// //         </p>
// //         <button style={styles.ctaBtn}>Book a Free Consultation</button>

// //         {/* Services Cards */}
// //         <div style={styles.cardContainer}>
// //           <ServiceCard icon="☁️" title="Cloud Migration" />
// //           <ServiceCard icon="🛡️" title="Compliance & Governance" />
// //           <ServiceCard icon="📈" title="Performance & Cost Optimization" />
// //           <ServiceCard icon="🔒" title="Cloud Security" />
// //         </div>

// //         {/* Testimonial */}
// //         <div style={styles.testimonial}>
// //           <div style={styles.avatar}>T</div>
// //           <p>
// //             “Tech Savvy guided us through our cloud migration with exceptional
// //             expertise and professionalism.”
// //           </p>
// //         </div>
// //       </div>

// //       {/* Footer */}
// //       <div style={styles.footer}>
// //         <span>⬢ Tech Savvy Project Management</span>
// //         <span>Services</span>
// //         <span>About</span>
// //         <span>Book a Free Consultation</span>
// //       </div>
// //     </div>
// //   );
// // }

// // const ServiceCard = ({ icon, title }) => (
// //   <div style={styles.card}>
// //     <div style={{ fontSize: 28 }}>{icon}</div>
// //     <p style={{ marginTop: 10, fontWeight: 600 }}>{title}</p>
// //   </div>
// // );

// // const styles = {
// //   page: {
// //     fontFamily: "Arial, sans-serif",
// //     background: "linear-gradient(180deg, #00326E 0%, #03347F 100%)",
// //     minHeight: "100vh",
// //     color: "#fff",
// //   },

// //   navbar: {
// //     display: "flex",
// //     justifyContent: "space-between",
// //     padding: "15px 40px",
// //     backgroundColor: "#ffffff",
// //     color: "#000",
// //     alignItems: "center",
// //   },

// //   logo: {
// //     fontWeight: "bold",
// //   },

// //   navLinks: {
// //     display: "flex",
// //     gap: 20,
// //     alignItems: "center",
// //   },

// //   navBtn: {
// //     padding: "8px 15px",
// //     borderRadius: 6,
// //     border: "none",
// //     backgroundColor: "#0b1d3a",
// //     color: "#fff",
// //     cursor: "pointer",
// //   },

// //   hero: {
// //     padding: "60px 40px",
// //   },

// //   heading: {
// //     fontSize: 38,
// //     fontWeight: "bold",
// //     lineHeight: 1.2,
// //   },

// //   subText: {
// //     marginTop: 15,
// //     color: "#cfd8ff",
// //   },

// //   ctaBtn: {
// //     marginTop: 20,
// //     padding: "12px 20px",
// //     borderRadius: 6,
// //     border: "none",
// //     backgroundColor: "#ffffff",
// //     color: "#0b1d3a",
// //     fontWeight: "bold",
// //     cursor: "pointer",
// //   },

// //   cardContainer: {
// //     display: "grid",
// //     gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
// //     gap: 20,
// //     marginTop: 40,
// //   },

// //   card: {
// //     backgroundColor: "#ffffff",
// //     color: "#000",
// //     padding: 20,
// //     borderRadius: 10,
// //     textAlign: "center",
// //   },

// //   testimonial: {
// //     marginTop: 40,
// //     backgroundColor: "#e9edf5",
// //     color: "#000",
// //     padding: 20,
// //     borderRadius: 10,
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 15,
// //   },

// //   avatar: {
// //     width: 40,
// //     height: 40,
// //     borderRadius: "50%",
// //     backgroundColor: "#ccc",
// //     display: "flex",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     fontWeight: "bold",
// //   },

// //   footer: {
// //     marginTop: 60,
// //     padding: 20,
// //     backgroundColor: "#07152c",
// //     display: "flex",
// //     justifyContent: "space-around",
// //     fontSize: 14,
// //   },
// // };

// // export default App;
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Home from "./pages/Home";
// import Services from "./pages/Services";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
// import "./styles.css";

// function App() {
//   return (
//     <BrowserRouter>
//       {/* <div className="navbar">
//         <strong>⬢ Tech Savvy</strong>
//         <div className="navLinks">
//           <Link to="/services">Services</Link>
//           <Link to="/about">About</Link>
//           <Link to="/contact">
//             <button className="navBtn">Free Consultation</button>
//           </Link>
//         </div>
//       </div> */}

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/services" element={<Services />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/contact" element={<Contact />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Services from "./pages/Services";
import About from "./pages/About";
import Consultation from "./pages/Consultation";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<About />} />
        <Route path="/consultation" element={<Consultation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
