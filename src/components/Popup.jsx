import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Popup.css";

export default function Popup({ onClose, category }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");

  // Validate name
  const validateName = (value) => {
    if (!value.trim()) {
      setNameError("Name is required");
      return false;
    }
    setNameError("");
    return true;
  };

  // Validate phone
  const validatePhone = (value) => {
    const digitsOnly = value.replace(/\D/g, "");
    if (digitsOnly.length < 10) {
      setPhoneError("Phone must be at least 10 digits");
      return false;
    }
    setPhoneError("");
    return true;
  };

  // Check if form is valid
  const isFormValid = () => {
    const digitsOnly = phone.replace(/\D/g, "");
    return name.trim() !== "" && digitsOnly.length >= 10;
  };

  function handleSubmit() {
    const isNameValid = validateName(name);
    const isPhoneValid = validatePhone(phone);

    if (isNameValid && isPhoneValid) {
      // Save to localStorage
      const leadData = { name: name.trim(), phone: phone.trim() };
      localStorage.setItem("lead", JSON.stringify(leadData));
      console.log("Lead saved:", leadData);

      // Close popup and navigate
      onClose();
      navigate(`/category/${category}`);
    }
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h3>Enter your details</h3>
        <p className="popup-message">Enter your details to view our full product range & prices</p>
        
        <div className="input-group">
          <input 
            type="text"
            placeholder="Your Name" 
            value={name} 
            onChange={e => {
              setName(e.target.value);
              if (e.target.value.trim()) setNameError("");
            }}
            onBlur={() => validateName(name)}
            required
          />
          {nameError && <span className="error-message">{nameError}</span>}
        </div>

        <div className="input-group">
          <input 
            type="tel"
            placeholder="Phone Number" 
            value={phone} 
            onChange={e => {
              setPhone(e.target.value);
              const digitsOnly = e.target.value.replace(/\D/g, "");
              if (digitsOnly.length >= 10) setPhoneError("");
            }}
            onBlur={() => validatePhone(phone)}
            required
          />
          {phoneError && <span className="error-message">{phoneError}</span>}
        </div>

        <button 
          className="popup-submit" 
          onClick={handleSubmit}
          disabled={!isFormValid()}
        >
          Submit
        </button>
        <button className="popup-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
