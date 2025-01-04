import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-screen-xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h1 className="text-4xl font-bold text-yellow-400 mb-4">
              TravelMate
            </h1>
            <p className="text-sm text-gray-400 mb-6">
              Your ultimate destination for exploring new places with ease and
              comfort. Let's make your travel dreams come true.
            </p>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <i className="fab fa-facebook-f text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <i className="fab fa-twitter text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <i className="fab fa-instagram text-2xl"></i>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-yellow-400 transition duration-300"
              >
                <i className="fab fa-linkedin-in text-2xl"></i>
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Blog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              Customer Support
            </h2>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Booking Help
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-300 mb-4">
              Contact Info
            </h2>
            <ul className="text-gray-400">
              <li className="mb-2">
                <span className="text-gray-500">Email:</span>{" "}
                <a
                  href="mailto:alfinworkspace@gmail.com"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  alfinworkspace@gmail.com
                </a>
              </li>
              <li className="mb-2">
                <span className="text-gray-500">Phone:</span>{" "}
                <a
                  href="tel:+62-821-3169-3337"
                  className="hover:text-yellow-400 transition duration-300"
                >
                  +62-821-3169-3337
                </a>
              </li>
              <li className="mb-2">
                <span className="text-gray-500">Address:</span> 123 Travel St,
                Yogyakarta, Indonesia
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12"></div>

        <div className="text-center mt-8 text-sm text-gray-400">
          <p>&copy; 2025 TravelMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
