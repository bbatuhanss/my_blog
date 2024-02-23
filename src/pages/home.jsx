import myImage from "../assets/my_photo.jpeg";
import "../styles/home.scss";
import { useEffect, useMemo, useState, useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";

const home = () => {
  const [, setInit] = useState(false);
  const particlesInit = useCallback(async (engine) => {
    console.log(engine);
    await loadSlim(engine);
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };
  const options = useMemo(
    () => ({
      background: {
        color: {
          value: "white",
        },
      },

      style: {
        position: "absolute",
      },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          push: {
            quantity: 9,
          },
          repulse: {
            distance: 150,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#d3d3d3",
        },
        links: {
          color: "#d3d3d3",
          distance: 140,
          enable: true,
          opacity: 0.5,
          width: 1,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 2,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 200,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 1, max: 5 },
        },
      },
      detectRetina: true,
    }),
    []
  );

  return (
    <div
      id="container"
      style={{
        height: "85vh",
        minHeight:"500px",
      }}
    >
      <div
        id="tsparticles"
        style={{
          background: "linear-gradient(90deg, #33383C 35%, #ffffff 10%)",
          minHeight:"500px"
          
        }}
      >
        <Particles
          id="tsparticles"
          particlesLoaded={particlesLoaded}
          options={options}
          init={particlesInit}
        />
      </div>
      <div className="row">
        <div className="content">
          <div className="images">
            <div className="blue-bg-outer">
              <div className="white-bg">
                <div className="blue-bg">
                  <img src={myImage} alt="image" className="myimage" />
                </div>
              </div>
            </div>
          </div>
          <div className="text">
            <div className="Information">
              <h1>Hi, I'm Batuhan</h1>
              <div className="animated_text">
                <h1 className="title">Frontend Developer</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default home;
