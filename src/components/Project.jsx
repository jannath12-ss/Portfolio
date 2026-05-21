import React from "react";

function Project() {
  return (
    <div
      id="project"
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
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
      <div className="absolute inset-0 bg-gradient-to-br from-sky-800/60 via-Black/25 to-gray-800/60"></div>

      {/* CONTENT (NO BOX) */}
      <div className="relative w-full max-w-4xl text-Black">

        {/* TITLE */}
        <h2 className="text-5xl font-bold text-center mb-10 animate-pulse">
          My Project
        </h2>

        {/* CONTENT TEXT ONLY */}
        <div className="space-y-6 text-lg leading-9">

          <h3 className="text-3xl font-semibold text-sky-200 text-center">
            Campus Placement System
          </h3>

          <p className="hover:scale-105 transition duration-300">
            The Campus Placement System is a web-based application developed to
            simplify and manage placement activities in colleges.
          </p>

          <p className="hover:scale-105 transition duration-300">
            It helps students, placement officers, and companies interact
            efficiently during recruitment.
          </p>

          <p className="hover:scale-105 transition duration-300">
            Companies can post jobs and students can apply easily through the system.
          </p>

          <p className="text-sky-200 font-medium hover:scale-105 transition duration-300">
            Technologies: HTML, CSS, JavaScript, React, Python, SQL
          </p>

        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.06); }
          100% { transform: scale(1); }
        }

        .animate-zoomSlow {
          animation: zoomSlow 18s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Project;