import React from "react";

function Projects() {
  return (
    <section id="projects" className="section">

      <h2 className="title">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8">

        <div className="project-card">
          <h3 className="text-pink-200 text-2xl mb-4">
            Campus Placement System
          </h3>

          <p className="mb-4">
            A web app to manage campus placements and student recruitment.
          </p>

          <p className="text-pink-300">
            HTML • CSS • React • Python • SQL
          </p>
        </div>

        <div className="project-card">
          <h3 className="text-pink-200 text-2xl mb-4">
            Portfolio Website
          </h3>

          <p className="mb-4">
            A modern responsive portfolio with aesthetic UI and animations.
          </p>

          <p className="text-pink-300">
            React • Tailwind
          </p>
        </div>

        <div className="project-card">
          <h3 className="text-pink-200 text-2xl mb-4">
            Weather App
          </h3>

          <p className="mb-4">
            Real-time weather forecast application using API integration.
          </p>

          <p className="text-pink-300">
            JavaScript • API
          </p>
        </div>

      </div>

    </section>
  );
}

export default Projects;