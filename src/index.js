import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const location = useLocation();
  const isNavBarAvailable = location.pathname !== "/contact-us";

  return (
    <>
      {isNavBarAvailable && <Navbar />}
      <App />
      <Footer />
    </>
  );
}

root.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);

reportWebVitals();
