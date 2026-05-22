import React from "react";

function About() {
  return (
    <section id="about" className="section">

      <h2 className="title">
        About Me
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="glass card">
          <h3 className="text-pink-200 text-xl mb-4">
            Who I Am
          </h3>

          <p>
            A passionate frontend developer who loves elegant UI design.
          </p>
        </div>

        <div className="glass card">
          <h3 className="text-pink-200 text-xl mb-4">
            What I Love
          </h3>

          <p>
            Creating aesthetic websites with smooth animations and modern UX.
          </p>
        </div>

        <div className="glass card">
          <h3 className="text-pink-200 text-xl mb-4">
            My Goal
          </h3>

          <p>
            To become a creative full stack developer and UI designer.
          </p>
        </div>

      </div>

    </section>
  );
}

export default About;