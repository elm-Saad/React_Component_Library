import React from "react"
import ComponentItem from "./ComponentItem"


export default function ComponentItems({data}){
    let itemElement = Object.values(data).map(item =>{
        return <ComponentItem key={item.title} itemData={item}/>
    })
    
    return(
        <div className="components container">
            {itemElement}
        </div>
    )
}