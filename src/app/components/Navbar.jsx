import { useEffect, useState } from "react";
import { supabase } from "../../supabaseclient";
import { logoutUser } from "../../auth";
import { Menu, X } from "lucide-react";

export function Navbar({ onLoginClick, onSignupClick }) {
  const [user, setUser] = useState(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabase.auth.getUser();
      setUser(data.user);
    };

    getUser();

    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user || null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  const handleLogout = async () => {
    await logoutUser();
    setUser(null);
    window.location.href = "/";
  };

  return (
    <nav className="bg-white border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <div className="flex items-center gap-2 whitespace-nowrap">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto sm:h-12 object-contain"
            />
          </div>

          {/* ---------- Desktop (≥ md) menu ---------- */}
          <div className="hidden md:flex items-center gap-4">

            {!user && (
              <>
                <button
                  onClick={onLoginClick}
                  className="px-3 py-2 text-primary hover:text-primary/80"
                >
                  Login
                </button>

                <button
                  onClick={onSignupClick}
                  className="px-3 py-2 bg-primary text-white rounded-lg hover:bg-primary/90"
                >
                  Sign Up
                </button>
              </>
            )}

            {user && (
              <>
                <span className="text-sm text-gray-600">{user.email}</span>

                <a href="/profile" className="px-3 py-2 hover:text-primary">
                  Profile
                </a>

                <a href="/my-courses" className="px-3 py-2 hover:text-primary">
                  My Courses
                </a>

                <a href="/payments" className="px-3 py-2 hover:text-primary">
                  Payment History
                </a>

                <button
                  onClick={handleLogout}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>

          <div className="md:hidden">
  {user ? (
    // when logged in → hamburger menu
    <button onClick={() => setOpen(!open)}>
      {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
    </button>
  ) : (
    // when logged OUT → show Login + Sign Up
    <div className="flex items-center gap-2">
      <button
        onClick={onLoginClick}
        className="px-3 py-2 text-primary"
      >
        Login
      </button>

      <button
        onClick={onSignupClick}
        className="px-3 py-2 bg-primary text-white rounded-lg"
      >
        Sign Up
      </button>
    </div>
  )}
</div>

        </div>

        {/* ---------- Mobile dropdown panel ---------- */}
        {user && open && (
          <div className="md:hidden bg-white border-t py-3 space-y-2">

            <div className="px-4 text-sm text-gray-600">{user.email}</div>

            <a href="/profile" className="block px-4 py-2 hover:bg-gray-100">
              Profile
            </a>

            <a href="/BrowseCourses" className="block px-4 py-2 hover:bg-gray-100">
              My Courses
            </a>

            <a href="/payments" className="block px-4 py-2 hover:bg-gray-100">
              Payment History
            </a>

            <button
              onClick={handleLogout}
              className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50"
            >
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
