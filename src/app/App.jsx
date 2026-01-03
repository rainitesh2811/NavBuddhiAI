import React, { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrowseCourses } from "./components/BrowseCourses";
import { ComboPacks } from "./components/ComboPacks";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { SignupModal } from "./components/SignupModal";
import LearningJourney from "./components/LearningJourney";
import { supabase } from "../supabaseclient";  // ⭐ make sure path is correct
import "../styles/index.css";

export default function App() {

  const [user, setUser] = useState(null);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  // ⭐ get current user on load
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user || null);
    };
    getUser();

    // ⭐ listen for login/logout changes
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
    <div className="min-h-screen">

      <Navbar onLoginClick={handleOpenLogin} onSignupClick={handleOpenSignup} />

      <Hero />
      <BrowseCourses />
      <LearningJourney />
      <ComboPacks />

      {/* ⭐ Start button now syncs to real auth */}
      <WhyChooseUs
        onSignupClick={handleOpenSignup}
        isLoggedIn={!!user}
      />

      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseModals}
        onSwitchToSignup={handleOpenSignup}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={handleCloseModals}
        onSwitchToLogin={handleOpenLogin}
      />
    </div>
  );
}
