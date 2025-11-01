import React, { useState } from "react";
import { Mail, Phone, MapPin, Send, CheckCircle2, X } from "lucide-react";

export default function Contact() {
  const [showPopup, setShowPopup] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all fields before submitting.");
      return;
    }

    // Reset form
    setFormData({ name: "", email: "", message: "" });

    // Show success popup
    setShowPopup(true);

    // Auto-close popup after 3 seconds
    setTimeout(() => setShowPopup(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white py-16 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-indigo-700 mb-4">
            Contact <span className="text-indigo-900">Us</span>
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have questions, feedback, or collaboration ideas?  
            We’d love to hear from you.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-indigo-100 hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Send a Message
            </h2>

            <form className="space-y-5" onSubmit={handleSubmit}>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your name"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  rows="4"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl p-3 focus:ring-2 focus:ring-indigo-400 outline-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 w-full bg-indigo-600 text-white font-semibold py-3 rounded-xl hover:bg-indigo-700 transition"
              >
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-10 border border-indigo-100 flex flex-col justify-center hover:shadow-2xl transition">
            <h2 className="text-2xl font-semibold text-indigo-800 mb-6">
              Get in Touch
            </h2>
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Mail className="text-indigo-600" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Email</h3>
                  <p className="text-gray-600">jsit-mord@nic.in</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <Phone className="text-indigo-600" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Phone</h3>
                  <p className="text-gray-600">011-24305940</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="text-indigo-600" size={24} />
                <div>
                  <h3 className="text-lg font-medium text-gray-800">Address</h3>
                  <p className="text-gray-600">
                    Ministry of Rural Development, Department of Rural Development (DRD)
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 border-t border-indigo-100 pt-6 text-sm text-gray-500">
              © {new Date().getFullYear()} NREGA Insight — All rights reserved.
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Popup (Modal) */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 animate-fadeIn">
          <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm mx-auto relative">
            <button
              onClick={() => setShowPopup(false)}
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={20} />
            </button>
            <CheckCircle2
              size={50}
              className="text-green-500 mx-auto mb-4 animate-bounce"
            />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              Thank You for Reaching Out!
            </h3>
            <p className="text-gray-600">
              Our team will connect with you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
