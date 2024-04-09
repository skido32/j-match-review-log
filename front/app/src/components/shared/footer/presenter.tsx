import { FC } from "react";
import {
  StyledWrapperDiv,
  StyledMenuUl,
  StyledMenuItem,
  StyledAnkerTag,
  StyledTitleDiv,
  StyledDescriptionDiv,
  StyledDescriptionWrapperDiv,
} from "./style";

export const Footer: FC = () => {
  return (
    <footer>
      <StyledWrapperDiv>
        <StyledMenuUl>
          <StyledMenuItem>
            <StyledAnkerTag href="/">TOP</StyledAnkerTag>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledAnkerTag href="/categories/j1">J1</StyledAnkerTag>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledAnkerTag href="/categories/j2">J2</StyledAnkerTag>
          </StyledMenuItem>
          <StyledMenuItem>
            <StyledAnkerTag href="/categories/j3">J3</StyledAnkerTag>
          </StyledMenuItem>
        </StyledMenuUl>
        <StyledTitleDiv>J Match Review Log</StyledTitleDiv>
        <StyledDescriptionWrapperDiv>
          <StyledDescriptionDiv>
            Jリーグの試合分析に特化した
            <br />
            ブログまとめサイト
          </StyledDescriptionDiv>
        </StyledDescriptionWrapperDiv>
      </StyledWrapperDiv>
    </footer>
  );
};
