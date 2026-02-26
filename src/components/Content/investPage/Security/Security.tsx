import './security.sass';
import Overlay from '../../../common/Overlay/Overlay.tsx';
import BackgroundImage from '../../../../assets/images/bigCarWithLogo.jpg';

export default function Security() {
  const items = [
    'Договор займа — деньги в компании с историей',
    'Личное поручительство — владелец отвечает своим имуществом',
    'Залог прав на автомобили — реестр нотариуса',
    'Страхование всех рисков — ДТП, угон',
    'Служба безопасности — проверка клиентов и исполнителей',
    'Финансовые риски — компания берёт на себя после проверки'
  ];

  return (
    <section className="security">
      <Overlay imageSrc={BackgroundImage}>
        {/* Контейнер для правого выравнивания всего содержимого */}
        <div className="security__content-wrapper">
          {/* Заголовок — по правому краю */}
          <div className="security__header-wrapper">
            <h2 className="security__title">
              <span className="security__title-line">ПОЛНАЯ ЗАЩИТА</span>
            </h2>
          </div>

          {/* Основной контент — правая половина */}
          <div className="security__container">
            <ul className="security__list">
              {items.map((text, index) => (
                <li
                  key={index}
                  className="security__item"
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <span className="security__icon">🛡</span>
                  <span className="security__text">{text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Overlay>
    </section>
  );
}