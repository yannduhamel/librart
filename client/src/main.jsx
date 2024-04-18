import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CatalogPage from "./pages/CatalogPage/CatalogPage";
import HomePage from "./pages/HomePage/HomePage";
import LicencePage from "./pages/LicencePage/LicencePage";
import ContactPage from "./pages/Contact/ContactPage";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/catalog",
        element: <CatalogPage />,
      },
      {
        path: "/licence",
        element: <LicencePage />,
      },

      {
        path: "/contact",
        element: <ContactPage />,
      },

      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
