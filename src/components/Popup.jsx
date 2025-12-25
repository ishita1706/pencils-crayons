import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Popup.css";

export default function Popup({ onClose, category }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  function handleSubmit() {
    // Here you can later add email/telegram logic
    onClose();
    navigate(`/category/${category}`);
  }

  return (
    <div className="popup-overlay">
      <div className="popup-container">
        <h3>Enter your details</h3>
        <input placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
        <input placeholder="Phone Number" value={phone} onChange={e => setPhone(e.target.value)} />
        <button className="popup-submit" onClick={handleSubmit}>Submit</button>
        <button className="popup-close" onClick={onClose}>Close</button>
      </div>
    </div>
  );
}
