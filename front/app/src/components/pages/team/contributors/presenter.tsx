import { FC } from "react";
import { TeamData } from "../types";

type Props = {
  contributors: TeamData["contributors"];
};

export const Contributors: FC<Props> = ({ contributors }) => {
  return (
    <ul>
      {contributors.map((contributor, i) => {
        return (
          <li>
            <div>
              <div>
                <div />
              </div>
              <div>
                <strong>{contributor.name}</strong>
              </div>
              <div>
                <p>{contributor.media_title}</p>
              </div>
              <div>
                <p>New Article</p>
              </div>
              {/* TODO:最新記事へのリンクをプレビュー表示するまで、とりあえず仮画像を表示 */}
              <div>
                <img src="/soccer_ball.jpeg" />
              </div>
              <div>
                <p>{contributor.new_article_title}</p>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
