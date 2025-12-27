import { useState } from "react";
import logo from "../../assets/Images/logo.png";
import LoginModal from "../Auth/Login";
import SignupModal from "../Auth/Signup";

const Navbar = () => {
  const [activeModal, setActiveModal] = useState(null); 

  return (
    <>
      <nav className="w-full h-20 border-b border-orange-500 bg-white px-3 sm:px-6 md:px-14 flex items-center justify-between">
        <div className="flex items-center gap-2 flex-shrink-0">
          <img src={logo} className="h-10 w-10 sm:h-11 sm:w-11 object-contain" />
          <span className="text-[20px] sm:text-[22px] font-bold whitespace-nowrap">
            <span className="text-orange-500">Nav</span>
            <span className="text-blue-600">Buddhi</span>
            <span className="text-green-600">AI</span>
          </span>
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <button
            onClick={() => setActiveModal("login")}
            className="border border-orange-500 text-orange-500 bg-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg font-semibold text-sm sm:text-base"
          >
            Login
          </button>

          <button
            onClick={() => setActiveModal("signup")}
            className="bg-orange-500 text-white px-3.5 sm:px-5 py-1.5 sm:py-2 rounded-lg font-semibold text-sm sm:text-base"
          >
            Sign Up
          </button>
        </div>
      </nav>

      <LoginModal
        isOpen={activeModal === "login"}
        onClose={() => setActiveModal(null)}
        onSwitch={() => setActiveModal("signup")}
      />

      <SignupModal
        isOpen={activeModal === "signup"}
        onClose={() => setActiveModal(null)}
        onSwitch={() => setActiveModal("login")}
      />
    </>
  );
};

export default Navbar;
