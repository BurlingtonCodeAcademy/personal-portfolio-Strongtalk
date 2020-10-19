import React, { useState, useEffect } from 'react';
import "./AboutMe.css";
import "../image-grid-comp.css"
import ImageGrid from "../image-grid-comp.js"


// footer is off center on every page :(
// I need work on the aspect ratio of these photos, Also I dont love all the white space, if i have more time I want to fix 
function AboutMe() {
  return (
    <div id='page-wrapper'>
      <div id='header-container'>
        <h1>Who is Jeff?</h1>
      </div>
      <div id='main-body-wrapper'>
        <div id='para-container'>
          <div class='para-wrapper'><p>I was born in New York, near the Canadian border. Most of my time was spent running around on a farm or in the woods. At the age of ten I discovered two of the worlds greatest joys, music and computers. I have been practicing on both avidly for sixteen years now and there is no end in sight to my equal love for both!<br></br><br></br>At age seventeen, shortly after graduating high school I was fortunate enough to be gifted an opportunity of a lifetime. I travelled for the next nine years around the world and saw more of what life has to offer. During this journey, I learned more about myself than ever before and was gifted immense perspective which I will never forget. "Travel far enough and you'll meet yourself"  </p></div>
          <div class='para-wrapper'>
            <p>It's always been a dream of mine to create and video game or be apart of a larger project which benefited the gaming community as a whole. In my personal opinion gaming is a fantastic way to simulate real life behaviours or experiences... sometimes for good or bad but most of skills you develop coordinating with countless random people online translate to the real world life hacks.<br></br><br></br> In order to immerse myself into the gaming culture even more and pursue my goals, I needed to further my knowledge of software development. Programming is a forever expanding trade and I hope to have a lifetime of opportunities to further push myself and hone my skill set. With any luck, one day, I will be giving back and teaching others the wonders of programming</p></div>

        </div>
        <div id="right-image-container">
         <ImageGrid />
          
        </div>
      </div>
    </div>
  );
}

export default AboutMe;




