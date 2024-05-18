import { FC } from "react";
import { TeamsData } from "./types";
import { Header } from "components/shared/header/index";
import { Footer } from "components/shared/footer/index";
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
      <div>
        <div>
          <p>Search Result</p>
        </div>
        <div>
          <p>「J1」</p>
        </div>
        {loading ? (
          <div>読み込み中</div>
        ) : (
          <ul>
            {teams.map((team, i) => {
              return (
                <li>
                  <LinkButton
                    labelText={team.name}
                    url="/categories/j1"
                    colorCode="#F71515"
                  />
                </li>
              );
            })}
          </ul>
        )}
      </div>
      <Footer />
    </>
  );
};
