import { TeamsData } from "./types";

export const useTeams = (): {
  loading: boolean;
  teamsData: TeamsData;
} => {
  const teamsData = {
    teams: [
      {
        name: "サガン鳥栖",
        teamColor: "",
        url: "/",
      },
      {
        name: "コンサドーレ札幌",
        teamColor: "",
        url: "/",
      },
      {
        name: "浦和レッズ",
        teamColor: "",
        url: "/",
      },
      {
        name: "柏レイソル",
        teamColor: "",
        url: "/",
      },
      {
        name: "FC東京",
        teamColor: "",
        url: "/",
      },
      {
        name: "ガンバ大阪",
        teamColor: "",
        url: "/",
      },
    ],
  };

  return { loading: false, teamsData };
};
