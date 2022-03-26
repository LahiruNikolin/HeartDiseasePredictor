import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/history.css";

import Table from "react-bootstrap/Table";

function History() {
  return (
    <>
      <Navbar />
      <div className="main-container history-main">
        <div className="past-pred">Past predictions</div>
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Zero Name</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Username</th>
            </tr>
          </thead>
          <tbody className="table-body">
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>1</td>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Thornton</td>
              <td>@fat</td>
              <td>@fat</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Footer />
    </>
  );
}

export default History;
