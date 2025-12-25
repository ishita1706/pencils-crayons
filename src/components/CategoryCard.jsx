import { useNavigate } from "react-router-dom";
import "./CategoryCard.css";

export default function CategoryCard({ title, img }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    // Navigate directly to category page
    navigate(`/category/${title.toLowerCase()}`);
  };

  return (
    <div className="category-card" onClick={handleCardClick}>
      {img && <img src={img} alt={title} className="category-img" />}
      <h3>{title}</h3>
    </div>
  );
}
