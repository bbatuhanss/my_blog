import CardArticle from "../components/card/articleCard";
import Home from "../pages/home";
import Skills from "../pages/skills";
import flutterImage from "../assets/card_images/flutter_image.png";
import goRouter from "../assets/card_images/go_router.jpg";
import htmlImage from "../assets/card_images/html_image.jpg";
import cssImage from "../assets/card_images/css_image.jpg";
import flutterMistakeImage from "../assets/card_images/flutter_mistake.png";
import flutterImageTwo from "../assets/card_images/flutter2.png";

const home_main_page = () => {
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
        "Flutter Widget Props: The Fundamental Way to Manage Your Applications",
      image: flutterImageTwo,
      date: "12.01.2023",
      article: "flutter_props.md",
    },
    {
      title: "Flutter Widget Props",
      description:
        "Flutter Widget Props: The Fundamental Way to Manage Your Applications",
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
      date: "1.04.2022",
      article: "html.md",
    },
  ];

  const sass = [
    {
      title: "Sass and CSS",
      description:
        "Sass and CSS: Exploring the Fundamental Differences to Stay One Step Ahead in the Design World",
      image: cssImage,
      date: "6.12.2023",
      article: "sassCss.md",
    },
  ];

  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <Home />
      <br></br>
      <br></br>
      <div className="home">
        <a className="title">Flutter </a>
        <div className="article">
          {cardsFlutter.map((card) => (
            <div style={{ padding: "0px 0.75vw" }}>
              <CardArticle
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                date={card.date}
                article={card.article}
              />
            </div>
          ))}
        </div>
        <a className="title">HTML </a>
        <div className="article">
          {cardsHtml.map((card) => (
            <div style={{ padding: "0px 0.75vw" }}>
              <CardArticle
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                date={card.date}
                article={card.article}
              />
            </div>
          ))}
        </div>
        <a className="title">CSS </a>
        <div className="article">
          {sass.map((card) => (
            <div style={{ padding: "0px 0.75vw" }}>
              <CardArticle
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                date={card.date}
                article={card.article}
              />
            </div>
          ))}
        </div>
      </div>
      <br></br>
      <br></br>
    </div>
  );
};

export default home_main_page;
