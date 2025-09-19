import React from "react";
import img from './assets/m1.jpeg'
import img1 from './assets/bmw.jpg'
import img2 from './assets/BMW_Logo.svg'
import './T.css'
import Card from "./Card";
import img3 from './assets/m1.jpeg'

const App=()=>{
    return(
        <>
        <header className="w-full flex h-15 justify-around items-center border-2 bg-gray-950 text-amber-50">
            <img src={img2} alt="" className="h-10" />
            <nav>
                <ul className="flex gap-10 font-bold text-2xl">
                    <li className="hover:text-sky-400 cursor-pointer">Home</li>
                    <li className="hover:text-sky-400 cursor-pointer">About</li>
                    <li className="hover:text-sky-400 cursor-pointer">Contact</li>
                    <li className="hover:text-sky-400 cursor-pointer">Service</li>
                    <li className="hover:text-sky-400 cursor-pointer">user</li>
                </ul>
            </nav>
            <button className="border p-2 rounded-2xl text-blue-400 bg-amber-800 font-bold">Download</button>
        </header>
        <img src={img1} alt="" className="w-full h-140" />

        <div className="flex">
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        <Card pimg={img3} price={999} des={"Good"} but={"Buy Now"}/>
        </div>
        </>
    )
}

export default App