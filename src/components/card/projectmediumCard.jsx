import "../../styles/card.scss";

const ProjectCard = ({ props = [], showHead = false, title = "Projects" }) => {
  return (
    <section className="projects">
      {showHead && (
        <div className="projects__head">
          <h1>{title}</h1>
          <span className="pill">{props.length}</span>
        </div>
      )}

      <div className="project-grid" role="list">
        {props.map((item) => {
          const hasSite = !!item.site;
          const hasRepo = !!item.repo;

          return (
            <article
              key={item.id}
              role="listitem"
              className="project-card"
              aria-label={item.title}
            >
              <div
                className="project-card__bg"
                style={{
                  ["--img"]: `url("${item.img}")`,
                  ["--img-fit"]: item.fit || "cover",
                  ["--img-pos"]: item.pos || "center",
                }}
                aria-hidden="true"
              />
              <div className="project-card__content">
                <h3 className="project-card__title" title={item.title}>
                  {item.title}
                </h3>

                {item?.tech?.length ? (
                  <ul className="project-card__tags" aria-label="Tech stack">
                    {item.tech.map((t) => (
                      <li key={t} className="tag" data-tech={t}>
                        {t}
                      </li>
                    ))}
                  </ul>
                ) : null}

                <p className="project-card__desc">{item.description}</p>

                <div className="project-card__actions">
                  {hasSite && (
                    <a
                      href={item.site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--primary"
                      aria-label={`${item.title} – Live site`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M14 3h7v7h-2V6.41L10.41 15 9 13.59 17.59 5H14V3z"></path>
                        <path d="M5 5h6v2H7v10h10v-4h2v6H5V5z"></path>
                      </svg>
                      <span>Live</span>
                    </a>
                  )}

                  {hasRepo && (
                    <a
                      href={item.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn--ghost"
                      aria-label={`${item.title} – View repository`}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M12 .5a12 12 0 00-3.79 23.4c.6.11.82-.26.82-.58v-2.23c-3.34.73-4.04-1.61-4.04-1.61-.55-1.38-1.34-1.75-1.34-1.75-1.1-.75.08-.73.08-.73 1.22.08 1.86 1.25 1.86 1.25 1.08 1.85 2.84 1.32 3.53 1.01.11-.78.42-1.32.76-1.62-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.46-2.38 1.22-3.22-.12-.3-.53-1.52.12-3.16 0 0 1-.32 3.3 1.23a11.5 11.5 0 016 0c2.29-1.55 3.29-1.23 3.29-1.23.65 1.64.24 2.86.12 3.16.76.84 1.21 1.91 1.21 3.22 0 4.61-2.8 5.63-5.47 5.93.43.37.81 1.1.81 2.23v3.3c0 .33.22.7.83.58A12 12 0 0012 .5z" />
                      </svg>
                      <span>Repo</span>
                    </a>
                  )}

                  {!hasSite && !hasRepo && (
                    <span className="btn btn--disabled" aria-disabled="true">
                      Soon
                    </span>
                  )}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectCard;
