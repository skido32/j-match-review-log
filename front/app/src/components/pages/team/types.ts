export type TeamData = {
  name: string;
  teamColor: string;
  contributors: {
    name: string;
    x_url: string;
    media_url: string;
    media_title: string;
    new_article_url: string;
    new_article_title: string;
  }[];
};
