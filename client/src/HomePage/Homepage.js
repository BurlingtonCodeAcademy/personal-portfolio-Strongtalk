// Importing react and Homepage CSS
import React from "react";
import "./Homepage.css";

// Another function to render HTML as component
function HomePage() {
  return (
    <div className="Page-wrapper">
      <div id="image-wrapper">
        <img id="Home-photo" src="/images/pose-jump.jpg" alt="pose-jump"></img>
      </div>
      <h3> I am Jeff hello, this is a placeholder description </h3>
    </div>
  );
}
// exporting function for access on other files
export default HomePage;
