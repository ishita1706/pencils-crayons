import { useParams, useNavigate } from "react-router-dom";
import ContactStrip from "../components/ContactStrip";
import { products } from "../data";
import "./CategoryPage.css";

export default function CategoryPage() {
  const { name } = useParams();
  const categoryProducts = products[name] || [];
  const navigate = useNavigate();

  const handleProductClick = (productName) => {
    // WhatsApp number (replace with actual business number)
    const whatsappNumber = "919354370381"; // Format: country code + number (no + or spaces)
    
    // Create pre-filled message
    const message = `Hi, I'm interested in the ${productName} from your ${name} category. Can you share more details?`;
    
    // URL encode the message
    const encodedMessage = encodeURIComponent(message);
    
    // Open WhatsApp in new tab
    window.open(`https://wa.me/${whatsappNumber}?text=${encodedMessage}`, '_blank');
  };

  return (
    <div className="category-page">
      <h1 style={{ textTransform: "capitalize" }}>{name} Products</h1>

      <div className="products-grid">
        {categoryProducts.map((product) => (
          <div 
            key={product.name} 
            className="product-card"
            onClick={() => handleProductClick(product.name)}
          >
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
