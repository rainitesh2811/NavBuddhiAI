import { GraduationCap } from "lucide-react";

export function Navbar({ onLoginClick, onSignupClick }) {
  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          <div className="flex items-center gap-2">
            <GraduationCap className="w-8 h-8 text-primary" />
            <span className="text-xl text-primary">EduLearn</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onLoginClick}
              className="px-4 py-2 text-primary hover:text-primary/80 transition-colors"
            >
              Login
            </button>

            <button
              onClick={onSignupClick}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
}
