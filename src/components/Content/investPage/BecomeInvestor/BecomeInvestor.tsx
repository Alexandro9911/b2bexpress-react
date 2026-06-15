import './becomeInvestor.sass';
import BuildingImage from '../../../../assets/images/buildingWithLogo.png';
import TrucksImage from '../../../../assets/images/trucks_with_logo.jpg';

import ImageSlider from "../../../ImageSlider/ImageSlider.tsx";

export default function BecomeInvestor() {
  const steps = [
    'Выбираете карту',
    'Заполняете форму',
    'Zoom с учредителем',
    'Встреча в офисе, документы',
    'Подписание договора',
    'Получение дивидендов каждый месяц',
    'Обучение (по желанию)'
  ];

  return (
    <section className="become-investor">
      {/* Заголовок */}
      <div className="become-investor__header-wrapper">
        <h2 className="become-investor__title">
          <span className="become-investor__title-line">КАК СТАТЬ ИНВЕСТОРОМ</span>
        </h2>
      </div>

      {/* Основной макет: текст + изображение */}
      <div className="become-investor__layout">
        {/* Левая часть — шаги */}
        <div className="become-investor__steps-container">
          <ol className="become-investor__steps">
            {steps.map((step, index) => (
              <li
                key={index}
                className="become-investor__step-item"
                style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
              >
                <div className="become-investor__step-content">
                  <div className="become-investor__step-number">{String(index + 1).padStart(2, '0')}</div>
                  <div className="become-investor__step-text">{step}</div>
                </div>
              </li>
            ))}
          </ol>

          {/* Финальный текст */}
          <div className="become-investor__final">
            А дальше — либо пассивный доход, либо профессиональный рост. Выбирать Вам.
          </div>
        </div>

        {/* Правая часть — изображение */}
        <div className="become-investor__visual">
          <div className="section-slider-large">
            <ImageSlider
              autoPlayInterval={20000}
              //aspectRatio="3 / 4"
              minHeight="450px"
              images={[TrucksImage,BuildingImage]}
            />
          </div>
        </div>
      </div>
    </section>
  );
}