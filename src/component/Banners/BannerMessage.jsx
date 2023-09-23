import React from "react"
import '../style.css'

export default function BannerMessage({children}){
    return (
        <p className='banner-message'>
            {children}
        </p>
    )
}