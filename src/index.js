import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Nav from "./components/Nav"
import Form from './components/Form';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <Form />
  </React.StrictMode>
);


