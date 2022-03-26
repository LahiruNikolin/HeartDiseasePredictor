import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import Switch from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import AlbumIcon from "@mui/icons-material/Album";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Spinner from "react-bootstrap/Spinner";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Form from "./Form";
import { useParams } from "react-router-dom";
import { getTestById } from "../api/api";
import { useState, useEffect } from "react";

import "../styles/loading.css";

function Landing() {
  const [isDetecting, setIsDetecting] = React.useState(false);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  let { id } = useParams();

  const [state, setState] = useState(null);

  console.log("id", id);

  const runDetection = () => {
    setIsDetecting(true);
  };

  const stop = () => {
    setIsDetecting(false);
  };

  useEffect(async () => {
    const res = await getTestById(id);
    setState(res);
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
              "Results: Arrhythmia"
            )}
          </div>
          <div className={isDetecting ? "result-sub-hide" : "result-sub"}> Only took 6.4 seconds</div>
          <div className="btn-cont">
            <div className="btn" onClick={runDetection}>
              {isDetecting ? (
                <Spinner as="span" animation="border" role="status" aria-hidden="true" />
              ) : (
                "Run Prediction"
              )}
            </div>
            <div className="resrt" onClick={stop}>
              Clear
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Landing;
