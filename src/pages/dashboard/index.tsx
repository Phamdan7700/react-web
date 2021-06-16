import { Col, Row } from "react-bootstrap";
import DashboardLeft from "../../components/dashboard-left";
import DashBoardRight from "../../components/dashboard-right";
import Search from "../../components/seach-box";
import "./index.scss";

function DashBoard() {
  const list = [];
  for (let i = 0; i < 8; i++) {
    list.push({
      title: "Title " + i,
      author: "author " + i,
      status: "Active",
      date: new Date().toLocaleString(),
    });
  }

  return (
    <>
      <Search />
      <div className="content">
        <Row>
          <Col sm={7}>
            <DashboardLeft list={list} />
          </Col>
          <Col sm={5}>
            <DashBoardRight />
          </Col>
        </Row>
      </div>
    </>
  );
}

export default DashBoard;
