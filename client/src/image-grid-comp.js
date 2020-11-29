// IMPORTS\
import React from "react"
import "./image-grid-comp.css";

function ImageGrid() {
  //This is basically just my Image grid as a flexbox, decided to make it a component
  return (
    <div id="Image-Component">
      <div class="comp-image-container">
        <div class="images">
          <img id="img-box-alt" src="/images/fort.jpg" alt="hiking-Jeff"></img>
        </div>
        <div class="images">
          <img
            id="img-box-alt"
            src="/images/mountains.jpg"
            alt="k-19 show"
          ></img>
        </div>
      </div>
    </div>
  );
}
export default ImageGrid;
