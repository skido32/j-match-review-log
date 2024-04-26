import { FC } from "react";
import { StyledSpan, StyledAnkerTag } from "./style";

type Props = {
  labelText: string;
  url: string;
  colorCode: string;
};

export const LinkButton: FC<Props> = ({ labelText, url, colorCode }) => {
  return (
    <StyledAnkerTag href={url} $colorCode={colorCode}>
      {labelText}
      <StyledSpan $colorCode={colorCode} />
      <StyledSpan $colorCode={colorCode} />
    </StyledAnkerTag>
  );
};
