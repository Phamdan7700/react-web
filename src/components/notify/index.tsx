import { Dropdown, Image, NavItem, NavLink } from "react-bootstrap";
import './index.scss';

function Notify() {
  return (
    <Dropdown as={NavItem} className="notify">
      <Dropdown.Toggle as={NavLink}><Image src="./img/bell-o.png" alt="notify" /></Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  )
}

export default Notify;