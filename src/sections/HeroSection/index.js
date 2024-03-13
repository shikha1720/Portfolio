import React from "react";
import "./style.css";
import HeroBgAnimation from "../../components/HeroBgAnimation/HeroBgAnimation";
import { Bio } from "../../data/myData";
import Typewriter from "typewriter-effect";
import image from "../../assets/image.png";

const Hero = () => {
  return (
    <div className="hero-container" id="about">
      <div className="hero-bg">
        <HeroBgAnimation />
      </div>
      <div className="hero-inner-container">
        <div className="hero-left-container">
          <div className="hero-title">
            Hi, I am
            <br />
            {Bio.name}
          </div>
          <div className="text-loop">
            I am a
            <span>
              <Typewriter
                options={{
                  strings: Bio.roles,
                  autoStart: true,
                  loop: true,
                }}
              />
            </span>
          </div>
          <div className="hero-subTitle">{Bio.description}</div>
          <button
            className="resume-button"
            onClick={() => window.open(Bio.resume)}
          >
            Check Resume
          </button>
        </div>
        <div className="hero-right-container">
          <img src={image} alt="prtfolio-dp" className="hero-img" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
