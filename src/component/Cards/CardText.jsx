import React from "react"
import '../style.css'

export default function CardText({children}){
    return (
        <p className='card-text'>
            {children}
        </p>
    )
}