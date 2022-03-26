import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/history.css";
import { useState, useEffect } from "react";
import { getAllTests, getTesterById } from "../api/api";
import Table from "react-bootstrap/Table";

function History() {
  const [state, setState] = useState([]);
  const [testers, setTesters] = useState(null);

  const fetchTesters = (res) => {
      let temArray = [];
       res.forEach(async (test)=> {
           let res = await getTesterById(test.tester_id)
            let { age, sex } = res;
            temArray.push({age, sex, "description" : test.description, "result" : test.result});
       });

       console.log(temArray);
  }

  useEffect(async () => {

    const res = await getAllTests();
  //  console.log(res[0])
    //setState(res);
    fetchTesters(res);
  }, []);
  return (
    <>
      <Navbar />
      <div className="main-container history-main">
        <div className="past-pred">Past predictions</div>
        <Table striped bordered hover className="table">
          <thead>
            <tr>
              <th>Age</th>
              <th>Sex</th>
              <th>Descriptin</th>
              <th>Result</th>
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
