import Overlay from "../../common/Overlay/Overlay.tsx";
import Managers from '../../../assets/images/managers.jpg';
import './section2_1.sass';

import PhoneIcon from '../../../assets/icons/phone_icon.png';
import CarIcon from '../../../assets/icons/car_icon.png';
import DocumentIcon from '../../../assets/icons/document_icon.png';
import RouteIcon from '../../../assets/icons/route_icon.png';
import ExchangeIcon from '../../../assets/icons/exchange_icon.png';
import RubleIcon from '../../../assets/icons/ruble_icon.png';


export default function Section2_1(){
  return (
    <div className="section2_1">
      <Overlay
        imageSrc={Managers}
      >
        <>
          <div className='title'>
            Схема работы
          </div>
          <div className="steps-grid">
            <div className="step-item">
              <div className="step-item__icon">
                <img src={PhoneIcon} alt="..."/>
              </div>
              <div className="step-item__title">Заявка</div>
              <div className="step-item__text">Вы оставляете заявку на сайте, или звоните на горячую линию. Наш менеджер задает уточняющие вопросы для просчета стоимости и оглашает конкретные сроки доставки</div>
            </div>
            <div className="step-item">
              <div className="step-item__icon">
                <img src={CarIcon} alt="..."/>
              </div>
              <div className="step-item__title">Транспорт</div>
              <div className="step-item__text">В течение 2 часов подбираем необходимый транспорт</div>
            </div>
            <div className="step-item">
              <div className="step-item__icon">
                <img src={DocumentIcon} alt="..."/>
              </div>
              <div className="step-item__title">Договор</div>
              <div className="step-item__text">Заключаем договор на перевозку</div>
            </div>
            <div className="step-item">
              <div className="step-item__icon">
                <img src={RouteIcon} alt="..."/>
              </div>
              <div className="step-item__title">Погрузка груза</div>
              <div className="step-item__text">Осуществляем транспортировку груза из точки А в точку Б, с постоянным мониторингом через систему ГЛОНАСС</div>
            </div>
            <div className="step-item">
              <div className="step-item__icon">
                <img src={ExchangeIcon} alt="..."/>
              </div>
              <div className="step-item__title">Обмен</div>
              <div className="step-item__text">Обмен транспортными и бухгалтерскими отчетными документами</div>
            </div>
            <div className="step-item">
              <div className="step-item__icon">
                <img src={RubleIcon} alt="..."/>
              </div>
              <div className="step-item__title">Оплата</div>
              <div className="step-item__text">Оплата транспортировки</div>
            </div>
          </div>
        </>
      </Overlay>
    </div>
  )
}