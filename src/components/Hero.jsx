import React from "react";

function Hero() {
  return (
    <section className="section flex items-center justify-between">

      <div className="glow glow1"></div>

      <div className="z-10">
        <h1 className="hero-title">
          Hi there, I’m Jannath
        </h1>

        <p className="hero-sub">
          Frontend Developer & Designer crafting delicate digital experiences.
        </p>

        <button className="btn">
          Discover My Creations
        </button>
      </div>

      <div className="profile-box float z-10">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAGXlICctc3mMeeoNwZQKzKOwqou6BZoBOUg&s"
          alt=""
        />
      </div>

    </section>
  );
}

export default Hero;