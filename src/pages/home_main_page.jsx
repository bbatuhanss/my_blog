import Card from "../components/card";
import Home from "../pages/home";
import "../styles/home.scss";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const home_main_page = () => {
  const cardList = [
    {
      id: 0,
      img: "https://i.imgur.com/w5HYiQZ.png",
      title: "Growth",
      description:
        "Our group of specialists will collaborate with you to develop a personalized strategy aimed at guiding you toward success through incremental progress.",
    },
    {
      id: 1,
      img: "https://i.imgur.com/4wouHGC.png",
      title: "Fitness",
      description:
        "Offering a diverse range of exercises for your selection, you'll have all the resources necessary to attain the peak of your physical fitness.",
    },
    {
      id: 2,
      img: "https://i.imgur.com/UdPvj8T.png",
      title: "Diet",
      description:
        "Our team will collaborate with you to craft a tailor-made meal plan designed to assist you in achieving your distinct health objectives.",
    },
  ];
  return (
    <Container>
      <Col xs={6}>
        <Col>
          <Home />
        </Col>
        <Col style={{ height: "200vh" }}>
          <a className="article" style={{ padding: "20px 20px" }}>
            Articles{" "}
          </a>
          <div className="card">
            <Card props={cardList} />
          </div>
        </Col>
      </Col>
    </Container>
  );
};

export default home_main_page;
