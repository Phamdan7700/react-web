import "bootstrap/dist/css/bootstrap.min.css";
import { Navbar } from "react-bootstrap";
import Logo from "../logo";
import NavHeader from "../nav";
import Notify from "../notify";
import User from "../user";
import './index.scss';
const Header = function () {
  return (
    <>
      <Navbar className="navbar">
        <Logo />
        <NavHeader />
        <Notify />
        <User />
      </Navbar>
    </>
  );
};

export default Header;
