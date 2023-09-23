import React from "react"
import '../style.css'

export default function CardTitle({children}){
    return (
        <p className='card-title'>
            {children}
        </p>
    )
}