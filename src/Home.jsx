import React from "react";
import p from './assets/p.jpeg'

function Home(){
    return(
        <>

            <div className="nav-part-1">
                <ul>
                    <li>REACTLADING PAGE</li>
                    <li>FEATURES</li>
                    <li>ABOUT</li>
                    <li>SERVICES</li>
                    <li>GALLERY</li>
                    <li>TEAM</li>
                    <li>CONTACT</li>
                </ul>
            </div>
            <div >
            <img className="im" src={p} alt="" />
            </div>



        </>
    )
}

export default Home