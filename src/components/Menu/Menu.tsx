import React, { useState } from "react";
import { animateScroll as scroll } from "react-scroll";

import {
  NavigationWrapper,
  Navigation,
  Logo,
  MenuButton,
  MenuBar,
  Lines,
  Line,
  List,
  DesktopMenu,
  StyledLink,
  StyledText
} from "./styles";

const active = `{border-bottom: 1px solid #333;}`;

export default function Menu() {
  const [isMenuActive, setIsMenuActive] = useState(true);

  function handleClick() {
    setIsMenuActive(!isMenuActive);
  }

  const MenuContent = (
    <>
      <StyledLink
        activeClass={active}
        to="aboutme"
        spy={true}
        smooth={true}
        offset={-220}
        duration={500}
      >
        <StyledText>About Me</StyledText>
      </StyledLink>
      <StyledLink
        activeClass={active}
        to="work"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        <StyledText>Work</StyledText>
      </StyledLink>
      <StyledLink
        activeClass={active}
        to="freeTime"
        spy={true}
        smooth={true}
        offset={-200}
        duration={500}
      >
        <StyledText>Free Time</StyledText>
      </StyledLink>
      <StyledLink
        activeClass={active}
        to="sayHi"
        spy={true}
        smooth={true}
        offset={-100}
        duration={500}
      >
        <StyledText>Say Hi</StyledText>
      </StyledLink>
    </>
  );

  return (
    <NavigationWrapper>
      <Navigation>
        <Logo onClick={() => scroll.scrollToTop()}>
          <h1>muszimuszla</h1>
        </Logo>
        <MenuButton onClick={handleClick}>
          <Lines>
            <Line isMenuActive={isMenuActive} />
          </Lines>
        </MenuButton>
        <DesktopMenu>{MenuContent}</DesktopMenu>
        <List isMenuActive={isMenuActive}>
          <MenuBar>{MenuContent}</MenuBar>
        </List>
      </Navigation>
    </NavigationWrapper>
  );
}
