import { useEffect, useState, useRef } from "react";
import "./caruselle.sass";
import type {CaruselleItem} from "../../types/caruselle";

type Props = {
  children: CaruselleItem | CaruselleItem[];
  autoSlide?: boolean;
  showButtons?: boolean;
  timeSlide?: number;
  showDots?: boolean;
};

export default function Caruselle({
  children,
  autoSlide = false,
  showButtons = true,
  timeSlide = 5000,
  showDots = true,
}: Props) {
  // Приводим children к массиву
  const items = Array.isArray(children) ? children : [children];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  // Переключение на следующий слайд
  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  // Переключение на предыдущий
  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Обработчик окончания анимации
  useEffect(() => {
    if (isTransitioning && slideRef.current) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500); // Должно совпадать с transition в CSS
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  // Автопрокрутка
  useEffect(() => {
    if (!autoSlide || items.length <= 1) return;

    const interval = setInterval(next, timeSlide);

    return () => clearInterval(interval);
  }, [autoSlide, timeSlide, items.length, isTransitioning]);

  // Остановка автопрокрутки при ручном вмешательстве
  useEffect(() => {
    if (autoSlide && isTransitioning) {
      // Можно добавить паузу при взаимодействии
    }
  }, [isTransitioning, autoSlide]);

  return (
    <div className="caruselle">
      {/* Контейнер слайдов */}
      <div
        className="caruselle-track"
        ref={slideRef}
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
          transition: isTransitioning ? "transform 0.5s ease-in-out" : "none",
        }}
      >
        {items.map((item, index) => (
          <div className="caruselle-slide" key={index}>
            {item}
          </div>
        ))}
      </div>

      {/* Кнопки навигации */}
      {showButtons && items.length > 1 && (
        <>
          <button className="caruselle-btn caruselle-btn-prev" onClick={prev}>
            ◀
          </button>
          <button className="caruselle-btn caruselle-btn-next" onClick={next}>
            ▶
          </button>
        </>
      )}

      {/* Точки-пагинация */}
      {showDots && items.length > 1 && (
        <div className="caruselle-dots">
          {items.map((_, i) => (
            <button
              key={i}
              className={`caruselle-dot ${i === currentIndex ? "active" : ""}`}
              onClick={() => {
                if (!isTransitioning && i !== currentIndex) {
                  setIsTransitioning(true);
                  setCurrentIndex(i);
                }
              }}
              aria-label={`Перейти к слайду ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}