import './section1_3.sass';
import { useEffect, useRef, useState } from 'react';
import Caruselle from '../../Caruselle/Caruselle';

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

// Компонент счётчика
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

    let start = 0;
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
  // Карточки для карусели
  const aboutCards = [
    <div className="about-card" key="card-1">
      <div className="about-card__icon">👥</div>
      <div className="about-card__title">Наша команда</div>
      <div className="about-card__text">
        3 линейных руководителя, более 30-ти внимательных и пунктуальных Логистов
      </div>
    </div>,
    <div className="about-card" key="card-2">
      <div className="about-card__icon">📦</div>
      <div className="about-card__title">Ключевые отделы</div>
      <div className="about-card__text">
        Отдел международной логистики, финансово-экономический отдел, дирекция по развитию, собственная служба безопасности
      </div>
    </div>,
    <div className="about-card" key="card-3">
      <div className="about-card__icon">🤝</div>
      <div className="about-card__title">Партнёры</div>
      <div className="about-card__text">
        Сотни объединённых партнёров во всех сегментах бизнеса, связанных с логистикой: стоянки, склады, порты, АЗС, СТО и др.
      </div>
    </div>,
    <div className="about-card" key="card-4">
      <div className="about-card__icon">📍</div>
      <div className="about-card__title">Наше обещание</div>
      <div className="about-card__text">
        Мы контролируем каждый метр транспортировки Вашего груза.
      </div>
    </div>,
  ];

  // Адаптив: количество карточек на слайд
  const [slides, setSlides] = useState<JSX.Element[]>([]);
  // Адаптив: показывать ли кнопки
  const [showButtons, setShowButtons] = useState(true);

  useEffect(() => {
    const updateLayout = () => {
      // Меняем поведение: планшеты и меньше — 1 карточка
      const isTabletOrSmaller = window.innerWidth < 1025;
      const chunkSize = isTabletOrSmaller ? 1 : 2;

      // Группировка слайдов
      const newSlides = [];
      for (let i = 0; i < aboutCards.length; i += chunkSize) {
        const group = aboutCards.slice(i, i + chunkSize);
        newSlides.push(
          <div className="about-slide" key={`slide-${i}`}>
            {group}
          </div>
        );
      }
      setSlides(newSlides);

      // Кнопки: только на десктопе
      setShowButtons(!isTabletOrSmaller);
    };

    updateLayout();
    window.addEventListener('resize', updateLayout);
    return () => window.removeEventListener('resize', updateLayout);
  }, []);

  return (
    <>
      {/* Блок "О нас" */}
      <div className="section1_2">
        <div className="section1_2__title">О нас</div>

        {/* Карусель из карточек */}
        <div className="section1_2__carousel">
          <Caruselle autoSlide={true} timeSlide={5000} showDots={true} showButtons={showButtons}>
            {slides}
          </Caruselle>
        </div>
      </div>

      {/* Блок цифр */}
      <div className="section1_2__digits">
        <div className="digits__title">Наши показатели в цифрах:</div>
        <div className="digits__items">
          <div className="digit-item">
            <div className="digit-item__title">
              <Counter end={1574000} />
            </div>
            <div className="digit-item__subtext">АВТОТРАНСПОРТОМ - более чем на 1.574.000 км.</div>
          </div>
          <div className="digit-item">
            <div className="digit-item__title">
              <Counter end={731000} />
            </div>
            <div className="digit-item__subtext">ЖЕЛЕЗНОДОРОЖНЫМИ ПУТЯМИ - более чем 731.000 км.</div>
          </div>
          <div className="digit-item">
            <div className="digit-item__title">
              <Counter end={74000} suffix="" />
            </div>
            <div className="digit-item__subtext">МОРСКИМИ КОНТЕЙНЕРАМИ – более чем 74,000 м.миль.</div>
          </div>
        </div>
      </div>
    </>
  );
}