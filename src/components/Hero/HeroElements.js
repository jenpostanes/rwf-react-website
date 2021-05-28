import styled from "styled-components";
import { Color } from "../../components/Variables";

export const HeroContainer = styled.section`
    height: calc(100vh - 100px);
    position: relative;
`;

export const HeroBg = styled.div`
    width: 100%;
    height: 100%;
    border-top-left-radius: 40px;
    border-top-right-radius: 40px;
    overflow: hidden;
`;

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

export const HeroContent = styled.div`
    position: absolute;
    top: 10%;
    right: 100px;
`;

export const HeroH1 = styled.h1`
    font-weight: normal;
    font-style: italic;
    font-size: clamp(2rem, 10vw, 4.5rem);
    color: ${Color.white};
    text-align: center;
    line-height: 1.6;
`;
