import './noObligations.sass';
import CarImage from '../../../../assets/images/carWithLogo.jpg';

export default function NoObligations() {
  const items = [
    'Не ищете водителей',
    'Не ищете клиентов',
    'Не контролируете рейсы',
    'Не платите налоги',
    'Не ведёте бухгалтерию',
    'Не проверяете контрагентов',
    'Не несёте финансовые риски',
    'Не решаете вопросы с ремонтами, ДТП, страховками',
    'Не обязаны открывать офис',
    'Не обязаны учиться'
  ];

  return (
    <section className="no-obligations">
      {/* Заголовок — вынесен отдельно, по левому краю */}
      <div className="no-obligations__header-wrapper">
        <h2 className="no-obligations__title">
          <span className="no-obligations__title-line">ЧТО ВЫ НЕ ДЕЛАЕТЕ</span>
        </h2>
      </div>

      {/* Основной макет: текст + изображение */}
      <div className="no-obligations__layout">
        {/* Левая часть — список */}
        <div className="no-obligations__content">
          <ul className="no-obligations__list">
            {items.map((text, index) => (
              <li key={index} className="no-obligations__item">
                <span className="no-obligations__icon">❌</span>
                <span className="no-obligations__text">{text}</span>
              </li>
            ))}
          </ul>

          {/* Финальное утверждение */}
          <div className="no-obligations__final">
            <span className="no-obligations__final-icon">✅</span>
            <p className="no-obligations__final-text">
              Вы просто получаете деньги. Всё остальное — по желанию.
            </p>
          </div>
        </div>

        {/* Правая часть — изображение */}
        <div
          className="no-obligations__image"
          style={{ backgroundImage: `url(${CarImage})` }}
        ></div>
      </div>
    </section>
  );
}