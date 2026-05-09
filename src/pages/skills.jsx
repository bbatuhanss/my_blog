const skillGroups = [
  {
    category: "Frontend",
    icon: "🖥️",
    skills: [
      { name: "Angular", level: 95 },
      { name: "React", level: 90 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 90 },
      { name: "SCSS / CSS", level: 85 },
      { name: "Redux", level: 80 },
    ],
  },
  {
    category: "Mobile",
    icon: "📱",
    skills: [
      { name: "Flutter", level: 90 },
      { name: "Dart", level: 88 },
      { name: "React Native", level: 75 },
    ],
  },
  {
    category: "Backend",
    icon: "⚙️",
    skills: [
      { name: "Java", level: 85 },
      { name: "Spring Boot", level: 80 },
      { name: "PL/SQL", level: 82 },
      { name: "PostgreSQL", level: 75 },
      { name: "RESTful API", level: 88 },
      { name: "JSF", level: 70 },
    ],
  },
  {
    category: "Tools & Practices",
    icon: "🛠️",
    skills: [
      { name: "Git", level: 92 },
      { name: "GitLab CI/CD", level: 82 },
      { name: "Jira", level: 85 },
      { name: "JUnit", level: 78 },
      { name: "Agile / Scrum", level: 90 },
      { name: "ESLint", level: 80 },
    ],
  },
];

const stats = [
  { label: "Years of Experience", value: "5+" },
  { label: "Tech Stacks", value: "4" },
  { label: "Projects Shipped", value: "10+" },
  { label: "Articles Written", value: "8+" },
];

const alsoFamiliarWith = [
  "Python",
  "Node.js",
  "Firebase",
  "Figma",
  "Postman",
  "Docker (basics)",
  "GitHub Actions",
  "VS Code",
];

function SkillMain() {
  return (
    <div className="skills-v2">
      <section className="skills-header">
        <span className="skills-eyebrow">What I Work With</span>
        <h1>Technical Skills</h1>
        <p>
          Five years across financial and insurance platforms — building
          everything from Angular frontends to Java microservices and Flutter
          mobile apps.
        </p>
      </section>

      <section className="skills-stats">
        <div className="skills-container">
          {stats.map((s) => (
            <div key={s.label} className="skills-stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="skills-grid-section">
        <div className="skills-container">
          <div className="skills-groups">
            {skillGroups.map((group) => (
              <div key={group.category} className="skill-card">
                <div className="skill-card__head">
                  <span className="skill-card__icon">{group.icon}</span>
                  <h2>{group.category}</h2>
                </div>
                <div className="skill-card__items">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="skill-item">
                      <div className="skill-item__top">
                        <span className="skill-item__name">{skill.name}</span>
                        <span className="skill-item__pct">{skill.level}%</span>
                      </div>
                      <div className="skill-item__bar">
                        <div
                          className="skill-item__fill"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="skills-tags-section">
        <div className="skills-container">
          <h2 className="skills-tags-title">Also familiar with</h2>
          <div className="skills-tags">
            {alsoFamiliarWith.map((tag) => (
              <span key={tag} className="skills-tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default SkillMain;
