# Badges Component

(https://github.com/elm-Saad/React_Component_Library.git)

## Description

The Badges component is a versatile and high-quality UI element that allows you to easily add colorful badges to your web application. With options for specifying badge color, size, and rounding style, you can tailor these badges to fit your design and content needs.

## Features

- Choose from a variety of badge colors: gray, yellow, green, blue, indigo, purple, pink, red.
- Adjust badge size from small (s1) to extra-large (s10).
- Select between square and pill-shaped badges for different visual effects.
- Effortlessly enhance your UI and convey information with eye-catching badges.

## Props
The Badges component accepts the following props:

color: Badge color (Options: gray, yellow, green, blue, indigo, purple, pink, red).
size: Badge size (Options: s1, s2, s3, s4, s5, s6, s7, s8, s9, s10).
rounded: Badge rounding style (Options: square, pill).

## Usage

import React from 'react';<br/>
import Badges from './component/badges';<br/>

function App() {<br/>
  return (<br/>
    <div>
      <Badges color="blue" size="s2" rounded="square"><br/>
        New<br/>
      </Badges><br/>
      <Badges color="green" size="s4" rounded="pill"><br/>
        Featured<br/>
      </Badges><br/>
    </div>
  );<br/>
}<br/>

export default App;<br/>

