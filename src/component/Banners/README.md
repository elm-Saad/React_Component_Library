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

import React from 'react';
import Banner from 'component/Banners/index';

function App() {
  return (
    <div>
      <h1>Your App</h1>
      <Banner status="success" line="multiple">
        Success! Your action was completed.
      </Banner>
      <Banner status="error" line="single" />
    </div>
  );
}

export default App;

## Props

The Banner component accepts the following props:

status: Banner status (Options: neutral, error, warning, success).
line: Line style (Options: single, multiple).


