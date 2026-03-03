import './startNow.sass';
import Time from '../../../../assets/icons/time-management.png';
import Calendar from '../../../../assets/icons/calendar.png';
import Closed from '../../../../assets/icons/unprotected.png';
import {OpenModal} from "../../../../utils/modal.tsx";
import InvestorForm from "../../../Forms/InvestorForm/InvestorForm.tsx";

export default function StartNow() {

  const handleClick = () => {
    OpenModal(<InvestorForm id={'1'}/>);
  }

  return (
    <section className="start-now">
      {/* Заголовок — по правой стороне */}
      <div className="start-now__header-wrapper">
        <h2 className="start-now__title">
          <span className="start-now__title-line">ПОЧЕМУ СТОИТ РЕШИТЬ СЕЙЧАС</span>
        </h2>
      </div>

      {/* Основной контент */}
      <div className="start-now__container">
        <div className="start-now__cards">
          {/* Первая строка — две карточки */}
          <div className="start-now__cards-row">
            {/* Первая карточка — "Завтра — это не когда" */}
            <div className="start-now__card start-now__card--time">
              <span className="start-now__card-icon">
                <img src={Time} alt="Время решает" />
              </span>
              <p className="start-now__card-text">
                Завтра — это не когда. Завтра — это просто слово, которым мы оправдываем свое бездействие. Сегодня — это единственная реальность,
                где принимаются решения. Те, кто ждут «завтра», зачастую остаются вчера.
              </p>
            </div>

            {/* Вторая карточка — "Физическое закрытие" */}
            <div className="start-now__card start-now__card--closed">
              <span className="start-now__card-icon">
                <img src={Closed} alt="Физическое закрытие входа" />
              </span>
              <p className="start-now__card-text">
                Физическое закрытие входа в Компанию. Мы находимся на финальной стадии формирования юридического реестра инвесторов.
                Как только мы превысим лимит в 5 инвесторов, регистрация новых участников станет невозможна до следующего раунда инвестиций
                (где минимальный чек будет выше в 2 раза). Сегодня — это тот день, когда мы физически можем добавить новых людей в действующий пул.
                Возможно, завтра реестр будет уже закрыт.
              </p>
            </div>
          </div>

          {/* Вторая строка — одна карточка по центру */}
          <div className="start-now__cards-single">
            <div className="start-now__card start-now__card--calendar">
              <span className="start-now__card-icon">
                <img src={Calendar} alt="Календарь" />
              </span>
              <p className="start-now__card-text">
                Следующий раунд инвестиций — 2027 год.
              </p>
            </div>
          </div>
        </div>

        {/* Резюмирующий подзаголовок */}
        <div className="start-now__summary">
          <button className="start-now__summary-text" onClick={handleClick}>
            <span className="thin-text">Сейчас лучший момент</span> <br/> стать инвестором
          </button>
        </div>
      </div>
    </section>
  );
}