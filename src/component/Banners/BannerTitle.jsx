import React from "react"
import classnames from "classnames"
import '../style.css'

export default function BannerTitle({children,icon}){
    let iconState = icon  && `icon-${icon}`
    const allClasses = classnames('banner-title',iconState)

    return (
        <h3 className={allClasses}>
            {children}
        </h3>
    )
}