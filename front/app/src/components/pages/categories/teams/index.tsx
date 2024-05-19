import { FC } from "react";
import { TeamsPresenter } from "./presenter";
import { useTeams } from "./hooks";

export const Teams: FC = () => {
  const props = useTeams();

  return <TeamsPresenter {...props} />;
};
