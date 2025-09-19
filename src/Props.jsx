import React from "react";
import Child from "./Child"
import img from './assets/m1.jpeg'
import img2 from './assets/bmw2.jpeg'
import img3 from './assets/audi3.jpeg'
import img4 from './assets/thar4.jpeg'
import './T.css'
const App=()=>{

    // let title = "cloth"
    // let brand = "Zara"
    // let price = "800"
    // let des = "Good"

    // let clothes = {
    //     Title:"Cloth",
    //     Brand:"Zara",
    //     Price:"900",
    //     Des:"Goods"
    // }
    return(
        <>
        <div className="flex">
        <div className="border-4 w-70  ">
        <h1>Props</h1>
        <img src={img} alt="" />
         <Child title="car"  brand="BMW" Price="₹ 50000" Des="Goods" />
         </div>


         <div className="border-4 w-70">
            <h1>Props</h1>
         <img src={img3} alt="" />
         <Child title="car"  brand="mh" Price="₹ 8000000" Des="Goods" />
         </div>

        <div className="border-4 w-70">
            <h1>Props</h1>
         <img src={img4} alt="" />
         <Child title="car"  brand="mh" Price="₹ 8000000" Des="Goods" />
         </div>
         
         <div className="border-4 w-70">
            <h1>Props</h1>
         <img src={img2} alt="" className="w-70"  />
         <Child title="car"  brand="Audi" Price="₹ 100000" Des="Goods" />
         </div>

        <div className="border-4 w-70">
            <h1>Props</h1>
         <img src={img2} alt="" className="w-70" />
         <Child title="car"  brand="Audi" Price="₹ 100000" Des="Goods" />
         </div>
         {/* <Child Clothes={clothes}/> */}
         {/* <Child title={title}  brand={brand} Price={price}  des={des} /> */}

         </div>
        </>
    )
}

export default App