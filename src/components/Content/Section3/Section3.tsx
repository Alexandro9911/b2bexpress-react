import './section3.sass';
import Overlay from '../../common/Overlay/Overlay.tsx';
import FeedbackImage from '../../../assets/images/feedback.jpg';
import ArrowIcon from '../../../assets/icons/arrow.svg';
import Button from '../../common/button/Button.tsx';
import { OpenModal } from '../../../utils/modal.tsx';
import FeedbackForm from '../../Forms/FeedBackForm/FeedbackForm.tsx';

export default function Section3() {
  const onClickHandler = () => {
    OpenModal(<FeedbackForm />);
  };

  return (
    <div className="section3">
      <Overlay imageSrc={FeedbackImage}>
        <div className="feedback-layout">
          <div className="feedback-layout__title">Оставить отзыв</div>
          <div className="feedback-layout__sub-title">Нам важно Ваше мнение!</div>
          <div className="feedback-layout__action">
            <Button classNames="btn btn_medium" onClickHandler={onClickHandler}>
              <img src={ArrowIcon} alt="..." />
              Написать отзыв
            </Button>
          </div>
        </div>
      </Overlay>
    </div>
  );
}