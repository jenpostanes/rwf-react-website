import React from "react";
import HeroImg from "../../images/hero-1.png";
import {
  HeroContainer,
  HeroBg,
  Img,
  HeroContent,
  HeroH1,
} from "./HeroElements";

const Hero = () => {
  return (
    <HeroContainer id="home">
      <HeroBg>
        <Img src={HeroImg} alt="Foundation" />
      </HeroBg>
      <HeroContent>
        <HeroH1>Giving is the Greatest <br/> Act of Grace</HeroH1>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
