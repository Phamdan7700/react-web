import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Footer from "../footer";
import Header from "../header";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <Container>
        <div className="main-content">{children}</div>
      </Container>
      <Footer />
    </>
  );
};

export default Layout;
