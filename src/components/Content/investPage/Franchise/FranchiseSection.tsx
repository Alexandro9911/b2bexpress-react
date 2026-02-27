import './franchiseSection.sass';
import Overlay from '../../../common/Overlay/Overlay.tsx';
import ImageOverlay from '../../../../assets/images/slider2.png';

export default function FranchiseSection() {
  const items = [
    { icon: '👥', label: 'Люди', text: 'Обученные логисты под ключ (1/2/5 человек), 1 месяц обучения' },
    { icon: '🧑‍⚖️', label: 'Юридическая помощь', text: 'Договоры, споры, консультации' },
    { icon: '📊', label: 'Бухгалтерия', text: 'Налоги, отчёты, документы' },
    { icon: '🚔', label: 'Служба безопасности', text: 'Проверка клиентов и исполнителей' },
    { icon: '💰', label: 'Финансовые риски', text: 'Компания берёт на себя после проверки' },
    { icon: '🚀', label: 'Право открыть офис', text: 'В любом городе' },
    { icon: '🔥', label: 'Бренд', text: 'Вы работаете под именем «Мир Логистики»' }
  ];

  const firstRow = items.slice(0, 4);
  const secondRow = items.slice(4);

  return (
    <div className="section-with-overlay">
      <Overlay imageSrc={ImageOverlay}>
        <section className="franchise-section">
          <div className="franchise-section__header-wrapper">
            <h2 className="franchise-section__title">
              <span className="franchise-section__title-line">ФРАНШИЗА «МИР ЛОГИСТИКИ»</span>
            </h2>
          </div>

          <div className="franchise-section__container">
            <p className="franchise-section__subtitle">
              Три уровня доступа:
            </p>

            <div className="franchise-section__table">
              <div className="franchise-table__header">
                <div className="franchise-table__cell">Уровень</div>
                <div className="franchise-table__cell">Стоимость</div>
                <div className="franchise-table__cell">Что Вы получаете</div>
                <div className="franchise-table__cell">Ваш доход</div>
              </div>

              {[
                {
                  name: 'Базовый',
                  price: '500 000 ₽',
                  get: '1 готовый логист под ключ',
                  income: '80% с его работы'
                },
                {
                  name: 'Оптимальный',
                  price: '900 000 ₽',
                  get: '2 готовых логиста под ключ',
                  income: '85% с каждого'
                },
                {
                  name: 'Максимальный',
                  price: '2 000 000 ₽',
                  get: '5 готовых логистов под ключ',
                  income: '90% с каждого',
                  bonus: '📢 1 газель под Вашу рекламу на 4 года'
                }
              ].map((level, index) => (
                <div key={index} className="franchise-table__row">
                  <div className="franchise-table__cell">
                    <span className="franchise-table__cell-title">Уровень</span>
                    <span className="franchise-table__cell-value">{level.name}</span>
                  </div>
                  <div className="franchise-table__cell">
                    <span className="franchise-table__cell-title">Стоимость</span>
                    <span className="franchise-table__cell-value">{level.price}</span>
                  </div>
                  <div className="franchise-table__cell">
                    <span className="franchise-table__cell-title">Что Вы получаете</span>
                    <span className="franchise-table__cell-value">{level.get}</span>
                    {level.bonus && <div className="franchise-table__bonus">{level.bonus}</div>}
                  </div>
                  <div className="franchise-table__cell">
                    <span className="franchise-table__cell-title">Ваш доход</span>
                    <span className="franchise-table__cell-value">{level.income}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="franchise-section__included">
              <h3 className="franchise-section__included-title">
                Что входит в любой уровень:
              </h3>

              <div className="franchise-included-row">
                {firstRow.map((item, index) => (
                  <div key={index} className="franchise-included-item">
                    <div className="franchise-included-item__icon">{item.icon}</div>
                    <div className="franchise-included-item__label">{item.label}</div>
                    <div className="franchise-included-item__text">{item.text}</div>
                  </div>
                ))}
              </div>

              <div className="franchise-included-row franchise-included-row--centered">
                {secondRow.map((item, index) => (
                  <div key={index} className="franchise-included-item">
                    <div className="franchise-included-item__icon">{item.icon}</div>
                    <div className="franchise-included-item__label">{item.label}</div>
                    <div className="franchise-included-item__text">{item.text}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </Overlay>
    </div>
  );
}