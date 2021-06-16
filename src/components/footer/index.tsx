import { Container } from "react-bootstrap";

function Footer() {
  return (
    <Container fluid>
      <footer className="footer">&copy; - {new Date().getFullYear()} All Right Reserved</footer>
    </Container>
  );
}

export default Footer;
