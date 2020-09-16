import styled from "styled-components";

import { Container } from "../../styles/GlobalStyle";
import DinoHero from "../../assets/tsSVG/DinoHero";

export const HeroImg = styled(DinoHero)`
  ${(props) => `
      margin:  ${props.theme.spacing * 4}px;
  `}
`;

export const StyledContainer = styled(Container)`
  margin-top: 0;
  @media ${(props) => props.theme.breakpoints.small}{
    margin-top: 0;
  }
`;

export const HeroText = styled.h1`
  ${(props) => `
    margin: 0 ${props.theme.spacing * 4}px;
    width:90%;
    text-align: right;
    color: ${props.theme.font.color.secondary};
  `}
`;
