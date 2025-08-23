import myImage from "../assets/my_photo.jpeg";

const about = () => {
  return (
    <section className="about">
      <div className="about-image">
        <img src={myImage} alt="Batuhan Sevinç" />
      </div>

      <div className="about-text">
        <h2>About Me</h2>

        <p>
          Hello there! I'm <span className="highlight">Batuhan</span>, a{" "}
          <span className="highlight">Software Engineer</span>, and I consider
          myself an artist with a passion for expressing myself in the digital
          world. My love and curiosity for web development continually drive me
          to discover better and more innovative solutions.
        </p>

        <p>
          For me, <span className="highlight">coding is a language</span>. Each
          line tells a story, and I take immense pleasure in sharing this story
          with users. Frontend development, as an art form that blends
          aesthetics and functionality, has always been an exciting journey for
          me.
        </p>

        <p>
          I’m <span className="highlight">open-minded</span> and welcome change
          and innovation. Keeping up with new technologies and integrating them
          seamlessly into my projects is not just a task but also a passion. My
          continuous efforts in learning guide me to approach projects in a more
          effective and creative way.
        </p>

        <p>
          I master fundamental technologies like{" "}
          <span className="highlight">HTML</span>,{" "}
          <span className="highlight">CSS</span>, and{" "}
          <span className="highlight">JavaScript</span>, and I also work with
          modern frameworks such as <span className="highlight">Angular</span>{" "}
          and <span className="highlight">React</span>. With these tools, I
          build user-friendly, responsive, and interactive web applications.
        </p>

        <p>
          Beyond coding, I value <span className="highlight">teamwork</span>,
          project planning, and understanding customer needs. I also explore{" "}
          <span className="highlight">Flutter</span> to expand into mobile app
          development, broadening my creative horizons.
        </p>

        <p>
          In a nutshell, I enjoy adapting to new technologies, finding{" "}
          <span className="highlight">creative solutions</span>, and improving
          user experiences to bring projects to life.
        </p>
      </div>
    </section>
  );
};

export default about;
