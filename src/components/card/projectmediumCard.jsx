import "../../styles/card.scss";

const card = ({ props }) => {
  return (
    <>
      <div style={{ textAlign: "-webkit-center"}}>
        <div className="card-feature">
          {props.map((card, i) => (
            // eslint-disable-next-line react/jsx-key
            <div
              className="card"
              key={i}
              style={{
                backgroundImage: `url("${card.img}")`,
              }}
            >
              <div className="card-content">
                <h2 className="card-title">{card.title}</h2>
                <p className="card-body">{card.description}</p>
                <a href="#" className="button">
                  Detail More
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default card;
