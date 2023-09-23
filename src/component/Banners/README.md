# Banner Component

(https://github.com/elm-Saad/React_Component_Library.git)

## Description

The Banner component is a powerful and customizable tool for adding alert banners to your web application. Whether you need to display neutral information, error messages, warnings, or success notifications, this component has you covered. Choose from single or multiple lines to create the perfect banner for your needs.

## Features

- Easily create alert banners for various purposes.
- Choose from different status types: neutral, error, warning, success.
- Select between single or multiple lines for versatile messaging.
- Customize the banners to match your application's style.

## Usage

import React from 'react';<br/>
import Banner from 'component/Banners/index';<br/>

function App() {<br/>
  return (<br/>
    < div><br/>
      < Banner status="success" line="multiple" ><br/>
        Success! Your action was completed.<br/>
      </ Banner ><br/>
      < Banner status="error" line="single" /><br/>
    </ div><br/>
  );<br/>
}<br/>

export default App;<br/>

## Props

The Banner component accepts the following props:

status: Banner status (Options: neutral, error, warning, success).
line: Line style (Options: single, multiple).


