import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.js';
// importing bootstrap below 
import 'bootstrap/dist/css/bootstrap.min.css';
const root = ReactDOM.createRoot(document.getElementById('root'));
const head = ReactDOM.createRoot(document.querySelector('head'));

head.render(
  <>
    <meta charset="utf-8" />
    <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="theme-color" content="#000000" />
    <meta
      name="description"
      content="Web site created using create-react-app"
    />
    <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
    
    <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
    
    <title>Cyrus Bigham React Portfolio</title>
    </>
)
root.render(

  
    <App />
 
);


