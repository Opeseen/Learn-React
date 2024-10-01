import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Car, Model } from './Classcom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const car = ReactDOM.createRoot(document.getElementById('car'));
const model = ReactDOM.createRoot(document.getElementById('model'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
car.render(<Car />);
model.render(<Model />)

reportWebVitals();
