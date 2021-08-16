import React from "react";

import { Container, Wrapper, TextField } from "../../styles/GlobalStyle";

import { DinoCodingImg, TypingField, TechnologyText } from "./styles";

export default function Work() {
  return (
      <Container id="work">
        <Wrapper>
          <DinoCodingImg />
          <TextField>
            <h1>My everyday work is based on</h1>
            <TypingField>
                  <TechnologyText>typescript</TechnologyText>
                  <TechnologyText>react</TechnologyText>
                  <TechnologyText>styled-components</TechnologyText>
                  <TechnologyText>sass</TechnologyText>
                  <TechnologyText>REST</TechnologyText>
                  <TechnologyText>graphQL</TechnologyText>
                  <TechnologyText>mobx</TechnologyText>
                  <TechnologyText>Redux</TechnologyText>
                  <TechnologyText>affinity designer</TechnologyText>
                  <TechnologyText>figma</TechnologyText>
                  <TechnologyText>...</TechnologyText>
            </TypingField>
          </TextField>
        </Wrapper>
      </Container>
  );
}
