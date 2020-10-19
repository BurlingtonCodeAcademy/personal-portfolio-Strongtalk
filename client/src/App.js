import React, {useState, useEffect} from 'react';
import './App.css';
import AboutMe from "./AboutMePage/AboutMe"
import Sidebar from "./NavBar/Sidebar"
import Work from "./WorkPage/work"
import Projects from "./ProjectsPage/projects.js"
import Hobbies from "./HobbiesPage/hobbies"
import Contact from "./ContactFooter/Contact"
import HomePage from './HomePage/Homepage';



function App(props) {
  
  const [shownPage, setShownPage] = useState('Homepage')


  function sidebarHandler(evt) {
     setShownPage(evt.target.id)
    
  }



/* This is in no way shape or form my best work... I tried to plug away at this project
 all weekend and unfortunately only got to this point. I really feel like I could've done
more if I had grasped these concepts earlier on... I also feel like I'm not using all the 
newly taught code as well as I could be. 
This past week was really difficult for me in class and I definitely needed more assistance / practice 
before this past weekend. My only wish from grading is you guys could give me 
suggestions about were to implement some of the new code you wouldve liked to see... 
In other words, simple CSS and HTML fixes I can handle googling but the React stuff is really were
I could use some feedback. I really want to learn how to use React, 
React render DOM, and make better components */





  return (
    <div className="App">
      <Sidebar sidebarHandler = {sidebarHandler} />

      {shownPage === 'Homepage' ?  <HomePage /> : null}
      {shownPage === 'AboutMe' ? <AboutMe /> : null}
      {shownPage === 'Work' ? <Work /> : null}
      {shownPage === 'Projects' ? <Projects /> : null}
      {shownPage === 'Hobbies' ? <Hobbies /> : null}

      <Contact />

    </div>
  );
}

export default App;
