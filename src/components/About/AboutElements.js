import styled from 'styled-components';

export const AboutContainer = styled.section`
    padding: 5rem 0;

    @media screen and (max-width: 768px) {
        padding: 3.5rem 0;
    }
`

export const Row = styled.div`
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 768px) {
        flex-direction: column-reverse;
    }
`

export const Column = styled.div`
    flex: 0 0 auto;
    width: 50%;

    @media screen and (max-width: 768px) {
        width: 100%;
    }
`

export const AboutInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    height: 100%;
    padding: 0 7.5rem;

    @media screen and (max-width: 768px) {
        padding: 3rem 3rem 0;
    }
`

export const AboutTitle = styled.p`
`

export const AboutHeading = styled.h1`
    margin-bottom: 3rem;
    font-weight: normal;
`

export const AboutP = styled.p`
    text-align: justify;
`

export const AboutImgWrap = styled.div`
    width: 100%;
    height: 60vh;
    overflow: hidden;
    border-top-left-radius: 40px;
    border-bottom-left-radius: 40px;

    @media screen and (max-width: 768px) {
        width: 90%;
        margin-inline-start: auto;
    }
`

export const Img = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`