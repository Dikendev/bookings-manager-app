import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import "./App.css";
import "./components/Header.css";
import "./pages/Bookable/Bookable.css";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Bookable } from "./pages/Bookable/Bookable.tsx";
import { Header } from "./components/Header.tsx";
import { User } from "./pages/Users/Users.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Bookable",
    element: <Bookable />,
  },
  {
    path: "/user",
    element: <User />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Header />
    <RouterProvider router={router} />
  </StrictMode>
);
