import React, {useState} from 'react'
import "./image-grid-comp.css"

function ImageGrid() {




//This is basically just my Image grid as a flexbox, decided to make it a component 
return (
    <div id='Image-Component'>
    <div class='comp-image-container'>
        
        <div class='images'>
            <img class='img-box' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/119706129_10217860111795416_4204803526203596410_o.jpg?_nc_cat=101&_nc_sid=730e14&_nc_ohc=XqZKkpu9qLIAX-XKaQI&_nc_ht=scontent-lga3-1.xx&oh=28fd5fb309c2d226a41973105d58b64a&oe=5FB0C3FD' alt='hiking-Jeff'></img> 
        </div>
        <div class='images'>
        <img id='img-box-alt' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/1013168_557745990948545_1431536798_n.jpg?_nc_cat=105&_nc_sid=cdbe9c&_nc_ohc=g1NIMl0Nv8QAX_DzBtm&_nc_ht=scontent-lga3-1.xx&oh=d740ea79586a197529877a5e476416c0&oe=5FB06AFB' alt='k-19 show'></img>
        </div>
        <div class='images'>
        <img class='img-box' src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/179644_10151530413531115_418256991_n.jpg?_nc_cat=101&_nc_sid=cdbe9c&_nc_ohc=yAibSLfxb0IAX8-Pyio&_nc_ht=scontent-lga3-1.xx&oh=119f6eb823678d213f7e90b68aa6f68c&oe=5FAF43C1' alt='vegan-icecream-party'></img>
        </div>
        
        
        </div>
        </div>
        
         
        
   



);

}
export default ImageGrid;