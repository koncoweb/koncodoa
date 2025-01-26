import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Set SEO tags
const title = 'KoncoDoa : API Islami dari Koncoweb';
const description = '1. belajar buat aplikasi dari REST API pakai AI : https://www.youtube.com/@mohmbilly \n\n2. KoncoDoa adalah API untuk keperluan pengembangan aplikasi muslim yang kami kembangkan dari Muslimify ( https://github.com/gufronnakaaw/muslimify-api ), silahkan pakai dengan menyertakan sumber.';

// Create a function to set the title and meta description
function setSEO() {
    document.title = title;
    const metaDescription = document.createElement('meta');
    metaDescription.name = 'description';
    metaDescription.content = description;
    document.head.appendChild(metaDescription);
}

setSEO();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
