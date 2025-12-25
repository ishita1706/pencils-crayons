import { useState } from "react";
import Popup from "./Popup";
import "./CategoryCard.css";

export default function CategoryCard({ title, img }) {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <>
      <div className="category-card" onClick={() => setShowPopup(true)}>
        {img && <img src={img} alt={title} className="category-img" />}
        <h3>{title}</h3>
      </div>

      {showPopup && <Popup category={title.toLowerCase()} onClose={() => setShowPopup(false)} />}
    </>
  );
}
