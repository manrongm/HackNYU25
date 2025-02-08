import React from "react";
import "./style.css";

const MedicineSchedule = () => {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>Medicine Schedule</h1>
        <button>Welcome/Log-out</button>
      </div>

      {/* Add Button */}
      <div className="add-button">
        <button>Add</button>
      </div>

      {/* Scrollable Medicine List */}
      <div className="medicine-list">
        {[...Array(20).keys()].map((item) => (
          <div key={item} className="medicine-item">
            <div className="image"></div>
            <p>Basic description of the medicine</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedicineSchedule;

