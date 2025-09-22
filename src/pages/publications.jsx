import React from "react";
import { useNavigate } from "react-router-dom";
import ArticleCard from "../components/card/articleCard";
import flutterImage from "../assets/card_images/flutter_image.png";
import goRouter from "../assets/card_images/go_router.jpg";
import htmlImage from "../assets/card_images/html_image.jpg";
import cssImage from "../assets/card_images/css_image.jpg";
import flutterMistakeImage from "../assets/card_images/flutter_mistake.png";
import flutterImageTwo from "../assets/card_images/flutter2.png";
import junit from "../assets/card_images/junit.png";

const publications = () => {
  const navigate = useNavigate();

  const cardsFlutter = [
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
      title: "Mistakes in Flutter",
      description: "Common Mistakes in Flutter Development and Their Fixes",
      image: flutterMistakeImage,
      date: "22.02.2024",
      article: "flutter_mistake.md",
    },
    {
      title: "Flutter Widget Props",
      description:
        "Flutter Widget Props: The fundamental way to manage your applications.",
      image: flutterImageTwo,
      date: "12.01.2023",
      article: "flutter_props.md",
    },
  ];

  const cardsHtml = [
    {
      title: "The Web's Foundation",
      description:
        "HTML plays a fundamental role in the world of web development.",
      image: htmlImage,
      date: "01.04.2022",
      article: "html.md",
    },
  ];

  const cardsCss = [
    {
      title: "Sass and CSS",
      description:
        "Sass and CSS: Exploring the differences to stay ahead in the design world.",
      image: cssImage,
      date: "06.12.2023",
      article: "sassCss.md",
    },
  ];

  const cardsJunit = [
    {
      title: "Mastering Unit Testing with JUnit",
      description:
        "My personal journey with JUnit: why it matters, how I use it, and lessons I’ve learned as a developer.",
      image: junit,
      date: "22.09.2025",
      article: "unit.md",
    },
  ];

  const all = [...cardsFlutter, ...cardsHtml, ...cardsCss, ...cardsJunit];
  const featured =
    [...all].sort((a, b) => {
      const pa = a.date.split(".").reverse().join("-");
      const pb = b.date.split(".").reverse().join("-");
      return new Date(pb) - new Date(pa);
    })[0] || all[0];

  const openFeatured = () =>
    navigate("/articles", {
      state: {
        article: featured.article,
        title: featured.title,
        date: featured.date,
        image: featured.image,
      },
    });

  const sections = [
    { id: "flutter", title: "Flutter", items: cardsFlutter },
    { id: "html", title: "HTML", items: cardsHtml },
    { id: "css", title: "CSS / Sass", items: cardsCss },
    { id: "junit", title: "Junit", items: cardsJunit },
  ];

  return (
    <div className="pub-v2">
      <header className="pub-hero">
        <div className="container">
          <div className="hero-top">
            <h1>Publications</h1>
            <p className="lead">
              Notes from the frontend world: articles on Flutter, HTML, CSS and
              Junit.
            </p>
            <nav className="chips" aria-label="Kategoriler">
              {sections.map((s) => (
                <a key={s.id} className="chip" href={`#${s.id}`}>
                  {s.title}
                </a>
              ))}
            </nav>
          </div>

          {/* FEATURED */}
          {featured && (
            <button
              type="button"
              className="feature-card"
              onClick={openFeatured}
              style={{ backgroundImage: `url(${featured.image})` }}
              aria-label={`Read: ${featured.title}`}
            >
              <span className="overlay" />
              <span className="content">
                <span className="badge">Featured</span>
                <h2>{featured.title}</h2>
                <p className="desc">{featured.description}</p>
                <span className="meta">
                  <time>{featured.date}</time>
                  <span className="cta">Read</span>
                </span>
              </span>
            </button>
          )}
        </div>
      </header>

      {sections.map((s) => (
        <section key={s.id} id={s.id} className="pub-section">
          <div className="container">
            <div className="section-head">
              <h2>{s.title}</h2>
              <span className="count">{s.items.length}</span>
            </div>

            <div className="pub-grid">
              {s.items.map((card) => (
                <ArticleCard key={card.title} {...card} />
              ))}
            </div>
          </div>
        </section>
      ))}
    </div>
  );
};

export default publications;
