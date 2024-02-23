import myImage from "../assets/my_photo.jpeg";

function SkillMain() {
  return (
    <div className="skills">
      <div className="wrapper">
        <div className="composed">
          <figure class="composed-a">
            <img src={myImage} alt="grid" />
          </figure>
          <figure className="composed-b">
            <img src={myImage} alt="grid" />
          </figure>
          <figure className="composed-c">
            <img src={myImage} alt="grid" />
          </figure>
        </div>
        <div className="composed">
          <figure class="composed-a">
            <img src={myImage} alt="grid" />
          </figure>
          <figure className="composed-b">
            <img src={myImage} alt="grid" />
          </figure>
          <figure className="composed-c">
            <img src={myImage} alt="grid" />
          </figure>
        </div>
        <div className="composed">
          <figure class="composed-a">
            <img src={myImage} alt="grid" />
          </figure>
          <figure className="composed-b">
            <img src={myImage} alt="grid" />
          </figure>
          <figure className="composed-c">
            <img src={myImage} alt="grid" />
          </figure>
        </div>
      </div>
    </div>
  );
}

export default SkillMain;
