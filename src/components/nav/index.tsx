import { Nav } from "react-bootstrap";
import './index.scss';

function NavHeader() {
  return (
    <>
      <Nav className="mr-auto">
        <Nav.Link href="#home">DashBoard</Nav.Link>
        <Nav.Link href="#features">Projects</Nav.Link>
        <Nav.Link href="#pricing">Messages</Nav.Link>
      </Nav>
    </>
  )

}
export default NavHeader;