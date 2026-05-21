import React from "react";

function Footer() {
  const navItems = ["About", "Education", "Skill", "Project", "Contact"];

  return (
    <footer className="relative w-full text-white overflow-hidden">

      {/* NAVBAR INSIDE FOOTER */}
      <nav className="absolute top-0 left-0 w-full z-20 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto flex items-center justify-center px-6 py-4">

          <ul className="flex gap-10 text-white font-medium">
            {navItems.map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-sky-400 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>

        </div>
      </nav>

      {/* BACKGROUND IMAGE */}
      <div
        className="absolute inset-0 bg-cover bg-center animate-zoomSlow"
        style={{
          backgroundImage:
            "url('https://wallpaperaccess.com/full/334517.jpg')",
        }}
      ></div>

      {/* TRANSPARENT OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-900/60 via-white/20 to-gray-900/60"></div>

      {/* FLOATING EFFECT */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="glow glow1"></div>
        <div className="glow glow2"></div>
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex items-center justify-between px-10 py-8 pt-20">

        {/* LEFT SIDE - NAME */}
        <div>
          <h2 className="text-lg md:text-2xl font-bold tracking-widest animate-bounce text-white drop-shadow-lg">
            Jannath S S
          </h2>

          <p className="text-xs md:text-sm text-white/70 mt-1">
            Aspiring Full Stack Developer ✨
          </p>
        </div>

        {/* RIGHT SIDE - COPYRIGHT */}
        <p className="text-sm md:text-base text-white/90">
          © {new Date().getFullYear()} All Rights Reserved.
        </p>

      </div>

      {/* ANIMATION STYLE */}
      <style>{`
        @keyframes zoomSlow {
          0% { transform: scale(1); }
          50% { transform: scale(1.08); }
          100% { transform: scale(1); }
        }

        .animate-zoomSlow {
          animation: zoomSlow 18s ease-in-out infinite;
        }

        .glow {
          position: absolute;
          width: 200px;
          height: 200px;
          background: rgba(255,255,255,0.15);
          border-radius: 50%;
          filter: blur(60px);
          animation: floatGlow 10s infinite ease-in-out;
        }

        .glow1 {
          top: 20%;
          left: 10%;
        }

        .glow2 {
          bottom: 10%;
          right: 15%;
          animation-delay: 2s;
        }

        @keyframes floatGlow {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </footer>
  );
}

export default Footer;