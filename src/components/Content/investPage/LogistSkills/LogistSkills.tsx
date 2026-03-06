import './logistSkills.sass';
import SotrudnikImage from '../../../../assets/images/sotrudnik.png';
import Sotrudnik2Image from '../../../../assets/images/sotrudnik2.png';
import Sotrudnik3Image from '../../../../assets/images/sotrudnik3.png';
import Sotrudnik4Image from '../../../../assets/images/sotrudnik4.png';
import { useState, useEffect, useRef } from 'react';
import classNames from "classnames";

type TProps = {
  mainInfo?: boolean;
};

const skills = [
  { title: 'Техники продаж', description: 'Холодные звонки, презентация, закрытие' },
  { title: 'Возражения', description: 'Отработка страхов, сомнений, отказов' },
  { title: 'Скрипты', description: 'Готовые сценарии под любую ситуацию' },
  { title: 'Регламент', description: 'Чёткая система работы с клиентом' },
  { title: 'Логистика', description: 'Подбор транспорта, маршруты, контроль' },
  { title: 'Платформы', description: 'Авито, биржи грузов, соцсети' },
  { title: 'Привлечение', description: 'Как находить заказчиков и водителей' },
  { title: 'Лайфхаки', description: 'Секреты, экономящие время и деньги' },
];

export default function LogistSkills({ mainInfo }: TProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);

  const images = [SotrudnikImage, Sotrudnik2Image, Sotrudnik3Image, Sotrudnik4Image];
  const totalSlides = images.length;

  const resetTimer = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, 4000);
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    resetTimer();
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
    resetTimer();
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, []);

  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current! - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
      resetTimer();
    }

    touchStartX.current = null;
  };

  const composeText = () => {
    return mainInfo ? 'Что умеет наш логист' : 'ЧТО УМЕЕТ ВАШ ЛОГИСТ ПОСЛЕ ОБУЧЕНИЯ';
  };

  const composeClasses = () => {
    return classNames('logist-skills', {
      'aligned-section': mainInfo
    });
  };

  return (
    <section className={composeClasses()}>
      <div className="logist-skills__header-wrapper">
        <h2 className="logist-skills__title">
          <span className="logist-skills__title-line">{composeText()}</span>
        </h2>
      </div>

      <div className="logist-skills__container">
        <div className="logist-skills__layout">
          <div className="logist-skills__image-slider-wrapper">
            <div
              className="logist-skills__image-slider"
              ref={sliderRef}
              onTouchStart={handleTouchStart}
              onTouchEnd={handleTouchEnd}
              onClick={nextSlide}
              role="button"
              tabIndex={0}
              aria-label="Слайдер изображений — клик или свайп для перелистывания"
            >
              {images.map((img, index) => (
                <div
                  key={index}
                  className={`logist-skills__slide ${index === currentIndex ? 'active' : ''}`}
                  style={{ backgroundImage: `url(${img})` }}
                />
              ))}
            </div>

            <div className="logist-skills__pagination">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={`logist-skills__pagination-item ${index === currentIndex ? 'active' : ''}`}
                  onClick={(e) => {
                    e.stopPropagation();
                    goToSlide(index);
                  }}
                  aria-label={`Перейти к слайду ${index + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="logist-skills__content">
            <ul className="logist-skills__list">
              {skills.slice(0, 4).map((skill, index) => (
                <li
                  key={index}
                  className="logist-skill-item"
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="logist-skill-item__icon">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="logist-skill-item__content">
                    <h3 className="logist-skill-item__title">{skill.title}</h3>
                    <p className="logist-skill-item__description">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="logist-skills__list">
              {skills.slice(4).map((skill, index) => (
                <li
                  key={index + 4}
                  className="logist-skill-item"
                  style={{ '--delay': `${(index + 4) * 0.1}s` } as React.CSSProperties}
                >
                  <div className="logist-skill-item__icon">
                    {String(index + 5).padStart(2, '0')}
                  </div>
                  <div className="logist-skill-item__content">
                    <h3 className="logist-skill-item__title">{skill.title}</h3>
                    <p className="logist-skill-item__description">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}