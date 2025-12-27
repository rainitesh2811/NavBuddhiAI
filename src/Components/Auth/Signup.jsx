import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const SignupModal = ({ isOpen, onClose, onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") handleSignup();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleSignup = () => {
    console.log("Signup triggered");
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative z-50 w-[90%] max-w-sm bg-white rounded-2xl border-2 border-orange-500 shadow-xl p-6">
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-orange-500 text-xl font-bold"
        >
          ✕
        </button>

        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold">Create Account</h2>
          <p className="text-sm text-gray-500 mt-1">
            Join NavBuddhiAI today
          </p>
        </div>

        <input
          type="text"
          placeholder="Full Name"
          className="w-full border border-orange-300 rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none"
          autoFocus
        />

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-orange-300 rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <div className="relative mb-3">
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full border border-orange-300 rounded-lg px-4 py-2 pr-10 focus:ring-2 focus:ring-orange-400 outline-none"
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-500"
          >
            {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
          </button>
        </div>

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full border border-orange-300 rounded-lg px-4 py-2 mb-4 focus:ring-2 focus:ring-orange-400 outline-none"
        />

        <button
          onClick={handleSignup}
          className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold hover:bg-orange-600 transition"
        >
          Sign Up
        </button>

        <div className="text-center mt-4 text-sm">
          <p className="text-gray-600">
            Already have an account?{" "}
            <span
              onClick={onSwitch}
              className="text-orange-500 font-semibold cursor-pointer"
            >
              Login
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignupModal;
