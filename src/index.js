import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Apartment from "./pages/Apartment";

const HeaderFooter = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    element: <HeaderFooter />,
    errorElement: (
      <>
        <Header />
        <Error />
      </>
    ),
    children: [
      {
        path: "/",
        element: <Home />,
      },
      
      {
        path: "/about",
        element: <About />,
      },
      

    ],
  },
  {
    path: "/apartment/:id",
    element:  <>
    <Header />
    <Apartment />
  </>
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
