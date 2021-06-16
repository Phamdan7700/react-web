import { Image, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Logo() {
  return (
    <Navbar.Brand as={Link} to="/">
      <Image alt="logo" src="./img/GTI Logo.svg" width="100%" height="100%" className="d-inline-block align-top" />
    </Navbar.Brand>
  );
}
export default Logo;
