import Splash from "./screens/Splash";
import Home from "./screens/Home";
import Landing from "./screens/Landing";
import History from "./screens/History";
import Form from "./screens/Form";
import "./App.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="prediction" element={<Form />} />
        <Route path="history" element={<History />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
