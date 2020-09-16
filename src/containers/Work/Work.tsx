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
                  {/* <h3>js</h3> */}
                  <TechnologyText>typescript</TechnologyText>
                  <TechnologyText>react</TechnologyText>
                  <TechnologyText>styled-components</TechnologyText>
                  <TechnologyText>graphQL</TechnologyText>
                  <TechnologyText>affinity designer</TechnologyText>
                  {/* <h3>css</h3> */}
                  <h3>sass</h3>
                  <h3>mobx</h3>
                  <h3>figma</h3>
                  <h3>...</h3>
            </TypingField>
          </TextField>
        </Wrapper>
      </Container>
  );
}
