import { useState, useEffect } from "react";
import "./ContactStrip.css";

export default function ContactStrip() {
  const [viewCount, setViewCount] = useState(0);

  useEffect(() => {
    // Get current view count from localStorage
    let currentCount = parseInt(localStorage.getItem("viewCount") || "247", 10);
    
    // Check if this is a new session
    const hasViewedThisSession = sessionStorage.getItem("hasViewed");
    
    if (!hasViewedThisSession) {
      // First time in this session, increment count
      currentCount += 1;
      localStorage.setItem("viewCount", currentCount.toString());
      sessionStorage.setItem("hasViewed", "true");
    }
    
    // Update state
    setViewCount(currentCount);
  }, []);

  return (
    <div className="contact-strip">
      <p>Call or WhatsApp us: +91 9876543210</p>
      <p className="viewer-count">👁️ {viewCount} visitors</p>
    </div>
  );
}
