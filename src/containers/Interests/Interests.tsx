import React from "react";

import { Wrapper, TextField } from "../../styles/GlobalStyle";

import { DinoInterestsImg, InterestsWrapper, StyledContainer, TextWrapper, InterestsText } from "./styles";

export default function Interests() {
  return (
    <StyledContainer id="interests">
      <Wrapper flexDirCol>
        <DinoInterestsImg />
        <TextField isLong>
          <InterestsWrapper>
          <h3>const myThings = </h3>
          <TextWrapper delay={0}>
            <InterestsText>clean code</InterestsText>
          </TextWrapper>
          <h3>&amp;&amp;</h3>
          <TextWrapper delay={2}>
            <InterestsText>beautiful design</InterestsText>
          </TextWrapper>
          <h3>&amp;&amp;</h3>
          <TextWrapper delay={4}>
            <InterestsText>good coffee</InterestsText>
          </TextWrapper>
          <h3>&amp;&amp;</h3>
          <TextWrapper delay={6}>
            <InterestsText>tasty food</InterestsText>
          </TextWrapper>
          </InterestsWrapper>
        </TextField>
      </Wrapper>
    </StyledContainer>
  );
}
