import React, { useState } from "react";
import "./style.css";

const MedicineSchedule = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [step, setStep] = useState(1); // Step 1: Selection, Step 2: Form Input

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <h1>Medicine Schedule</h1>
        <button>Welcome/Log-out</button>
      </div>

      {/* Add Button */}
      <div className="add-button">
        <button onClick={() => setShowPopup(true)}>Add</button>
      </div>

      {/* Scrollable Medicine List */}
      <div className="medicine-list">
        {[...Array(5).keys()].map((item) => (
          <div key={item} className="medicine-item">
            <div className="image"></div>
            <div className="medicine-info">
              <p>Basic description of the medicine</p>
              <button className="add-cart-btn">Add to Schedule</button>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => { setShowPopup(false); setStep(1); }}>×</button>

            {step === 1 ? (
              // First step - Selection
              <div className="popup-options">
                <div className="popup-option" onClick={() => setStep(2)}>
                  I know everything about this medicine! Do it by myself
                </div>
                <div className="popup-option">
                  I need help on the medicine information!
                </div>
              </div>
            ) : (
              // Second step - Form Input
              <form className="medicine-form">
                <label>
                  Name: <input type="text" name="name" />
                </label>
                <label>
                  Occurrence: <input type="text" name="occurrence" />
                </label>
                <label>
                  Date/Time: 
                  <input type="date" name="date-time" />
                </label>
                <label>
                  Notification:
                  <select name="notification">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <label>
                  Tip: <input type="text" name="tip" />
                </label>
                <label>
                  Pieces: <input type="text" name="pieces" />
                </label>
                <button type="button" className="finish-btn" onClick={() => { setShowPopup(false); setStep(1); }}>
                  Finish!
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineSchedule;


