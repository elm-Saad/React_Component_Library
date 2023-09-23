import React from "react"


export default function ComponentItem({itemData}){
    return (
        <div className="component">          
            <h2>{itemData.title}</h2>
            <p>{itemData.subtitle}</p>
            <div className="showCase">
                <img src={itemData.componentImageLink}  />
                <div className="code">
                    <deckgo-highlight-code 
                        line-numbers={true}
                        theme='DeckdeckgoHighlightCodeCarbonTheme'
                    >
                        <code slot="code">{itemData.code}</code>
                    </deckgo-highlight-code>
                </div>
            </div>
        </div>
    )
}