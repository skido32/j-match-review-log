import { FC } from "react";
import Lottie from "react-lottie";
import animationData from "./jlog.json";
import { StyledLoadingDiv, StyledAnimationDiv } from "./style";

export const LoadingAnimation: FC = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <StyledLoadingDiv>
      <StyledAnimationDiv>
        <Lottie options={defaultOptions} />
      </StyledAnimationDiv>
    </StyledLoadingDiv>
  );
};
