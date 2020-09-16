import styled from "styled-components";

import DinoWink from "../../assets/tsSVG/DinoWink";

export const DinoWinkImg = styled(DinoWink)`
  width: 50%;
  padding: 0 ${(props) => props.theme.spacing * 2}px;
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
