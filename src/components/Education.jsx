import React from "react";

function Education() {
  return (
    <section
      id="education"
      className="section flex items-center justify-center relative overflow-hidden"
    >

      {/* GLOW EFFECT */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* CONTENT */}
      <div className="relative z-10 w-full max-w-4xl">

        {/* TITLE */}
        <h2 className="title">
          Education
        </h2>

        {/* CARD */}
        <div className="glass card p-10 md:p-14 text-center">

          {/* YEAR */}
          <span className="text-pink-300 tracking-[3px] uppercase text-sm">
            2023 - Present
          </span>

          {/* COURSE */}
          <h3 className="text-4xl font-semibold text-pink-100 mt-5 mb-6">
            Diploma in Computer Engineering
          </h3>

          {/* COLLEGE */}
          <p className="text-lg text-pink-50/80 leading-8 max-w-2xl mx-auto">
            Women’s Polytechnic College,
            Thiruvananthapuram
          </p>

          {/* STATUS */}
          <div className="mt-8 inline-block px-6 py-3 rounded-full bg-pink-300/10 border border-pink-300/20 text-pink-200">
            Currently Pursuing
          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;