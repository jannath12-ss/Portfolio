import React from "react";

function Skill() {
  return (
    <div
      id="skill"
      className="min-h-screen relative overflow-hidden flex items-center justify-center p-6 pt-28"
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
      <div className="absolute inset-0 bg-gradient-to-br from-sky-800/50 via-Black/20 to-gray-800/50"></div>

      {/* CONTENT (NO BOX) */}
      <div className="relative w-full max-w-4xl text-Black space-y-8">

        <h2 className="text-5xl font-bold text-center mb-10 animate-pulse">
          My Skills
        </h2>

        <div className="space-y-6">

          <div className="hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-sky-200">C Programming</h3>
            <p className="text-Black/80">
              Basic knowledge in C programming and problem solving.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-sky-200">Python</h3>
            <p className="text-Black/80">
              Able to build simple applications using Python.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-sky-200">SQL</h3>
            <p className="text-Black/80">
              Knowledge in database queries and management.
            </p>
          </div>

          <div className="hover:scale-105 transition duration-300">
            <h3 className="text-2xl font-semibold text-sky-200">Web Development</h3>
            <p className="text-Black/80">
              HTML, CSS, JavaScript, React responsive websites.
            </p>
          </div>

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

export default Skill;