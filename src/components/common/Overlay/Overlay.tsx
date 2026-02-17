import React from "react";
import "./overlay.sass";

type TProps = {
  children?: React.ReactNode;
  imageSrc?: string;
  videoSrc?: string;
};

export default function Overlay({ children, imageSrc, videoSrc }: TProps) {
  // Определяем, поддерживается ли видео и нужно ли его показывать
  const shouldShowVideo = videoSrc && imageSrc && window.innerWidth > 768;

  return (
    <div className="overlay-wrapper">
      {shouldShowVideo ? (
        <video
          autoPlay
          loop
          muted
          playsInline
          className="overlay-background-video"
          aria-hidden="true"
        >
          <source src={videoSrc} type="video/mp4" />
          {/* Резервное изображение на случай, если видео не загрузилось */}
          <img src={imageSrc} alt="" className="overlay-background-img fallback" />
        </video>
      ) : (
        // Показываем изображение в любом другом случае (мобильные, нет видео, ошибка)
        <img src={imageSrc} alt="" className="overlay-background-img" />
      )}

      <div className="content-overlay">{children}</div>
    </div>
  );
}