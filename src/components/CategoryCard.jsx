import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Popup from "./Popup";
import "./CategoryCard.css";

export default function CategoryCard({ title, img }) {
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Check if lead data already exists in localStorage
    const existingLead = localStorage.getItem("lead");
    
    if (existingLead) {
      // Lead exists, navigate directly to category
      navigate(`/category/${title.toLowerCase()}`);
    } else {
      // No lead exists, show popup
      setShowPopup(true);
    }
  };

  return (
    <>
      <div className="category-card" onClick={handleCardClick}>
        {img && <img src={img} alt={title} className="category-img" />}
        <h3>{title}</h3>
      </div>

      {showPopup && <Popup category={title.toLowerCase()} onClose={() => setShowPopup(false)} />}
    </>
  );
}
