import React from "react";

const skills = [
  {
    "name": "Portfolio Website",
    "projectskills": ["HTML5", "CSS3", "JavaScript", "React", "UI/UX"],
  },
  {
    "name": "Car Web Scraper",
    "projectskills": ["Python", "Selenium", "Pandas", "CSV", "OOP"],
  },
];

function Skills() {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item">
          <h3>{skill.name}</h3>
          {skill.projectskills.map((projectskill, index) => (
            <p key={index}>{projectskill}</p>
          ))}
        </div>

      ))}
    </div>
  );
}

export default Skills;