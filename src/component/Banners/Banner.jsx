import React from "react"
import BannerTitle from "./BannerTitle"
import BannerMessage from "./BannerMessage"
import classnames from "classnames"
import '../style.css'

export default function Banner({children,className,status,line,...rest}){

    const statusLowerCase =status && status.toLowerCase()
    const statusClass = statusLowerCase  && `banner-${statusLowerCase}`

    let title =''
    if(statusLowerCase==='success'){
        title='Congratulations!'
    }else if(statusLowerCase==='warning'){
        title='Attention'
    }else if(statusLowerCase==='error'){
        title='There is a problem with your application'
    }else if(statusLowerCase==='neutral'){
        title='Update available'
    }else{
        title="undefine status"
    }

    const allClasses = classnames('banner',statusClass,className)

    return (
        <div className={allClasses} {...rest}>
            {
                line?
                    line==='single'?
                    <BannerTitle icon={statusLowerCase}>
                        {title}
                    </BannerTitle>
                    :
                    (
                        line==='multible'?
                        <>
                            <BannerTitle icon={statusLowerCase}>
                                {title}
                            </BannerTitle>
                            <BannerMessage >
                                {children}
                            </BannerMessage>
                        </>:
                        <BannerTitle icon={statusLowerCase}>
                            {title}
                        </BannerTitle>
                    )
                :
                <BannerTitle icon={statusLowerCase}>
                    {title}
                </BannerTitle>
            }
        </div>
    )
}