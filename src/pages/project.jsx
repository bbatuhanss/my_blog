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
      // ── PROFESSIONAL ──────────────────────────
      {
        id: 0,
        img: midgardImage,
        title: "Mapfre Insurance Platform",
        description:
          "TSS & ÖSS health insurance sales and post-sales system serving thousands of daily users. Angular frontend integrated with Java & PL/SQL backend.",
        site: "",
        repo: "",
        tech: ["Angular", "Java", "PL/SQL"],
        fit: "cover",
        pos: "center",
        type: "professional",
        placeholder: true,
      },
      {
        id: 1,
        img: midgardImage,
        title: "Corporate Application & Pricing (Mapfre)",
        description:
          "End-to-end platform for Mapfre's corporate partners — covering applications, pricing protocols and contract management.",
        site: "",
        repo: "",
        tech: ["Angular", "Java", "PL/SQL"],
        fit: "cover",
        pos: "center",
        type: "professional",
        placeholder: true,
      },
      {
        id: 2,
        img: reactImage,
        title: "KrediJet Loan Platform (TEB)",
        description:
          "Modernized TEB's KrediJet loan platform: migrated legacy PL/SQL to Java microservices, built branch-facing credit application screens.",
        site: "",
        repo: "",
        tech: ["Java", "Spring Boot", "React"],
        fit: "cover",
        pos: "center",
        type: "professional",
        placeholder: true,
      },
      {
        id: 3,
        img: reactImage,
        title: "Insurance Aggregator (Garanti Bank)",
        description:
          "Led Angular-based development of an insurance aggregator platform delivered to Garanti Bank.",
        site: "",
        repo: "",
        tech: ["Angular"],
        fit: "cover",
        pos: "center",
        type: "professional",
        placeholder: true,
      },
      {
        id: 4,
        img: sanethica,
        title: "Insurance Aggregator (Fiba Emeklilik)",
        description:
          "Delivered a mobile-compatible insurance aggregator for Fiba Emeklilik.",
        site: "",
        repo: "",
        tech: ["Angular", "Flutter"],
        fit: "contain",
        pos: "center",
        type: "professional",
        placeholder: true,
      },
      {
        id: 5,
        img: sanethica,
        title: "Ming App (React & Flutter)",
        description:
          "Developed both web (React/Next.js) and mobile (Flutter) versions of Ming app, deployed to production.",
        site: "",
        repo: "",
        tech: ["React", "Flutter"],
        fit: "contain",
        pos: "center",
        type: "professional",
        placeholder: true,
      },
      // ── PERSONAL ──────────────────────────────
      {
        id: 6,
        img: flutterImageTwo,
        title: "E-learning Platform",
        description:
          "Cross-platform learning system built with Flutter for both web and mobile users. Design-first, clean and responsive.",
        site: "",
        repo: "https://github.com/bbatuhanss/e_learning",
        tech: ["Flutter", "UI"],
        fit: "cover",
        pos: "center",
        type: "personal",
      },
      {
        id: 7,
        img: midgardImage,
        title: "Midgard",
        description:
          "Insurance sales platform crafted with Flutter & Riverpod. Multi-branch coverage.",
        site: "",
        repo: "",
        tech: ["Flutter", "Riverpod"],
        fit: "cover",
        pos: "center",
        type: "personal",
      },
      {
        id: 8,
        img: myLogo,
        title: "My Blog",
        description:
          "Personal blog (Vite + React + SCSS). A home for my projects and articles.",
        site: "",
        repo: "https://github.com/bbatuhanss/my_blog",
        tech: ["React", "Vite", "SCSS"],
        fit: "contain",
        pos: "center",
        type: "personal",
      },
      {
        id: 9,
        img: flutterImage,
        title: "Movie Mobile App",
        description:
          "Flutter + Riverpod app powered by TMDB API for browsing movies.",
        site: "",
        repo: "https://github.com/bbatuhanss/search_movie",
        tech: ["Flutter", "Riverpod", "TMDB"],
        fit: "cover",
        pos: "center",
        type: "personal",
      },
      {
        id: 10,
        img: reactImage,
        title: "Movie Web App",
        description:
          "React + Redux + Sass. TMDB-backed movie discovery experience for the web.",
        site: "",
        repo: "https://github.com/bbatuhanss/movieAppWeb",
        tech: ["React", "Redux", "Sass", "TMDB"],
        fit: "cover",
        pos: "center",
        type: "personal",
      },
      {
        id: 11,
        img: sanethica,
        title: "Sanethica",
        description:
          "Modern web experience for healthy nutrition and weight loss, built with React.",
        site: "https://www.sanethica.co/",
        repo: "https://github.com/bbatuhanss/sanethicaApp",
        tech: ["React"],
        fit: "contain",
        pos: "center",
        type: "personal",
      },
    ],
    [],
  );

  const techs = useMemo(
    () => Array.from(new Set(cardList.flatMap((c) => c.tech || []))).sort(),
    [cardList],
  );

  const [activeType, setActiveType] = useState("all");
  const [activeTech, setActiveTech] = useState("All");

  const filtered = cardList.filter((c) => {
    const typeMatch = activeType === "all" || c.type === activeType;
    const techMatch =
      activeTech === "All" || (c.tech || []).includes(activeTech);
    return typeMatch && techMatch;
  });

  return (
    <>
      <header className="proj-hero">
        <div className="proj-container">
          <span className="eyebrow">Professional & Personal Work</span>
          <h1>Projects Showcase</h1>
          <p className="lead">
            From mission-critical banking and insurance platforms to open-source
            personal projects — built with <strong>Angular</strong>,{" "}
            <strong>React</strong>, <strong>Java</strong> and{" "}
            <strong>Flutter</strong>.
          </p>

          {/* Type filter */}
          <div className="proj-type-tabs">
            {[
              { key: "all", label: `All (${cardList.length})` },
              {
                key: "professional",
                label: `Professional (${cardList.filter((c) => c.type === "professional").length})`,
              },
              {
                key: "personal",
                label: `Personal (${cardList.filter((c) => c.type === "personal").length})`,
              },
            ].map((tab) => (
              <button
                key={tab.key}
                type="button"
                className={`type-tab ${activeType === tab.key ? "is-active" : ""}`}
                onClick={() => setActiveType(tab.key)}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tech filter */}
          <nav className="proj-chips" aria-label="Filter by technology">
            <button
              type="button"
              className={`chip ${activeTech === "All" ? "is-active" : ""}`}
              onClick={() => setActiveTech("All")}
            >
              All Tech
            </button>
            {techs.map((t) => (
              <button
                key={t}
                type="button"
                className={`chip ${activeTech === t ? "is-active" : ""}`}
                onClick={() => setActiveTech(t)}
              >
                {t}
              </button>
            ))}
          </nav>

          <div className="proj-meta">
            Showing <strong>{filtered.length}</strong> of{" "}
            <strong>{cardList.length}</strong> projects
          </div>
        </div>
      </header>

      <Card props={filtered} showHead={false} />
    </>
  );
};

export default Project;
