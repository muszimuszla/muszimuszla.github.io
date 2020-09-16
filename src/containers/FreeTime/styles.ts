import styled, { css } from "styled-components";
import { Carousel } from "react-responsive-carousel";

import DinoInstagram from "../../assets/tsSVG/DinoInstagram";
import FreeTimeCoding from "../../assets/tsSVG/FreeTimeCoding";
import FreeTimeCooking from "../../assets/tsSVG/FreeTimeCooking";
import FreeTimeDrawing from "../../assets/tsSVG/FreeTimeDrawing";
import FreeTimePainting from "../../assets/tsSVG/FreeTimePainting";
import FreeTimePlanting from "../../assets/tsSVG/FreeTimePlanting";
import FreeTimeSleeping from "../../assets/tsSVG/FreeTimeSleeping";

export const DinoInstagramImg = styled(DinoInstagram)`
  width: 50%;
`;

const FreeTimeImage = css`
  height: 200px;
  width: 35%;
  margin: ${(props) => props.theme.spacing * 4}px 0;

  @media ${(props) =>props.theme.breakpoints.small}{
    height: 50px;
    margin: ${(props) => props.theme.spacing}px 0;
  }
`;

export const FreeTimeCodingImg = styled(FreeTimeCoding)`
  ${FreeTimeImage};
`;

export const FreeTimeCookingImg = styled(FreeTimeCooking)`
  ${FreeTimeImage};
`;

export const FreeTimeDrawingImg = styled(FreeTimeDrawing)`
  ${FreeTimeImage};
`;

export const FreeTimePaintingImg = styled(FreeTimePainting)`
  ${FreeTimeImage};
`;

export const FreeTimePlantingImg = styled(FreeTimePlanting)`
  ${FreeTimeImage};
`;

export const FreeTimeSleepingImg = styled(FreeTimeSleeping)`
  ${FreeTimeImage};
`;

export const Slide = styled.div`
  height: 100%;
  background-color: ${(props) => props.theme.color.background};
`;

export const FreeTimeText = styled.h3`
  ${(props) => `
  color: ${props.theme.font.color.secondary};
  font-weight: ${props.theme.font.weight.bold};
  `}
`;

export const StyledCarousel = styled(Carousel)`
  width: 100%;
`;
