import React from "react"
import classnames from "classnames"
import '../style.css'

export default function Badge({children,className,color,size,rounded ,...rest}){

    const ColorLowerCase =color && color.toLowerCase()
    const SizeLowerCase =size && size.toLowerCase()
    const RoundedLowerCase =rounded && rounded.toLowerCase()

    const colorClass = ColorLowerCase && `badge-${ColorLowerCase}`
    const sizeClass = SizeLowerCase && `badge-${SizeLowerCase}`
    const roundedClass = RoundedLowerCase && `badge-${RoundedLowerCase}`
    const allClasses = classnames('badge',colorClass,sizeClass,roundedClass,className)

    return (
        <div className={allClasses} {...rest}>
            {children}
        </div>
    )
}