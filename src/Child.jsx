import React from "react";


const Child=({title,brand,Price, Des})=>{


//     let {Title, Brand, Price, Des} = Clothes

    //Destructuring
// const Child=()=>{
    return(

        <>
        <h1 className="bg-amber-400">{title}</h1>
        <h1>{brand}</h1>
        <h1 className="c-">{Price}</h1>
        <h1>{Des}</h1>
        {/* <h1>{Des}</h1>
        <h3>{brand}</h3>
        <h4>{Price}</h4> */}
       
        </>
    )
}

export default Child