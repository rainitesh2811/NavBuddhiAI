import React from "react";
import logo from "../../Assets/Images/logo.png";

const Footer = () => {
  return (
    <footer
      className="px-4 sm:px-6 md:px-16 py-10"
      style={{ backgroundColor: "#FFF7F2" }}
    >

      {/* MOBILE VIEW */}
      <div className="md:hidden">
        <div className="rounded-2xl p-5 shadow-sm">

          <div className="grid grid-cols-2 gap-4">

            {/* LEFT COLUMN */}
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <img src={logo} alt="logo" className="h-8 object-contain" />
              </div>

              <div className="space-y-1">
                <p>About us</p>
                <p>Contact us</p>
                <p>Privacy Policy</p>
                <p>Terms of Use</p>
                <p>Refund Policy</p>
                <p>Blogs</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Contact Us</h3>
                <p>email@example.com</p>
                <p>+91 9876543210</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Registered Office</h3>
                <p>
                  Office Name,<br />
                  Street,<br />
                  City, India
                </p>
              </div>
            </div>

            {/* RIGHT COLUMN */}
            <div className="space-y-3">

              <div>
                <h3 className="font-semibold mb-1">Recommended courses</h3>
                <p>Artificial Intelligence Basics</p>
              </div>

              <div>
                <h3 className="font-semibold mb-1">Social Media</h3>
                <p>Instagram</p>
                <p>LinkedIn</p>
                <p>Twitter</p>
              </div>

            </div>
          </div>
        </div>
      </div>
{/* DESKTOP VIEW */}
<div className="hidden md:grid grid-cols-4 gap-10 mt-6">

  {/* LEFT COLUMN — links + contact + office */}
  <div className="space-y-5">

    <div className="flex justify-center md:justify-start">
      <img src={logo} alt="logo" className="h-12 object-contain" />
    </div>

    <ul className="space-y-2 text-lg">
      <li>About us</li>
      <li>Contact us</li>
      <li>Privacy Policy</li>
      <li>Terms of Use</li>
      <li>Refund Policy</li>
      <li>Blogs</li>
    </ul>

    <div>
      <h3 className="font-semibold mb-1">Contact Us</h3>
      <p>email@example.com</p>
      <p>+91 9876543210</p>
    </div>

    <div>
      <h3 className="font-semibold mb-1">Registered Office</h3>
      <p>
        Office Name,<br />
        Street,<br />
        City, India
      </p>
    </div>

  </div>

  {/* OTHER COLUMNS STAY AS CATEGORIES */}

  <div>
    <h3 className="font-semibold mb-2">Design & Video Editing</h3>
    <p>UI UX Designing</p>
    <p>UX Research</p>
  </div>

  <div>
    <h3 className="font-semibold mb-2">Development</h3>
    <p>React JS</p>
    <p>Web Development</p>
  </div>

  <div>
    <h3 className="font-semibold mb-2">Recommended Courses</h3>
    <p>Artificial Intelligence Basics</p>
  </div>

</div>

    </footer>
  );
};

export default Footer;
