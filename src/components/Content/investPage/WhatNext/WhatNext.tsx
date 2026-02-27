import './whatNext.sass';
import TeamImage from '../../../../assets/images/team.jpg';

export default function WhatNext() {
  return (
    <section className="what-next">
      {/* Заголовок — отдельно, слева */}
      <div className="what-next__header-wrapper">
        <h2 className="what-next__title">
          <span className="what-next__title-line">ЧТО ДАЛЬШЕ?</span>
        </h2>
      </div>

      {/* Основной контент — текст и изображение */}
      <div className="what-next__container">
        {/* Левая часть — текст */}
        <div className="what-next__text-content">
          <div className="what-next__content">
            <p className="what-next__text">
              Если Вам интересно — Вы приезжаете в офис для знакомства с:
            </p>

            <ul className="what-next__list">
              <li className="what-next__item">Документами Компании</li>
              <li className="what-next__item">Показателями Компании</li>
              <li className="what-next__item">Командой</li>
              <li className="what-next__item">Договором</li>
            </ul>

            <p className="what-next__text">
              Вы всё проверите, зададите интересующие вопросы и примете решение.
            </p>
          </div>

          {/* Подпись */}
          <div className="what-next__signature">
            <p className="what-next__signature-text">С уважением,</p>
            <p className="what-next__signature-name">Команда «Мир Логистики»</p>
          </div>
        </div>

        {/* Правая часть — изображение */}
        <div className="what-next__image-wrapper">
          <img src={TeamImage} alt="Команда компании Мир Логистики" className="what-next__image" />
        </div>
      </div>
    </section>
  );
}