import * as React from "react";
import Box from "@mui/material/Box";

import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";

import AcUnitIcon from "@mui/icons-material/AcUnit";
import AlbumIcon from "@mui/icons-material/Album";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import LogoutIcon from "@mui/icons-material/Logout";
import { Carousel, Card, Button } from "react-bootstrap";

import "../styles/home.css";
import img1 from "../imgs/p1.jpg";
import img2 from "../imgs/p2.jpg";
import img3 from "../imgs/p3.jpg";

import c1 from "../imgs/c1.jpg";
import c2 from "../imgs/c2.jpg";
import c3 from "../imgs/c3.jpg";
import t1 from "../imgs/t1.jpg";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

import "../styles/home.css";

function Landing() {
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      style={{ backgroundColor: "#FF5C58", height: "100%" }}
    >
      <div style={{ background: "FF5C58", width: "100%", height: "3rem" }} className="side-menu-head">
        PrediPower
      </div>
      <List>
        <ListItem button>
          <ListItemIcon>
            {" "}
            <AccountBoxIcon className="list-icon" />
          </ListItemIcon>
          <div className="list-item"> Profile</div>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            {" "}
            <AlbumIcon className="list-icon" />
          </ListItemIcon>
          <div className="list-item"> View Predictions</div>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            {" "}
            <AcUnitIcon className="list-icon" />
          </ListItemIcon>
          <div className="list-item"> Run Prediction</div>
        </ListItem>

        <ListItem button>
          <ListItemIcon>
            {" "}
            <LogoutIcon className="list-icon" />
          </ListItemIcon>
          <div className="list-item">Log Out</div>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="main-cointaner">
      <Navbar />
      <div className="carosel-wrapper">
        <Carousel className="carosel-custom">
          <Carousel.Item>
            <img className="d-block w-100 land-imgs" src={img1} alt="First slide" />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 land-imgs" src={img2} alt="Second slide" />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100 land-imgs" src={img3} alt="Third slide" />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>

      <div className="sub-sec-cont">
        <div className="sub-cont-text">Heart Disease Prediction System Using Machine Learning</div>
        <div className="card-cont">
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={c1} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={c2} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src={c3} />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
            </Card.Body>
          </Card>
        </div>
      </div>
      <div className="third-sec-cont">
        <div className="article">
          <div>
            <img src={t1} width="310px" height="200px" />
          </div>
        </div>
        <div className="article-cont">
          <div className="article-header"> About The Heart Disease Prediction System</div>
          <div className="article-content">
            All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this
            true generator dictionary of over 200 Latin words, combined with a handful of model sentence structures, to
            generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is therefore always
          </div>
        </div>
      </div>
      <div className="footer-placer">
        <Footer />
      </div>
    </div>
  );
}

export default Landing;
