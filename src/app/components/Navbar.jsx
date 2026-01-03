import { useEffect, useState } from "react";
import { supabase } from "../../supabaseclient";
import { logoutUser } from "../../auth";

export function Navbar({ onLoginClick, onSignupClick }) {
  const [user, setUser] = useState(null);

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

          {/* Logo only */}
          <div className="flex items-center gap-2 whitespace-nowrap">
  <img
  src="/logo.png"
  alt="Logo"
  className="h-10 w-auto sm:h-12 object-contain"
/>

          </div>

          {/* Buttons */}
          <div className="flex items-center gap-3 whitespace-nowrap">
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
                <span className="text-sm text-gray-600 hidden sm:block">
                  {user.email}
                </span>

                <button
                  onClick={handleLogout}
                  className="px-3 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                >
                  Logout
                </button>
              </>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
