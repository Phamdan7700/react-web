import { ReactNode } from "react";
import { Container } from "react-bootstrap";
import Footer from "../footer";
import Header from "../header";
import "./index.scss";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <Header />
      <div className="main-page">
        <Container className="vh-100">{children}</Container>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
