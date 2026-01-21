import { BrowseCourses } from "../components/BrowseCourses";
import { ComboPacks } from "../components/ComboPacks";
import { Footer } from "../components/Footer";
import { Hero } from "../components/Hero";
import LearningJourney from "../components/LearningJourney";
import { LoginModal } from "../components/LoginModal";
import { Navbar } from "../components/Navbar";
import { SignupModal } from "../components/SignupModal";
import { WhyChooseUs } from "../components/WhyChooseUs";

import "../../styles/index.css";

export default function Home({ onLoginClick, onSignupClick, onCloseModals, isLoginOpen, isSignupOpen, user }) {
  return (
    <div className="min-h-screen">
      <Navbar onLoginClick={onLoginClick} onSignupClick={onSignupClick} />

      <Hero />
      <BrowseCourses />
      <LearningJourney />
      <ComboPacks />

      <WhyChooseUs
        onSignupClick={onSignupClick}
        isLoggedIn={!!user}
      />

      <Footer />

      <LoginModal
        isOpen={isLoginOpen}
        onClose={onCloseModals}
        onSwitchToSignup={onSignupClick}
      />

      <SignupModal
        isOpen={isSignupOpen}
        onClose={onCloseModals}
        onSwitchToLogin={onLoginClick}
      />
    </div>
  );
}