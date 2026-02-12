import React from "react";
import "./overlay.sass";

type TProps = {
  children?: React.ReactNode;
  imageSrc?: string;
};

export default function Overlay({ children, imageSrc }: TProps) {
  return (
    <div className="overlay-wrapper">
      {imageSrc && <img src={imageSrc} alt="" className="overlay-background-img" />}
      <div className="content-overlay">{children}</div>
    </div>
  );
}