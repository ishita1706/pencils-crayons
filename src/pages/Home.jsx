import CategoryCard from "../components/CategoryCard";
import { categories } from "../data";
import "./Home.css";
import pencilImg from "../assets/image.png"; // your pencil image

export default function Home() {
  return (
    <div className="home-container">
      <div className="home-content">
        {/* Brand Header */}
        <div className="brand-header">
          <img src={pencilImg} alt="Pencil" className="brand-icon" />
          <h1 className="brand-title">Pencils Crayons</h1>
          <img src={pencilImg} alt="Pencil" className="brand-icon" />
        </div>

        {/* Subheading */}
        <h2 className="home-subtitle">Explore Our Collection</h2>

        {/* Categories */}
        {categories.map((cat, index) => (
          <CategoryCard key={index} title={cat.name} img={cat.img} />
        ))}
      </div>
    </div>
  );
}
