import './section4.sass';
import ContactsImage from '../../../assets/images/contacts_image.png';

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
            <p>8 981 110 01 01 </p>
          </div>
          <div className="info__email">Общая почта: garant.logistics@bk.ru</div>
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