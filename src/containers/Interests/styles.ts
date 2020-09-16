import styled, { keyframes } from "styled-components";

import { Container } from "../../styles/GlobalStyle";
import DinoInterests from "../../assets/tsSVG/DinoInterests";

export const DinoInterestsImg = styled(DinoInterests)`
  ${(props) => `
    width: 100%;
    margin-bottom: ${props.theme.spacing * 4}px;

    @media ${props.theme.breakpoints.small} {
      margin-bottom: ${props.theme.spacing * 2}px;
    }
  `}
`;

export const InterestsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.small}{
    flex-direction: column;
  }
`;

export const InterestsText = styled.h3`
  ${(props) => `
    color: ${props.theme.font.color.secondary};
    font-weight: ${props.theme.font.weight.bold};
  `}
`;

export const StyledContainer = styled(Container)`
  ${(props) => `
  margin: ${props.theme.spacing * 12}px auto;
  `}
`;

const scale = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1.2);
  }
  40% {
    transform: scale(1);
  } 
  100% {
    transform: scale(1);
  }
`;

export const TextWrapper = styled.div<{ delay?: number }>`
  animation: ${scale} 9s infinite;
  animation-delay: ${(props) => props.delay}s;
  animation-timing-function: ease-in-out;
  margin: ${(props) => props.theme.spacing}px auto;
`;
