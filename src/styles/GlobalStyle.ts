import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

const GlobalStyle = createGlobalStyle`
body,
#root,
html {
  ${(props) => `
  margin: 0;
  padding: 0;
  padding-top: ${props.theme.spacing * 4}px;
  overflow: visible;
  background-color: ${props.theme.color.background};
  text-align:center;
  font-family: ${props.theme.font.fontFamily};
  color: ${props.theme.font.color.main};

  @media ${props.theme.breakpoints.small}{
    padding-top:  ${props.theme.spacing * 2}px;
  }
  `}
}
::-webkit-scrollbar {
  display: none;
}
a {
  text-decoration: none;
}

h1 {
  ${(props) => `
  font-size: ${props.theme.font.size.heading1};
  width:100%;

  @media ${props.theme.breakpoints.small}{
  font-size: 18px;
  }
`}
}
h3 {
  ${(props) => `
  font-size: ${props.theme.font.size.heading2};
  font-weight:  ${props.theme.font.weight.light};
  margin: 0 ${props.theme.spacing}px;

  @media ${props.theme.breakpoints.small}{
  font-size: 14px;
  }
  `}
}
p {
  ${(props) => `
  font-size: ${props.theme.font.size.text};
  font-weight:  ${props.theme.font.weight.light};

  @media ${props.theme.breakpoints.small}{
  font-size: 12px;
  }
  `}
}
`;

export default GlobalStyle;

export const Container = styled.div<{ isFooter?: boolean }>`
  ${(props) => `
  max-width: 1000px;
  margin:  ${
    props.isFooter ? props.theme.spacing * 2 : props.theme.spacing * 12
  }px auto;
  display:flex;
  flex-direction:column;
  align-items:center;
  justify-content: center;

  @media ${props.theme.breakpoints.small}{
    margin:  ${
      props.isFooter ? props.theme.spacing : props.theme.spacing * 6
    }px auto;
  }
  @media ${props.theme.breakpoints.base}{
    width: 90%;
  }
  `}
`;

export const Wrapper = styled.div<{ flexDirCol?: boolean; isRight?: boolean }>`
  ${(props) => `
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: ${props.flexDirCol ? "column" : "row"};
  align-items: center;

  @media ${props.theme.breakpoints.small}{
    flex-direction: ${props.isRight ? "column-reverse" : "column"};
  }
  `}
`;

export const TextField = styled.div<{ isLong?: boolean; isLeft?: boolean }>`
  ${(props) => `
  width: ${props.isLong ? "100%" : "50%"};
  text-align: ${props.isLeft ? "left" : "center"};
  padding: 0 ${props.theme.spacing}px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;

  @media ${props.theme.breakpoints.small}{
  width: 90%;
  }
  `}
`;
