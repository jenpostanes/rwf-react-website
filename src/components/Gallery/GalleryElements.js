import styled, { css } from "styled-components";

const GalleryImgWrapCSS = css`
  height: 330px;
  width: 100%;
  overflow: hidden;

  @media screen and (max-width: 768px) {
    width: 90%;
  }
`;

export const GalleryContainer = styled.section`
  padding-bottom: 5rem;
`;

export const GalleryTitle = styled.p`
  display: block;
  text-align: center;
`;

export const GalleryHeading1 = styled.h1`
  margin: 0 0 3rem;
  padding: 0 16rem;
  display: block;
  text-align: center;

  @media screen and (max-width: 1024px) {
      padding: 0 3rem;
  }
`;

export const GalleryWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    grid-gap: 2.5rem;
  }
`;

export const GalleryImgWrap = styled.div`
  ${GalleryImgWrapCSS}

  &:first-child,
  &:nth-child(3) {
    border-top-right-radius: 40px;
    border-bottom-right-radius: 40px;
    margin-inline-end: auto;
  }

  &:nth-child(2),
  &:last-child {
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;
    margin-inline-start: auto;
  }
`;

export const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
