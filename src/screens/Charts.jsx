import * as React from "react";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { useState, useEffect } from "react";

import "../styles/charts.css";

//images
import c1 from "../imgs/charts/c1.jpg";
import c2 from "../imgs/charts/c1.jpg";

function Charts() {
  const [imgPaths, setImgPaths] = useState([
    { name: "Head1", src: c1 },
    { name: "Head2", src: c2 },
  ]);
  return (
    <>
      <Navbar />
      <div className="chart-main-container">
        {imgPaths.map((img) => {
          return (
            <div style={{ paddingTop: "30px" }}>
              <div style={{ textAlign: "center" }}>{img.name}</div>
              <div style={{ textAlign: "center" }}>
                <img src={img.src} height="250px" />
              </div>
            </div>
          );
        })}
      </div>
      <Footer />
    </>
  );
}

export default Charts;
