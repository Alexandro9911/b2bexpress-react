import Overlay from '../../common/Overlay/Overlay.tsx';
import Managers from '../../../assets/images/managers.jpg';
import PhoneIcon from '../../../assets/icons/phone_icon.png';
import CarIcon from '../../../assets/icons/car_icon.png';
import DocumentIcon from '../../../assets/icons/document_icon.png';
import RouteIcon from '../../../assets/icons/route_icon.png';
import ExchangeIcon from '../../../assets/icons/exchange_icon.png';
import RubleIcon from '../../../assets/icons/ruble_icon.png';
import './section2_1.sass';

const Arrow = () => (
  <svg viewBox="0 0 85 40" xmlns="http://www.w3.org/2000/svg">
    <path d="M0,20 L70,20 M70,15 L85,20 L70,25" />
  </svg>
);

export default function Section2_1() {
  return (
    <div className="section2_1">
      <Overlay imageSrc={Managers}>
        <>
          <h2 className="title">Как мы работаем</h2>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-item__icon">
                <img src={PhoneIcon} alt="Заявка"/>
              </div>
              <div className="step-item__title">Заявка</div>
              <div className="step-item__text">
                Вы оставляете заявку на сайте, или звоните на горячую линию. Наш менеджер задает уточняющие вопросы для
                просчета стоимости и оглашает конкретные сроки доставки
              </div>
            </div>

            <div className="arrow arrow-h--1-2"><Arrow/></div>

            <div className="step-item">
              <div className="step-item__icon">
                <img src={CarIcon} alt="Транспорт"/>
              </div>
              <div className="step-item__title">Транспорт</div>
              <div className="step-item__text">
                В течение 30 минут подбираем необходимый, свободный транспорт
              </div>
            </div>

            <div className="arrow arrow-h--2-3"><Arrow/></div>

            <div className="step-item">
              <div className="step-item__icon">
                <img src={DocumentIcon} alt="Договор"/>
              </div>
              <div className="step-item__title">Договор</div>
              <div className="step-item__text">
                Заключаем договор на перевозку
              </div>
            </div>

            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="empty"></div>
            <div className="arrow arrow--down arrow-v--3-4"><Arrow/></div>


            {window.innerWidth < 768 &&
                <div className="step-item">
                    <div className="step-item__icon">
                        <img src={RouteIcon} alt="Погрузка"/>
                    </div>
                    <div className="step-item__title">Погрузка груза</div>
                    <div className="step-item__text">
                        Осуществляем транспортировку груза из точки А в точку Б, с постоянным мониторингом через систему ГЛОНАСС
                    </div>
                </div>
            }
            {window.innerWidth >= 768 &&
                <div className="step-item">
                    <div className="step-item__icon">
                        <img src={RubleIcon} alt="Оплата"/>
                    </div>
                    <div className="step-item__title">Оплата</div>
                    <div className="step-item__text">
                        Оплата транспортировки
                    </div>
                </div>
            }

            <div className="arrow arrow-h--5-4 arrow--reverse"><Arrow/></div>

            <div className="step-item">
              <div className="step-item__icon">
                <img src={ExchangeIcon} alt="Обмен"/>
              </div>
              <div className="step-item__title">Обмен</div>
              <div className="step-item__text">
                Обмен транспортными и бухгалтерскими отчетными документами
              </div>
            </div>

            <div className="arrow arrow-h--6-5 arrow--reverse"><Arrow/></div>

            {window.innerWidth >= 768 &&
              <div className="step-item">
                <div className="step-item__icon">
                  <img src={RouteIcon} alt="Погрузка"/>
                </div>
                <div className="step-item__title">Погрузка груза</div>
                <div className="step-item__text">
                  Осуществляем транспортировку груза из точки А в точку Б, с постоянным мониторингом через систему ГЛОНАСС
                </div>
              </div>
            }
            {window.innerWidth < 768 &&
                <div className="step-item">
                    <div className="step-item__icon">
                        <img src={RubleIcon} alt="Оплата"/>
                    </div>
                    <div className="step-item__title">Оплата</div>
                    <div className="step-item__text">
                        Оплата транспортировки
                    </div>
                </div>
            }

          </div>
        </>
      </Overlay>
    </div>
  );
}