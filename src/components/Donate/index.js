import React from "react";
import { Button } from "../ButtonElements";
import {
  DonateSection,
  DonateWrapper,
  DonateTitle,
  DonateHeadingH1,
  GiveRow,
  GiveItemLabel,
  GiveRadioButton,
  GiveRadioButtonSpan,
  AmountButtonRow,
  AmountButton,
} from "./DonateElements";

const Donate = ({ data }) => {
  return (
    <DonateSection id="donate">
      <DonateWrapper>
        <DonateTitle>Donate Now</DonateTitle>
        <DonateHeadingH1>
          Your generous donation is highly appreciated and will help people
          around the world
        </DonateHeadingH1>
        <GiveRow>
          <GiveItemLabel>
            <GiveRadioButton
              type="radio"
              name="give"
              value=""
            ></GiveRadioButton>
            <GiveRadioButtonSpan>Give once</GiveRadioButtonSpan>
          </GiveItemLabel>
          <GiveItemLabel>
            <GiveRadioButton
              type="radio"
              name="give"
              value=""
            ></GiveRadioButton>
            <GiveRadioButtonSpan>Give monthly</GiveRadioButtonSpan>
          </GiveItemLabel>
        </GiveRow>
        <AmountButtonRow>
          {data.map((donate, i) => {
            return (
              <AmountButton>
                {donate.amount}
              </AmountButton>
            );
          })}
        </AmountButtonRow>
        <Button border="true">Donate now</Button>
      </DonateWrapper>
    </DonateSection>
  );
};

export default Donate;
