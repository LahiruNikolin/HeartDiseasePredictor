import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "react-bootstrap/Spinner";

import { initPrediction } from "../api/api";

import "../styles/form.css";

function Form() {
  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await initPrediction();
    console.log(res);

  };
  return (
    <>
      <Navbar />
      <div className="form-main-container">
        <div className="form-wrapper">
          <form className="form">
            <div className="inputs-cont">
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Age" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Sex" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Cp" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Trestbps" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Chol" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Fbs" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Restecg" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Thalach" />
              </div>
            </div>
            <div className="inputs-cont">
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Exang" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Oldpeal" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Slope" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Ca" />
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Thal" />
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
