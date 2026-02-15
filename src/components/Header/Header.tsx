import MainLogo from '../../assets/images/MainLogo.png';
import MainLogoCropped from '../../assets/images/MainLogoCropped.png';
import './styles.sass';
import Button from "../common/button/Button.tsx";
import {OpenModal} from "../../utils/modal.tsx";
import CalculationForm from "../Forms/CalculateForm/CalculationForm.tsx";

export default function Header() {
  const onButtonClick = () => {
    OpenModal(<CalculationForm/>);
  };

  return (
    <header className="header">
      <picture className="header__logo-wrapper">
        <source media="(max-width: 768px)" srcSet={MainLogoCropped} />
        <img src={MainLogo} alt="Логотип компании" className="header__logo" />
      </picture>
      <div className="header__content">
        <div className="header__title">
          <h2>Ваша задача - Наше решение</h2>
        </div>
        <div className="header__contacts">
          <p className="contact">8 (800) 7007-123</p>
          <p className="contact_small">unitedtransport@mail.ru</p>
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