// Images
import logo from "@/assets/images/logo.png";

// ----------

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content center-relative">
        <div className="footer-logo">
          <img src={logo.src} alt="Pekko" />
        </div>

        <div className="copyright-holder">
          © {new Date(Date.now()).getFullYear()} - Build By{" "}
          <a href="https://alonsohhl.com">Alonso Huayta</a>.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
