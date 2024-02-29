import myImage from "../assets/my_photo.jpeg";
import Image1 from "../assets/logo/image1.svg";
import Image2 from "../assets/logo/image2.svg";
import Image3 from "../assets/logo/image3.svg";
import Image4 from "../assets/logo/image4.svg";
import Image5 from "../assets/logo/image5.svg";
import Image6 from "../assets/logo/image6.svg";
import Image7 from "../assets/logo/image7.svg";
import Image8 from "../assets/logo/image8.svg";
import Image9 from "../assets/logo/image9.svg";
import ImageLast2 from "../assets/logo/image11.svg";
import ImageLast3 from "../assets/logo/image12.svg";

function SkillMain() {
  return (
    <div className="skills">
      <div className="wrapper">
        <div className="composed">
          <figure class="composed-a">
            <img src={Image1} alt="grid" />
          </figure>
          <figure className="composed-b">
            <img src={Image2} alt="grid" />
          </figure>
          <figure className="composed-c">
            <img src={Image3} alt="grid" />
          </figure>
        </div>
        <div className="composed">
          <figure class="composed-a">
            <img src={Image4} alt="grid" />
          </figure>
          <figure className="composed-b">
            <img src={Image5} alt="grid" />
          </figure>
          <figure className="composed-c">
            <img src={Image6} alt="grid" />
          </figure>
        </div>
        <div className="composed">
          <figure class="composed-a">
            <img src={Image7} alt="grid" />
          </figure>
          <figure className="composed-b">
            <img src={Image8} alt="grid" />
          </figure>
          <figure className="composed-c">
            <img src={Image9} alt="grid" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SkillMain;
