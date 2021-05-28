import styled from "styled-components";
import { Color } from "../../components/Variables";

export const DonateSection = styled.section`
  padding-bottom: 5rem;
`;

export const DonateWrapper = styled.div`
  width: 90%;
  margin-inline-start: auto;
  border-top-left-radius: 40px;
  border-bottom-left-radius: 40px;
  background: ${Color.secondary};
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  @media screen and (min-width: 1024px) {
    min-height: 70vh;
  }
`;

export const DonateTitle = styled.p`
  margin-bottom: 20px;
  font-weight: bold;
  text-transform: capitalize;
  display: block;
  text-align: center;
  color: ${Color.white};
`;

export const DonateHeadingH1 = styled.h1`
  text-align: center;
  color: ${Color.white};

  @media screen and (min-width: 480px) {
      padding: 0 3rem;
  }
  
  @media screen and (min-width: 1024px) {
      padding: 0 3rem;
  }
`;

export const GiveRow = styled.div`
  margin: 3rem 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;

export const GiveItemLabel = styled.label`
  display: block;
  cursor: pointer;
`;

export const GiveRadioButtonSpan = styled.span`
  &:before {
    margin-right: 5px;
    content: "";
    display: inline-block;
    vertical-align: -0.3em;
    height: 1em;
    width: 1em;
    border-radius: 50%;
    border: 2px solid ${Color.white};
  }
`;

export const GiveRadioButton = styled.input`
  &:checked + ${GiveRadioButtonSpan} {
    &:before {
      background: radial-gradient(
        circle closest-side,
        rgba(0, 87, 146, 1) 50%,
        rgba(0, 87, 146, 1) 50%,
        transparent 50%,
        transparent 100%
      );
      border-color: ${Color.white};
    }
  }
  display: none;
`;

export const AmountButtonRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1rem;
  margin-bottom: 3rem;

  @media screen and (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const AmountButton = styled.button`
  min-width: 100px;
  height: 50px;
  border-width: 0;
  border-radius: 0.5rem;
  padding: 0 1rem;
  background: ${Color.white};
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease 0s;

  &:last-child {
    font-size: 15px;
  }
`;
