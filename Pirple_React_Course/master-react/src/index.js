import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Model, Car } from './Classcom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const model = ReactDOM.createRoot(document.getElementById('model'));
const car = ReactDOM.createRoot(document.getElementById('car'));
root.render(
  <React.StrictMode>
    <App contentData="Some Data"/>
  </React.StrictMode>
);
model.render(<Model />)
car.render(<Car />)

reportWebVitals();
