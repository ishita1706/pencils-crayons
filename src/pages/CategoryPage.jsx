import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { name } = useParams();
  const categoryProducts = products[name] || [];
  const navigate = useNavigate(); // <-- add this

  return (
    <div className="category-page">
      <h1 style={{ textTransform: "capitalize" }}>{name} Products</h1>

      <div className="products-grid">
        {categoryProducts.map((product, index) => (
          <div key={index} className="product-card">
            <img src={product.img} alt={product.name} />
            <p>{product.name}</p>
          </div>
        ))}
      </div>

      {/* Back to Home Button */}
      <button
        className="back-button"
        onClick={() => navigate("/")}
      >
        ← Back to Home
      </button>
    </div>
  );
}
