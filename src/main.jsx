import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./context/user/UserProvider.jsx";
import { ServiceProvider } from "./context/service/ServiceProvider.jsx";

createRoot(
  document.getElementById("root")
).render(
  <StrictMode>
    <UserProvider>
      <ServiceProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </ServiceProvider>
    </UserProvider>
  </StrictMode>
);
