import { Container, Row, Col } from "react-bootstrap";
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-4 ">
      <Container fluid>
        {/* Social Icons */}
        <div className="  text-center mt-5">
          <a href="https://www.facebook.com/">
            <FaFacebook size={25} className="footer-icon me-2 text-white" />
          </a>
          <a href="https://www.instagram.com/">
            <FaInstagram size={25} className="footer-icon me-2 text-white" />
          </a>
          <a href="https://www.treccani.it">
            <FaTwitter size={25} className="footer-icon me-2 text-white" />
          </a>
          <a href="https://www.youtube.com/">
            <FaYoutube size={25} className="footer-icon text-white" />
          </a>
        </div>

        <Row className="col-6 justify-content-center mt-5 mx-auto ">
          {[
            "Audio and Subtitles",
            "Media Center",
            "Privacy",
            "Contact Us",
            "Audio Description",
            "Investor Relations",
            "Legal Notices",
            "Help Center",
            "Gift Cards",
            "Terms of Use",
            "Corporate Information",
            "Cookie Preferences",
          ].map((text, index) => (
            <Col key={index} xs={6} md={3} className="mb-2">
              <a href="#" className="text-light" style={{ textDecoration: "none" }}>
                {text}
              </a>
            </Col>
          ))}
          <Col className="mt-3">
            <button className="btn btn-outline-light">Service Code</button>
          </Col>
        </Row>

        <Row className="mt-2 mx-auto col-6 justify-content-center">
          <Col>
            <p className="m-0 ">&copy; 2024 YourCompany, Inc.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
