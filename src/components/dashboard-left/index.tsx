import { Image, ListGroup } from "react-bootstrap";

interface item {
  title: string;
  author: string;
  status: string;
  date: string;
}
interface ListData {
  list: Array<item>;
}
function DashboardLeft({ list }: ListData) {
  return (
    <ListGroup>
      {list &&
        list.map((item) => (
          <ListGroup.Item className="d-flex ">
            <Image src="./img/0.png" width="50px" height="50px" roundedCircle />
            <div className="d-flex justify-content-between w-100 ml-3">
              <div className="title">
                <h6> {item?.title} </h6>
                <div className="text-secondary"> {item?.author} </div>
              </div>
              <div>
                <div className="text-success text-right font-weight-bold"> {item?.status} </div>
                <div> {item?.date} </div>
              </div>
            </div>
          </ListGroup.Item>
        ))}
    </ListGroup>
  );
}

export default DashboardLeft;
