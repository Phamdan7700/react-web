import { useState } from "react";
import { Button, Pagination, Table } from "react-bootstrap";
import Search from "../../components/seach-box";

function Projects() {
  let [currentPage, setCurrentPage] = useState(1);
  let [postPerPage, setpostPerPage] = useState(5);

  const columns = ["Title 1", "Title 1", "Title 1", "Title 1", "Title 1", "Title 1"];
  const projects = [];
  for (let i = 0; i <= 20; i++) {
    projects.push({
      title1: "Data " + i,
      title2: "Data " + i,
      title3: "Data " + i,
      title4: "Data " + i,
      title5: "Data " + i,
      title6: "Data " + i,
    });
  }

  const indexOfFirstPost = (currentPage - 1) * postPerPage;
  const indexOfLastPost = currentPage * postPerPage;
  const currentPosts = projects.slice(indexOfFirstPost, indexOfLastPost);

  const rows = currentPosts.map((post, index) => (
    <tr key={index}>
      {Object.values(post).map((value, index) => (
        <td key={index}>{value}</td>
      ))}
    </tr>
  ));

  // pagination
  const totalPage = Math.ceil(projects.length / postPerPage);
  let items = [];
  for (let number = 1; number <= totalPage; number++) {
    items.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => {
          setCurrentPage(number);
        }}
      >
        {number}
      </Pagination.Item>
    );
  }

  const prenext = (number: number) => {
    if (currentPage > 1 && number === -1) {
      setCurrentPage(currentPage + number);
    }
    if (currentPage < totalPage && number === 1) {
      setCurrentPage(currentPage + number);
    }
  };

  return (
    <>
      
      <Search />       
      <Table responsive="lg">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </Table>
      <Pagination>
        <Pagination.Prev
          onClick={() => {
            prenext(-1);
          }}
        />
        {items}
        <Pagination.Next
          onClick={() => {
            prenext(1);
          }}
        />
      </Pagination>
    </>
  );
}

export default Projects;
