import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Chargement dynamique des pages avec React.lazy()
const Home = React.lazy(() => import('../pages/Home'));
const Login = React.lazy(() => import('../pages/auth/Login'));
const Register = React.lazy(() => import('../pages/auth/Register'));
const BookASession = React.lazy(() => import('../pages/BookASession'));
const BecomeAMentor = React.lazy(() => import('../pages/BecomeAMentor'));
const FindAMentor = React.lazy(() => import('../pages/FindAMentor'));
const PlanAndPricing = React.lazy(() => import('../pages/PlanAndPricing'));

// Importation des layouts
import AuthLayout from '../layouts/AuthLayout';
import GuestLayout from '../layouts/GuestLayout';

// Importer le composant Skeleton
import Skeleton from '../components/skeleton/Skeleton';

function RoutesComponent() {
  return (
    <Router>
      <Suspense fallback={<Skeleton type="card" />}>
        <Routes>
          {/* Routes publiques (invité) */}
          <Route path="/" element={<GuestLayout><Home /></GuestLayout>} />
          
          {/* Routes nécessitant une authentification (auth) */}
          <Route path="/auth/login" element={<AuthLayout><Login /></AuthLayout>} />
          <Route path="/auth/register" element={<AuthLayout><Register /></AuthLayout>} />
          <Route path="/book-a-session" element={<AuthLayout><BookASession /></AuthLayout>} />
          <Route path="/become-a-mentor" element={<AuthLayout><BecomeAMentor /></AuthLayout>} />
          <Route path="/find-a-mentor" element={<AuthLayout><FindAMentor /></AuthLayout>} />
          <Route path="/plan-and-pricing" element={<AuthLayout><PlanAndPricing /></AuthLayout>} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default RoutesComponent;
