import { DefaultTheme } from "styled-components";

// background #9BA5B5 #BFB2AF
// container #E8C3B9

const theme: DefaultTheme = {
  color: {
    background: "#FFF8F6",
    menuBackground: "rgb(255, 248, 246, 0.9)",
    main: "#E5E5E5",
  },
  font: {
    fontFamily: "'Rubik', sans-serif",
    size: {
      heading1: "32px",
      heading2: "24px",
      text: "16px",
      heading1mobile: "18px",
      heading2mobile: "14px",
      textmobile: "12px",
    },
    weight: {
      light: "300",
      regular: "400",
      bold: "600",
    },
    color: {
      main: "#BFB2AF",
      secondary: "#FE8D8A",
    },
  },
  breakpoints: {
    base: "(max-width: 1000px)",
    small: "(max-width: 375px)",
    medium: "(max-width: 768px)",
    large: "(max-width: 1366px)",
  },
  spacing: 8,
};

export default theme;

declare module "styled-components" {
  export interface DefaultTheme {
    color: {
      background: string;
      menuBackground: string;
      main: string;
    };
    font: {
      fontFamily: string;
      size: {
        heading1: string;
        heading2: string;
        text: string;
        heading1mobile: string;
        heading2mobile: string;
        textmobile: string;
      };
      weight: {
        light: string;
        regular: string;
        bold: string;
      };
      color: {
        main: string;
        secondary: string;
      };
    };
    breakpoints: {
      base: string;
      small: string;
      medium: string;
      large: string;
    };
    spacing: number;
  }
}
