import './introBlock.sass';
import RoadShow from '../../../../assets/images/roadshow.png';

export default function IntroBlock() {
  return (
    <section className="intro-block">
      <div className="intro-block__container">
        <div className="intro-block__section intro-block__section--split">
          <div className="intro-block__text-wrapper">
            <h2 className="intro-block__title intro-block__title--left">
              <span className="intro-block__title-line">ОГЛЯНИТЕСЬ ВОКРУГ</span>
            </h2>
            <div className="intro-block__text">
              <p>
                Дом, в котором Вы живёте. Дороги, по которым Вы ездите. Продукты, которыми питаетесь. Техника, которой пользуетесь. Заводы, магазины, больницы.
              </p>
              <p>
                Всё, что построено, произведено и даже утилизировано — всё это когда-то приехало на грузовике.
              </p>
              <p>
                Даже услуга, которую Вам оказали — ремонт, уборка, доставка, установка — невозможна без грузовика, который привёз материалы, инструмент или оборудование.
              </p>
              <p className="intro-block__highlight">
                Логистика — это не просто перевозки.
                <br />
                Это кровеносная система экономики, и цифры это подтверждают.
              </p>
            </div>
          </div>
          <div className="intro-block__image-wrapper">
            <img src={RoadShow} alt="Грузовик на дороге" />
          </div>
        </div>
        <div className="intro-block__section intro-block__section--right">
          <h2 className="intro-block__title intro-block__title--right">
            <span className="intro-block__title-line">Цифры, которые говорят сами за себя</span>
          </h2>

          <div className="intro-block__cards">
            <div className="intro-block__card" data-animate="fade-up">
              <div className="intro-block__card-number">2,61 <span>трлн ₽</span></div>
              <div className="intro-block__card-label">Объём рынка в 2024 году</div>
              <div className="intro-block__card-sublabel">+13% к предыдущему году</div>
            </div>

            <div className="intro-block__card" data-animate="fade-up" data-delay="100">
              <div className="intro-block__card-number">2,63 <span>трлн ₽</span></div>
              <div className="intro-block__card-label">Объём рынка в 2025 году</div>
              <div className="intro-block__card-sublabel">Несмотря на замедление темпов роста до 1%, рынок остаётся на стабильно высоком уровне</div>
            </div>

            <div className="intro-block__card" data-animate="fade-up" data-delay="200">
              <div className="intro-block__card-number">+3,5%</div>
              <div className="intro-block__card-label">Рост физического объёма перевозок</div>
              <div className="intro-block__card-sublabel">в 2025 году</div>
            </div>
          </div>

          <div className="intro-block__conclusion">
            Логистика — это огромный и растущий рынок.
          </div>
        </div>
      </div>
    </section>
  );
}