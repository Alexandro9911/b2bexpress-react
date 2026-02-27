import './offerRules.sass';
import { useEffect, useState, useRef } from 'react';
import Slider1 from '../../../../assets/images/slider1.png';
import Slider2 from '../../../../assets/images/slider2.png';
import Slider3 from '../../../../assets/images/slider3.png';
// import Franchise from '../../../../assets/icons/franchise_col.png';
import InvestImg from '../../../../assets/icons/invest_col.png';

const images = [Slider1, Slider2, Slider3];

export default function OfferRules() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Минимальное расстояние свайпа
  const minSwipeDistance = 50;

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isTransitioning) {
        setIsTransitioning(true);
        setActiveIndex((prev) => (prev + 1) % images.length);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  // Сбрасываем флаг анимации после завершения перехода
  useEffect(() => {
    if (isTransitioning) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 600);

      return () => clearTimeout(timer);
    }
  }, [isTransitioning, activeIndex]);

  const handleSlideClick = (index: number) => {
    if (index !== activeIndex && !isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex(index);
    }
  };

  const getPositionClasses = (index: number) => {
    if (index === activeIndex) return 'offer-rules__slide--center';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'offer-rules__slide--top';
    return 'offer-rules__slide--bottom';
  };

  // Обработчики свайпа
  const onTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd || isTransitioning) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Свайп влево - следующий слайд
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev + 1) % images.length);
    } else if (isRightSwipe) {
      // Свайп вправо - предыдущий слайд
      setIsTransitioning(true);
      setActiveIndex((prev) => (prev - 1 + images.length) % images.length);
    }
  };

  return (
    <section className="offer-rules">
      <div className="offer-rules__container">
        {/* Левая колонка — карточки */}
        <div className="offer-rules__content">
          <h2 className="offer-rules__title">
            <span className="offer-rules__title-line">ЧТО МЫ ПРЕДЛАГАЕМ</span>
          </h2>


          <div className="offer-rules__card-icon"><img src={InvestImg} alt='Инвестиции'/></div>
          <p className="offer-rules__subtitle">
            Два направления, которые можно комбинировать
          </p>


          <div className="offer-rules__cards">
            {/* Карточка 1: Инвестиции в автопарк */}
            <div className="offer-rules__card">
              {/*<div className="offer-rules__card-icon"><img src={InvestImg} alt='Инвестиции'/></div>*/}
              <h3 className="offer-rules__card-title">Инвестиции в автопарк из трех уровней — пассивный доход</h3>
              <ul className="offer-rules__card-list">
                <li>Вы вкладываете — мы покупаем газели — Вы получаете деньги каждый месяц</li>
                <li>+ рекламные борты</li>
              </ul>
            </div>

            {/* Карточка 2: Франшиза */}
            <div className="offer-rules__card">
              {/*<div className="offer-rules__card-icon"><img src={Franchise} alt='Франшиза'/></div>*/}
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
        <div
          className="offer-rules__slider"
          ref={sliderRef}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {images.map((img, index) => (
            <div
              key={index}
              className={`offer-rules__slide ${getPositionClasses(index)} ${isTransitioning ? 'offer-rules__slide--transitioning' : ''}`}
              style={{ backgroundImage: `url(${img})` }}
              onClick={() => handleSlideClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
}