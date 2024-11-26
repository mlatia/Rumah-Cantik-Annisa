import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./screens/App";
import About from "./screens/about";
import Event from "./screens/event";
import FAQ from "./screens/faq";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <About />, // Set About as the default route
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "event",
        element: <Event />,
      },
      {
        path: "faq",
        element: <FAQ />,
      },
      {
        path: "*",
        element: <About />, 
      },
      {
        path: "*",
        element: <Event />, 
      },
      {
        path: "*",
        element: <FAQ />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
