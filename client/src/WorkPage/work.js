import { findAllByTitle } from "@testing-library/react";
import React from "react";
import "./Work.css";


// Can't get my resume to link, needs more work if I had more time
function Work() {
  return (
    <div>
      <div id="header-container">
        <h4 id="Work-title">Work History!</h4>
      </div>

      <div id="work-container-wrapper">
        <div id="work-container">
          <div id="title-container">
            <h5>All of my Experience:</h5>
          </div>
          <div id="work-para-container">
            <p>
              My professional goals include; breaching my way into the software
              industry and landing a remote full-time position. My personal
              goals include; developing a game, and making more of my music
              readily available
            </p>
          </div>
          <div id="worklist-container">
            <ul>
              My previous work history includes;<br></br>
              <br></br>
              Stella Mae (shoe salesman): 2010-2012<br></br>
              <br></br>
              University of Vermont Medical Center (Account representative):
              2013-2014 <br></br>
              <br></br>
              Local Muscle (Mover): 2014-2016<br></br>
              <br></br>
              Trattoria Delia(Server // Front of House): 2016-2020<br></br>
              <br></br>
              My Resume!<br></br>
              <br></br>
              Coding Languages - JavaScript || HTML || CSS <br></br>
              <br></br>
              Musical Instruments - Guitar (16 years)<br></br>
              <br></br>
              Online Community Moderator - (~ 6 years)
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
