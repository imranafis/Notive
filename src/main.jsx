// main.jsx (or index.jsx)
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createHashRouter, RouterProvider } from "react-router-dom";
import { FullScreenProvider } from "./lib/FullScreenContext"; // Ensure the correct path
import LoginPage from "./components/others/LoginPage.jsx";
import DomainPage from "./components/others/DomainPage.jsx";
import LandingPage from "./components/others/LandingPage.jsx";

const router = createHashRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/Domain",
    element: <DomainPage />,
  },
  {
    path: "/Landing",
    element: (
      <FullScreenProvider>
        <LandingPage />
      </FullScreenProvider>
    ),
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
