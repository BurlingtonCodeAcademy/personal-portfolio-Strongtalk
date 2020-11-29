// global imports
import React, { useState } from "react";
import "./App.css";
import AboutMe from "./AboutMePage/AboutMe";
import Sidebar from "./NavBar/Sidebar";
import Work from "./WorkPage/work";
import Projects from "./ProjectsPage/projects.js";
import Hobbies from "./HobbiesPage/hobbies";
import Contact from "./ContactFooter/Contact";
import HomePage from "./HomePage/Homepage";


// I would ultimately like to redo this entire project but frankly dont have the time to start plugging away
// I'm handing this resubmission in so my readability grade is fixed. I know previously I had almost no comments
function App(props) {
  const [shownPage, setShownPage] = useState("Homepage");

  function sidebarHandler(evt) {
    setShownPage(evt.target.id);
  }

  //This is how the nav bar links everything 
  return (
    <div className="App">
      <Sidebar sidebarHandler={sidebarHandler} />

      {shownPage === "Homepage" ? <HomePage /> : null}
      {shownPage === "AboutMe" ? <AboutMe /> : null}
      {shownPage === "Work" ? <Work /> : null}
      {shownPage === "Projects" ? <Projects /> : null}
      {shownPage === "Hobbies" ? <Hobbies /> : null}

      <Contact />
    </div>
  );
}

export default App;
