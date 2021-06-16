import { ListGroup, Image } from "react-bootstrap";
import "./index.scss";

function RecentMessage() {
  const recentMessage = [
    {
      name: "Black",
      date: new Date().toDateString(),
      content: "Lorem ipsum dolor sit amet",
    },
    {
      name: "WWhite",
      date: new Date().toDateString(),
      content: "Lorem ipsum dolor sit amet",
    },
  ];

  return (
    <div className="recent-message">
      <h5 className="title">Recent Message</h5>
      <ListGroup variant="flush" >
        {recentMessage &&
          recentMessage.map((mess) => (
            <ListGroup.Item>
              <div className="list-item d-flex">
                <div className="flex-grow-0 avatar">
                  <Image src="./img/0.png" />
                </div>
                <div className="flex-grow-1 ml-2">
                  <div className="d-flex justify-content-between">
                    <h6 className="name">{mess.name}</h6>
                    <span className="text-secondary recent-date">{mess.date}</span>
                  </div>
                  <div>{mess.content}</div>
                </div>
              </div>
            </ListGroup.Item>
          ))}
      </ListGroup>
    </div>
  );
}

export default RecentMessage;
