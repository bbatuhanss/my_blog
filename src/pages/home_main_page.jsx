import Card from "../components/card/projectmediumCard";
import Home from "../pages/home";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import reactImage from "../assets/card_images/react_image.png";
import flutterImage from "../assets/card_images/flutter_image.png";
import midgardImage from "../assets/card_images/midgard.png";
import myLogo from "../assets/logo.png";


const home_main_page = () => {
  const cardList = [
    {
      id: 0,
      img: flutterImage,
      title: "Movie Mobile App",
      description:
        "It is a simple mobile application developed using Flutter and Riverpod. This application uses the TMDB API to access information related to movies. ",
    },
    {
      id: 1,
      img: reactImage,
      title: "Movie Web App",
      description:
        "It is a simple movie application developed using Axios, Redux, and Sass. This application utilizes the TMDB API to access information related to movies.",
    },
    {
      id: 2,
      img: midgardImage,
      title: "Midgard",
      description:
        "It is a web application developed using Flutter and Riverpod. This application offers insurance sales to users in various fields.",
    },
    {
      id: 3,
      img: myLogo,
      title: "My Blog",
      description:
        "It is a personal blog application developed using Axios, Redux, and Sass. This application encompasses the projects I am working on and articles I write.",
    },
    {
      id: 4,
      img: myLogo,
      title: "My Blog",
      description:
        "It is a personal blog application developed using Axios, Redux, and Sass. This application encompasses the projects I am working on and articles I write.",
    },
    {
      id: 5,
      img: myLogo,
      title: "My Blog",
      description:
        "It is a personal blog application developed using Axios, Redux, and Sass. This application encompasses the projects I am working on and articles I write.",
    },
    {
      id: 6,
      img: myLogo,
      title: "My Blog",
      description:
        "It is a personal blog application developed using Axios, Redux, and Sass. This application encompasses the projects I am working on and articles I write.",
    },
    {
      id: 6,
      img: myLogo,
      title: "My Blog",
      description:
        "It is a personal blog application developed using Axios, Redux, and Sass. This application encompasses the projects I am working on and articles I write.",
    },
  ];
  return (
    <Container style={{ textAlign: "-webkit-center" }}>
      <Col xs={12}>
        <Home />
        <Col style={{ minHeight: "100vh" }}>
          <br></br>
          <br></br>
          <a className="project">Projects </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
          <div>
            <Card props={cardList} />
          </div>
        </Col>
        <Col >
          <a className="project">Articles </a>
          <br></br>
          <br></br>
          <br></br>
          <br></br>
        
        </Col>
      </Col>
    </Container>
  );
};

export default home_main_page;
