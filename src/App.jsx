import {
  Route,
  Navigate,
  Routes,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import Booking from "./pages/Booking";
import Contact from "./pages/Contact";
import Packages from "./pages/Packages/Packages";
import Portfolio from "./pages/portfolio/Portfolio";
import Services from "./pages/services/Services";
import Review from "./pages/Review";
import NotFound from "./pages/NotFound";
import SubServicesPage from "./pages/services/SubServicesPage";
import ScrollToTop from "./utility/ScrollToTop";
import AboutUs from "./pages/AboutUs";
import Auth from "./pages/auth/Auth";
import Settings from "./pages/settings";

const App = () => {
  return (
    <MainLayout>
      <ScrollToTop />
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
        {/* Nested route for SubServicesPage */}
        <Route
          path="/services/:id"
          element={<SubServicesPage />}
        />
        <Route
          path="/review"
          element={<Review />}
        />
        <Route
          path="/about-us"
          element={<AboutUs />}
        />
        <Route
          path="/settings"
          element={<Settings />}
        />
        <Route
          path="/auth"
          element={<Auth />}
        />
        {/* Catch-all Route for non-existing URLs */}
        {/* If someone types anything else, redirect to Home */}
        <Route
          path="*"
          element={
            <Navigate
              to="/"
              replace
            />
          }
        />

        {/* Optionally add your 404 page for any real errors, like deleted pages */}
        <Route
          path="/error"
          element={<NotFound />}
        />
      </Routes>
    </MainLayout>
  );
};

export default App;
