import MainLogo from '../../assets/images/MainLogo.png';
import './styles.sass';
import Button from "../common/button/Button.tsx";
import React from "react";

export default function Header() {
  const onButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(e);
    // Здесь можно открыть модальное окно
  };

  return (
    <header className="header">
      <div className="header__main-logo">
        <img src={MainLogo} alt="Логотип компании" />
      </div>
      <div className="header__title">
        <h2>Ваша задача - Наше решение</h2>
      </div>
      <div className="header__contacts">
        <p className="contact">8 (800) 7007-123</p>
        <p className="contact_small">unitedtransport@mail.ru</p>
      </div>
      <div className="header__buttons">
        <Button
          //isLink={false}
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