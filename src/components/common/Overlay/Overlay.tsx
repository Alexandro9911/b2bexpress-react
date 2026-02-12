import React from "react";
import "./overlay.sass";

type TProps = {
  children?: React.ReactNode;
  imageSrc?: string;
};

export default function Overlay({ children, imageSrc }: TProps) {

  return (
    <div className="overlay-wrapper">
      {/* Фон */}
      <div className="background-image">
        {imageSrc && <img src={imageSrc} alt="" />}
      </div>

      {/* Контент поверх фона */}
      <div className="content-overlay">{children}</div>
    </div>
  );
}