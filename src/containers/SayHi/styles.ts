import styled from "styled-components";

import DinoStanding from "../../assets/tsSVG/DinoStanding";
import { Container } from "../../styles/GlobalStyle";

export const DinoStandingImg = styled(DinoStanding)`
  width: 50%;
  padding: 0 ${(props) => props.theme.spacing * 2}px;

  @media ${(props) => props.theme.breakpoints.small} {
    margin-bottom: ${(props) => props.theme.spacing * 2}px;
  }
`;

export const SocialMediaWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

export const SocialMediaLink = styled.a`
  ${(props) => `
  color: ${props.theme.font.color.secondary};
  `}
`;

export const StyledContainer = styled(Container)`
  @media ${(props) => props.theme.breakpoints.small} {
    margin-bottom: ${(props) => props.theme.spacing * 2}px;
  }
`;
