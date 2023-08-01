import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import {
    createBrowserRouter,
    RouterProvider,
    Outlet
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';

const HeaderFooter = () => {
  return <>
    <Header />
    <Outlet />
    <Footer />
  </>
}

const router = createBrowserRouter([
  {
      element: <HeaderFooter />,
      errorElement: <h1>404 not found</h1>,
      children: [
        {
          path: "/",
          element: <App />
        },
        {
         path: "/About",
          element: <h1>A propos</h1>
        }
      ]
  }
  
  
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();