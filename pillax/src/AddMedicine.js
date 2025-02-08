// src/components/AddMedicinePage.js

import React, { useState } from "react";
import "./AddMedicine.css"; // Import the CSS file

function AddMedicine() {
  // State for each form field
  const [name, setName] = useState("");
  const [occurrence, setOccurrence] = useState("");
  const [dateTime, setDateTime] = useState("");
  const [notification, setNotification] = useState("");
  const [tip, setTip] = useState("");
  const [pieces, setPieces] = useState("");

  // Handler for form submission
  const handleSubmit = (event) => {
    event.preventDefault();

    // For now, just show the values
    const formData = {
      name,
      occurrence,
      dateTime,
      notification,
      tip,
      pieces,
    };
    alert(`Medicine Saved!\n\n${JSON.stringify(formData, null, 2)}`);

    // In a real app, you might:
    // 1) Validate the fields
    // 2) Send data to a backend API
    // 3) Navigate back to a meds list page
  };

  return (
    <div className="add-medicine-container">
      <h1>Add New Medicine</h1>

      <form className="add-medicine-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="medName">Name</label>
          <input
            id="medName"
            type="text"
            placeholder="e.g., Lisinopril"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="occurrence">Occurrence</label>
          <select
            id="occurrence"
            value={occurrence}
            onChange={(e) => setOccurrence(e.target.value)}
            required
          >
            <option value="">-- Select Occurrence --</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="asNeeded">As Needed</option>
            {/* Add more if needed */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="dateTime">Date/Time</label>
          <input
            id="dateTime"
            type="datetime-local"
            value={dateTime}
            onChange={(e) => setDateTime(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="notification">Notification</label>
          <select
            id="notification"
            value={notification}
            onChange={(e) => setNotification(e.target.value)}
          >
            <option value="">No Notification</option>
            <option value="atTime">At Time of Event</option>
            <option value="15min">15 minutes before</option>
            <option value="30min">30 minutes before</option>
            {/* etc. */}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tip">Tip (Optional)</label>
          <input
            id="tip"
            type="text"
            placeholder="e.g., Take with food"
            value={tip}
            onChange={(e) => setTip(e.target.value)}
          />
        </div>

        <div className="form-group">
          <label htmlFor="pieces">Pieces / Dosage</label>
          <input
            id="pieces"
            type="number"
            min="1"
            placeholder="e.g., 1"
            value={pieces}
            onChange={(e) => setPieces(e.target.value)}
            required
          />
        </div>

        <div className="button-row">
          {/* Cancel button might navigate back or clear fields */}
          <button
            type="button"
            className="btn-secondary"
            onClick={() => {
              // For example, clear or navigate away
              setName("");
              setOccurrence("");
              setDateTime("");
              setNotification("");
              setTip("");
              setPieces("");
              alert("Form cleared (or navigate away).");
            }}
          >
            Cancel
          </button>

          <button type="submit" className="btn-primary">
            Finish
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddMedicine;
