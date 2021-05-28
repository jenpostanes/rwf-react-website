import React from "react";
import AboutImg from "../../images/about.png";
import {
  AboutContainer,
  Row,
  Column,
  AboutInfo,
  AboutTitle,
  AboutHeading,
  AboutP,
  AboutImgWrap,
  Img,
} from "./AboutElements";

const About = () => {
  return (
    <AboutContainer id="about">
      <Row>
        <Column>
          <AboutInfo>
            <AboutTitle className="section__title">About Us</AboutTitle>
            <AboutHeading>
              Automatic recognition of Lorem Ipsum during the pre-press workflow
            </AboutHeading>
            <AboutP>
              The spread of computers and layout programmes thus made dummy text
              better known. While in earlier times several lines of the Lorem
              Ipsum text were repeated in the creation of dummy texts, today the
              full text of Cicero's 'De finibus' serves as the basis for many
              dummy text or Lorem Ipsum generators. Based on 'De finibus', these
              generators automatically create longer sections of the Lorem Ipsum
              text or various other filler texts.
            </AboutP>
          </AboutInfo>
        </Column>
        <Column>
          <AboutImgWrap>
            <Img src={AboutImg} alt="Make a Change" />
          </AboutImgWrap>
        </Column>
      </Row>
    </AboutContainer>
  );
};

export default About;
