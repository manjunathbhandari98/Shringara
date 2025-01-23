import {
  Route,
  Router,
  Routes,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Review from "./pages/Review";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <MainLayout>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/booking"
          element={<Booking />}
        />
        <Route
          path="/contact"
          element={<Contact />}
        />
        <Route
          path="/packages"
          element={<Packages />}
        />
        <Route
          path="/portfolio"
          element={<Portfolio />}
        />
        <Route
          path="/services"
          element={<Services />}
        />
        <Route
          path="/review"
          element={<Review />}
        />
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
