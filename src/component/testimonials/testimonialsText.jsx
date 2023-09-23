import React from "react"
import classnames from "classnames"
import '../style.css'

export default function TestimonialText({children}){
    let allClasses = classnames('testimonial-text')

    return (
        <p className={allClasses}>
            {children}
        </p>
    )
}