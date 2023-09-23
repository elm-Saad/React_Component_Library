# Testimonials Component

(https://github.com/elm-Saad/React_Component_Library.git)

## Description

The Testimonials component is a versatile and feature-rich UI element designed for showcasing customer stories, testimonials, and feedback on your website or application. With options to customize the content, style, and appearance, this component makes it easy to create compelling and visually appealing testimonial sections.

## Features

- Share customer stories and testimonials with ease.
- Customize testimonial content, including titles, text, and images.
- Choose from a range of background and text colors to match your design.
- Support for both local and external images for flexible display.

## Usage
import React from 'react';<br/>
import Testimonials from 'component/testimonials';<br/>
import { BsGithub } from 'react-icons/bs';<br/>

function App() {<br/>
  return (<br/>
    <div>
        {/*with image */}<br/>
      <Testimonials 
        imagePath="path/to/testimonial-image.jpg"
        bgColor="blue"
        textColor="white"
      ><br/>
        <Testimonial.Text><br/>
            This product has made a significant difference in my life. Highly recommended!<br/>
        </Testimonial.Text><br/>
        <Testimonial.Auth><br/>
            user_name/..<br/>
        </Testimonial.Auth><br/>
      </Testimonials><br/>
      {/*with out image*/}<br/>
      <Testimonials
        title="Satisfied Client"
        bgColor="blue"
        textColor="white"
        LibraryIcon=<BsGithub />
      ><br/>
        This product has made a significant difference in my life. Highly recommended!<br/>
      </Testimonials><br/>
    </div>
  );<br/>
}<br/>

export default App;<br/>

## Props

The Testimonials component accepts the following props:

title (required if no image existe): Title of the testimonial.
LibraryIcon: Icon component from React-Icon component.
iconPath: Path to an existing icon.
imagePath: Path to the testimonial's image .
bgColor: Background color for the testimonial (Options: gray, yellow, green, blue, indigo, purple, pink, red).
textColor: Text color for the testimonial (Options: gray, yellow, green, blue, indigo, purple, pink, red).