import { Dropdown, Image, NavItem, NavLink } from "react-bootstrap";
import "./index.scss";

function User() {
  return (
    <Dropdown as={NavItem} className="user">
      <Dropdown.Toggle as={NavLink} className="d-flex align-items-center">
        <Image src="./img/0.png" width={40} height={40} alt="img" roundedCircle />

        <div className="d-flex flex-column ml-2">
          <div className="user-name text-light">Donal Trump</div>
          <div className="user-mode text-primary">Client Mode</div>
        </div>
      </Dropdown.Toggle>
      <Dropdown.Menu align="right">
        <Dropdown.Item>Logout</Dropdown.Item>
        
      </Dropdown.Menu>
    </Dropdown>
  );
}
export default User;
