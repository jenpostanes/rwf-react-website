import React from "react";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import { Button } from "../ButtonElements";
import { Input, Textarea } from "../FormElements";
import {
  FooterSection,
  FooterContainer,
  DonateWrapper,
  DonateHeading,
  DonateBtnGroup,
  DonateMonthlyBtn,
  DonateOnceBtn,
  AddressWrapper,
  AddressHeading,
  Address,
  Phone,
  Email,
  Highlight,
  SocialMedia,
  SocialIconLink,
  ContactWrapper,
  ContactHeading,
  Form,
  CopyRightTxt,
} from "./FooterElements";

const Footer = () => {
  return (
    <FooterSection id="contact">
      <FooterContainer>
        <DonateWrapper>
          <DonateHeading>
            Your generous donation is highly appreciated and will help people
            around the world
          </DonateHeading>
          <Input
            fullWidth="true"
            type="text"
            placeholder="Enter Amount"
          ></Input>
          <DonateBtnGroup>
            <DonateMonthlyBtn>Donate monthly</DonateMonthlyBtn>
            <DonateOnceBtn>Donate Once</DonateOnceBtn>
          </DonateBtnGroup>
        </DonateWrapper>

        <AddressWrapper>
          <AddressHeading>Address</AddressHeading>
          <Address>5544 Avenue Rosedale, Côte Saint-Luc, QC H4V 2J1</Address>
          <Phone>
            <Highlight>Phone:</Highlight> +91 506 2857 08 <br />
            (0466) 858 969
          </Phone>
          <Email>
            <Highlight>Email:</Highlight> info@readwell.com
          </Email>
          <SocialMedia>
            <SocialIconLink href="/" target="_blank" aria-label="Facebook">
              <FaFacebook />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Twitter">
              <FaTwitter />
            </SocialIconLink>
            <SocialIconLink href="/" target="_blank" aria-label="Instagram">
              <FaInstagram />
            </SocialIconLink>
          </SocialMedia>
        </AddressWrapper>

        <ContactWrapper>
          <ContactHeading>Let's Talk</ContactHeading>
          <Form aria-label="Contact Information">
            <Input fullWidth="true" type="text" placeholder="Name"></Input>
            <Input
              fullWidth="true"
              type="text"
              placeholder="Email Address"
            ></Input>
            <Input fullWidth="true" type="text" placeholder="Subject"></Input>
            <Textarea
              fullWidth="true"
              placeholder="Message"
              rows="5"
            ></Textarea>
            <Button type="submit" border="true">
              Submit
            </Button>
          </Form>
        </ContactWrapper>

        <CopyRightTxt>COPYRIGHT © 2019 - READ WELL FOUNDATION</CopyRightTxt>
      </FooterContainer>
    </FooterSection>
  );
};

export default Footer;
