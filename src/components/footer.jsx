import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import "../styles/footer.scss";
import SubFooter from "../components/subFooter";

const footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FiInstagram />,
      url: "https://www.stoman.me/",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/",
    },
    {
      id: 3,
      icon: <FiTwitter />,
      url: "https://twitter.com/",
    },
    {
      id: 4,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/",
    },
  ];

  return (
    <div>
    
      <div className="footer">
      <SubFooter />
        <ul className="text-container">
          <a
            style={{
              fontSize: "18px",

              padding: " 0.2vw",
            }}
          >
            © {new Date().getUTCFullYear().toString()}
          </a>
          <div className="spacer"></div>
          {socialLinks.map((link) => (
            <a
              style={{
                padding: "0vw 0.5vw",
              }}
              href={link.url}
              target="__blank"
              key={link.id}
              className="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-300"
            >
              <i className="text-xl sm:text-2xl md:text-3xl">{link.icon}</i>
            </a>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default footer;
