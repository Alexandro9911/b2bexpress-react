import './offerRules.sass';
import { useEffect, useState } from 'react';
import Slider1 from '../../../../assets/images/slider1.png';
import Slider2 from '../../../../assets/images/slider2.png';
import Slider3 from '../../../../assets/images/slider3.png';
import Franchise from '../../../../assets/icons/franchise_col.png';
import InvestImg from '../../../../assets/icons/invest_col.png';

const images = [Slider1, Slider2, Slider3];

export default function OfferRules() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  const getPositionClasses = (index : number) => {
    if (index === activeIndex) return 'offer-rules__slide--center';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'offer-rules__slide--top';
    return 'offer-rules__slide--bottom';
  };

  return (
    <section className="offer-rules">
      <div className="offer-rules__container">
        {/* Левая колонка — карточки */}
        <div className="offer-rules__content">
          <h2 className="offer-rules__title">
            <span className="offer-rules__title-line">ЧТО МЫ ПРЕДЛАГАЕМ</span>
          </h2>

          <p className="offer-rules__subtitle">
            Два направления, которые можно комбинировать
          </p>

          <div className="offer-rules__cards">
            {/* Карточка 1: Инвестиции в автопарк */}
            <div className="offer-rules__card">
              <div className="offer-rules__card-icon"><img src={InvestImg} alt='Инвестиции'/></div>
              <h3 className="offer-rules__card-title">Инвестиции в автопарк из трех уровней — пассивный доход</h3>
              <ul className="offer-rules__card-list">
                <li>Вы вкладываете — мы покупаем газели — Вы получаете деньги каждый месяц</li>
                <li>+ рекламные борты</li>
              </ul>
            </div>

            {/* Карточка 2: Франшиза */}
            <div className="offer-rules__card">
              <div className="offer-rules__card-icon"><img src={Franchise} alt='Франшиза'/></div>
              <h3 className="offer-rules__card-title">Франшиза из трех уровней — профессиональный доход</h3>
              <ul className="offer-rules__card-list">
                <li>Вы получаете доступ ко всей системе компании: люди, инфраструктура, бренд, защита</li>
                <li>Открываете свой офис и получаете процент с команды</li>
              </ul>
            </div>
          </div>

          <div className="offer-rules__conclusion">
            Можно выбрать одно. Можно и то, и другое — тогда у Вас два потока дохода.
          </div>
        </div>

        {/* Правая колонка — слайдер */}
        <div className="offer-rules__slider">
          {images.map((img, index) => (
            <div
              key={index}
              className={`offer-rules__slide ${getPositionClasses(index)}`}
              style={{ backgroundImage: `url(${img})` }}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}