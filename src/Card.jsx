import React from "react";
import './Card.css'
import img from './assets/m1.jpeg'
import img2 from './assets/bmw2.jpeg'
import img3 from './assets/audi3.jpeg'
import img4 from './assets/mhenra4.jpeg'
import img5 from './assets/bmw.jpg'  
import img6 from './assets/CAR.avif'





function Card() {
    return (
        <>
          <div className="card">
            <img src={img} alt="" />
            <h3 className="h3"> CAR -  MARUTI-SUZUKI</h3>
            <h2>price = 9,00,000</h2>
          </div> 


          <br />
           <div className="card">
            <img src={img2} alt="" />
            <h3 className="h3"> CAR - BMW</h3>
           </div><br />

           <div className="card">
            <img src={img3} alt="" />
            <h3 className="h3"> CAR - AUDI</h3>
           </div><br />


          <div className="card">
            <img src={img4} alt="" />
            <h3 className="h3">CAR -MAHINDRA SCORIO </h3>
          </div> <br />

          <div className="card">
            <img src={img5} alt="" />
            <h3 className="h3">CAR - BMW</h3>
          </div> <br />


          <div className="card">
            <img src={img6} alt="" />
            <h3 className="h3">CAR - </h3>
          </div>  <br />    
        </>
    );
}
export default Card