import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-indigo-700 to-indigo-900 text-white mt-16 w-full">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Column 1: Logo & Description */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide mb-3">
            NREGA <span className="text-indigo-200">Insight</span>
          </h2>
          <p className="text-indigo-100 text-sm leading-relaxed">
            Empowering rural transparency through open data. Explore insights 
            on employment, funds, and performance trends under MGNREGA across 
            India — all in one visual dashboard.
          </p>
          <div className="flex space-x-4 mt-5">
            <a href="#" className="hover:text-indigo-300 transition">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-indigo-300 transition">
              <Twitter size={20} />
            </a>
            <a href="#" className="hover:text-indigo-300 transition">
              <Linkedin size={20} />
            </a>
            <a href="mailto:jsit-mord@nic.in" className="hover:text-indigo-300 transition">
              <Mail size={20} />
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-indigo-500 inline-block pb-1">
            Quick Links
          </h3>
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="hover:text-indigo-300 transition duration-200"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="hover:text-indigo-300 transition duration-200"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="hover:text-indigo-300 transition duration-200"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4 border-b border-indigo-500 inline-block pb-1">
            Contact Info
          </h3>
          <p className="text-sm text-indigo-100">
            <span className="font-semibold">Ministry of Rural Development</span>
            <br />
            Department of Rural Development (DRD)
          </p>
          <p className="text-sm text-indigo-100 mt-2">
            📧 Email:{" "}
            <a
              href="mailto:jsit-mord@nic.in"
              className="hover:text-indigo-300 transition"
            >
              jsit-mord@nic.in
            </a>
          </p>
          <p className="text-sm text-indigo-100 mt-1">📞 Phone: 011-24305940</p>
        </div>
      </div>

      {/* Bottom Strip */}
      <div className="bg-indigo-950 text-center py-4 text-sm text-indigo-300 border-t border-indigo-800">
        © {new Date().getFullYear()} <span className="font-semibold">NREGA Insight</span>. 
        All rights reserved. | Designed with 💙 for Rural Transparency | Designed and Developed by Vinay Jadhav 
      </div>
    </footer>
  );
}
