import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import './index.css';
import { Provider } from 'react-redux';
import { store } from './store/store.js'; // Import the store

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <Navbar />
    <App />
    <Footer />
  </Provider>
);