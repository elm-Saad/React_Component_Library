import React from "react"
import '../style.css'

export default function TestimonialWithImage({children,ImageLink}){
    return (
        <div className="full-Testimonial-card"> 
            <img src={ImageLink} className="Testimonial-image"/>
            <div className="Tes-Qoute-text QuoteIcon">
                {children}
            </div>
        </div>
    )
}