import styled from "styled-components";

import DinoCoding from "../../assets/tsSVG/DinoCoding";

export const DinoCodingImg = styled(DinoCoding)`
  width: 50%;
`;

export const TechnologyText = styled.h3`
  ${(props) => `
  margin : ${props.theme.spacing}px 0;
  color: ${props.theme.font.color.secondary};
  font-weight: ${props.theme.font.weight.bold};
  `}
`;

export const TypingField = styled.div`
  height: 300px;
  width: 100%;

  @media ${(props) => props.theme.breakpoints.small}{
    height: 200px;
  }
`;
