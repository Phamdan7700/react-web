import { Nav, Badge } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import "./index.scss";

function NavHeader() {
  return (
    <Nav className="mr-auto nav-header">
      <Nav.Link exact as={NavLink} to="./">
        DashBoard
      </Nav.Link>
      <Nav.Link as={NavLink} to="/projects">
        Projects
      </Nav.Link>
      <Nav.Link as={NavLink} to="/messages" className="position-relative">
        Messages{" "}
        <Badge className="mess-count position-absolute" variant="danger">
          9
        </Badge>
      </Nav.Link>
    </Nav>
  );
}
export default NavHeader;
