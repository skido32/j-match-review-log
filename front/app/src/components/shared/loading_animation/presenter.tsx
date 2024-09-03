import { FC } from "react";
import Lottie from "react-lottie";
import animationData from "./jlog.json";

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
    <div>
      <div>
        <Lottie options={defaultOptions} />
      </div>
    </div>
  );
};
