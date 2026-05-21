import React from "react";

function Contact() {
  return (
    <div
      id="contact"
      className="min-h-screen relative flex items-center justify-center p-6 overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/334517.jpg')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-800/60 via-white/25 to-gray-800/70"></div>

      {/* CONTENT (NO BOX) */}
      <div className="relative w-full max-w-3xl text-Black text-lg space-y-6">

        <h2 className="text-5xl font-bold text-center mb-10 animate-pulse">
          Contact
        </h2>

        <p className="hover:scale-105 transition duration-300">
          <strong className="text-sky-200">Name:</strong> Jannath
        </p>

        <p className="hover:scale-105 transition duration-300">
          <strong className="text-sky-200">Location:</strong> Nedumangadu, Kerala
        </p>

        <p className="hover:scale-105 transition duration-300">
          <strong className="text-sky-200">Email:</strong> jannath@gmail.com
        </p>

        <p className="hover:scale-105 transition duration-300">
          <strong className="text-sky-200">Phone:</strong> +91 9876543210
        </p>

        <p className="hover:scale-105 transition duration-300">
          <strong className="text-sky-200">LinkedIn:</strong> linkedin.com/in/jannath
        </p>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }

        .animate-zoomSlow {
          animation: zoomSlow 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Contact;