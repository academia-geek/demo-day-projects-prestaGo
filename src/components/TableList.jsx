import React from "react";
import { Table } from "react-bootstrap";

const buildData = (item) => {
  const dataProcess = []
  for (const key in item) {
    dataProcess.push({
      value:item[key]
    })
    ;
  }
  return dataProcess.map((item)=>(<td>{item.value}</td>))
};
const TableList = ({ data, dataHead }) => {
  return (
    <div>
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              {dataHead.map((item, index) => (
                <th key={index}>{item}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>{buildData(item)}</tr>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};

export default TableList;
