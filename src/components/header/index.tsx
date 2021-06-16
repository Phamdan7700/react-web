import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Logo from "../logo";
import NavHeader from "../nav";
import Notify from "../notify";
import User from "../user";
import "./index.scss";
const Header = function () {
  return (
    <header className="header-top">
      <Navbar className="navbar" expand="md">
        <Logo />
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <NavHeader />
          <Notify />
          <User />
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
