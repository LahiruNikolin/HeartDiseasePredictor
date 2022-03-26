import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import History from "./screens/History";
import Form from "./screens/Form";
import Charts from "./screens/Charts";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="prediction" element={<Form />} /> 
        <Route path="charts" element={<Charts />} /> 
        <Route path="history" element={<History />} />
        <Route path="prediction/:id" element={<Landing />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
