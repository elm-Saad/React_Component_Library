import React from "react"
import classnames from "classnames"
import defaultIcon from "./svgs/Cloud-upload.svg"
import '../style.css'

export default function Card({children,iconPath,LibararyIcon,color,className,...rest}){

    const ColorLowerCase =color && color.toLowerCase()
    const iconBgColor = ColorLowerCase && `card-icon-${ColorLowerCase}`

    const iconLink = iconPath || defaultIcon
    const CardClasses = classnames('card',className)
    const iconClasses = classnames('icon-el',iconBgColor)

    return (
        <div className={CardClasses} {...rest}>
            <div className={iconClasses}>
                {
                    LibararyIcon?
                    LibararyIcon:
                    <img src={iconLink} className='icon' />
                }
            </div>
            <div className="text-container">
                {children}
            </div>
        </div>
    )
}