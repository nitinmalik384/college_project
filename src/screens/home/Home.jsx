import React from "react";
import "./Home-style.scss";
import Animation from "../../assets/animation.json";
import Lottie from "react-lottie";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Animation,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className={"container"}>
      <div className="left-container">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
      <div className="right-container">Right</div>
    </div>
  );
}
