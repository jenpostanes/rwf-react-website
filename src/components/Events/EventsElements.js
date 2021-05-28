import styled from "styled-components";
import { Color } from "../../components/Variables";

export const SectionContainer = styled.section`
  display: block;
  width: 100%;
  padding: 0 6rem 5rem;

  @media screen and (max-width: 768px) {
    padding: 3rem;
  }
`;

export const SectionTitle = styled.p`
  text-align: center;
`;

export const SectionHeading = styled.h1`
  margin-bottom: 3rem;
  text-align: center;

  @media screen and (min-width: 480px) {
      padding: 0 3rem;
  }
  
  @media screen and (min-width: 1024px) {
      padding: 0 3rem;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Column = styled.div`
  flex: 1 0 0;
  margin: 0 1.5rem;

  @media screen and (max-width: 768px) {
    margin: 0 0 30px;
    width: 100%;
  }
`;

export const EventCard = styled.article`
  border-radius: 25px;
  background-color: #edf9fc;
  overflow: hidden;
`;

export const EventImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const EventInfo = styled.div`
  padding: 1.5rem 1.5rem 2rem;
`;

export const EventName = styled.h3`
  font-weight: bold;
  font-size: clamp(16px, 10vw, 24px);
`;

export const EventLocation = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  font-style: italic;
  color: ${Color.main};
`;

export const EventDesc = styled.p`
  margin-bottom: 20px;
`;

export const EventButton = styled.button`
  border-radius: 50px;
  padding: 10px 25px;
  font-weight: bold;
  cursor: pointer;
  text-transform: capitalize;
  border: 1px solid ${Color.main};
  background: transparent;
  color: ${Color.main};
`;
