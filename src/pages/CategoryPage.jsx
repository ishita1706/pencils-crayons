import { useParams, useNavigate } from "react-router-dom";
import ContactStrip from "../components/ContactStrip";
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
        {categoryProducts.map((product) => (
          <div key={product.name} className="product-card">
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

      <ContactStrip />
    </div>
  );
}
