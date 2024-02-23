import { FiGithub, FiTwitter, FiLinkedin, FiInstagram } from "react-icons/fi";
import "../styles/footer.scss";
import SubFooter from "../components/subFooter";

const footer = () => {
  const socialLinks = [
    {
      id: 1,
      icon: <FiInstagram />,
      url: "https://www.instagram.com/bbatuhansevinc/?hl=tr",
    },
    {
      id: 2,
      icon: <FiGithub />,
      url: "https://github.com/bbatuhanss",
    },
    {
      id: 3,
      icon: <FiLinkedin />,
      url: "https://www.linkedin.com/in/batuhansevinc/",
    },
  ];

  return (
    <div>
      <div className="footer">
        <SubFooter />
        <ul className="text-container">
          <a
            style={{
              fontSize: "20px",
              color: "rgb(43 44 52/var(--tw-text-opacity))",
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
                color: "rgb(43 44 52/var(--tw-text-opacity))",
                fontSize: "20px",
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
