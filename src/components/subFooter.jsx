import "../styles/subFooter.scss";
import LogoIcon from "../assets/logo.png";

function subFooter() {
  return (
    <div className="footer">
      <div className="content">
        <div className="logo">
          <img src={LogoIcon} />
        </div>
        <div className="services">
          <h4>Services</h4>
          <p>
            <a href="#">App development</a>
          </p>
          <p>
            <a href="#">Web development</a>
          </p>
          <p>
            <a href="#">React</a>
          </p>
          <p>
            <a href="#">Flutter</a>
          </p>
          <p>
            <a href="#">Angular</a>
          </p>
          <p>
            <a href="#">Javacript</a>
          </p>
          <p>
            <a href="#">HTML</a>
          </p>
          <p>
            <a href="#">CSS</a>
          </p>
          <p>
            <a href="#">SASS</a>
          </p>
        </div>
        <div className="social-media">
          <h4>Social</h4>
          <p>
            <a href="#">
              <i className="fab fa-linkedin"></i> Linkedin
            </a>
          </p>
          <p>
            <a href="#">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </p>
          <p>
            <a href="https://github.com/farazc60">
              <i className="fab fa-github"></i> Github
            </a>
          </p>
          <p>
            <a href="https://www.instagram.com/codewithfaraz">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </p>
        </div>
        <div className="links">
          <h4>Quick links</h4>
          <p>
            <a href="#">Home</a>
          </p>
          <p>
            <a href="#">About</a>
          </p>
          <p>
            <a href="#">Project</a>
          </p>
        </div>
        <div className="details">
          <h4 className="mail">Contact Me</h4>
          <p>
            <a href="#">farazc60@gmail.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default subFooter;
