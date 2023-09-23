import React from "react"
import Data from "./pageData"
import {nanoid} from "nanoid"

export default function Footer({icons}){
    let IconsElement = Object.values(icons).map(item=>{
        return (
            <div key={nanoid()} className="footer-icon">
                <a href={item.link}>
                    {item.icon}
                </a>
            </div>
        )
    })
    return(
        <footer>
            <div className="footer-inner container">
                <div className="footer-image">
                    <img src={Data.footerImage}  className="w-44 md:ml-3" />
                </div>

                <div className="media">
                    <div className="icon-container">
                        {IconsElement}
                    </div>
                    <div className="footer-text">
                        <p>Social</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}