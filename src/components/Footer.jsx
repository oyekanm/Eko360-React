import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__div">
        <div className="footer-logo">
          <img
            src={require("../assets/img/eko-footer.png")}
            alt=""
            className="footer-img"
          />
          <p className="policy">Copyright © 2022</p>
        </div>
        <div className="footer--div">
          <div className="row">
            <div className="col-md-3 col-sm-6">
              <Link to="/about" className="footer__text">
                Our Vision
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/about" className="footer__text">
                Our Mission
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/about#functions" className="footer__text">
                Core Functions
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/privacy" className="footer__text">
                Privacy and Terms of Use
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/faqs" className="footer__text">
                FAQs
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/submit-dataset" className="footer__text">
                Share Data
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/web-resources" className="footer__text">
                Web Resources
              </Link>
            </div>
            <div className="col-md-3 col-sm-6">
              <Link to="/contact" className="footer__text">
                Support and Contact Us
              </Link>
            </div>
          </div>
        </div>
        <p className="policy Privacy">Copyright © 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
