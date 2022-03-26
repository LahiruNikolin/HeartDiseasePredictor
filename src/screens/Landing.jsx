import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { getTestById, deleteTest, getAllTests } from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/loading.css";

function Landing() {
  let navigate = useNavigate();

  const [isDetecting, setIsDetecting] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  let { id } = useParams();

  const [state, setState] = useState({
    description: '',
    result:''
  });

  console.log("id", id);

  const runDetection = () => {
   // setIsDetecting(true);
  };

  const stop = () => {
    //setIsDetecting(false);
    navigate(`/prediction`);
  };

  useEffect(async () => {
    setIsDetecting(true);
    const res = await getTestById(id);
    console.log("delete respinse", res);
    setState(res);
     
    // await deleteTest("623e060de6df369473863047");
    //const res = await getAllTests();
    // console.log(res);

    //setState(res);
    setTimeout(()=>{  
      
      setIsDetecting(false);
    }, 1300);
  }, [id]);
  return (
    <>
      <Navbar />
      <div className="main-container">
        <div className="controls-cont" style={{ width: "100%" }}>
          <div className="results">
            {isDetecting ? (
              <>
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
                <Spinner animation="grow" size="sm" />
              </>
            ) : (
              `${state.description ?? "Coudn't find results"}`
            )}
          </div>
          <div className="btn-cont">       
            <div className="resrt" onClick={stop}>
              Go Back
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
