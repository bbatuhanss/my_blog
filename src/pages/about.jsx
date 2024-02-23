import myImage from "../assets/my_photo.jpeg";

const about = () => {
  return (
    <div style={{ textAlign: "-webkit-center" }}>
      <div className="about">
        <div className="about-round">
          <img src={myImage} />
        </div>
        <p>
          Hello there! I'm Batuhan, a Frontend Developer, and I consider myself
          an artist with a passion for expressing myself in the digital world.
          My love and curiosity for the realm of web development continually
          drive me to discover better and more innovative solutions. For me,
          coding is a process of creating a language. Each line tells a story,
          and I take immense pleasure in sharing this story with users. Frontend
          development, as an art form that blends aesthetics and functionality,
          has always been an exciting journey for me. Creating user-friendly
          interfaces, enhancing user experience, and making the power of
          technology accessible to people are fundamental goals of mine. I have
          an open-minded personality that welcomes change and innovation.
          Keeping up with new technologies and seamlessly integrating them into
          my projects is not just a task but also a passion. My continuous
          efforts in self-improvement and learning guide me to approach my
          projects in a more effective and creative manner. In addition to
          mastering fundamental technologies like HTML, CSS, and JavaScript,
          I've also embraced modern JavaScript libraries and frameworks such as
          Angular and React. Using these tools, I've turned the development of
          user-friendly, responsive, and interactive web applications into an
          art. Beyond writing code, understanding customer needs, planning
          projects, and collaborating within a team are crucial aspects for me.
          In addition to my love for web development, I'm also involved with
          Flutter. Exploring the world of mobile app development enhances my
          skills and broadens my creative horizons. I've honed my communication
          skills to explain technical terms in a clear language and optimize
          business processes. In a nutshell, I enjoy adapting to new
          technologies and finding creative solutions. I also put effort into
          improving user experiences and bringing projects to life.
        </p>
      </div>
    </div>
  );
};

export default about;
