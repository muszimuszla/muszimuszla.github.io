import React from "react";

import { Container, Wrapper, TextField } from "../../styles/GlobalStyle";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import { DinoInstagramImg, Slide, StyledCarousel, FreeTimeText, FreeTimeCodingImg, FreeTimeCookingImg,
  FreeTimeDrawingImg, FreeTimePaintingImg, FreeTimePlantingImg, FreeTimeSleepingImg } from "./styles";

export default function FreeTime() {
  return (
    <Container id="freeTime">
      <Wrapper isRight>
        <TextField>
          <h1>In my free time I like</h1>
          <StyledCarousel
            autoPlay
            infiniteLoop
            showArrows={false}
            showThumbs={false}
            showStatus={false}
            showIndicators={false}
            centerSlidePercentage={100}
            interval={2000}
            transitionTime={500}
          >
            <Slide>
              <FreeTimeDrawingImg/>
              <FreeTimeText>drawing</FreeTimeText>
            </Slide>
            <Slide>
              <FreeTimeCodingImg/>
              <FreeTimeText>coding</FreeTimeText>
            </Slide>
            <Slide>
              <FreeTimeCookingImg/>
              <FreeTimeText>cooking</FreeTimeText>
            </Slide>
            <Slide>
              <FreeTimeSleepingImg/>
              <FreeTimeText>sleeping</FreeTimeText>
            </Slide>
            <Slide>
              <FreeTimePaintingImg/>
              <FreeTimeText>painting</FreeTimeText>
            </Slide>
            {/* <Slide>
              <h3>exgineering</h3>
            </Slide> */}
            <Slide>
              <FreeTimePlantingImg/>
              <FreeTimeText>planting</FreeTimeText>
            </Slide>
          </StyledCarousel>
        </TextField>
        <DinoInstagramImg />
      </Wrapper>
    </Container>
  );
}
