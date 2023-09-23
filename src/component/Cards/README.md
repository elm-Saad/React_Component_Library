# Card Component

(https://github.com/elm-Saad/React_Component_Library.git)

## Description

The Card component is a versatile and customizable UI element that allows you to display content in a visually appealing manner. You can easily create cards with icons, titles, and text, making it suitable for a wide range of purposes. Customize the card's appearance by specifying the icon, color, and content to match your application's style.

## Features

- Create stylish cards with icons, titles, and text.
- Use either React-Icons or existing icon paths for flexibility.
- Choose from a variety of colors: gray, yellow, green, blue, indigo, purple, pink, red.
- Effortlessly adapt the card to different content types and styles.

## Usage 
import React from 'react';<br/>
import Card from 'component/Cards/index';<br/>
import { BsGithub } from 'react-icons/bs'<br/>

function App() {<br/>
  return (<br/>
    <div>
      <Card color="purple" LibararyIcon=<BsGithub />><br/>
        <Card.Title>Title</Card.Title><br/>
        <Card.Text>This is the content of your card.</Card.Text><br/>
      </Card><br/>
      <Card color="red" iconPath={../assets/image_1}><br/>
        <Card.Title>Title</Card.Title><br/>
        <Card.Text>This is the content of your card.</Card.Text><br/>
      </Card><br/>
    </div>
  );<br/>
}<br/>

export default App;<br/>

## Props

The Card component accepts the following props:

color: Card color (Options: gray, yellow, green, blue, indigo, purple, pink, red).
LibararyIcon: Icon component from React-Icon component.
iconPath: Path to an existing icon.

## Usage Guidelines
To style the title and text of the card properly,
use <Card.Title> and <Card.Text> components within the card content.


