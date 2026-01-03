import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube
} from "lucide-react";

export function Footer() {

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <footer className="bg-white text-gray-800 border-t font-space">
      <div className="max-w-6xl mx-auto px-6 py-12 space-y-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

          <div className="max-w-md">
            <img src="/logo.png" alt="Logo" className="h-14 w-auto mb-3" />

            <p className="text-sm mb-4">
              Get updates on new courses and earning opportunities.
            </p>

            <div className="flex gap-2 mb-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 border rounded-md text-sm"
              />
              <button className="px-4 py-2 bg-black text-white rounded-md text-sm">
                Subscribe
              </button>
            </div>

            <p className="text-xs text-gray-500 leading-snug">
              By subscribing you agree to our Privacy Policy and consent to receive updates.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">

            <div>
              <h3 className="font-semibold mb-3">Learning</h3>
              <ul className="space-y-2 text-sm">
                
                {/* ⭐ explore → scroll to browse courses */}
                <li>
                  <button
                    onClick={() => scrollToSection("browse-courses")}
                    className="hover:underline"
                  >
                    Explore courses
                  </button>
                </li>

                {/* ⭐ how it works → scroll to learning journey */}
                <li>
                  <button
                    onClick={() => scrollToSection("learning-journey")}
                    className="hover:underline"
                  >
                    How it works
                  </button>
                </li>

                <li><a className="hover:underline">Certifications</a></li>
                <li><a className="hover:underline">Community</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Resources</h3>
              <ul className="space-y-2 text-sm">
                <li><a className="hover:underline">Blog</a></li>
                <li><a className="hover:underline">FAQ</a></li>
                <li><a className="hover:underline">Contact</a></li>
                <li><a className="hover:underline">Support</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Follow us</h3>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><Facebook className="w-4 h-4" /> Facebook</li>
                <li className="flex items-center gap-2"><Instagram className="w-4 h-4" /> Instagram</li>
                <li className="flex items-center gap-2"><Linkedin className="w-4 h-4" /> LinkedIn</li>
                <li className="flex items-center gap-2"><Youtube className="w-4 h-4" /> YouTube</li>
              </ul>
            </div>

          </div>
        </div>

        <hr />

        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-600 gap-3">
          <p>© 2026 Digital Skill Sathi. All rights reserved.</p>

          <div className="flex gap-6">
            <a className="hover:underline">Privacy Policy</a>
            <a className="hover:underline">Terms of Service</a>
            <a className="hover:underline">Cookies Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
