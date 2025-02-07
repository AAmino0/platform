import React, { Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../components/routes/ProtectedRoute";
import GuestRoute from "../components/routes/GuestRoute";

// Lazy-loaded pages
const Home = React.lazy(() => import("../pages/Home"));
const Login = React.lazy(() => import("../pages/auth/Login"));
const Register = React.lazy(() => import("../pages/auth/Register"));
const BecomeAMentor = React.lazy(() => import("../pages/BecomeAMentor"));
const FindAMentor = React.lazy(() => import("../pages/FindAMentor"));


const PlanAndPricing = React.lazy(() => import("../pages/PlanAndPricing"));
const Contact = React.lazy(() => import("../pages/Support/Contact"));
const HelpCenter = React.lazy(() => import("../pages/Support/HelpCenter"));
const TermsAndConditions = React.lazy(() => import("../pages/Support/TermsAndConditions"));
const AboutUs = React.lazy(() => import("../pages/About/AboutUs"));
const FAQ = React.lazy(() => import("../pages/About/FAQ"));
const PrivacyAndPolicy = React.lazy(() => import("../pages/About/PrivacyAndPolicy"));
const ForgotPassowrd = React.lazy(() => import("../pages/auth/ForgotPassword"));
const ResetPassword = React.lazy(() => import("../pages/auth/ResetPassword"));


const Profile = React.lazy(() => import("../pages/Profile"));



// Layouts
import AuthLayout from "../layouts/AuthLayout";
import GuestLayout from "../layouts/GuestLayout";

// Components
import Skeleton from "../components/skeleton/Skeleton";
import ScrollToTop from "../utils/ScrollToTop";

function RoutesComponent() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<Skeleton type="card" />}>
        <Routes>
          {/* Public Route */}
          <Route path="/" element={<GuestLayout><Home /></GuestLayout>} />

          {/* Guest-Only Routes (Cannot access if logged in) */}
          <Route path="/auth/login" element={<GuestRoute><GuestLayout><Login /></GuestLayout></GuestRoute>} />
          <Route path="/auth/register" element={<GuestRoute><GuestLayout><Register /></GuestLayout></GuestRoute>} />
          <Route path="/auth/forgot-password" element={<GuestRoute><GuestLayout><ForgotPassowrd /></GuestLayout></GuestRoute>} />
          <Route path="/auth/reset-password" element={<GuestRoute><GuestLayout><ResetPassword /></GuestLayout></GuestRoute>} />

          {/* Protected Routes (Only logged-in users can access) */}
         
          <Route path="/become-a-mentor" element={<ProtectedRoute><AuthLayout><BecomeAMentor /></AuthLayout></ProtectedRoute>} />
          <Route path="/find-a-mentor" element={<GuestRoute><GuestLayout><FindAMentor /></GuestLayout></GuestRoute>} />
          <Route path="/profile" element={<ProtectedRoute><AuthLayout><Profile /></AuthLayout></ProtectedRoute>} />

          {/* Public Pages */}
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
