import './offerRules2.sass';
import Overlay from "../../../common/Overlay/Overlay.tsx";
import Franchise from '../../../../assets/icons/franchise_col.png';
import InvestImg from '../../../../assets/icons/invest_col.png';
import Slider2 from '../../../../assets/images/slider2.png';

export default function OfferRules2() {
  return (
    <div className="offer2">
    <Overlay
      imageSrc={Slider2}
    >
      <section className="offer-rules">
        <div className="offer-rules__container">
          <h2 className="offer-rules__title">
            <span className="offer-rules__title-line">ЧТО МЫ ПРЕДЛАГАЕМ</span>
          </h2>

          <p className="offer-rules__subtitle">
            Два направления, которые можно комбинировать
          </p>

          <div className="offer-rules__cards">
            {/* Карточка 1: Инвестиции в автопарк */}
            <div className="offer-rules__card" data-animate="fade-up">
              <div className="offer-rules__card-icon">
                <img src={InvestImg} alt='Инвестиции'/>
              </div>
              <h3 className="offer-rules__card-title">Инвестиции в автопарк из трех уровней — пассивный доход</h3>
              <ul className="offer-rules__card-list">
                <li>Вы вкладываете — мы покупаем газели — Вы получаете деньги каждый месяц</li>
                <li>+ рекламные борты</li>
              </ul>
            </div>

            {/* Карточка 2: Франшиза */}
            <div className="offer-rules__card" data-animate="fade-up" data-delay="100">
              <div className="offer-rules__card-icon">
                <img src={Franchise} alt='Франшиза'/>
              </div>
              <h3 className="offer-rules__card-title">Франшиза из трех уровней — профессиональный доход</h3>
              <ul className="offer-rules__card-list">
                <li>Вы получаете доступ ко всей системе компании: люди, инфраструктура, бренд, защита</li>
                <li>Открываете свой офис и получаете процент с команды</li>
              </ul>
            </div>
          </div>

          <div className="offer-rules__conclusion">
            Можно выбрать одно. Можно и то, и другое — тогда у Вас два потока дохода.
          </div>
        </div>
      </section>
    </Overlay>
    </div>
  );
}