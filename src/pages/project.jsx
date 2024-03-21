import midgardImage from "../assets/card_images/midgard.png";
import myLogo from "../assets/logo.png";
import reactImage from "../assets/card_images/react_image.png";
import Card from "../components/card/projectmediumCard";
import flutterImage from "../assets/card_images/flutter_image.png";
import flutterImageTwo from "../assets/card_images/flutter2.png";
const project = () => {
  const cardList = [
    {
      id: 0,
      img: flutterImage,
      title: "Movie Mobile App",
      description:
        "It is a simple mobile application developed using Flutter and Riverpod. This application uses the TMDB API to access information related to movies. ",
      link: "https://github.com/bbatuhanss/search_movie",
    },
    {
      id: 1,
      img: reactImage,
      title: "Movie Web App",
      description:
        "It is a simple movie application developed using Axios, Redux, and Sass. This application utilizes the TMDB API to access information related to movies.",
      link: "https://github.com/bbatuhanss/movieAppWeb",
    },
    {
      id: 2,
      img: midgardImage,
      title: "Midgard",
      description:
        "It is a web application developed using Flutter and Riverpod. This application offers insurance sales to users in various fields.",
      link: "",
    },
    {
      id: 3,
      img: myLogo,
      title: "My Blog",
      description:
        "It is a personal blog application developed using Axios, Redux, and Sass. This application encompasses the projects I am working on and articles I write.",
      link: "https://github.com/bbatuhanss/my_blog",
    },
    {
      id: 3,
      img: flutterImageTwo,
      title: "E-learning",
      description:
        "This is an e-learning application developed using Flutter. It has been completed only in terms of design. This application allows users to watch to educational content.",
      link: "https://github.com/bbatuhanss/e_learning",
    },
  ];

  return (
    <div style={{ minHeight: "100vh", paddingLeft: "4%", marginTop: "3%" }}>
      <a className="title">Projects </a>
      <div className="article" style={{ padding: "0px 0.75vw" }}>
        <Card props={cardList} />
      </div>
    </div>
  );
};

export default project;
