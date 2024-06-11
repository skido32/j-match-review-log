import { FC } from "react";
import { TeamData } from "../types";
import {
  StyledReviwerNameStrong,
  StyledMediaList,
  StyledMediaListItem,
  StyledReviwerNameDiv,
  StyledMediaTitleDiv,
  StyledArticleTitleDiv,
  StyledDiv,
  StyledImage,
  StyledArticleImageDiv,
  StyledBorderDiv,
  StyledBorderWrapperDiv,
} from "./style";

type Props = {
  contributors: TeamData["contributors"];
};

export const Contributors: FC<Props> = ({ contributors }) => {
  return (
    <StyledMediaList>
      {contributors.map((contributor, i) => {
        return (
          <StyledMediaListItem>
            <div>
              <StyledBorderWrapperDiv>
                <StyledBorderDiv />
              </StyledBorderWrapperDiv>
              <StyledReviwerNameDiv>
                <StyledReviwerNameStrong>
                  {contributor.name}
                </StyledReviwerNameStrong>
              </StyledReviwerNameDiv>
              <StyledMediaTitleDiv>
                <p>{contributor.media_title}</p>
              </StyledMediaTitleDiv>
              <StyledDiv>
                <p>New Article</p>
              </StyledDiv>
              {/* TODO:最新記事へのリンクをプレビュー表示するまで、とりあえず仮画像を表示 */}
              <StyledArticleImageDiv>
                <StyledImage src="/soccer_ball.jpeg" />
              </StyledArticleImageDiv>
              <StyledArticleTitleDiv>
                <p>{contributor.new_article_title}</p>
              </StyledArticleTitleDiv>
            </div>
          </StyledMediaListItem>
        );
      })}
    </StyledMediaList>
  );
};
