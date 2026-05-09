import { useMemo } from "react";
import myImage from "../assets/my_photo.jpeg";
import ArticleCard from "../components/card/articleCard";
import ProjectCard from "../components/card/projectmediumCard";
import flutterImage from "../assets/card_images/flutter_image.png";
import goRouter from "../assets/card_images/go_router.jpg";
import cssImage from "../assets/card_images/css_image.jpg";
import htmlImage from "../assets/card_images/html_image.jpg";
import midgardImage from "../assets/card_images/midgard.png";
import myLogo from "../assets/logo.png";
import flutterImageTwo from "../assets/card_images/flutter2.png";
import sanethica from "../assets/card_images/sanethica.png";
import CV from "../articles/cv/Hasan_Batuhan_Sevinç_CV.pdf";
import { Link } from "react-router-dom";

const Home = () => {
  const articles = useMemo(
    () => [
      {
        title: "Introduction to Flutter",
        description:
          "Step into cross-platform mobile development with Flutter — from setup to your first production-ready app.",
        image: flutterImage,
        date: "19.09.2023",
        article: "flutter.md",
      },
      {
        title: "Go Router in Flutter",
        description:
          "A practical guide to navigation in Flutter using Go Router — cleaner routes, better deep-linking.",
        image: goRouter,
        date: "19.01.2024",
        article: "go_router.md",
      },
      {
        title: "The Foundation of the Web: HTML",
        description:
          "Understanding HTML semantics and structure — why it still matters and how to write it well.",
        image: htmlImage,
        date: "01.04.2022",
        article: "html.md",
      },
      {
        title: "Sass vs CSS — What's the Difference?",
        description:
          "A clear breakdown of how Sass extends CSS and when you should actually reach for it.",
        image: cssImage,
        date: "06.12.2023",
        article: "sassCss.md",
      },
    ],
    [],
  );

  const projects = useMemo(
    () => [
      {
        id: 1,
        img: midgardImage,
        title: "Midgard",
        description:
          "Multi-branch insurance sales platform built with Flutter and Riverpod.",
        site: "",
        repo: "",
        tech: ["Flutter", "Riverpod"],
        fit: "cover",
        pos: "center",
      },
      {
        id: 2,
        img: myLogo,
        title: "This Blog",
        description:
          "Personal portfolio and blog built with Vite, React, and SCSS.",
        site: "",
        repo: "https://github.com/bbatuhanss/my_blog",
        tech: ["React", "Vite", "SCSS"],
        fit: "contain",
        pos: "center",
      },
      {
        id: 3,
        img: flutterImageTwo,
        title: "E-Learning App",
        description:
          "Design-first cross-platform e-learning UI built with Flutter.",
        site: "",
        repo: "https://github.com/bbatuhanss/e_learning",
        tech: ["Flutter", "UI/UX"],
        fit: "cover",
        pos: "center",
      },
      {
        id: 4,
        img: sanethica,
        title: "Sanethica",
        description:
          "Healthy nutrition and weight loss web app built with React.",
        site: "https://www.sanethica.co/",
        repo: "https://github.com/bbatuhanss/sanethicaApp",
        tech: ["React"],
        fit: "contain",
        pos: "center",
      },
    ],
    [],
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "HasanBatuhanSevincCV.pdf";
    link.click();
  };

  return (
    <main className="home-root">
      {/* HERO */}
      <section id="home" className="hero-min" aria-label="Hero">
        <div className="hero-min__bg" aria-hidden="true">
          <span className="pattern" />
          <span className="glow" />
        </div>

        <div className="hero-min__inner">
          <div className="hero-min__left">
            <p className="eyebrow">Full-Stack Software Engineer</p>

            <h1 className="h-title">
              Batuhan
              <br />
              <span className="accent">Sevinç</span>
            </h1>

            <p className="h-sub">
              I build large-scale web, mobile, and backend systems —{" "}
              <strong>Angular, React & Flutter</strong> on the front,{" "}
              <strong>Java & Spring Boot</strong> on the back. 5+ years shipping
              production apps at banks and insurance companies.
            </p>

            <div className="cta">
              <button className="btn primary" onClick={handleDownload}>
                Download CV
              </button>
              <a href="#projects" className="btn ghost">
                View Projects ↓
              </a>
            </div>

            <ul className="stats" aria-label="Quick stats">
              <li>
                <strong>5+</strong>
                <span>Years</span>
              </li>
              <li>
                <strong>10+</strong>
                <span>Projects</span>
              </li>
              <li>
                <strong>8+</strong>
                <span>Articles</span>
              </li>
              <li>
                <strong>4</strong>
                <span>Stacks</span>
              </li>
            </ul>
          </div>

          <div className="hero-min__right">
            <figure className="portrait" aria-label="Batuhan Sevinç">
              <img src={myImage} alt="Batuhan Sevinç" />
            </figure>
          </div>
        </div>

        <a href="#about" className="scroll-hint" aria-label="Scroll down">
          <span className="wheel" />
        </a>
      </section>

      {/* ABOUT MINI */}
      <section id="about" className="about-min" aria-label="About">
        <div className="about-min__inner">
          <div className="about-card">
            <div className="about-min__copy">
              <span className="eyebrow" style={{ letterSpacing: "2px" }}>
                About Me
              </span>
              <h2 className="about-min__title">
                Full-Stack Engineer — Web, Mobile & Backend
              </h2>
              <p className="about-min__desc">
                5+ years of experience building mission-critical applications at
                financial institutions and insurance companies. I work across
                the full stack: Angular and React on the frontend, Java and
                Spring Boot on the backend, and Flutter for cross-platform
                mobile — with a constant focus on clean architecture,
                performance, and real business impact.
              </p>
              <ul className="about-min__skills">
                {[
                  "Angular",
                  "React",
                  "TypeScript",
                  "Java",
                  "Spring Boot",
                  "Flutter",
                  "PL/SQL",
                ].map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
              <div className="about-min__actions">
                <Link to="/about" className="btn primary">
                  Full Profile →
                </Link>
                <Link to="/publications" className="btn ghost">
                  Articles
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ARTICLES */}
      <section id="articles" className="section">
        <div className="section-inner">
          <div className="section-head">
            <h2>Featured Articles</h2>
            <Link to="/publications" className="link">
              Browse all →
            </Link>
          </div>
          <div className="home-grid">
            {articles.map((a) => (
              <div key={a.title} className="home-grid__item">
                <ArticleCard {...a} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <Link to="/project" className="link">
              See all →
            </Link>
          </div>
          <ProjectCard props={projects} showHead={false} />
        </div>
      </section>
    </main>
  );
};

export default Home;
