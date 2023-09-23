import React from "react"
import Header from "./pageElement/Header"
import ComponentItems from "./pageElement/Component-Items"
import Footer from "./pageElement/Footer"
import Data from "./pageElement/pageData"

export default function App(){
  
  return (
    <main>
      <Header className="container">
        {Data.pageTitle}
      </Header>
      <ComponentItems 
        data={Data.CompoentElement}
      />
      <Footer
        icons={Data.icons}
      />
    </main>
  )
}