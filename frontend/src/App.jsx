import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './global.css';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <><Navbar /><Home/></>
    },
    {
      path: "/products",
      element: <><Navbar /><Products/><Footer/></>
    },
    {
      path: "/contact",
      element: <><Navbar /><Contact/><Footer/></>
    },
  ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
