import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import LoggedHomePage from "./Components/LoggedHomePage";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/loggedhome" element={<LoggedHomePage/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
