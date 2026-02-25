import './investList.sass';
import classNames from "classnames";

interface CardProps {
  id: string;
  title: string;
  subtitle: string;
  income: string[];
  profit: string;
  adTitle: string;
  ads: string[];
  extra: string;
  image: string;
  isFlipped: boolean;
  onFlip: () => void;
}

export default function InvestCard({
                                     id,
                                     title,
                                     subtitle,
                                     income,
                                     profit,
                                     adTitle,
                                     ads,
                                     extra,
                                     image,
                                     isFlipped,
                                     onFlip
                                   }: CardProps) {

  const handleCardClick = () => {
    onFlip();
  };

  const composeCardClasses = () => {
    return classNames('invest-list__card', {
      'is-flipped': isFlipped,
      'is-visible': true
    });
  }

  // Функция для извлечения текста до дефиса и удаления суммы
  const getCardName = (fullTitle: string) => {
    // Берем часть до дефиса и удаляем цифры и символ ₽
    const beforeDash = fullTitle.split('—')[0].trim();
    // Удаляем цифры, пробелы и символ ₽, оставляем только текст
    const cleanText = beforeDash.replace(/[0-9₽]/g, '');
    // Заменяем пробелы на нижнее подчеркивание
    return cleanText.replace(/\s+/g, '_');
  };

  // Функция для извлечения суммы
  const getCardAmount = (fullTitle: string) => {
    // Берем часть после дефиса
    const afterDash = fullTitle.split('—')[1]?.trim() || '';
    return afterDash;
  };

  const cardName = getCardName(title);
  const cardAmount = getCardAmount(title);

  return (
    <div
      className={composeCardClasses()}
      id={id}
      onClick={handleCardClick}
    >
      <div className="invest-list__card-inner">
        {/* Лицевая сторона */}
        <div className="invest-list__card-front">
          <div className="invest-list__card-image-wrapper">
            <img src={image} alt={title} className="invest-list__card-image" />
            <div className="invest-list__card-shine"></div>
            <div className="invest-list__card-name">{cardName}</div>
            <div className="invest-list__card-amount">{cardAmount}</div>
          </div>

          <h3 className="invest-list__card-title">{title}</h3>

          <div className="invest-list__income-block">
            <div className="invest-list__subtitle">{subtitle}</div>
            <ul className="invest-list__income-list">
              {income.map((item, index) => (
                <li key={index} className="invest-list__income-item">{item}</li>
              ))}
            </ul>
            <div className="invest-list__profit">Доходность: <strong>{profit}</strong></div>
          </div>

          <div className="invest-list__ad-block">
            <div className="invest-list__subtitle">{adTitle}</div>
            <ul className="invest-list__ad-list">
              {ads.map((ad, index) => (
                <li key={index} className="invest-list__ad-item">{ad}</li>
              ))}
            </ul>
          </div>

          <div className="invest-list__extra">{extra}</div>
        </div>

        {/* Обратная сторона */}
        <div className="invest-list__card-back">
          <div className="invest-list__card-image-wrapper invest-list__card-back-image">
            <img src={image} alt={title} className="invest-list__card-image" />
            <div className="invest-list__card-shine"></div>
            <div className="invest-list__card-name">{cardName}</div>
            <div className="invest-list__card-amount">{cardAmount}</div>
          </div>

          <div className="invest-list__back-block">
            <div className="invest-list__subtitle invest-list__back-main-subtitle">Как получить профессиональный доход</div>

            <div className="invest-list__back-paths">
              <div className="invest-list__back-path">
                <div className="invest-list__back-path-header">
                  <span className="invest-list__back-path-icon">🌟</span>
                  <span className="invest-list__back-path-title">Учиться самому и обучать других</span>
                </div>
                <ul className="invest-list__back-path-list">
                  <li>Полное обучение (от продаж до гендиректора)</li>
                  <li>Открываешь офис где удобно</li>
                  <li>Набираешь команду, обучаешь по методичке</li>
                  <li>Получаешь 80% / 85% / 90% с каждого в своей сети</li>
                </ul>
              </div>

              <div className="invest-list__back-path">
                <div className="invest-list__back-path-header">
                  <span className="invest-list__back-path-icon">⚡</span>
                  <span className="invest-list__back-path-title">Купить готовых логистов</span>
                </div>
                <ul className="invest-list__back-path-list">
                  <li>Покупаешь тариф франшизы (500 тыс / 900 тыс / 2 млн)</li>
                  <li>Мы обучаем 1/2/5 логистов под ключ за 1 месяц</li>
                  <li>Они сразу работают в твоём офисе</li>
                  <li>Ты получаешь 80% / 85% / 90% с каждого</li>
                </ul>
              </div>

              <div className="invest-list__back-path">
                <div className="invest-list__back-path-header">
                  <span className="invest-list__back-path-icon">🌿</span>
                  <span className="invest-list__back-path-title">Ничего не делать</span>
                </div>
                <ul className="invest-list__back-path-list">
                  <li>Просто получаешь пассивный доход от автопарка</li>
                  <li>Продаёшь рекламу на газелях — дополнительный доход</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}