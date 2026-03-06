import './investList.sass';
import { OpenModal } from "../../../../utils/modal.tsx";
import InvestorForm from "../../../Forms/InvestorForm/InvestorForm.tsx";
import FlipCard from './FlipCard.jsx';

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
  buttonText: string;
  backPath: any;
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
                                     buttonText,
                                     backPath,
                                   }: CardProps) {

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    OpenModal(<InvestorForm id={id}/>)
  };

  const getCardName = (fullTitle: string) => {
    // Берем часть до дефиса и удаляем цифры и символ ₽
    const beforeDash = fullTitle.split('—')[0].trim();
    // Удаляем цифры, пробелы и символ ₽, оставляем только текст
    const cleanText = beforeDash.replace(/[0-9₽]/g, '');
    // Заменяем пробелы на нижнее подчеркивание
    return cleanText.replace(/\s+/g, '_');
  };

  const getCardAmount = (fullTitle: string) => {
    // Берем часть после дефиса
    const afterDash = fullTitle.split('—')[1]?.trim() || '';
    return afterDash;
  };

  const onClickFlip = (e: any, id: string) => {
    console.log(e, id)
    const cards: any = document.querySelectorAll("flip-card")
    cards.forEach((card : any) => {
      const cardAttr = card.attributes['data-id'].value;
      if(cardAttr == id){
        card.flip()
      }
    })
  }

  return (
    <FlipCard
      id={`card_${id}`}
      variant="click"
      frontOfCard={
        <div className="invest-card__front" onClick={(e) => onClickFlip(e,`card_${id}`)}>
          <div className="invest-card__image-wrapper">
            <img src={image} alt={title} className="invest-card__image" />
            <div className="invest-card__card-number">{getCardName(title)}</div>
            <div className="invest-card__card-amount">{getCardAmount(title)}</div>
          </div>

          <div className="invest-card__content">
            <div>
              <div className='invest-card__more-label'>Нажмите чтобы узнать подробности</div>
              <div className="invest-card__header">
                <h3 className="invest-card__title">{title}</h3>
              </div>

              <p className="invest-card__subtitle">{subtitle}</p>

              <ul className="invest-card__list">
                {income.map((item, index) => (
                  <li key={index} className="invest-card__list-item">{item}</li>
                ))}
              </ul>
              <div className="invest-card__profit">Доходность: {profit}</div>

              <p className="invest-card__ad-title">{adTitle}</p>

              <ul className="invest-card__list">
                {ads.map((ad, index) => (
                  <li key={index} className="invest-card__list-item">{ad}</li>
                ))}
              </ul>

              <p className="invest-card__extra">{extra}</p>
            </div>
            <button
              className="invest-card__button"
              onClick={handleButtonClick}
            >
              {buttonText}
            </button>
          </div>
        </div>
      }
      backOfCard={
        <div className="invest-card__back" onClick={(e) => onClickFlip(e,`card_${id}`)}>
          <div className="invest-card__image-wrapper">
            <img src={image} alt={title} className="invest-card__image"/>
            <div className="invest-card__card-number">{getCardName(title)}</div>
            <div className="invest-card__card-amount">{getCardAmount(title)}</div>
          </div>

          <div className="invest-card__back-content">
            <h4 className="invest-card__back-title">
              Как получить профессиональный доход
            </h4>

            <div className="invest-card__paths">
              <div className="invest-card__path">
                {backPath}
              </div>
              <button
                className="invest-card__button"
                onClick={handleButtonClick}
              >
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      }
    />
  );
}