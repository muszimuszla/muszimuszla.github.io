import React from "react";

import { Container, Wrapper, TextField } from "../../styles/GlobalStyle";

import { DinoWinkImg, InnerObject, ObjectField, ObjectFieldHighlightedText } from "./styles";

export default function AboutMe() {
  return (
    <Container id="aboutme">
      <Wrapper isRight>
        <TextField isLeft>
          <h1>const me = &#123;</h1>
          <InnerObject>
            <ObjectField>name&emsp;:&emsp;<ObjectFieldHighlightedText>Magdalena,</ObjectFieldHighlightedText></ObjectField>
            <ObjectField>surname&emsp;:&emsp;<ObjectFieldHighlightedText>Sułkowska,</ObjectFieldHighlightedText></ObjectField>
            <ObjectField>currentPlace&emsp;:&emsp;Kraków,</ObjectField>
            <ObjectField>education&emsp;:&emsp;mgr of Computer Science,</ObjectField>
            <ObjectField>position&emsp;:&emsp;frontend developer,</ObjectField>
            </InnerObject>
          <h1>&#125;</h1>
        </TextField>
        <DinoWinkImg />
      </Wrapper>
    </Container>
  );
}
