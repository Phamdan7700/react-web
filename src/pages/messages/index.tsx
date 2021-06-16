import { Col, ListGroup, Row } from "react-bootstrap";
import Search from "../../components/seach-box";

function Messages() {
  return (
    <>
      <Row>
        <Col sm={5}>
          <Search />
          <ListGroup>
            <ListGroup.Item>Cras justo odio</ListGroup.Item>
            <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
            <ListGroup.Item>Morbi leo risus</ListGroup.Item>
            <ListGroup.Item>Porta ac consectetur ac</ListGroup.Item>
            <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col sm={7}>álkdjsald</Col>
      </Row>
    </>
  );
}

export default Messages;
