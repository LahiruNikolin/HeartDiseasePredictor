import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "react-bootstrap/Spinner";

import { initPrediction } from "../api/api";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "../styles/form.css";

function Form() {
  let navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    let formArray = [];

    for (let i = 1; i < 14; i++) {
      let value = document.querySelector(`#formGroupExampleInput${i}`)?.value;
      formArray.push(value ?? "");
    }
   const res = await initPrediction(formArray);
   navigate(`/prediction/${res.test_id}`);
  };

  useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="form-main-container">
        <div className="form-wrapper">
          <form className="form" id="TesterForm">
            <div className="inputs-cont">
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput1" placeholder="Age" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Sex" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput3" placeholder="Cp" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput4" placeholder="Trestbps" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput5" placeholder="Chol" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput6" placeholder="Fbs" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput7" placeholder="Restecg" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput8" placeholder="Thalach" />
              </div>
            </div>
            <div className="inputs-cont">
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput9" placeholder="Exang" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput10" placeholder="Oldpeal" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput11" placeholder="Slope" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput12" placeholder="Ca" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput13" placeholder="Thal" />
              </div>
              <div class="form-group" className="submit-btn-cont">
                <button type="submit" class=" btn-primary mb-2" onClick={handleSubmit}>
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Form;
