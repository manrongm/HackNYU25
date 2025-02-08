import React from "react";
import MedicineSchedule from "./MedicineSchedule";
import "./style.css"; // Import the CSS file
import {
  BrowserRouter as Router,
  Routes,
  Route
 } from "react-router-dom";

export default function App() {
  return (
    <div className="container">
      <Router>
        <Route><MedicineSchedule/></Route>
      </Router>
    </div>
  );
}


