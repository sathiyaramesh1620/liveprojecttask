import { Container } from "react-bootstrap";
import Table from "react-bootstrap/Table";

function TablePage({first, second, third, fourth, fifth}) {
  return (
    <Container>
      <Table
        striped
        bordered
        hover
        className="mt-5"
      >
        <thead>
          <tr>
            <th className="col-2">Col-List</th>
            <th className={first  ? "d-none" : ""}>
              ID
            </th>
            <th className={`${second  ? "d-none" : ""} col-2`}>
              Name
            </th>
            <th className={`${third  ? "d-none" : ""} col-2`}>
              Eamil
            </th>
            <th className={`${fourth  ? "d-none" : ""} col-2`}>
              Salary
            </th>
            <th className={`${fifth  ? "d-none" : ""} col-2`}>
              Address
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td className={`${first  ? "d-none" : ""}`}>
              101
            </td>
            <td className={`${second  ? "d-none" : ""}`}>
              sathiya
            </td>
            <td className={`${third  ? "d-none" : ""}`}>
              sathiya@gamil.com
            </td>
            <td className={`${fourth  ? "d-none" : ""}`}>
              100000
            </td>
            <td className={`${fifth ? "d-none" : ""}`}>
              JKM
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td className={`${first ? "d-none" : ""}`}>
              102
            </td>
            <td className={`${second ? "d-none" : ""}`}>
              Anbu
            </td>
            <td className={`${third ? "d-none" : ""}`}>
              ram@gmail.com
            </td>
            <td className={`${fourth ? "d-none" : ""}`}>
              200000
            </td>
            <td className={`${fifth ? "d-none" : ""}`}>
              JKM




            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}

export default TablePage;
