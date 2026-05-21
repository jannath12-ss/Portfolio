import React from "react";

function About() {
  return (
    <div
      id="about"
      className="min-h-screen bg-cover bg-center relative overflow-hidden"
      style={{
        backgroundImage:
          "url('https://wallpaperaccess.com/full/334517.jpg')",
      }}
    >
      {/* OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-Black/30 to-gray-900/60"></div>

      {/* NAVBAR */}
      <nav className="relative w-full bg-Black/10 backdrop-blur-lg border-b border-Black/20 shadow-lg px-10 py-5 flex items-center justify-between">
        <h1 className="text-3xl font-bold text-Black tracking-wide">
          My Portfolio
        </h1>

        <ul className="flex gap-8 text-Black font-medium">
          <li className="hover:text-pink-300 transition">About</li>
          <li className="hover:text-pink-300 transition">Education</li>
          <li className="hover:text-pink-300 transition">Skill</li>
          <li className="hover:text-pink-300 transition">Project</li>
          <li className="hover:text-pink-300 transition">Contact</li>
        </ul>
      </nav>

      {/* FLOAT FLOWERS */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="flower flower1"></div>
        <div className="flower flower2"></div>
        <div className="flower flower3"></div>
      </div>

      {/* CONTENT (NO BOX - FULL TRANSPARENT) */}
      <div className="relative flex items-center justify-center p-6 md:p-14">
        <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">

          {/* IMAGE */}
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGXlICctc3mMeeoNwZQKzKOwqou6BZoBOUg&s"
            alt="girl"
            className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-full border-4 border-pink-300 shadow-lg hover:scale-110 transition duration-500 animate-[float_6s_ease-in-out_infinite]"
          />

          {/* TEXT (TRANSPARENT STYLE) */}
          <div className="md:w-1/2 text-left">
            <h2 className="text-5xl font-extrabold text-Black mb-8 animate-pulse">
              Jannath
            </h2>

            <p className="text-Black/90 text-lg leading-9 mb-6">
              Hello! My name is Jannath, and I am from Nedumangadu.
            </p>

            <p className="text-Black/80 text-lg leading-9 mb-6">
              I am a hardworking and dedicated student with interest in tech.
            </p>

            <p className="text-Black/70 text-lg leading-9">
              I know C, Python, SQL, and web development.
            </p>
          </div>
        </div>
      </div>

      {/* ANIMATION */}
      <style>{`
        .flower {
          position: absolute;
          width: 80px;
          height: 80px;
          background-image: url('https://pngimg.com/uploads/flower/flower_PNG102.png');
          background-size: cover;
          opacity: 0.25;
          filter: hue-rotate(300deg) saturate(1.5);
          animation: floatFlower 12s linear infinite;
        }

        .flower1 { top: 10%; left: 10%; animation-duration: 14s; }
        .flower2 { top: 60%; left: 80%; animation-duration: 18s; }
        .flower3 { top: 30%; left: 50%; animation-duration: 16s; }

        @keyframes floatFlower {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-30px) rotate(180deg); }
          100% { transform: translateY(0px) rotate(360deg); }
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}

export default About;