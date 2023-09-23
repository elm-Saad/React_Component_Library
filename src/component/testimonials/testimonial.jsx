import React from "react"
import TestimonialWithImage from "./TestimonialWithImage"
import TestimonialWithoutImage from "./TestimonialWithoutImage"
import classnames from "classnames"
import '../style.css'



export default function Testimonial({children,title,iconPath,LibraryIcon,imagePath,bgColor,textColor,className,...rest}){

    const BgColorLowerCase =bgColor && bgColor.toLowerCase()
    const TextColorLowerCase =textColor && textColor.toLowerCase()

    const BgColor = BgColorLowerCase && `Tes-bgColor-${BgColorLowerCase}`
    const TextColor = TextColorLowerCase && `Tes-textColor-${TextColorLowerCase}`
    const ImageLink = imagePath && imagePath

    const allClasses = classnames('Testimonial-card',BgColor,TextColor,className)
    return (
        <div className={allClasses} {...rest}>
            <div className="Testimonial-container">
                {
                    ImageLink?
                        <TestimonialWithImage ImageLink={ImageLink}>
                                {children}
                        </TestimonialWithImage>
                    :
                        <TestimonialWithoutImage 
                            title={title}
                            iconPath={iconPath}
                            LibraryIcon={LibraryIcon}
                        >
                                {children}
                        </TestimonialWithoutImage>
                }
            </div>
        </div>
    )
}