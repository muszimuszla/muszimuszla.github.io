import React from "react";

import { Wrapper, TextField } from "../../styles/GlobalStyle";

import { DinoStandingImg, SocialMediaWrapper, SocialMediaLink, StyledContainer } from "./styles";

export default function SayHi() {
  return (
    <StyledContainer id="sayHi">
      <Wrapper>
        <DinoStandingImg />
        <TextField>
          <h3>&emsp;&#123;&ensp;(&ensp;interested&ensp;||&ensp;wantToTalk&ensp;)&ensp;&&</h3>
          <SocialMediaWrapper>
            <SocialMediaLink href="https://www.linkedin.com/in/magdalena-su%C5%82kowska-b3091a1b7/">
              <h1>LinkedIn</h1>
            </SocialMediaLink>
            <SocialMediaLink href="https://www.instagram.com/muszimuszla/">
              <h1>Instagram</h1>
            </SocialMediaLink>
          </SocialMediaWrapper>
          <h3>&emsp;&#125;</h3>
        </TextField>
      </Wrapper>
    </StyledContainer>
  );
}
