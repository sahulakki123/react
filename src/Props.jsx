import React from "react";
import Child from "./Child"

const App=()=>{

    // let title = "cloth"
    // let brand = "Zara"
    // let price = "800"
    // let des = "Good"

    let clothes = {
        Title:"Cloth",
        Brand:"Zara",
        Price:"900",
        Des:"Goods"
    }
    return(
        <>
        <h1>Props</h1>
         {/* <Child title="car"  brand="BMW" Price="546187" /> */}
         <Child Clothes={clothes}/>
         {/* <Child title={title}  brand={brand} Price={price}  des={des} /> */}
        </>
    )
}

export default App