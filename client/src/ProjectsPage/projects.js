// Imports 
import React from "react";
import "./Project.css";

// This deals with the project page
function Projects() {
  return (
    <div>
      <div id="header-container">
        <h4 id="projects-title">Projects!</h4>
      </div>
      <div id="project-wrapper">
        <div id="project-list-title">
          <h4>A List of Projects: </h4>
        </div>
        <div id="List-wrapper">
          {/**This is the list of project broken down into smaller individually columns */}
          <div id="project-container">
            <ul>
              <a href="https://aswewere.bandcamp.com/">
                <img
                  class="project-icon"
                  src="/images/AS-WE-WERE.jpg"
                  alt="as we were"
                ></img>
                As We Were(a band a long, long time ago...){" "}
              </a>
              <br></br>
              <br></br>
              <a href="https://cbrasnke.bandcamp.com/album/but-first-they-must-catch-you">
                <img
                  class="project-icon"
                  src="/images/CBRASNKE.jpg"
                  alt="CBRASNKE"
                ></img>
                CBRASNKE(a band not so long ago)
              </a>
              <br></br>
              <br></br>
              <a href="https://discord.gg/gMuHSQ">
                <img
                  class="project-icon"
                  src="https://cdn2.iconfinder.com/data/icons/zeshio-s-social-media/200/Social_Media_Icons_Edged_Highlight-12-512.png"
                  alt=""
                ></img>
                Gaming Discord One True Party - come hang!
              </a>
              <br></br>
              <br></br>
              <a href="https://github.com/BurlingtonCodeAcademy/tic-tac-toe-todd-jeff">
                <img
                  class="project-icon"
                  src="https://image.shutterstock.com/z/stock-vector-tic-tac-toe-game-with-ghost-spirit-and-bat-happy-halloween-cute-cartoon-kawaii-funny-character-1513957751.jpg"
                  alt="tic-tac-toe"
                ></img>
                Tic-Tac-Toe Game
              </a>
              <br></br>
              <br></br>
              PlaceHolder for other Projects<br></br>
              <br></br>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
