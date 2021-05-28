import React from "react";
import {
  SectionContainer,
  SectionTitle,
  SectionHeading,
  Row,
  Column,
  EventCard,
  EventImg,
  EventInfo,
  EventName,
  EventLocation,
  EventDesc,
  EventButton,
} from "./EventsElements";

const Events = ({ data }) => {
  return (
    <SectionContainer id="events">
      <SectionTitle className="section__title">Upcoming Events</SectionTitle>
      <SectionHeading>
        {" "}
        Its function as a filler or as a tool for comparing the visual
        impression of different typefaces
      </SectionHeading>
      <Row>
        {data.map((event) => {
          return (
            <Column>
              <EventCard>
                <EventImg src={event.src} alt={event.alt}></EventImg>
                <EventInfo>
                  <EventName>{event.name}</EventName>
                  <EventLocation>{event.location}</EventLocation>
                  <EventDesc>{event.desc}</EventDesc>
                  <EventButton>Read More</EventButton>
                </EventInfo>
              </EventCard>
            </Column>
          );
        })}
      </Row>
    </SectionContainer>
  );
};

export default Events;
