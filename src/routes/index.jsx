import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Chargement dynamique des pages avec React.lazy()
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const BookASession = React.lazy(() => import("../pages/BookASession"));
const BecomeAMentor = React.lazy(() => import("../pages/BecomeAMentor"));
const FindAMentor = React.lazy(() => import("../pages/FindAMentor"));
const PlanAndPricing = React.lazy(() => import("../pages/PlanAndPricing"));
const Contact = React.lazy(()=> import("../pages/Support/Contact"));
const HelpCenter = React.lazy(()=> import("../pages/Support/HelpCenter"));
const TermsAndConditions = React.lazy(()=> import("../pages/Support/TermsAndConditions"));
const AboutUs = React.lazy(()=> import("../pages/About/AboutUs"));
const FAQ = React.lazy(()=> import("../pages/About/FAQ"));
const PrivacyAndPolicy = React.lazy(()=> import("../pages/About/PrivacyAndPolicy"));


// Importation des layouts
import AuthLayout from "../layouts/AuthLayout";
import GuestLayout from "../layouts/GuestLayout";

// Importer le composant Skeleton
import Skeleton from "../components/skeleton/Skeleton";

//  Import du composant ScrollToTop
import ScrollToTop from "../utils/ScrollToTop";

function RoutesComponent() {
  return (
    <Router>
      <ScrollToTop /> {/*  */}
      <Suspense fallback={<Skeleton type="card" />}>
        <Routes>
          {/* Routes publiques (invité) */}
          <Route path="/" element={<GuestLayout><Home /></GuestLayout>} />

          {/* Routes nécessitant une authentification (auth) */}
          <Route path="/auth/login" element={<GuestLayout><Login /></GuestLayout>} />
          <Route path="/auth/register" element={<GuestLayout><Register /></GuestLayout>} />
          <Route path="/book-a-session" element={<AuthLayout><BookASession /></AuthLayout>} />
          <Route path="/become-a-mentor" element={<AuthLayout><BecomeAMentor /></AuthLayout>} />
          <Route path="/find-a-mentor" element={<AuthLayout><FindAMentor /></AuthLayout>} />
          <Route path="/plans-and-pricing" element={<GuestLayout><PlanAndPricing /></GuestLayout>} />
          <Route path="/support/contact-us" element={<GuestLayout><Contact /></GuestLayout>} />
          <Route path="/support/help-center" element={<GuestLayout><HelpCenter /></GuestLayout>} />
          <Route path="/support/terms-conditions" element={<GuestLayout><TermsAndConditions /></GuestLayout>} />
          <Route path="/about/about-us" element={<GuestLayout><AboutUs /></GuestLayout>} />
          <Route path="/about/faqs" element={<GuestLayout><FAQ /></GuestLayout>} />
          <Route path="/about/privacy-policy" element={<GuestLayout><PrivacyAndPolicy /></GuestLayout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RoutesComponent;
