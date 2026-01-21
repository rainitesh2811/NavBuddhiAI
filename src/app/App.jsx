import { useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { supabase } from "../supabaseclient";
import Home from "./pages/Home";
import Payment from "./pages/Payment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import TermsOfService from "./pages/TermsOfService";
import "../styles/index.css";

export default function App() {
  const [user, setUser] = useState(null);
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user || null);
    };
    getUser();
    const { data: listener } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user || null);
    });

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleOpenLogin = () => {
    setIsSignupOpen(false);
    setIsLoginOpen(true);
  };

  const handleOpenSignup = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(true);
  };

  const handleCloseModals = () => {
    setIsLoginOpen(false);
    setIsSignupOpen(false);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              onLoginClick={handleOpenLogin}
              onSignupClick={handleOpenSignup}
              onCloseModals={handleCloseModals}
              isLoginOpen={isLoginOpen}
              isSignupOpen={isSignupOpen}
              user={user}
            />
          }
        />
        <Route path="/payment" element={<Payment />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/refund-policy" element={<RefundPolicy />} />
      </Routes>
    </Router>
  );
}
