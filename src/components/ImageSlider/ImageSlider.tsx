import { useState, useEffect, useRef, useCallback } from 'react';
import './imageSlider.sass';

type ImageSliderProps = {
  images: string[];
  autoPlayInterval?: number; // в мс, по умолчанию 4000
  aspectRatio?: string; // например '1 / 1' или '4 / 3'
  minHeight?: string; // например '500px' или '300px'
  className?: string;
};

export default function ImageSlider({
  images,
  autoPlayInterval = 4000,
  aspectRatio = '1 / 1',
  minHeight = '500px',
  className = '',
}: ImageSliderProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  const intervalRef = useRef<number | null>(null);
  const touchStartX = useRef<number | null>(null);

  const totalSlides = images.length;

  const resetTimer = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    if (autoPlayInterval <= 0) return;

    intervalRef.current = window.setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, autoPlayInterval);
  }, [autoPlayInterval, totalSlides]);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    resetTimer();
  }, [totalSlides, resetTimer]);

  const goToSlide = useCallback((index: number) => {
    setCurrentIndex(index);
    resetTimer();
  }, [resetTimer]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [resetTimer]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;

    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;

    if (diff > 50) {
      nextSlide();
    } else if (diff < -50) {
      prevSlide();
    }

    touchStartX.current = null;
  };

  return (
    <div className={`image-slider-wrapper ${className}`}>
      <button
        className="image-slider-nav-button image-slider-nav-button-left"
        onClick={(e) => {
          e.stopPropagation();
          prevSlide();
        }}
        aria-label="Предыдущее изображение"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
        </svg>
      </button>

      <div
        className="image-slider"
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        onClick={nextSlide}
        role="button"
        tabIndex={0}
        aria-label="Слайдер изображений — клик или свайп для перелистывания"
        style={{
          aspectRatio: aspectRatio,
          minHeight: minHeight,
        }}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`image-slider__slide ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}
      </div>

      <button
        className="image-slider-nav-button image-slider-nav-button-right"
        onClick={(e) => {
          e.stopPropagation();
          nextSlide();
        }}
        aria-label="Следующее изображение"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <path d="M8.59 16.59L10 18l6-6-6-6-1.41 1.41L13.17 12z" />
        </svg>
      </button>

      <div className="image-slider__pagination">
        {images.map((_, index) => (
          <button
            key={index}
            className={`image-slider__pagination-item ${index === currentIndex ? 'active' : ''}`}
            onClick={(e) => {
              e.stopPropagation();
              goToSlide(index);
            }}
            aria-label={`Перейти к слайду ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}