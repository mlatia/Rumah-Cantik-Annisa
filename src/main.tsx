import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, redirect, RouterProvider } from "react-router-dom";
import App from "./screens/App";
import About from "./screens/about";
import Event from "./screens/event"
// import ComingSoon from "./screens/ComingSoon";
import FAQ from "./screens/faq";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        loader: () => redirect('/about'),
      },
      {
        path: "about",
        element: (<About ></About>),
      },
      {
        path: "event",
        element: (<Event></Event>),
      },
      {
        path: "faq",
        element: (<FAQ></FAQ>),
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
