import React from "react";


const Child=({Clothes})=>{


    let {Title, Brand, Price, Des} = Clothes

    //Destructuring
// const Child=({title, brand, Price})=>{
    return(

        <>
        <h1>{Title}</h1>mm
        <h1>{Brand}</h1>
        <h1>{Price}</h1>
        <h1>{Des}</h1>
        {/* <h3>{brand}</h3>
        <h4>{Price}</h4> */}
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores, esse?
       
        </>
    )
}

export default Child