// Importing React and CSS for my NAV BAR
import React from "react";
import "./NavBar.css";


function Sidebar(props) {
  return (
    <div id="sidebar-wrapper">
      <button id="AboutMe" onClick={props.sidebarHandler}>
        About me
      </button>
      <button id="Hobbies" onClick={props.sidebarHandler}>
        Hobbies
      </button>
      <button id="Projects" onClick={props.sidebarHandler}>
        Projects
      </button>
      <button id="Work" onClick={props.sidebarHandler}>
        Work
      </button>
      <button id="Homepage" onClick={props.sidebarHandler}>
        Home
      </button>
    </div>
  );
}

export default Sidebar;
