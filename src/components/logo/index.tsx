import { Image, Navbar } from "react-bootstrap";


function Logo() {
  return (
    <>
      <Navbar.Brand href="#home">
        <Image alt="logo" src="./img/GTI Logo.png" width="100%" height="100%" className="d-inline-block align-top" />
      </Navbar.Brand>
    </>
  )

}
export default Logo;