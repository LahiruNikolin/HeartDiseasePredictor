import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Modal from "react-bootstrap/Modal";
import "../styles/history.css";
import { useState, useEffect } from "react";
import { getAllTests, getTesterById, deleteTesterById } from "../api/api";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";

function History() {
  const [state, setState] = useState([{ id: "12" }, { id: "tre" }]);
  const [testers, setTesters] = useState([]);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const fetchTesters = (res) => {
    res.forEach(async (test) => {
      let testerRes = await getTesterById(test.tester_id);
      let { age, sex } = testerRes;
      setTesters((prevState) => {
        return [...prevState, { age, sex, description: test.description, result: test.result, id: test.tester_id }];
      });
    });
  };

  const handleDelete = async (id) => {
    console.log("deleting", id);
    handleShow();
    // await deleteTesterById(test.tester_id);
    //  const res = await getAllTests();
    //  fetchTesters(res);
  };

  useEffect(async () => {
    const res = await getAllTests();
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
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="table-body">
            {testers?.map((tester) => {
              return (
                <tr>
                  <td>{tester.age}</td>
                  <td>{tester.sex}</td>
                  <td>{tester.description}</td>
                  <td>{tester.result}</td>
                  <td
                    style={{ textAlign: "center", cursor: "pointer" }}
                    onClick={() => {
                      handleDelete(tester.id);
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-archive"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 2a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1v7.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 12.5V5a1 1 0 0 1-1-1V2zm2 3v7.5A1.5 1.5 0 0 0 3.5 14h9a1.5 1.5 0 0 0 1.5-1.5V5H2zm13-3H1v2h14V2zM5 7.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                    </svg>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Footer />
    </>
  );
}

export default History;
