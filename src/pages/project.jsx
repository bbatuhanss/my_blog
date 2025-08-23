import { useMemo, useState } from "react";
import midgardImage from "../assets/card_images/midgard.png";
import myLogo from "../assets/logo.png";
import reactImage from "../assets/card_images/react_image.png";
import Card from "../components/card/projectmediumCard";
import flutterImage from "../assets/card_images/flutter_image.png";
import flutterImageTwo from "../assets/card_images/flutter2.png";
import sanethica from "../assets/card_images/sanethica.png";

const Project = () => {
  const cardList = useMemo(
    () => [
      {
        id: 0,
        img: flutterImage,
        title: "Movie Mobile App",
        description:
          "A compact Flutter + Riverpod app powered by TMDB API for browsing movies.",
        site: "", // no live
        repo: "https://github.com/bbatuhanss/search_movie",
        tech: ["Flutter", "Riverpod", "TMDB"],
        fit: "cover",
        pos: "center",
      },
      {
        id: 1,
        img: reactImage,
        title: "Movie Web App",
        description:
          "React + Redux + Sass. TMDB-backed movie discovery experience for the web.",
        site: "", // no live
        repo: "https://github.com/bbatuhanss/movieAppWeb",
        tech: ["React", "Redux", "Sass", "TMDB"],
        fit: "cover",
        pos: "center",
      },
      {
        id: 2,
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
        id: 3,
        img: myLogo,
        title: "My Blog",
        description:
          "Personal blog (Vite + React + SCSS). A home for my projects and articles.",
        site: "", // if you deploy later, put the URL here
        repo: "https://github.com/bbatuhanss/my_blog",
        tech: ["React", "Vite", "SCSS"],
        fit: "contain", // logo/simge → tamamını göster
        pos: "center",
      },
      {
        id: 4,
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
        id: 5,
        img: sanethica,
        title: "Sanethica – Healthy Nutrition & Weight Loss",
        description:
          "Built with React. A modern web experience for healthy nutrition and weight loss.",
        site: "https://www.sanethica.co/",
        repo: "https://github.com/bbatuhanss/sanethicaApp",
        tech: ["React"],
        fit: "contain", // ekran görüntüsü/logo → tamamını göster
        pos: "center",
      },
    ],
    []
  );

  const techs = useMemo(
    () => Array.from(new Set(cardList.flatMap((c) => c.tech || []))).sort(),
    [cardList]
  );

  const [active, setActive] = useState("All");
  const filtered =
    active === "All"
      ? cardList
      : cardList.filter((c) => (c.tech || []).includes(active));

  return (
    <>
      {/* HERO */}
      <header className="proj-hero">
        <div className="proj-container">
          <span className="eyebrow">Selected Work & Experiments</span>
          <h1>Projects Showcase</h1>
          <p className="lead">
            A hand-picked collection of apps, prototypes and open-source work.
            Built with <strong>React</strong>, <strong>Flutter</strong> and a
            passion for great UX.
          </p>

          <nav className="proj-chips" aria-label="Filter by technology">
            <button
              type="button"
              className={`chip ${active === "All" ? "is-active" : ""}`}
              onClick={() => setActive("All")}
            >
              All
            </button>
            {techs.map((t) => (
              <button
                key={t}
                type="button"
                className={`chip ${active === t ? "is-active" : ""}`}
                onClick={() => setActive(t)}
              >
                {t}
              </button>
            ))}
          </nav>

          <div className="proj-meta">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{cardList.length}</strong>
          </div>
        </div>
      </header>

      {/* GRID */}
      <Card props={filtered} showHead={false} />
    </>
  );
};

export default Project;
