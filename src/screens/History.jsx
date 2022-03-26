import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Modal from "react-bootstrap/Modal";
import "../styles/history.css";
import { useState, useEffect } from "react";
import { getAllTests, deleteTestById, getTesterById } from "../api/api";
import Table from "react-bootstrap/Table";
import Button from "@mui/material/Button";

function History() {
  const [state, setState] = useState([{ id: "12" }, { id: "tre" }]);
  const [testers, setTesters] = useState([]);
  const [show, setShow] = useState(false);

  const [singleTesters, setSingleTesters] = useState({});

  const [userDetails, setUserDetails] = useState(false);

  const [userId, setUserId] = useState(null);

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
    setUserId(id);
    handleShow();
    // await deleteTesterById(test.tester_id);
    //  const res = await getAllTests();
    //  fetchTesters(res);
  };

  const handleUserModalClose = async () => {
    setUserDetails(false);
  };

  const handleUserModalOpen = async (id) => {
    setUserDetails(true);
    let testerRes = await getTesterById(id);
    setSingleTesters(testerRes);
  };

  const confirmTestDelete = async () => {
    await deleteTestById(userId);
    handleClose();

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
            {testers
            ?.reverse()
            .map((tester) => {
              return (
                <tr>
                  <td>{tester.age}</td>
                  <td>{tester.sex}</td>
                  <td>{tester.description}</td>
                  <td>{tester.result}</td>
                  <td style={{ textAlign: "center", cursor: "pointer" }}>
                    <span
                      style={{ marginRight: "14px" }}
                      onClick={(e) => {
                        handleUserModalOpen(tester.id);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-view-list"
                        viewBox="0 0 16 16"
                      >
                        <path d="M3 4.5h10a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2zm0 1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1H3zM1 2a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 2zm0 12a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13A.5.5 0 0 1 1 14z" />
                      </svg>
                    </span>

                    <span
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
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ background: "#DFDFDE", marginRight: "3px" }}>
            Nope
          </Button>
          <Button variant="primary" onClick={confirmTestDelete} style={{ background: "#FD5D5D", color: "#fff" }}>
            Yes Go Ahead!
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose} style={{ background: "#DFDFDE", marginRight: "3px" }}>
            Nope
          </Button>
          <Button variant="primary" onClick={confirmTestDelete} style={{ background: "#FD5D5D", color: "#fff" }}>
            Yes Go Ahead!
          </Button>
        </Modal.Footer>
      </Modal>

      <Modal
        show={userDetails}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        onHide={handleUserModalClose}
        class="modal"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">Tester Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div>
            <div class="modal-data">
              <span>Age</span><span>{singleTesters.age}</span>
            </div>
            <div class="modal-data">
              <span>Sex</span> <span>{singleTesters.sex}</span>
            </div>
            <div class="modal-data">
              <span>cp</span> <span>{singleTesters.cp}</span>
            </div>
            <div class="modal-data">
              <span>trestbps</span> <span>{singleTesters.trestbps}</span>
            </div>
            <div class="modal-data">
              <span>chol</span> <span>{singleTesters.chol}</span>
            </div>
            <div class="modal-data">
              <span>fbs</span> <span>{singleTesters.fbs}</span>
            </div>
            <div class="modal-data">
              <span>restecg</span> <span>{singleTesters.restecg}</span>
            </div>
            <div class="modal-data">
              <span>thalach</span> <span>{singleTesters.thalach}</span>
            </div>
            <div class="modal-data">
              <span>exang</span> <span>{singleTesters.exang}</span>
            </div>
            <div class="modal-data">
              <span>oldpeak</span> <span>{singleTesters.oldpeak}</span>
            </div>
            <div class="modal-data">
              <span>slope</span> <span>{singleTesters.slope}</span>
            </div>
            <div class="modal-data">
              <span>ca</span> <span>{singleTesters.ca}</span>
            </div>
            <div class="modal-data">
              <span>thal</span> <span>{singleTesters.thal}</span>
            </div>
          </div>
        </Modal.Body>
      </Modal>
      <Footer />
    </>
  );
}

export default History;
