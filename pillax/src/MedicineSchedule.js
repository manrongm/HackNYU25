import React, { useState } from "react";
import "./style.css";

const MedicineSchedule = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [showInfoPopup, setShowInfoPopup] = useState(false);
  const [showAddPopup, setShowAddPopup] = useState(false);
  const [selectedMedicine, setSelectedMedicine] = useState(null);
  const [medicineName, setMedicineName] = useState("");
  const [medicineInfo, setMedicineInfo] = useState(null);
  const [name, setName] = useState("");
  const [tip, setTip] = useState("");
  const [pieces, setPieces] = useState("");
  const [occurrence, setOccurrence] = useState("");
  const [step, setStep] = useState(1);
  const [timeSlots, setTimeSlots] = useState([]);
  const [medicineList, setMedicineList] = useState([]);
  const [helpRequested, setHelpRequested] = useState(false);

  // Simulating Backend API Call
  const fetchMedicineInfo = async () => {
    setTimeout(() => {
      setMedicineInfo({
        name: medicineName,
        brand: "Example Brand",
        details: "Have the medicine with a meal, two times a day.",
      });
      setStep(3);
    }, 1000);
  };

  const medicines = [
    {
      name: "Paracetamol",
      occurrence: "Twice a day",
      dateTime: "08:00 AM, 08:00 PM",
      tip: "Take after food",
      pieces: "1 tablet",
    },
    {
      name: "Ibuprofen",
      occurrence: "Three times a day",
      dateTime: "08:00 AM, 02:00 PM, 08:00 PM",
      tip: "Drink plenty of water",
      pieces: "1 tablet",
    },
    {
      name: "Amoxicillin",
      occurrence: "Once a day",
      dateTime: "09:00 AM",
      tip: "Take on an empty stomach",
      pieces: "1 capsule",
    },
    {
      name: "Aspirin",
      occurrence: "Once a day",
      dateTime: "10:00 AM",
      tip: "Avoid alcohol",
      pieces: "1 tablet",
    },
    {
      name: "Vitamin D",
      occurrence: "Once a week",
      dateTime: "Sunday 10:00 AM",
      tip: "Best taken with fat-containing meals",
      pieces: "1 softgel",
    },
  ];

  const handleMedicineClick = (medicine) => {
    setSelectedMedicine(medicine);
    setShowInfoPopup(true);
  };

  const handleFinish = (helpRequested) => {
    let newMedicineEntries;

    if (helpRequested) {
      newMedicineEntries = [
        {
          name: medicineName,
          time: "08:00",
          tip: "Have with a meal",
          pieces: "3",
          occurrence: "2",
        },
        {
          name: medicineName,
          time: "13:00",
          tip: "Have with a meal",
          pieces: "3",
          occurrence: "2",
        },
      ];
    } else {
      newMedicineEntries = timeSlots.map((time) => ({
        name: medicineName,
        time,
        tip,
        pieces,
        occurrence,
      }));
    }

    const updatedList = [...medicineList, ...newMedicineEntries].sort((a, b) =>
      a.time.localeCompare(b.time)
    );
    setMedicineList(updatedList);
    setShowAddPopup(false);
  };

  const handleOccurrenceChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setOccurrence(value);
    setTimeSlots(Array(value).fill(""));
  };

  const handleTimeChange = (index, value) => {
    const updatedTimeSlots = [...timeSlots];
    updatedTimeSlots[index] = value;
    setTimeSlots(updatedTimeSlots);
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
        {medicineList.map((medicine, index) => (
          <div
            key={index}
            className="medicine-item"
            onClick={() => {
              setSelectedMedicine(medicine);
              setShowInfoPopup(true);
            }}
          >
            <div className="image"></div>
            <div className="medicine-info">
              <p>
                <strong>{medicine.name}</strong>
              </p>
              <p>
                <strong>Time:</strong> {medicine.time}
              </p>
              <p>
                <strong>Pieces:</strong> {medicine.pieces}
              </p>
            </div>
          </div>
        ))}
      </div>

      {showInfoPopup && selectedMedicine && (
        <div className="popup-overlay">
          <div className="popup-content medicine-popup">
            <button
              className="close-btn"
              onClick={() => setShowInfoPopup(false)}
            >
              ×
            </button>
            <div className="medicine-detail">
              <div className="medicine-image"></div>
              <div className="medicine-info-detail">
                <p>
                  <strong>Name:</strong> {selectedMedicine.name}
                </p>
                <p>
                  <strong>Date/Time:</strong> {selectedMedicine.time}
                </p>
                <p>
                  <strong>Tip:</strong> {selectedMedicine.tip}
                </p>
                <p>
                  <strong>Pieces:</strong> {selectedMedicine.pieces}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}

      {showAddPopup && (
        <div className="popup-overlay">
          <div className="popup-content">
            <button
              className="close-btn"
              onClick={() => {
                setShowAddPopup(false);
                setStep(1);
              }}
            >
              ×
            </button>
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
                <label>
                  Name:{" "}
                  <input
                    type="text"
                    value={medicineName}
                    onChange={(e) => setMedicineName(e.target.value)}
                  />
                </label>
                <label>
                  Occurrence:{" "}
                  <input
                    type="number"
                    min="1"
                    value={occurrence}
                    onChange={handleOccurrenceChange}
                  />
                </label>
                {timeSlots.map((time, index) => (
                  <label key={index}>
                    Time {index + 1}:{" "}
                    <input
                      type="time"
                      value={time}
                      onChange={(e) => handleTimeChange(index, e.target.value)}
                    />
                  </label>
                ))}
                <label>
                  Tip:{" "}
                  <input
                    type="text"
                    value={tip}
                    onChange={(e) => setTip(e.target.value)}
                  />
                </label>
                <label>
                  Pieces:{" "}
                  <input
                    type="text"
                    value={pieces}
                    onChange={(e) => setPieces(e.target.value)}
                  />
                </label>
                <label>
                  Date/Time: <input type="date" name="date-time" />
                </label>
                <label>
                  Notification:
                  <select name="notification">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <div className="button-group">
                  <button
                    type="button"
                    className="finish-btn"
                    onClick={() => setStep(1)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="finish-btn"
                    onClick={() => {
                      handleFinish(false);
                    }}
                  >
                    Finish
                  </button>
                </div>
              </form>
            ) : step === 4 ? (
              <form className="medicine-form">
                <label>
                  Name:{" "}
                  <input
                    type="text"
                    name="name"
                    value={medicineName}
                    onChange={(e) => setMedicineName(e.target.value)}
                  />
                </label>
                <label>
                  Date/Time: <input type="date" name="date-time" />
                </label>
                <label>
                  Notification:
                  <select name="notification">
                    <option value="yes">Yes</option>
                    <option value="no">No</option>
                  </select>
                </label>
                <div className="button-group">
                  <button
                    type="button"
                    className="finish-btn"
                    onClick={() => setStep(1)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="finish-btn"
                    onClick={fetchMedicineInfo}
                  >
                    Get Help
                  </button>
                </div>
              </form>
            ) : (
              <div className="medicine-info-popup">
                <p>
                  <strong>Do you mean this medicine?</strong>
                </p>
                <div className="medicine-info-box">
                  <p>
                    <strong>Name:</strong> {medicineInfo?.name}
                  </p>
                  <p>
                    <strong>Brand:</strong> {medicineInfo?.brand}
                  </p>
                  <p>
                    <strong>Details:</strong> {medicineInfo?.details}
                  </p>
                </div>
                <div className="button-group">
                  <button
                    type="button"
                    className="finish-btn"
                    onClick={() => setStep(4)}
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    className="finish-btn"
                    onClick={() => {
                      handleFinish(true);
                    }}
                  >
                    Finish
                  </button>
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
