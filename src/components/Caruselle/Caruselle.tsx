import { useEffect, useState, useRef } from "react";
import "./caruselle.sass";
import type { CaruselleItem } from "../../types/caruselle";

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
  const items = Array.isArray(children) ? children : [children];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const slideRef = useRef<HTMLDivElement>(null);

  const next = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  // Обработка свайпа
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isSwipe = Math.abs(distance) > 50; // Минимальное расстояние свайпа

    if (isSwipe && !isTransitioning) {
      if (distance > 0) {
        next(); // Свайп влево → следующий
      } else {
        prev(); // Свайп вправо ← предыдущий
      }
    }
  };

  useEffect(() => {
    if (isTransitioning && slideRef.current) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isTransitioning]);

  useEffect(() => {
    if (!autoSlide || items.length <= 1) return;

    const interval = setInterval(next, timeSlide);

    return () => clearInterval(interval);
  }, [autoSlide, timeSlide, items.length, isTransitioning]);

  return (
    <div
      className="caruselle"
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
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