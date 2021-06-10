import { Dropdown, Image, NavItem, NavLink } from "react-bootstrap";
import "./index.scss";

function User() {
  return (
    <Dropdown as={NavItem} className="user-info">
      <Dropdown.Toggle as={NavLink}>
        <Image src="./img/0.png" roundedCircle />
        <span className="ml-1">Welcome</span>
      </Dropdown.Toggle>
      <Dropdown.Menu align="right">
        <Dropdown.Item>Hello there!</Dropdown.Item>
        <Dropdown.Item>Hello there!</Dropdown.Item>
        <Dropdown.Item>Hello there!</Dropdown.Item>
        <Dropdown.Item>Hello theredaldjalsdjsakldjwkl!</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default User;
