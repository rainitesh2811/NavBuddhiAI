import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrowseCourses } from "./components/BrowseCourses";
import { ComboPacks } from "./components/ComboPacks";
import { WhyChooseUs } from "./components/WhyChooseUs";
import { Footer } from "./components/Footer";
import { LoginModal } from "./components/LoginModal";
import { SignupModal } from "./components/SignupModal";
import LearningJourney from "./components/LearningJourney";
import "../styles/index.css";

export default function App() {

  // ⭐ user login state here
  const [user, setUser] = useState(null);

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);

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

      <Navbar
        onLoginClick={handleOpenLogin}
        onSignupClick={handleOpenSignup}
      />

      <Hero />

      <BrowseCourses />

      <LearningJourney />

      <ComboPacks />

      <WhyChooseUs
        onSignupClick={handleOpenSignup}
        isLoggedIn={!!user}   // 🔥 works now
      />

      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={handleCloseModals}

        // ⭐ set user on successful login
        onSuccess={(loggedInUser) => {
          setUser(loggedInUser);
          handleCloseModals();
        }}

        onSwitchToSignup={handleOpenSignup}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={handleCloseModals}

        // ⭐ set user on successful signup
        onSuccess={(createdUser) => {
          setUser(createdUser);
          handleCloseModals();
        }}

        onSwitchToLogin={handleOpenLogin}
      />
    </div>
  );
}
