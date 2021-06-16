import { ListGroup, Image } from "react-bootstrap";
import "./index.scss";

function RecentConnect() {
  const recentConnect = [
    {
      name: "Black",
      content: "Lorem ipsum dolor sit amet",
    },
    {
      name: "WWhite",
      content: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className="recent-connect">
      <h5 className="title">Recent Connect</h5>
      <ListGroup variant="flush">
        {recentConnect &&
          recentConnect.map((connect) => (
            <ListGroup.Item>
              <div className="list-item d-flex">
                <div className="flex-grow-0 avatar">
                  <Image src="./img/0.png" />
                </div>
                <div className="flex-grow-1 ml-2">
                  <h6 className="name">{connect.name}</h6>
                  <div>{connect.content}</div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default RecentConnect;
