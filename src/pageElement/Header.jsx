import React from "react"

export default function Header({children, ...rest}){
    return(
        <header {...rest}>
            <div className="main-Title">
                {children}
            </div>
        </header>
    )
}