import { Dropdown, Image, NavItem, NavLink, Badge } from "react-bootstrap";
import "./index.scss";

function Notify() {
  return (
    <Dropdown as={NavItem} className="notify">
      <Dropdown.Toggle as={NavLink} className='position-relative'>
        <Image src="./img/bell-o.svg" alt="notify" />
        <Badge className="notify-count position-absolute" variant="danger">
          20
        </Badge>
      </Dropdown.Toggle>
      <Dropdown.Menu>
        <Dropdown.Item>Hello there!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}

export default Notify;
