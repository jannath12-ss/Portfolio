import React from "react";

function Education() {
  return (
    <div
      id="education"
      className="min-h-screen flex items-center justify-center p-6 relative overflow-hidden"
    >
      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&auto=format&fit=crop')",
        }}
      ></div>

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-white/25 to-gray-900/60"></div>

      {/* CONTENT (NO BOX) */}
      <div className="relative w-full max-w-3xl text-white text-center space-y-6">

        <h2 className="text-5xl font-bold mb-10">
          Education
        </h2>

        <h3 className="text-3xl font-semibold text-sky-200">
          Diploma in Computer Engineering
        </h3>

        <p className="text-lg text-white/80 leading-8">
          Women's Polytechnic College, Thiruvananthapuram
        </p>

        <span className="inline-block text-sky-200 font-medium">
          Currently Pursuing
        </span>

      </div>
    </div>
  );
}

export default Education;