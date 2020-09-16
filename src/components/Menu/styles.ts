import styled from "styled-components";
import { Link } from "react-scroll";


export const StyledLink = styled(Link)`
  cursor: pointer;
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
  cursor: pointer;
  white-space: nowrap;
  display: flex;
  flex-direction: column;
  text-align: left;
  padding-right: ${props.theme.spacing}px;
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
    props.isMenuActive ? "transparent" : props.theme.font.color.secondary};
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
    props.isMenuActive ?  `translateY(10px) rotate(-45deg)` : "none"};
    transition: transform .2s  ease-in-out;
}
&:after {
  top: +10px;
     transform: ${(props) =>
       props.isMenuActive ?  `translateY(-10px) rotate(45deg)` : "none"};
       transition: transform .2s  ease-in-out;
  }
}
`;

export const List = styled.div<{ isMenuActive?: boolean }>`
  transform: translateX(${props => props.isMenuActive ? '0' : '100%'});
  transition: all 750ms ease;
  position: absolute;
  top: 60px;
  right: 0px;
  padding: 10px 0;
  text-align: center;
  width: 100%;
  background-color: ${(props) => props.theme.color.menuBackground};

  @media (min-width: 900px) {
    display: none;
  }
  ul {
    padding-inline-start: 0px;
  }
`;
