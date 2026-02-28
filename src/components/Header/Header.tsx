import MainLogo from '../../assets/images/MainLogo.png';
import MainLogoCropped from '../../assets/images/MainLogoCropped.png';
import './styles.sass';
import Button from "../common/button/Button.tsx";
import {OpenModal} from "../../utils/modal.tsx";
import CalculationForm from "../Forms/CalculateForm/CalculationForm.tsx";
import classNames from "classnames";
type Props = {
  isFooter?: boolean;
}
export default function Header(props : Props) {
  const onButtonClick = () => {
    OpenModal(<CalculationForm/>);
  };

  const composeClasses = () => {
    return classNames('header',{
      'header-bottom': props.isFooter
    })
  }

  return (
    <header className={composeClasses()}>
      <picture className="header__logo-wrapper">
        <source media="(max-width: 768px)" srcSet={MainLogoCropped} />
        <img src={MainLogo} alt="Логотип компании" className="header__logo" />
      </picture>
      <div className="header__content">
        <div className="header__title">
          <h2>Ваша задача - Наше решение</h2>
        </div>
        <div className="header__contacts">
          <p className="contact"><a href={"tel:88004441098"}>8 (800) 444 10 98</a></p>
          <p className="contact_small"><a href={'mailto:mir_logistiki01@bk.ru'}>mir_logistiki01@bk.ru</a></p>
        </div>
      </div>
      <div className="header__button-wrapper">
        <Button
          onClickHandler={onButtonClick}
          classNames="btn btn_medium"
          disabled={false}
        >
          Рассчитать стоимость
        </Button>
      </div>
    </header>
  );
}