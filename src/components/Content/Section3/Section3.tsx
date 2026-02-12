import './section3.sass';
import Overlay from "../../common/Overlay/Overlay.tsx";
import FeedbackImage from '../../../assets/images/feedback.jpg';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import Button from "../../common/button/Button.tsx";
import React from "react";
import {OpenModal} from "../../../utils/modal.tsx";
export default function Section3(){

  const onClickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    OpenModal(<div>Модалка отзыва</div>);
  }

  return (
    <div className="section3">
      <Overlay
        imageSrc={FeedbackImage}
      >
        <div className="feedback-layout">
          <div className="feedback-layout__title">Оставить отзыв</div>
          <div className="feedback-layout__sub-title">Нам важно Ваше мнение!</div>
          <div className="feedback-layout__action">
            <Button
              classNames="btn btn_medium"
              onClickHandler={onClickHandler}
            >
              <img src={ArrowIcon} alt="..."/>
              Написать отзыв
            </Button>
          </div>
        </div>
      </Overlay>
    </div>
  )
}