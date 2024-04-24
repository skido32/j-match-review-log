import { FC } from "react";

type Props = {
  labelText: string;
  url: string;
  colorCode: string;
};

export const LinkButton: FC<Props> = ({ labelText, url }) => {
  return <a href={url}>{labelText}</a>;
};
