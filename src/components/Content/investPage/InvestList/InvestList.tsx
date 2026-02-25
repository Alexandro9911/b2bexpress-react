import './investList.sass';
import InvestCard from './InvestCard';
import { useState } from 'react';
import Card1 from '../../../../assets/images/card1.jpg';
// import Card2 from '../../../../assets/images/card2.jpg';
// import Card3 from '../../../../assets/images/card3.jpg';

export default function InvestList() {
  const [flippedCardId, setFlippedCardId] = useState<string | null>(null);

  const cards = [
    {
      id: '1',
      title: 'МИР ПАРТНЁРСТВА — 2 000 000 ₽',
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
      image: Card1
    },
    {
      id: '2',
      title: 'МИР ИНВЕСТИЦИЙ — 3 000 000 ₽',
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
      extra: '➕ Дополнительно: Вы можете приобрести франшизу «Мир Логистики» и получать второй доход от собственной команды.',
      image: Card1
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
      extra: '➕ Дополнительно: Вы можете приобрести франшизу «Мир Логистики» и получать второй доход от собственной команды.',
      image: Card1
    }
  ];

  const handleCardFlip = (cardId: string) => {
    setFlippedCardId(flippedCardId === cardId ? null : cardId);
  };

  return (
    <section className="invest-list">
      <div className="invest-list__container">
        <h2 className="invest-list__title">
          <span className="invest-list__title-line">ИНВЕСТИЦОННЫЕ КАРТЫ</span>
        </h2>

        <p className="offer-rules__subtitle">
          Три уровня участия в бизнесе с гарантированным доходом
        </p>

        <div className="invest-list__cards">
          {cards.map((card) => (
            <InvestCard
              key={card.id}
              {...card}
              isFlipped={flippedCardId === card.id}
              onFlip={() => handleCardFlip(card.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}