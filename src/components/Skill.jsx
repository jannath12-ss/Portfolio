import React from "react";

function Skills() {

  const skills = [
    {
      title: "Frontend Development",
      desc: "Creating responsive and modern user interfaces using latest frontend technologies.",
      items: ["HTML", "CSS", "JavaScript", "React"]
    },

    {
      title: "UI / UX Design",
      desc: "Designing aesthetic layouts with smooth animations and user-friendly experiences.",
      items: ["Figma", "Tailwind CSS", "Glassmorphism", "Responsive Design"]
    },

    {
      title: "Programming",
      desc: "Building logical solutions and backend fundamentals for web applications.",
      items: ["Python", "SQL", "Git", "GitHub"]
    },

    {
      title: "Soft Skills",
      desc: "Strong communication, teamwork and creative problem-solving abilities.",
      items: ["Leadership", "Team Work", "Communication", "Creativity"]
    },

    {
      title: "Tools & Technologies",
      desc: "Experience using development tools and platforms for efficient workflow.",
      items: ["VS Code", "Vite", "Firebase", "Netlify"]
    },

    {
      title: "Learning Goals",
      desc: "Currently exploring advanced frontend concepts and full stack development.",
      items: ["Node.js", "MongoDB", "APIs", "Next.js"]
    }
  ];

  return (

    <section id="skills" className="section">

      {/* GLOW */}
      <div className="glow glow1"></div>
      <div className="glow glow2"></div>

      {/* TITLE */}
      <h2 className="title">
        My Skills
      </h2>

      {/* SUBTITLE */}
      <p className="skills-subtitle">
        Passionate about building elegant, responsive and modern
        digital experiences with clean UI and smooth performance.
      </p>

      {/* GRID */}
      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div key={index} className="skill-card glass">

            <h3>{skill.title}</h3>

            <p>
              {skill.desc}
            </p>

            <div className="skill-tags">

              {skill.items.map((item, i) => (
                <span key={i} className="skill-tag">
                  {item}
                </span>
              ))}

            </div>

          </div>

        ))}

      </div>

    </section>

  );
}

export default Skills;