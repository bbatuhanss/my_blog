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
          "Are you ready to step into the exciting world of mobile app development today?",
        image: flutterImage,
        date: "19.09.2023",
        article: "flutter.md",
      },
      {
        title: "Go Router in Flutter",
        description:
          "Navigating with Go Router in Flutter: Faster, Easier, Smarter!",
        image: goRouter,
        date: "19.01.2024",
        article: "go_router.md",
      },
      {
        title: "The Web's Foundation",
        description:
          "HTML plays a fundamental role in the world of web development.",
        image: htmlImage,
        date: "01.04.2022",
        article: "html.md",
      },
      {
        title: "Sass and CSS",
        description:
          "Sass and CSS: Exploring the differences to stay ahead in the design world.",
        image: cssImage,
        date: "06.12.2023",
        article: "sassCss.md",
      },
    ],
    []
  );
  const projects = useMemo(
    () => [
      {
        id: 1,
        img: midgardImage,
        title: "Midgard",
        description:
          "Insurance sales platform crafted with Flutter & Riverpod. Multi-branch coverage.",
        site: "",
        repo: "",
        tech: ["Flutter", "Riverpod", "Web"],
        fit: "cover",
        pos: "center",
      },
      {
        id: 2,
        img: myLogo,
        title: "My Blog",
        description:
          "Personal blog (Vite + React + SCSS). A home for my projects and articles.",
        site: "",
        repo: "https://github.com/bbatuhanss/my_blog",
        tech: ["React", "Vite", "SCSS"],
        fit: "contain",
        pos: "center",
      },
      {
        id: 3,
        img: flutterImageTwo,
        title: "E-learning",
        description:
          "Design-first e-learning UI in Flutter. Clean, focused and responsive.",
        site: "",
        repo: "https://github.com/bbatuhanss/e_learning",
        tech: ["Flutter", "UI"],
        fit: "cover",
        pos: "center",
      },
      {
        id: 4,
        img: sanethica,
        title: "Sanethica – Healthy Nutrition & Weight Loss",
        description:
          "Built with React. A modern web experience for healthy nutrition and weight loss.",
        site: "https://www.sanethica.co/",
        repo: "https://github.com/bbatuhanss/sanethicaApp",
        tech: ["React"],
        fit: "contain",
        pos: "center",
      },
    ],
    []
  );

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "HasanBatuhanSevincCV.pdf";
    link.click();
  };

  return (
    <main className="home-root">
      {/* ===== HERO ===== */}
      <section id="home" className="hero-min" aria-label="Hero">
        <div className="hero-min__bg" aria-hidden="true">
          <span className="pattern" />
          <span className="glow" />

        </div>

        <div className="hero-min__inner">
          <div className="hero-min__left">
            <p className="eyebrow">Software Engineer</p>
            <h1 className="h-title">Batuhan Sevinç</h1>
            <p className="h-sub">
              I am a <strong>Software Engineer</strong> crafting modern, accessible and responsive interfaces using{" "}
              <strong>React, Angular, Java & Flutter</strong>, while also developing robust backend solutions.
            </p>

            <div className="cta">
              <div className="btn primary" onClick={handleDownload}>
                📄 Download CV
              </div>
              <a href="#projects" className="btn ghost">
                View Projects
              </a>
            </div>

            <ul className="stats" aria-label="Quick stats">
              <li>
                <strong>5+</strong>
                <span>Years</span>
              </li>
              <li>
                <strong>7+</strong>
                <span>Projects</span>
              </li>
              <li>
                <strong>5+</strong>
                <span>Articles</span>
              </li>
            </ul>
          </div>

          <div className="hero-min__right">
            <figure className="portrait" role="img" aria-label="Profile">
              <img src={myImage} alt="Batuhan Sevinç" />
            </figure>
          </div>
        </div>

        <a href="#about" className="scroll-hint" aria-label="Scroll to About">
          <span className="wheel" />
        </a>
      </section>

      {/* ===== ABOUT (kart içinde) ===== */}
      <section id="about" className="about-min fade-in" aria-label="About">
        <div className="about-min__inner">
          <div className="about-card">
            <div className="about-min__copy">
              <span className="eyebrow">About</span>
              <h2 className="about-min__title">See full profile →</h2>
              <p className="about-min__desc">
                I’m a frontend developer who treats code as a language and
                products as experiences. I value clarity, performance and
                delightful UI details. I keep up with modern stacks and ship
                clean, accessible and responsive interfaces.
              </p>
              <ul className="about-min__skills" aria-label="Tech stack">
                <li>React</li>
                <li>TypeScript</li>
                <li>Redux</li>
                <li>SCSS</li>
                <li>Flutter</li>
                <li>Angular</li>
              </ul>
              <div className="about-min__actions">
                <a
                  href="/about"
                  className="btn primary"
                  aria-label="Go to full profile"
                >
                  See Full Profile
                </a>
                <a
                  href="/publications"
                  className="btn ghost"
                  aria-label="Go to articles"
                >
                  Articles
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ARTICLES ===== */}
      {/* ===== ARTICLES ===== */}
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

      {/* ===== PROJECTS ===== */}
      <section id="projects" className="section alt">
        <div className="section-inner">
          <div className="section-head">
            <h2>Featured Projects</h2>
            <Link to="/project" className="link">
              See all projects →
            </Link>
          </div>
          <ProjectCard props={projects} showHead={false} />
        </div>
      </section>
    </main>
  );
};

export default Home;
