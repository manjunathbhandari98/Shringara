import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { ServiceProvider } from "./context/service/ServiceProvider.jsx";
import { UserProvider } from "./context/user/UserProvider.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <UserProvider>
    <ServiceProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ServiceProvider>
  </UserProvider>
);
