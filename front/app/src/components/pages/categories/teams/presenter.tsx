import { FC } from "react";
import { TeamsData } from "./types";
import { Header } from "components/shared/header/index";
import { Footer } from "components/shared/footer/index";
import {
  StyledTeamsList,
  StyledTeamsListItem,
  StyledWrapperDiv,
  StyledContentTitleDiv,
  StyledContentSubTitleDiv,
  StyledContentSubTitleP,
  StyledContentTitleP,
} from "./style";
import { LinkButton } from "components/shared/link_button/index";

type Props = {
  loading: boolean;
  teamsData: TeamsData;
};

export const TeamsPresenter: FC<Props> = ({ loading, teamsData }) => {
  const { teams } = teamsData;
  return (
    <>
      <Header />
      <StyledWrapperDiv>
        <StyledContentSubTitleDiv>
          <StyledContentSubTitleP>Search Result</StyledContentSubTitleP>
        </StyledContentSubTitleDiv>
        <StyledContentTitleDiv>
          <StyledContentTitleP>「J1」</StyledContentTitleP>
        </StyledContentTitleDiv>
        {loading ? (
          <div>読み込み中</div>
        ) : (
          <StyledTeamsList>
            {teams.map((team, i) => {
              return (
                <StyledTeamsListItem>
                  <LinkButton
                    labelText={team.name}
                    url="/categories/j1"
                    colorCode="#F71515"
                  />
                </StyledTeamsListItem>
              );
            })}
          </StyledTeamsList>
        )}
      </StyledWrapperDiv>
      <Footer />
    </>
  );
};
