import { Button, Form, FormControl, Image } from "react-bootstrap";
import "./index.scss";
function Search() {
  return (
    <div className="top-content d-flex justify-content-between">
      <Form className="search d-flex position-relative">
        <FormControl type="search" placeholder="Search" className="mr-2" aria-label="Search" />
        <Button type="submit" className="search-btn position-absolute " variant="">
          <Image src="./img/search.svg" />
        </Button>
      </Form>
      <Button className="btn-create" variant="primary">New Project</Button>
    </div>
  );
}

export default Search;
