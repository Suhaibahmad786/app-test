import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={styles.page}>

      {/* ── NAVBAR ── */}
      <nav style={styles.navbar}>
        <div style={styles.navLogo}>
          <span style={styles.navLogoIcon}>⬡</span>
          <span style={styles.navLogoText}>CoreStack</span>
        </div>
        <div style={styles.navLinks}>
          <Link to="/" style={styles.navLink}>Home</Link>
          <Link to="/contact" style={styles.navLink}>Contact Us</Link>
          <Link to="/price" style={styles.navLink}>Price</Link>
          <Link to="/login">
            <button style={styles.navLoginBtn}>Sign In</button>
          </Link>
          <Link to="/signup">
            <button style={styles.navSignupBtn}>Sign Up</button>
          </Link>
        </div>
      </nav>

      {/* ── HERO SECTION ── */}
      <div style={styles.hero}>
        <div style={styles.badge}>Authentication System</div>
        <h1 style={styles.title}>Welcome to <span style={styles.highlight}>CoreStack</span></h1>
        <p style={styles.subtitle}>
          Build your future with a secure and modern authentication system.
        </p>
     <div style={styles.buttonBox}>
          <Link to="/signup">
            <button style={styles.primaryBtn}>Get Started →</button>
          </Link>
          <Link to="/login">
            <button style={styles.secondaryBtn}>Sign In</button>
          </Link>
        </div>

        {/* Features */}
        <div style={styles.features}>
          {[
            { icon:"🔒", title:"Secure Auth",   desc:"JWT + Cookie based authentication" },
            { icon:"🔵", title:"Google Login",  desc:"Sign in with Google in one click" },
            { icon:"⚡", title:"Fast & Modern", desc:"React frontend + Node.js backend" },
          ].map(f => (
            <div key={f.title} style={styles.featureCard}>
              <span style={styles.featureIcon}>{f.icon}</span>
              <h3 style={styles.featureTitle}>{f.title}</h3>
              <p style={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── FOOTER ── */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>
          © 2025 CoreStack · <Link to="/contact" style={styles.footerLink}>Contact Us</Link>
        </p>
      </footer>

    </div>
  );
}

const styles = {
  page: {
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    background: "#f4f7fe",
    fontFamily: "'Segoe UI', sans-serif",
  },

  // Navbar
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 40px",
    background: "#fff",
    boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  navLogo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  navLogoIcon: {
    fontSize: "22px",
    color: "#4318ff",
  },
  navLogoText: {
    fontWeight: "800",
    fontSize: "18px",
    color: "#1b2559",
  },
  navLinks: {
    display: "flex",
    alignItems: "center",
    gap: "24px",
  },
  navLink: {
    textDecoration: "none",
    color: "#4a5568",
    fontSize: "15px",
    fontWeight: "500",
  },
  navLoginBtn: {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "1px solid #e0e5f2",
    background: "#fff",
    color: "#4318ff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },
  navSignupBtn: {
    padding: "8px 18px",
    borderRadius: "8px",
    border: "none",
    background: "#4318ff",
    color: "#fff",
    fontSize: "14px",
    fontWeight: "600",
    cursor: "pointer",
  },

  // Hero
  hero: {
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    padding: "60px 20px",
  },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "20px",
    background: "#ede9fe",
    color: "#4318ff",
    fontSize: "13px",
    fontWeight: "600",
    marginBottom: "20px",
  },
  title: {
    fontSize: "48px",
    fontWeight: "800",
    color: "#1b2559",
    margin: "0 0 16px 0",
    lineHeight: "1.2",
  },
  highlight: {
    color: "#4318ff",
  },
  subtitle: {
    fontSize: "18px",
    color: "#718096",
    marginBottom: "36px",
    maxWidth: "480px",
  },
  buttonBox: {
    display: "flex",
    gap: "14px",
    marginBottom: "60px",
  },
  primaryBtn: {
    padding: "14px 28px",
    borderRadius: "10px",
    border: "none",
    background: "#4318ff",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    boxShadow: "0 4px 14px rgba(67,24,255,0.3)",
  },
  secondaryBtn: {
    padding: "14px 28px",
    borderRadius: "10px",
    border: "1px solid #e0e5f2",
    background: "#fff",
    color: "#4318ff",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
  },

  // Features
  features: {
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  featureCard: {
    background: "#fff",
    borderRadius: "14px",
    padding: "24px",
    width: "200px",
    boxShadow: "0 4px 16px rgba(0,0,0,0.06)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "8px",
  },
  featureIcon: { fontSize: "28px" },
  featureTitle: { margin: 0, fontSize: "15px", fontWeight: "700", color: "#1b2559" },
  featureDesc: { margin: 0, fontSize: "12px", color: "#a3aed0", textAlign: "center" },

  // Footer
  footer: {
    textAlign: "center",
    padding: "20px",
    borderTop: "1px solid #e0e5f2",
    background: "#fff",
  },
  footerText: { margin: 0, fontSize: "14px", color: "#a3aed0" },
  footerLink: { color: "#4318ff", textDecoration: "none", fontWeight: "600" },
};

export default Home;