import { useState, useEffect } from "react";
import { Eye, EyeOff } from "lucide-react";

const LoginModal = ({ isOpen, onClose, onSwitch }) => {
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "Enter") handleLogin();
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  const handleLogin = () => {
    console.log("Login triggered");
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
          <h2 className="text-2xl font-bold">Welcome Back</h2>
          <p className="text-sm text-gray-500 mt-1">Login to continue</p>
        </div>

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-orange-300 rounded-lg px-4 py-2 mb-3 focus:ring-2 focus:ring-orange-400 outline-none"
          autoFocus
        />

        <div className="relative mb-2">
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

        <div className="text-right mb-4">
          <span className="text-sm text-orange-500 font-semibold cursor-pointer">
            Forgot Password?
          </span>
        </div>

        <button
          onClick={handleLogin}
          className="w-full bg-orange-500 text-white py-2.5 rounded-lg font-semibold"
        >
          Login
        </button>

        <div className="text-center mt-4 text-sm">
          <p className="text-gray-600">
            New User?{" "}
            <span
              onClick={onSwitch}
              className="text-orange-500 font-semibold cursor-pointer"
            >
              Register here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
