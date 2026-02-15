import React, { useRef, useEffect, useState } from "react";
import classNames from "classnames";
import "./CardWithIcon.scss";

type TProps = {
  id: string;
  title: string | React.ReactNode;
  description: string;
  imageSrc: string;
  detailContent: React.ReactNode;
  isExpanded: boolean;
  onToggle: () => void;
  isMinimized?: boolean;
  customClass?: string;
};

export default function CardWithIcon({
  id,
  title,
  description,
  imageSrc,
  detailContent,
  isExpanded,
  onToggle,
  isMinimized = false,
  customClass,
}: TProps) {
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number>(0);

  useEffect(() => {
    if (isExpanded && contentRef.current) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isExpanded]);

  const composeClasses = () =>
    classNames(
      "card",
      { "card--expanded": isExpanded },
      { "card--minimized": isMinimized },
      customClass
    );

  return (
    <div className={composeClasses()} onClick={(e) => e.stopPropagation()}>
      {isMinimized ? (
        <div className="card__minimized-icon-wrapper">
          <img
            src={imageSrc}
            alt={`${typeof title === "string" ? title : "Иконка"}`}
            className="card__minimized-icon"
          />
        </div>
      ) : (
        <>
          <div className="card__layout" onClick={onToggle}>
            <div className="card__icon">
              <img src={imageSrc} alt={`${typeof title === "string" ? title : "Иконка"}`} />
            </div>
            <div className="card__content">
              <h3 className="card__title">{title}</h3>
              <p className="card__description">{description}</p>
              <button
                type="button"
                className="card__button"
                aria-expanded={isExpanded}
                aria-controls={`card-detail-${id}`}
              >
                {isExpanded ? "Свернуть" : "Подробнее"}
              </button>
            </div>
          </div>

          <div
            className="card__expandable"
            style={{ height: `${height}px`, overflow: "hidden" }}
            aria-hidden={!isExpanded}
          >
            <div ref={contentRef} id={`card-detail-${id}`} className="card__detail-content">
              {detailContent}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
