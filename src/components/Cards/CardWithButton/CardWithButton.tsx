import React from "react";
import Button from "../../common/button/Button.tsx";
import './cardWithButton.sass'

type IProps = {
  children: string;
  imageSrc: string;
  title: string;
  buttonText: string;
  buttonAction: (e: React.MouseEvent<HTMLButtonElement>) => void,
  buttonStyle: string;
}

export default function  CardWithButton(props: IProps){
  return (
    <div className="card-with-button">
      <div className="card-with-button__image">
        <img src={props.imageSrc} alt="Автомобиль"/>
      </div>
      <div className="card-with-button__title">
        {props.title}
      </div>
      <div className="card-with-button__content" dangerouslySetInnerHTML={{__html: props.children}}/>
      <Button
        onClickHandler={props.buttonAction}
        classNames={props.buttonStyle}
      >
        {props.buttonText}
      </Button>
    </div>
  )
}