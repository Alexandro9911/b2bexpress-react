import './section1_3.sass';
import { useEffect, useRef, useState } from 'react';
import PeopleImage from '../../../../assets/icons/healthcare_colored.png';
import AgreementImage from '../../../../assets/icons/agreement_colored.png';
import PadlockImage from '../../../../assets/icons/padlock_colored.png';

// Хук для отслеживания видимости элемента
function useOnScreen(ref: React.RefObject<Element>): boolean {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
}

// Компонент счётчика (без изменений)
type CounterProps = {
  end: number;
  suffix?: string;
};

function Counter({ end, suffix = '' }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isVisible = useOnScreen(ref);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 3000;
    const startTime = performance.now();

    const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

    const animate = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easedProgress = easeOutCubic(progress);
      const current = Math.floor(easedProgress * end);

      setCount(current);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [end, isVisible]);

  const formatted = Math.floor(count).toLocaleString('ru-RU');
  const displayValue = `> ${formatted}${suffix}`;
  const maxValue = `> ${end.toLocaleString('ru-RU')}${suffix}`;

  return (
    <span
      ref={ref}
      className="counter"
      aria-live="polite"
      style={{
        display: 'block',
        textAlign: 'center',
        fontVariantNumeric: 'tabular-nums',
        width: '100%',
      }}
    >
      <span
        style={{
          fontFamily: 'monospace',
          fontSize: 'inherit',
          fontWeight: 'inherit',
        }}
      >
        {displayValue}
      </span>
      <span
        aria-hidden="true"
        style={{
          display: 'inline-block',
          width: '100%',
          height: 0,
          overflow: 'hidden',
          visibility: 'hidden',
          textAlign: 'center',
          fontFamily: 'monospace',
          fontVariantNumeric: 'tabular-nums',
          lineHeight: 0,
        }}
      >
        {maxValue}
      </span>
    </span>
  );
}

export default function Section1_3() {
  // Карточки остаются в виде JSX — без преобразования в объекты
  const aboutCards = [
    // Карточка 1: иконка слева → текст справа
    <div className="about-card custom-card right-icon" key="card-1">
      {window.innerWidth <= 768 &&
      <div className="about-card__icon"><img src={PeopleImage} /></div>
      }
      <div className="custom-card__content">
        <div className="about-card__title">Наша команда</div>
        <div className="about-card__text">
          <ul className="text-with-bullets">
            <li>3 линейных руководителя, более 10-ти внимательных и пунктуальных Логистов</li>
            <li>Отдел внутренней логистики</li>
            <li>Отдел международной логистики</li>
            <li>Собственная служба безопасности</li>
            <li>Финансово-экономический отдел</li>
            <li>Дирекция по развитию</li>
            <li>Собственный юридический отдел</li>
          </ul>
        </div>
      </div>
      {window.innerWidth > 768 &&
          <div className="about-card__icon"><img src={PeopleImage}/></div>
      }
    </div>,
    // // Карточка 2: текст слева → иконка справа
    // <div className="about-card custom-card right-icon" key="card-2">
    //   {window.innerWidth <= 768 &&
    //       <div className="about-card__icon"><img src={UserImage}/></div>
    //   }
    //   <div className="custom-card__content">
    //     <div className="about-card__title">Ключевые отделы</div>
    //     <div className="about-card__text">
    //       <ul className="text-with-bullets">
    //         <li>Отдел международной логистики</li>
    //         <li>финансово-экономический отдел</li>
    //         <li>дирекция по развитию</li>
    //         <li>собственная служба безопасности</li>
    //       </ul>
    //     </div>
    //   </div>
    //   {window.innerWidth > 768 &&
    //       <div className="about-card__icon"><img src={UserImage}/></div>
    //   }
    // </div>,
    // Карточка 3: иконка слева → текст справа
    <div className="about-card custom-card left-icon" key="card-3">
      <div className="about-card__icon"><img src={AgreementImage} /></div>
      <div className="custom-card__content">
        <div className="about-card__title">Партнёры</div>
        <div className="about-card__text">
          Сотни объединённых партнёров во всех сегментах бизнеса, связанных с логистикой: стоянки, склады, порты, АЗС, СТО и др.
        </div>
      </div>
    </div>,
    // Карточка 4: текст слева → иконка справа
    <div className="about-card custom-card right-icon" key="card-4">
      {window.innerWidth <= 768 &&
          <div className="about-card__icon"><img src={PadlockImage} /></div>
      }
      <div className="custom-card__content">
        <div className="about-card__title">Ответственность за каждый этап</div>
        <div className="about-card__text">
          Мы контролируем каждый метр транспортировки Вашего груза.
        </div>
      </div>
      {window.innerWidth > 768 &&
        <div className="about-card__icon"><img src={PadlockImage} /></div>
      }
    </div>,
  ];

  // Рефы для анимации появления
  const cardRefs = aboutCards.map(() => useRef<HTMLDivElement>(null));
  const [appeared, setAppeared] = useState<boolean[]>(Array(aboutCards.length).fill(false));

  useEffect(() => {
    const observers = cardRefs.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !appeared[index]) {
            setTimeout(() => {
              setAppeared(prev => {
                const newArr = [...prev];
                newArr[index] = true;
                return newArr;
              });
            }, index * 200); // Плавное появление по очереди
            observer.unobserve(entry.target);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) observer.observe(ref.current);
      return observer;
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, [appeared]);

  return (
    <>
      {/* Блок "О нас" */}
      <div className="section1_2">
        <div className="section1_2__title">О нас</div>
        <div className="section1_2__sub-title">Мир Логистики</div>

        {/* Новый блок — карточки во всю ширину */}
        <div className="about-cards-stack">
          {aboutCards.map((card, index) => (
            <div
              key={`stacked-card-${index}`}
              ref={cardRefs[index]}
              className={`about-card-stacked ${appeared[index] ? 'visible' : ''}`}
            >
              {card}
            </div>
          ))}
        </div>
      </div>

      {/* Блок цифр — без изменений */}
      <div className="section1_2__digits">
        <div className="digits__title">Наши показатели в цифрах:</div>
        <div className="digits__items">
          <div className="digit-item">
            <div className="digit-item__title">
              <Counter end={1574000} />
            </div>
            <div className="digit-item__subtext">АВТОТРАНСПОРТОМ - более, чем на 1.574.000 км.</div>
          </div>
          <div className="digit-item">
            <div className="digit-item__title">
              <Counter end={731000} />
            </div>
            <div className="digit-item__subtext">ЖЕЛЕЗНОДОРОЖНЫМИ ПУТЯМИ - более, чем 731.000 км.</div>
          </div>
          <div className="digit-item">
            <div className="digit-item__title">
              <Counter end={74000} suffix="" />
            </div>
            <div className="digit-item__subtext">МОРСКИМИ КОНТЕЙНЕРАМИ – более, чем 74,000 м.миль.</div>
          </div>
        </div>
      </div>
    </>
  );
}