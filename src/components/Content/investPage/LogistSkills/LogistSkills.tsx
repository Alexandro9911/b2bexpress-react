import './logistSkills.sass';
import LogistImage from '../../../../assets/images/logist.jpg';

export default function LogistSkills() {
  const skills = [
    { title: 'Техники продаж', description: 'Холодные звонки, презентация, закрытие' },
    { title: 'Возражения', description: 'Отработка страхов, сомнений, отказов' },
    { title: 'Скрипты', description: 'Готовые сценарии под любую ситуацию' },
    { title: 'Регламент', description: 'Чёткая система работы с клиентом' },
    { title: 'Логистика', description: 'Подбор транспорта, маршруты, контроль' },
    { title: 'Платформы', description: 'Авито, биржи грузов, соцсети' },
    { title: 'Привлечение', description: 'Как находить заказчиков и водителей' },
    { title: 'Лайфхаки', description: 'Секреты, экономящие время и деньги' }
  ];

  // Разделяем навыки на две колонки
  const firstColumn = skills.slice(0, 4);
  const secondColumn = skills.slice(4);

  return (
    <section className="logist-skills">
      {/* Заголовок — вынесен отдельно, выравнен по правому краю */}
      <div className="logist-skills__header-wrapper">
        <h2 className="logist-skills__title">
          <span className="logist-skills__title-line">ЧТО УМЕЕТ ВАШ ЛОГИСТ ПОСЛЕ ОБУЧЕНИЯ</span>
        </h2>
      </div>

      {/* Основной контент */}
      <div className="logist-skills__container">
        <div className="logist-skills__layout">
          {/* Левая часть — изображение */}
          <div
            className="logist-skills__image"
            style={{ backgroundImage: `url(${LogistImage})` }}
          ></div>

          {/* Правая часть — навыки в двух колонках */}
          <div className="logist-skills__content">
            <ul className="logist-skills__list">
              {firstColumn.map((skill, index) => (
                <li
                  key={index}
                  className="logist-skill-item"
                  style={{ '--delay': `${index * 0.1}s` } as React.CSSProperties}
                >
                  <div className="logist-skill-item__icon">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <div className="logist-skill-item__content">
                    <h3 className="logist-skill-item__title">{skill.title}</h3>
                    <p className="logist-skill-item__description">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>

            <ul className="logist-skills__list">
              {secondColumn.map((skill, index) => (
                <li
                  key={index + 4}
                  className="logist-skill-item"
                  style={{ '--delay': `${(index + 4) * 0.1}s` } as React.CSSProperties}
                >
                  <div className="logist-skill-item__icon">
                    {String(index + 5).padStart(2, '0')}
                  </div>
                  <div className="logist-skill-item__content">
                    <h3 className="logist-skill-item__title">{skill.title}</h3>
                    <p className="logist-skill-item__description">{skill.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}