import React from "react";
import './Taiwind.css'
import pic from './assets/react.svg'



const App=()=>{
    return (
    <>
     {/* <h1>App calling</h1>
     <h1>App calling</h1>
     <h1>App calling</h1>
     <div className="bg-amber-500 border-red-700"> i am lakki sahu </div>

     <div className="flex justify-between items-center">
        <p className="border-5 w-20 h-20 p-2 m-2 bg-amber-500 ">LAKKI SAHU</p>
        <p className="border-5 w-20 h-20 p-2 m-2 bg-amber-500 "> ADITYA RATHOD</p>
        <p> ROHIT</p>
     </div> */}

     <header className="w-full border flex justify-between items-center">
        <img src={pic} alt="" />
        <nav>
            <ul className="flex gap-2">
                <li>home</li>
                <li>about</li>
                <li>service</li>
                <li>contact</li>
            </ul>
            <button className="border p-0.5 rotate-0 bg-red-500">Don</button>
        </nav>
     </header>
    </>

    )
}

export default  App