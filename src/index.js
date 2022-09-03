import React from 'react';
import ReactDOM from 'react-dom/client';
import {CryptoContext} from './Context-data/CryptoContext';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import "react-alice-carousel/lib/alice-carousel.css";
import './index.css'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <CryptoContext>
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<App />} />
        </Routes>
      </BrowserRouter>
    </CryptoContext>
  </React.StrictMode>
);


