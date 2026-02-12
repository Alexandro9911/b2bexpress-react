import Overlay from "../../common/Overlay/Overlay.tsx";
import Section1_2_image from "../../../assets/images/section1_2.jpg";
import './section1_2.sass';
import CardWithIcon from "../../Cards/CardWithIcon/CardWithIcon.tsx";
import FingerIcon from '../../../assets/images/finger.png';
import SpeedIcon from '../../../assets/images/speed.png';
import SafetyIcon from '../../../assets/images/safety.png';
export default function Section1_2() {
  return (
    <div className="section1_1">
      <Overlay
        imageSrc={Section1_2_image}
      >
        <div className="title title_left">Почему выбирают нас</div>
        <div className="wrapper">
          <div className="row-cards">
            <CardWithIcon
              title='С нами удобно и выгодно'
              imageSrc={FingerIcon}
            >
              <ul>
                <li>Предоставим консультацию в формате 24\7</li>
                <li>
                  Документооборот осуществляется курьерской службой «CDEK» прямо в руки,
                  не какой почты и не каких очередей. Данная услуга совершенна бесплатна,
                  позволяет сократить сроки доставки документов, а так же снимает лишнюю
                  головную боль с наших Клиентов.
                </li>
                <li>Принимаем любую форму оплаты.</li>
                <li>Предоставляем отсрочку платежа.</li>
                <li>«CASHBACK» до 10 %</li>
              </ul>
            </CardWithIcon>
            <CardWithIcon
              title='Скорость'
              imageSrc={SpeedIcon}
            >
              <ul>
                <li data-list="bullet">
                  EXPRESS-доставка на расстояния более 1000 км Ваш груз везут 2 водителя по сменно,
                  что гораздо повышает скорость доставки.
                </li>
                <li data-list="bullet">
                  Более 300 проверенных и надежных партнёров по всей России и странам СНГ :
                  авто, жд и мультимодальных перевозок, что позволяет предоставлять результат
                  в заявленный Вами срок.
                </li>
                <li data-list="bullet">
                  Все разрешения на перевозку негабаритных грузов готовятся не более 3 дней.
                </li>
              </ul>
            </CardWithIcon>
          </div>
          <CardWithIcon
            title='Безопасность'
            imageSrc={SafetyIcon}
          >
            <ul>
              <li data-list="bullet">
                Безопасность - Один из важнейших критериев при ведение бизнеса и в жизни в целом.
                К этому вопросу мы подошли системно и серьезно, еще до того как начали запускать работу с
                Клиентами.
              </li>
              <li data-list="bullet">
                Собственная служба безопасности проверяющая не только внутренние механизмы,
                а так же систему работы наших Партнеров. Подписание договоров и контрактов осуществляется,
                только после полного одобрения.
              </li>
              <li data-list="bullet">
                Благодаря нашим Партнерам Ваш груз находится в постоянной безопасности.
              </li>
              <li data-list="bullet">
                Охраняемые стоянки- как по главным Федеральным трассам,
                так и в не больших пригородах позволяют водителям спокойно отдыхать перед дорогой.
              </li>
              <li data-list="bullet">
                Профессионализм.Только опытные водители со стажем вождения не менее 5 лет,
                что позволяет не беспокоиться о сохранности груза в пути.
              </li>
              <li data-list="bullet">
                Каждые пол года логисты проходят переаттестацию и повышают квалификацию.
              </li>
              <li data-list="bullet">
                Соблюдение регламентов контролируется собственной системой учета. Данная система
                разрабатывалась специально под нужды и требования наших клиентов, опираясь на опыт и знания
                в сфере логистики внутреннего и внешнего рынка.
              </li>
            </ul>
          </CardWithIcon>
        </div>
        <div className="wrapper">
          <div className="subtitle">
            <p>Нацеленность на плодотворное и долгосрочное сотрудничество</p>
          </div>
        </div>
      </Overlay>
    </div>
  )
}