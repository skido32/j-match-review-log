"use client";
import { FC, useState } from "react";
import {
  StyledTitleDiv,
  StyledHambugerDiv,
  StyledHeaderDiv,
  StyledSlideMenuUl,
  StyleAnkerTag,
  StyledImage,
} from "./style";

export const Header: FC = () => {
  const [active, setActive] = useState(false);
  return (
    <header>
      <StyledHeaderDiv>
        <StyledTitleDiv>
          <StyledImage src="/soccer_ball_icon.png" width="26" height="26" />
          <span>J Match Review Log</span>
        </StyledTitleDiv>
        <StyledHambugerDiv
          $isActive={active}
          onClick={() => {
            setActive(!active);
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </StyledHambugerDiv>
      </StyledHeaderDiv>
      <StyledSlideMenuUl $isActive={active}>
        <li>
          <StyleAnkerTag href="/">TOP</StyleAnkerTag>
        </li>
        <li>
          <StyleAnkerTag href="/categories/j1">J1</StyleAnkerTag>
        </li>
        <li>
          <StyleAnkerTag href="/categories/j2">J2</StyleAnkerTag>
        </li>
        <li>
          <StyleAnkerTag href="/categories/j3">J3</StyleAnkerTag>
        </li>
      </StyledSlideMenuUl>
    </header>
  );
};
