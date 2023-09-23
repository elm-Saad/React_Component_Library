import React from "react"
import '../style.css'


export default function TestimonialWithoutImage({children,title,iconPath,LibraryIcon}){
    console.log(LibraryIcon)
    return (
        <div className="noImg-Testimonial-card">
            <div className="Testimonial-head">
                {
                    LibraryIcon?
                    LibraryIcon:
                    <img src={iconPath} className='icon' />
                }
                <h2>{title}</h2>
            </div>
            {children}
        </div>
    )
}