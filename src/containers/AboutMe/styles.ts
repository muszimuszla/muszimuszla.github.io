import styled from "styled-components";

import DinoWink from "../../assets/tsSVG/DinoWink";
import { TextField } from "../../styles/GlobalStyle";

export const DinoWinkImg = styled(DinoWink)`
  width: 40%;
  padding: 0 ${(props) => props.theme.spacing}px 0
    ${(props) => props.theme.spacing}px;

  @media ${(props) => props.theme.breakpoints.base} {
    width: 50%;
  }
`;

export const StyledTextField = styled(TextField)`
  width: 60%;

  @media ${(props) => props.theme.breakpoints.base} {
    width: 50%;
  }
  @media ${(props) => props.theme.breakpoints.small} {
    width: 90%;
  }
`;

export const InnerObject = styled.div`
  ${(props) => `
    margin-left : ${props.theme.spacing * 2}px;
  `}
`;

export const ObjectField = styled.h3`
  ${(props) => `
    margin : ${props.theme.spacing}px 0;
  `}
`;

export const ObjectFieldHighlightedText = styled.span`
  ${(props) => `
    margin : ${props.theme.spacing}px 0;
    color: ${props.theme.font.color.secondary};
    font-weight: ${props.theme.font.weight.bold};
  `}
`;
