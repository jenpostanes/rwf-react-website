import React from "react";
import GalleryImg1 from "../../images/gallery/gallery-1.png";
import GalleryImg2 from "../../images/gallery/gallery-2.png";
import GalleryImg3 from "../../images/gallery/gallery-3.png";
import GalleryImg4 from "../../images/gallery/gallery-4.png";
import {
  GalleryContainer,
  GalleryTitle,
  GalleryHeading1,
  GalleryWrapper,
  GalleryImgWrap,
  Img,
} from "./GalleryElements";

const Gallery = () => {
  return (
    <GalleryContainer id="gallery">
      <GalleryTitle className="section__title">
        Some Beautiful Moments
      </GalleryTitle>
      <GalleryHeading1>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry
      </GalleryHeading1>
      <GalleryWrapper>
        <GalleryImgWrap>
          <Img src={GalleryImg1} alt=""></Img>
        </GalleryImgWrap>
        <GalleryImgWrap>
          <Img src={GalleryImg2} alt=""></Img>
        </GalleryImgWrap>
        <GalleryImgWrap>
          <Img src={GalleryImg3} alt=""></Img>
        </GalleryImgWrap>
        <GalleryImgWrap>
          <Img src={GalleryImg4} alt=""></Img>
        </GalleryImgWrap>
      </GalleryWrapper>
    </GalleryContainer>
  );
};

export default Gallery;
