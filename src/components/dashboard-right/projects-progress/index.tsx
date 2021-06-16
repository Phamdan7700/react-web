import { ListGroup, ProgressBar } from "react-bootstrap";

function ProjectsProgress() {
  return (
    <div>
      <h5>Projects in progress</h5>
      <ListGroup variant="flush">
        <ListGroup.Item>
          <ProgressBar now={60} />
        </ListGroup.Item>
        <ListGroup.Item>
          <ProgressBar now={60} />
        </ListGroup.Item>
        <ListGroup.Item></ListGroup.Item>
      </ListGroup>
    </div>
  );
}

export default ProjectsProgress;
