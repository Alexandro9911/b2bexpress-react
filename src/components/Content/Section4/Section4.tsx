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
            <p>8 800 7007 123</p>
          </div>
          <div className="info__email">Общая почта: unitedtransport@mail.ru</div>
          <div className="info__contacts">
            <div className="contact-item">
              <p>Ген. Директор Сказалова Людмила Владимировна</p>
              <p>skazaloval@bk.ru</p>
            </div>
            <div className="contact-item">
              <p>Головной офис</p>
              <p>Индекс 445028, Самарская область, г. Тольятти, б-р Королева 13, офис 121.</p>
              <p>МАУ городского округа Тольятти АЭР (управляющая компания Бизнес-инкубатор).</p>
            </div>
            <div className="contact-item">
              <p>Индекс 125424, Московская область, г. Москва, Волоколамское шоссе 73, офис 74/2.</p>
              <p>Б.Ц. СДМ-Центр ст. метро Тушинская</p>
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