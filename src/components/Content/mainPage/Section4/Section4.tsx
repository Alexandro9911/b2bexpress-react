import './section4.sass';
import ContactsImage from '../../../../assets/images/contacts_image.png';

export default function Section4(){
  return (
    <div className="section4">
      <div className="contacts">
        <div className="contacts__info">
          <div className="info__title">
            Контакты
          </div>
          <div className="info__sub-title">
            <p>Горячая линия</p>
            <a href={'tel:89811100101'}>8 981 110 01 01 </a>
          </div>
          <div className="info__email">Общая почта: <a href={'mailto:mir_logistiki01@bk.ru'}>mir_logistiki01@bk.ru</a></div>
          <div className="info__contacts">
            <div className="contact-item">
              <p>Генеральный Директор: Филин Дмитрий Александрович</p>
            </div>
            <div className="contact-item">
              <p>Головной офис: </p>
              <br/>
              <p>190013 , Санкт-Петербург, Московский проспект, 60/129, офис 212-В</p>
            </div>
          </div>
        </div>
        <div className="contacts__image">
          <img src={ContactsImage} alt="..."/>
        </div>
      </div>
    </div>
  )
}