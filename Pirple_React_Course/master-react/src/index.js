import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Model } from './Classcom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
const model = ReactDOM.createRoot(document.getElementById('model'));
root.render(
  <React.StrictMode>
    <App contentData="Some Data"/>
  </React.StrictMode>
);
model.render(<Model />)

reportWebVitals();
