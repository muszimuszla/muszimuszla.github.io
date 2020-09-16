import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledLink = styled(Link)`
  @media ${(props) => props.theme.breakpoints.small} {
    margin: ${(props) => props.theme.spacing * 2}px 0;
  }
`;

export const StyledText = styled.h3`
  @media ${(props) => props.theme.breakpoints.small} {
    font-size: ${(props) => props.theme.font.size.heading1mobile};
  }
`;

export const NavigationWrapper = styled.div`
  ${(props) => `
    background-color: ${props.theme.color.menuBackground};
    position: fixed;
    top: 0;
    width:100%;
    z-index:2;
  `}
`;

export const Navigation = styled.div`
  height: 100px;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  @media ${(props) => props.theme.breakpoints.small} {
    height: 60px;
  }
  @media ${(props) => props.theme.breakpoints.base} {
    width: 90%;
  }
`;

export const Logo = styled.div`
  ${(props) => `
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100px;
  color: ${props.theme.font.color.secondary};
  h1, h3{
    margin: 0;
  }
`}
`;

export const MenuBar = styled.div`
  min-width: 50%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const DesktopMenu = styled.div`
  display: unset;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  @media (max-width: 900px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  display: none;
  @media (max-width: 900px) {
    display: inline-box;
  }
  left: 0px;
  margin: 0px;
  border: 0px;
  cursor: pointer;
  background-color: transparent;
  outline: none;
`;
export const Lines = styled.span`
  display: inline-box;
  position: relative;
  width: 1.8rem;
  height: 1.5rem;
  background-color: transparent;
`;
export const Line = styled.span<{ isMenuActive?: boolean }>`
  width: 100%;
  height: 0.3rem;
  background-color: ${(props) =>
    props.isMenuActive ? props.theme.font.color.secondary : "transparent"};
  position: absolute;
  border-radius: 3px;
  top: 50%;
  transform: translateY(-50%);
  transition: background-color .3s ease-in-out;
}
&:before,
&:after {
  content: "";
  width: 100%;
  height: 0.3rem;
  background-color: ${(props) => props.theme.font.color.secondary};
  position: absolute;
  border-radius: 3px;
  left: 0px;
}
&:before {
  top: -10px;
  transform: ${(props) =>
    props.isMenuActive ? "none" : `translateY(10px) rotate(-45deg)`};
    transition: transform .2s  ease-in-out;
}
&:after {
  top: +10px;
     transform: ${(props) =>
       props.isMenuActive ? "none" : `translateY(-10px) rotate(45deg)`};
       transition: transform .2s  ease-in-out;
  }
}
`;

export const List = styled.div<{ isMenuActive?: boolean }>`
  position: absolute;
  top: 60px;
  right: 0px;
  padding: 10px 0;
  width: 250px;
  background-color: ${(props) => props.theme.color.menuBackground};
  opacity: ${(props) => (props.isMenuActive ? `0` : `1`)};
  display: ${(props) => (props.isMenuActive ? `none` : `unset`)};
  @media (min-width: 900px) {
    display: none;
  }
  @media (max-width: 420px) {
    width: 100%;
  }
  ul {
    padding-inline-start: 0px;
  }
`;
