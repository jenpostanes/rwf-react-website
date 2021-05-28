import styled, { css } from "styled-components";
import { Link as LinkRouter } from "react-router-dom";
import { Color } from "../Variables";

const FooterHeading = css`
  font-weight: bold;
  margin-bottom: 2rem;
`;

const DonateButton = css`
  padding: 1rem 1.5rem;
  border: 0;
  color: ${Color.white};
  text-transform: uppercase;
  cursor: pointer;
  flex-grow: 1;

  @media screen and (max-width: 1280px) {
    padding: 1rem 0.7rem;
  }
`;

export const FooterSection = styled.section``;

export const FooterContainer = styled.div`
  width: 90%;
  margin-inline-end: auto;
  border-top-right-radius: 40px;
  border-bottom-right-radius: 40px;
  background: #d1f4fa;
  padding: 4rem 5rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 3rem;

  @media screen and (max-width: 1280px) {
    padding: 4rem 2rem;
    grid-gap: 1rem;
  }

  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 1024px) {
    min-height: 70vh;
  }
`;

// Donate
export const DonateWrapper = styled.div``;

export const DonateHeading = styled.h3`
  ${FooterHeading}
  font-style: italic;
`;
export const DonateBtnGroup = styled.div`
  margin: 1rem 0 2rem;
  display: flex;
`;
export const DonateMonthlyBtn = styled.button`
  ${DonateButton}
  border-top-left-radius: 35px;
  border-bottom-left-radius: 35px;
  background: ${Color.main};
`;
export const DonateOnceBtn = styled.button`
  ${DonateButton}
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  background: ${Color.secondary};
`;

// Address
export const AddressWrapper = styled.div``;

export const AddressHeading = styled.h3`
  ${FooterHeading}
`;

export const Address = styled.p`
  margin-bottom: 1rem;
`;

export const Phone = styled.p`
  margin-bottom: 1rem;
`;

export const Email = styled.p`
  margin-bottom: 1rem;
`;

export const Highlight = styled.span`
  color: ${Color.main};
`;

export const SocialMedia = styled.div`
  display: flex;
  align-items: center;
`;

export const SocialIconLink = styled(LinkRouter)`
  margin-right: 1rem;
  color: ${Color.main};
`;

// Contact
export const ContactWrapper = styled.div`
  @media screen and (max-width: 480px) {
    margin: 2rem 0;
  }
`;

export const ContactHeading = styled.h3`
  ${FooterHeading}
`;

export const Form = styled.form``;

export const CopyRightTxt = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 14px;

  @media screen and (min-width: 480px) {
    grid-column: 1 / 3;
  }
`;
