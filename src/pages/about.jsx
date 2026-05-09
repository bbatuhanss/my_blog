import myImage from "../assets/my_photo.jpeg";

const experience = [
  {
    company: "Compile Yazılım — Mapfre Sigorta",
    role: "Software Engineer",
    period: "Mar 2025 – Present",
    techs: ["Angular", "Java", "PL/SQL", "Agile Scrum"],
    bullets: [
      "Developing TSS (Supplementary Health Insurance) and ÖSS (Private Health Insurance) sales and post-sales systems, serving thousands of daily users.",
      "Building responsive Angular frontends integrated with Java and PL/SQL backends, improving both UI responsiveness and API performance.",
      "Contributing to an end-to-end corporate platform for Mapfre's partners, covering pricing protocols, applications, and contract management.",
    ],
  },
  {
    company: "Türk Ekonomi Bankası (TEB)",
    role: "Software Engineer — Individual Loans, KrediJet",
    period: "Jun 2024 – Mar 2025",
    techs: ["Java", "Spring Boot", "React", "JUnit", "GitLab CI/CD"],
    bullets: [
      "Modernized the KrediJet loan platform by migrating legacy PL/SQL logic to Java microservices, improving maintainability and scalability.",
      "Built branch-facing credit application screens for personal, housing, and auto loans, enabling customer requests directly at bank branches.",
      "Wrote JUnit tests that meaningfully reduced critical production incidents and improved overall code confidence.",
    ],
  },
  {
    company: "Ming Teknoloji",
    role: "Freelance Software Engineer",
    period: "May 2024 – Oct 2024",
    techs: ["React", "Next.js", "TypeScript", "Flutter"],
    bullets: [
      "Delivered production-ready web applications using React, Next.js, and TypeScript with a focus on performance and SEO.",
      "Developed and published cross-platform mobile apps using Flutter, working directly with clients to ship business-driven features.",
    ],
  },
  {
    company: "FYK Bilgi Teknolojileri",
    role: "Software Engineer",
    period: "Dec 2020 – Jun 2024",
    techs: ["Angular", "Flutter", "React Native", "Java", "GitLab CI/CD"],
    bullets: [
      "Delivered Angular web apps and Flutter mobile apps for corporate clients including Garanti Bank and Fiba Emeklilik.",
      "Configured GitLab CI/CD pipelines, automating builds and deployments to cut release times significantly.",
      "Built a reusable Flutter component library as a shared package, accelerating delivery across multiple teams.",
    ],
  },
];

const skills = [
  {
    category: "Frontend",
    items: ["Angular", "React", "TypeScript", "SCSS", "Redux"],
  },
  { category: "Mobile", items: ["Flutter", "Dart", "React Native"] },
  {
    category: "Backend",
    items: ["Java", "Spring Boot", "PL/SQL", "PostgreSQL", "RESTful API"],
  },
  {
    category: "Tools",
    items: ["Git", "GitLab CI/CD", "Jira", "JUnit", "Agile Scrum"],
  },
];

const About = () => {
  return (
    <div className="about-v2">
      {/* HERO */}
      <section className="about-hero">
        <div className="about-hero__inner">
          <figure className="about-hero__photo">
            <img src={myImage} alt="Hasan Batuhan Sevinç" />
          </figure>

          <div className="about-hero__copy">
            <span className="eyebrow">About Me</span>
            <h1>Hasan Batuhan Sevinç</h1>
            <p className="about-hero__role">Full-Stack Software Engineer</p>
            <p className="about-hero__bio">
              Software engineer with <strong>5+ years of experience</strong>{" "}
              building large-scale financial and insurance systems. I work
              across the full stack — Angular and React on the frontend, Java
              and Spring Boot on the backend, and Flutter for cross-platform
              mobile — always focused on clean architecture, performance, and
              real business impact.
            </p>
            <div className="about-hero__actions">
              <a
                href="mailto:bbatuhansevincc@gmail.com"
                className="btn primary"
              >
                Get in Touch
              </a>
              <a
                href="https://linkedin.com/in/batuhansevinc"
                target="_blank"
                rel="noreferrer"
                className="btn ghost"
              >
                LinkedIn ↗
              </a>
            </div>
          </div>
        </div>

        <ul className="about-stats">
          <li>
            <strong>5+</strong>
            <span>Years of Experience</span>
          </li>
          <li>
            <strong>10+</strong>
            <span>Projects Shipped</span>
          </li>
          <li>
            <strong>3</strong>
            <span>Companies</span>
          </li>
          <li>
            <strong>4</strong>
            <span>Tech Stacks</span>
          </li>
        </ul>
      </section>

      {/* SKILLS */}
      <section className="about-skills">
        <div className="about-container">
          <h2 className="section-title">Technical Skills</h2>
          <div className="skills-grid">
            {skills.map((group) => (
              <div key={group.category} className="skill-group">
                <h3>{group.category}</h3>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="about-experience">
        <div className="about-container">
          <h2 className="section-title">Work Experience</h2>
          <div className="timeline">
            {experience.map((job, i) => (
              <div key={i} className="timeline__item">
                <div className="timeline__dot" />
                <div className="timeline__card">
                  <div className="timeline__head">
                    <div>
                      <p className="timeline__company">{job.company}</p>
                      <p className="timeline__role">{job.role}</p>
                    </div>
                    <span className="timeline__period">{job.period}</span>
                  </div>
                  <ul className="timeline__bullets">
                    {job.bullets.map((b, j) => (
                      <li key={j}>{b}</li>
                    ))}
                  </ul>
                  <div className="timeline__techs">
                    {job.techs.map((t) => (
                      <span key={t} className="tech-tag">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION */}
      <section className="about-education">
        <div className="about-container">
          <h2 className="section-title">Education</h2>
          <div className="edu-card">
            <div className="edu-card__left">
              <p className="edu-card__school">Ege University</p>
              <p className="edu-card__degree">BSc in Computer Engineering</p>
              <p className="edu-card__meta">
                İzmir, Turkey · 2016 – 2021 · GPA: 3.12 / 4.00
              </p>
            </div>
            <p className="edu-card__thesis">
              <strong>Thesis:</strong> Text similarity detection using image
              processing and natural language processing techniques. Core
              courses included Machine Learning, Artificial Intelligence, and
              Design Patterns.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="about-cta">
        <div className="about-container">
          <h2>Open to New Opportunities</h2>
          <p>
            Looking for my next challenge — full-stack, frontend, or mobile.
            Let's talk.
          </p>
          <a
            href="mailto:bbatuhansevincc@gmail.com"
            className="btn primary large"
          >
            bbatuhansevincc@gmail.com
          </a>
        </div>
      </section>
    </div>
  );
};

export default About;
