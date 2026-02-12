import React from "react";
import classNames from "classnames";
import './cardWithIcon.sass';

type TProps = {
  children: React.ReactNode;
  title: string | React.ReactNode;
  imageSrc: string;
  customClass?: string;
}

export default function CardWithIcon(props: TProps) {

  const composeClasses = () => {
    return classNames('card', props.customClass);
  }

  return (
    <div className={composeClasses()}>
      <div className="card__layout">
        <div className="card-icon">
          <img src={props.imageSrc} alt="..."/>
        </div>
        <div className="card-content">
          <div className="card-content__title">{props.title}</div>
          <div className="card-content__main">
            {props.children}
          </div>
        </div>
      </div>
    </div>
  )
}