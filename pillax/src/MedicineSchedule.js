import React, { useState } from "react";
import "./style.css";

const MedicineSchedule = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [step, setStep] = useState(1);
  const [medicineName, setMedicineName] = useState("");
  const [medicineInfo, setMedicineInfo] = useState(null);

  // Simulating Backend API Call
  const fetchMedicineInfo = async () => {
    setTimeout(() => {
      setMedicineInfo({
        name: medicineName,
        brand: "Example Brand",
        details: "This medicine is used for treating XYZ condition.",
      });
      setStep(3);
    }, 1000);
  };

  const medicines = [
    { name: "Paracetamol", occurrence: "Twice a day", dateTime: "08:00 AM, 08:00 PM", tip: "Take after food", pieces: "1 tablet" },
    { name: "Ibuprofen", occurrence: "Three times a day", dateTime: "08:00 AM, 02:00 PM, 08:00 PM", tip: "Drink plenty of water", pieces: "1 tablet" },
    { name: "Amoxicillin", occurrence: "Once a day", dateTime: "09:00 AM", tip: "Take on an empty stomach", pieces: "1 capsule" },
    { name: "Aspirin", occurrence: "Once a day", dateTime: "10:00 AM", tip: "Avoid alcohol", pieces: "1 tablet" },
    { name: "Vitamin D", occurrence: "Once a week", dateTime: "Sunday 10:00 AM", tip: "Best taken with fat-containing meals", pieces: "1 softgel" }
  ];

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
    setShowInfoPopup(true);
  };

  return (
    <div className="container">
      <div className="header">
        <h1>Medicine Schedule</h1>
        <button>Welcome/Log-out</button>
      </div>

      <div className="add-button">
        <button onClick={() => setShowAddPopup(true)}>Add</button>
      </div>

      <div className="medicine-list">
        {medicines.map((medicine, index) => (
          <div key={index} className="medicine-item" onClick={() => handleMedicineClick(medicine)}>
            <div className="image"></div>
            <div className="medicine-info">
              <p>{medicine.name}</p>
              <p>{medicine.occurrence}</p>
              <button className="add-cart-btn">Add to Schedule</button>
            </div>
          </div>
        ))}
      </div>

      {showInfoPopup && selectedMedicine && (
        <div className="popup-overlay">
          <div className="popup-content medicine-popup">
            <button className="close-btn" onClick={() => setShowInfoPopup(false)}>×</button>
            <div className="medicine-detail">
              <div className="medicine-image"></div>
              <div className="medicine-info-detail">
                <p><strong>Name:</strong> {selectedMedicine.name}</p>
                <p><strong>Occurrence:</strong> {selectedMedicine.occurrence}</p>
                <p><strong>Date/Time:</strong> {selectedMedicine.dateTime}</p>
                <p><strong>Tip:</strong> {selectedMedicine.tip}</p>
                <p><strong>Pieces:</strong> {selectedMedicine.pieces}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button className="close-btn" onClick={() => { setShowAddPopup(false); setStep(1); }}>×</button>
            {step === 1 ? (
              <div className="popup-options">
                <div className="popup-option" onClick={() => setStep(2)}>
                  I know everything about this medicine! Do it by myself
                </div>
                <div className="popup-option" onClick={() => setStep(4)}>
                  I need help on the medicine information!
                </div>
              </div>
            ) : step === 2 ? (
              <form className="medicine-form">
                <label>Name: <input type="text" name="name" /></label>
                <label>Occurrence: <input type="text" name="occurrence" /></label>
                <label>Date/Time: <input type="date" name="date-time" /></label>
                <label>Notification:
                  <select name="notification">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <label>Tip: <input type="text" name="tip" /></label>
                <label>Pieces: <input type="text" name="pieces" /></label>
                <div className="button-group">
                  <button type="button" className="finish-btn" onClick={() => setStep(1)}>Cancel</button>
                  <button type="button" className="finish-btn" onClick={() => { setShowAddPopup(false); setStep(1); }}>Finish</button>
                </div>
              </form>
            ) : step === 4 ? (
              <form className="medicine-form">
                <label>Name: <input type="text" name="name" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} /></label>
                <label>Date/Time: <input type="date" name="date-time" /></label>
                <label>Notification:
                  <select name="notification">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <div className="button-group">
                  <button type="button" className="finish-btn" onClick={() => setStep(1)}>Cancel</button>
                  <button type="button" className="finish-btn" onClick={fetchMedicineInfo}>Get Help</button>
                </div>
              </form>
            ) : (
                <div className="medicine-info-popup">
                  <p><strong>Do you mean this medicine?</strong></p>
                  <div className="medicine-info-box">
                    <p><strong>Name:</strong> {medicineInfo?.name}</p>
                    <p><strong>Brand:</strong> {medicineInfo?.brand}</p>
                    <p><strong>Details:</strong> {medicineInfo?.details}</p>
                  </div>
                  <div className="button-group">
                    <button type="button" className="cancel-btn" onClick={() => setStep(4)}>Cancel</button>
                    <button type="button" className="finish-btn" onClick={() => { setShowPopup(false); setStep(1); }}>Finish</button>
                  </div>
                </div>
              )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MedicineSchedule;



