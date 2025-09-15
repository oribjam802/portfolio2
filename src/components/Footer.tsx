import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-slate-700 to-slate-600 text-white py-12 mt-auto">
      <div className="max-w-6xl mx-auto px-5">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white mb-4 text-2xl">Portfolio</h3>
            <p className="text-slate-300 mb-2">個人ポートフォリオサイト</p>
          </div>

          <div>
            <h4 className="text-slate-200 mb-4 text-xl">Quick Links</h4>
            <ul className="list-none p-0">
              <li className="mb-2">
                <a
                  href="/"
                  className="text-slate-300 no-underline transition-all duration-300 hover:text-white"
                >
                  Home
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/about"
                  className="text-slate-300 no-underline transition-all duration-300 hover:text-white"
                >
                  About
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/projects"
                  className="text-slate-300 no-underline transition-all duration-300 hover:text-white"
                >
                  Projects
                </a>
              </li>
              <li className="mb-2">
                <a
                  href="/contact"
                  className="text-slate-300 no-underline transition-all duration-300 hover:text-white"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-slate-200 mb-4 text-xl">Contact</h4>
            <p className="text-slate-300 mb-2">Email: contact@example.com</p>
            <p className="text-slate-300 mb-2">Phone: +81 90-1234-5678</p>
          </div>
        </div>

        <div className="border-t border-slate-600 pt-4 text-center">
          <p className="text-slate-400 m-0">
            &copy; {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
