import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayout from "./layouts/RootLayout";
import Homepage from './pages/Homepage'
import NewsDetailsPage from './pages/NewDetailsPage'
import './index.css'
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Homepage />
      },
      {
        path: '/news-details/:newsId',
        loader: async ({ params }) => {
          return params
        },
        element: <NewsDetailsPage />
      },
      {
        path: "register",
        element: <RegisterPage />
      },
      {
        path: '/about',
        element: <h1>This is about page</h1>
      }
    ]
  },

]);

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
