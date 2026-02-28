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
            <a href={'tel: 88004441098,'}>8 (800) 444 10 98</a>
          </div>
          <div className="dates">C 8:00 до 20:00 Ежедневно</div>
          <div className="info__email">Общая почта: <a href={'mailto:mir_logistiki01@bk.ru'}>mir_logistiki01@bk.ru</a></div>
          <div className="info__contacts">
            <br/>
            <div className="contact-item">
              <p>Генеральный Директор: Дмитрий Александрович А.</p>
            </div>
            <div className="contact-item">
              <p>Коммерческий директор: Владислав Владимирович С.</p>
            </div>
            <div className="contact-item">
              <p>Головной офис: </p>
              <p>190013 , Санкт-Петербург, Московский проспект, 60/129, офис 212-В</p>
            </div>
            <div className="contact-item">
              <p>Филиал: </p>
              <p>бульвар Королёва, 13, оф. 213, бизнес инкубатор, Тольятти, Самарская область, 445028</p>
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