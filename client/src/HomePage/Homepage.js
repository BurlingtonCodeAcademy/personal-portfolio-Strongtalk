// Importing react and Homepage CSS
import React from "react";
import "./Homepage.css";

// Another function to render HTML as component
function HomePage() {
  return (
    <div className="Page-wrapper">
      <div id="image-wrapper">
        <img
          id="Home-photo"
          src="https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1069240_10201467274542423_1541694505_n.jpg?_nc_cat=101&_nc_sid=174925&_nc_ohc=Co-BNv9tpAMAX8JgB1v&_nc_ht=scontent-lga3-1.xx&oh=37f26efde1c125d3c28fc57129703e6a&oe=5FADDE6B"
          alt="pose-jump"
        ></img>
      </div>
      <h3> I am Jeff hello, this is a placeholder description </h3>
    </div>
  );
}
// exporting function for access on other files
export default HomePage;
