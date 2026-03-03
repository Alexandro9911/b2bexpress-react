import './investList.sass';
import InvestCard from './InvestCard';
import Card1 from '../../../../assets/images/card1.jpg';
import Card2 from '../../../../assets/images/card2.jpg';
import Card3 from '../../../../assets/images/card3.jpg';
import CheckIcon from '../../../../assets/icons/check.png';

export default function InvestList() {
  const cards = [
    {
      id: '1',
      title: 'МИР ИНВЕСТИЦИЙ — 2 000 000 ₽',
      subtitle: 'Пассивный доход:',
      income: [
        '100 000 ₽ каждый месяц — 4 года',
        '1 200 000 ₽ за первый год',
        '4 800 000 ₽ за 4 года'
      ],
      profit: '+140%',
      adTitle: 'Рекламный пакет:',
      ads: ['📢 2 газели под Вашу рекламу на 4 года', 'Рекламу можно продавать — это Ваш дополнительный доход'],
      extra: '🔹 Франшиза приобретается отдельно.',
      image: Card1,
      backPath: (
        <div className="invest-card__back-content-block">
          <p className="invest-card__back-highlight">Пассивный доход + доступ к франшизе. 80% маржинальность</p>
          <ul className="invest-card__back-list">
            <li>Вы вкладываете в автопарк — мы покупаем газели.</li>
            <li>Каждый месяц Вы получаете доход.</li>
            <li>Ваше участие не требуется — система работает автоматически.</li>
          </ul>
          <p className="invest-card__back-highlight">У Вас есть доступ к франшизе.</p>
          <ul className="invest-card__back-list">
            <li>Вы можете в любой момент:</li>
            <li>открыть свой офис</li>
            <li>нанять людей</li>
            <li>обучать их самостоятельно</li>
          </ul>
          <p className="invest-card__back-text">
            Мы передаём Вам методичку, скрипты, регламенты и доступ к инфраструктуре.
            Но сам процесс обучения — полностью под Вашу ответственность.
          </p>
          <p className="invest-card__back-text">
            Вы сами выбираете: просто получать доход или строить бизнес своим темпом.
          </p>
        </div>
      )
    },
    {
      id: '2',
      title: 'МИР ПАРТНЕРСТВА — 3 000 000 ₽',
      subtitle: 'Пассивный доход:',
      income: [
        '1-й год: 190 000 ₽/мес',
        '2–4 годы: 140 000 ₽/мес',
        '2 280 000 ₽ за первый год',
        '7 320 000 ₽ за 4 года'
      ],
      profit: '+144%',
      adTitle: 'Рекламный пакет:',
      ads: ['📢 3 газели под Вашу рекламу на 4 года', 'Рекламу можно продавать — это Ваш дополнительный доход'],
      extra: '➕Уже включена в стоимость франшиза «Мир Логистики» на обучение 1 логиста, что дает возможность получать дополнительный доход от собственной команды',
      image: Card2,
      backPath: (
        <div className="invest-card__back-content-block">
          <p className="invest-card__back-highlight">Пассивный доход + обучение 3 логистов под ключ. 85% маржинальность</p>
          <ul className="invest-card__back-list">
            <li>Вы получаете пассивный доход от автопарка.</li>
            <li>И одновременно мы обучаем трёх человек по Вашей заявке — полностью под ключ.</li>
            <li>Обучение логистов может проходить как в нашем офисе, так и прямо у Вас. Выбор места проведения обучения
              остается за вами
            </li>
          </ul>
          <p className="invest-card__back-highlight">После обучения они готовы работать в Вашем офисе:</p>
          <ul className="invest-card__back-list">
            <li>владеют скриптами и техниками продаж</li>
            <li>отрабатывают любые возражения</li>
            <li>работают с платформами (Авито, биржи, соцсети)</li>
            <li>знают логистику и лайфхаки рынка</li>
          </ul>
          <p className="invest-card__back-text">
            Вы получаете готовую мини‑команду, которая сразу приносит прибыль.
          </p>
          <p className="invest-card__back-text invest-card__back-text--highlighted">
            Максимальный пассив + масштаб + доход.
          </p>
        </div>
      )
    },
    {
      id: '3',
      title: 'МИР ЛОГИСТИКИ — 5 000 000 ₽',
      subtitle: 'Пассивный доход:',
      income: [
        '1-й год: 300 000 ₽/мес',
        '2–5 годы: 200 000 ₽/мес',
        '3 600 000 ₽ за первый год',
        '13 200 000 ₽ за 5 лет'
      ],
      profit: '+164%',
      adTitle: 'Рекламный пакет:',
      ads: ['📢 5 газелей под Вашу рекламу на 5 лет', 'Рекламу можно продавать — это Ваш дополнительный доход'],
      extra: '➕Уже включена в стоимость франшиза «Мир Логистики» на обучение 3 логистов, что дает возможность получать дополнительный доход от собственной команды',
      image: Card3,
      backPath: (
        <div className="invest-card__back-content-block">
          <p className="invest-card__back-highlight">Пассивный доход + обучение 5 логистов под ключ. 90% маржинальность</p>
          <ul className="invest-card__back-list">
            <li>Вы получаете пассивный доход от автопарка.</li>
            <li>И одновременно мы обучаем пять человек по Вашей заявке — полностью под ключ.</li>
            <li>Обучение логистов может проходить как в нашем офисе, так и прямо у Вас. Выбор места проведения обучения остается за вами</li>
          </ul>
          <p className="invest-card__back-highlight">Вы открываете офис с полноценной командой.</p>
          <p className="invest-card__back-text">Каждый логист:</p>
          <ul className="invest-card__back-list">
            <li>прошёл полное обучение</li>
            <li>работает с клиентами и водителями</li>
            <li>закрывает сделки</li>
            <li>экономит Ваше время и деньги</li>
          </ul>
          <p className="invest-card__back-text invest-card__back-text--highlighted">
            Максимальный пассив + масштаб + доход.
          </p>
        </div>
      )
    }
  ];

  return (
    <section className="invest-list">
      <div className="invest-list__container">
        <h2 className="invest-list__title">
          <span className="invest-list__title-line">ИНВЕСТИЦИОННЫЕ КАРТЫ</span>
        </h2>

        <p className="invest-list__subtitle">
          Три уровня участия в бизнесе с гарантированным доходом
        </p>

        <div className="invest-list__cards">
          {cards.map((card) => (
            <InvestCard
              key={card.id}
              {...card}
            />
          ))}
        </div>

        {/* Обновлённый блок conclusion */}
        <div className="invest-list__conclusion">
          <div className="invest-list__conclusion-content">
            <img src={CheckIcon} alt="Преимущества" className="invest-list__conclusion-image" />
            <ul className="invest-list__conclusion-list">
              <li>Всё можно комбинировать</li>
              <li>Все цифры фиксированы</li>
              <li>Никаких «от прибыли» — только чёткие выплаты</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}