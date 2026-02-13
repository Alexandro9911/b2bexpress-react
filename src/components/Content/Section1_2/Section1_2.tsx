import { useState } from "react";
import Overlay from "../../common/Overlay/Overlay";
import Section1_2_image from "../../../assets/images/section1_2.jpg";
import "./section1_2.sass";
import CardWithIcon from "../../Cards/CardWithIcon/CardWithIcon";
import FingerIcon from "../../../assets/images/finger.png";
import SpeedIcon from "../../../assets/images/speed.png";
import SafetyIcon from "../../../assets/images/safety.png";

export default function Section1_2() {
  const [openCardId, setOpenCardId] = useState<string | null>(null);

  const toggleCard = (id: string) => {
    setOpenCardId((prev) => (prev === id ? null : id));
  };

  // Определяем, мобильное ли устройство
  const isMobile = window.innerWidth <= 768;

  return (
    <div className="section1_1">
      <Overlay imageSrc={Section1_2_image}>
        <div className="title">Почему выбирают нас</div>

        <div className="cards-container">
          <CardWithIcon
            id="comfort"
            title="С нами удобно и выгодно"
            imageSrc={FingerIcon}
            description="Клиенты ценят нас за гибкие условия и высокий уровень сервиса."
            detailContent={
              <ul>
                <li>Предоставим консультацию в формате 24\7</li>
                <li>
                  Документооборот осуществляется курьерской службой «CDEK» прямо в руки,
                  не какой почты и не каких очередей. Данная услуга совершенно бесплатна,
                  позволяет сократить сроки доставки документов, а также снимает лишнюю
                  головную боль с наших Клиентов.
                </li>
                <li>Принимаем любую форму оплаты.</li>
                <li>Предоставляем отсрочку платежа.</li>
                <li>«CASHBACK» до 10 %</li>
              </ul>
            }
            isExpanded={openCardId === "comfort"}
            onToggle={() => toggleCard("comfort")}
            isMinimized={!isMobile && openCardId && openCardId !== "comfort"}
          />

          <CardWithIcon
            id="speed"
            title="Скорость"
            imageSrc={SpeedIcon}
            description="Мы обеспечиваем быструю доставку даже на дальние расстояния."
            detailContent={
              <ul>
                <li data-list="bullet">
                  EXPRESS-доставка на расстояния более 1000 км — Ваш груз везут 2 водителя по сменно,
                  что значительно повышает скорость доставки.
                </li>
                <li data-list="bullet">
                  Более 300 проверенных и надежных партнёров по всей России и странам СНГ:
                  авто, жд и мультимодальные перевозки, что позволяет соблюдать заявленные сроки.
                </li>
                <li data-list="bullet">
                  Все разрешения на перевозку негабаритных грузов готовятся не более чем за 3 дня.
                </li>
              </ul>
            }
            isExpanded={openCardId === "speed"}
            onToggle={() => toggleCard("speed")}
            isMinimized={!isMobile && openCardId && openCardId !== "speed"}
          />

          <CardWithIcon
            id="safety"
            title="Безопасность"
            imageSrc={SafetyIcon}
            description="Мы системно подходим к вопросу безопасности грузов и клиентов."
            detailContent={
              <ul>
                <li data-list="bullet">
                  Безопасность — один из важнейших критериев ведения бизнеса. Мы подготовились к этому ещё до запуска.
                </li>
                <li data-list="bullet">
                  Собственная служба безопасности проверяет не только внутренние процессы,
                  но и работу наших Партнёров. Договоры подписываются только после одобрения.
                </li>
                <li data-list="bullet">
                  Благодаря нашим партнёрам Ваш груз находится в постоянной безопасности.
                </li>
                <li data-list="bullet">
                  Охраняемые стоянки — как на федеральных трассах, так и в пригородах —
                  позволяют водителям спокойно отдыхать перед дорогой.
                </li>
                <li data-list="bullet">
                  Только опытные водители со стажем не менее 5 лет — сохранность груза в пути гарантирована.
                </li>
                <li data-list="bullet">
                  Логисты проходят переаттестацию каждые полгода и повышают квалификацию.
                </li>
                <li data-list="bullet">
                  Соблюдение регламентов контролируется специальной системой учёта,
                  разработанной под нужды наших клиентов.
                </li>
              </ul>
            }
            isExpanded={openCardId === "safety"}
            onToggle={() => toggleCard("safety")}
            isMinimized={!isMobile && openCardId && openCardId !== "safety"}
          />
        </div>

        <div className="wrapper">
          <div className="subtitle">
            <p>Нацеленность на плодотворное и долгосрочное сотрудничество</p>
          </div>
        </div>
      </Overlay>
    </div>
  );
}