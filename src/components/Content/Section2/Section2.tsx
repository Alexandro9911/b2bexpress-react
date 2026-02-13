import React, { useEffect, useRef, useState } from 'react';
import AutoImage from '../../../assets/icons/truck.png';
import SpecialTechImage from '../../../assets/icons/digger.png';
import TrainImage from '../../../assets/icons/train.png';
import CourierImage from '../../../assets/icons/courier.png';
import ShipImage from '../../../assets/icons/ship.png';
import PlaneImage from '../../../assets/icons/plane.png';
import Section2Image from '../../../assets/images/section2.jpg';
import Overlay from '../../common/Overlay/Overlay.tsx';
import { OpenModal } from '../../../utils/modal.tsx';
import './Section2.sass';

interface Service {
  imageSrc: string;
  title: string;
  content: string;
  buttonText: string;
}

export default function Section2() {
  const [visibleItems, setVisibleItems] = useState<Record<number, boolean>>({});

  // Создаём массив ref'ов безопасно — через useRef и инициализацию при первом рендере
  const containerRef = useRef<HTMLDivElement>(null);
  const blockRefs = useRef<(HTMLDivElement | null)[]>([]);

  const data: Service[] = [
    {
      imageSrc: AutoImage,
      title: 'Авто',
      content: `
        <ul>
          <li>Тентованные, бортовые прицепы (с конниками и без) до 30 тонн.</li>
          <li>Контейнеровозы, лесовозы, автовозы.</li>
          <li>Рефрижераторы, термобудки до 20 тонн.</li>
          <li>Фуры с низкорамными платформами, тралы до 90 тонн.</li>
          <li>Самосвалы до 40 тонн.</li>
        </ul>
      `,
      buttonText: 'Рассчитать стоимость',
    },
    {
      imageSrc: SpecialTechImage,
      title: 'Спецтехника',
      content: `
        <ul>
          <li>Бульдозеры</li>
          <li>Манипуляторы до 5 тонн</li>
          <li>Автокраны до 100 тонн</li>
          <li>Экскаваторы (гусеничные, колёсные)</li>
        </ul>
      `,
      buttonText: 'Рассчитать стоимость',
    },
    {
      imageSrc: TrainImage,
      title: 'ЖД',
      content: `
        <ul>
          <li>Вагоны и контейнеры — только безопасные.</li>
          <li>Полная независимость от погоды.</li>
          <li>Высочайший уровень безопасности.</li>
        </ul>
      `,
      buttonText: 'Рассчитать стоимость',
    },
    {
      imageSrc: CourierImage,
      title: 'Курьерская доставка',
      content: `
        Доставка от двери до двери по России, СНГ и Китаю. 
        Оформление онлайн или по телефону. Курьеры работают 24/7.
      `,
      buttonText: 'Рассчитать стоимость',
    },
    {
      imageSrc: ShipImage,
      title: 'Морские',
      content: `
        Быстро и выгодно. Импорт и экспорт. 
        Расчёт стоимости за день. Подбор оптимального маршрута.
      `,
      buttonText: 'Рассчитать стоимость',
    },
    {
      imageSrc: PlaneImage,
      title: 'Авиа',
      content: `
        Комбинируем с авто или ЖД — доставка «под ключ». 
        Экспорт и импорт через Владивосток в любую точку.
      `,
      buttonText: 'Рассчитать стоимость',
    },
  ];

  const onClickButton = () => {
    OpenModal(<div>Расчёт стоимости</div>);
  };

  // Инициализация refs при первом рендере
  useEffect(() => {
    blockRefs.current = blockRefs.current.slice(0, data.length);
  }, [data.length]);

  // Наблюдение за каждым блоком
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = Number(entry.target.getAttribute('data-index'));
          if (entry.isIntersecting) {
            setTimeout(() => {
              setVisibleItems((prev) => ({ ...prev, [index]: true }));
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    blockRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="content-section section2">
      <Overlay imageSrc={Section2Image}>
        <h2 className="section-title">Наши услуги</h2>
        <div className="services-list" ref={containerRef}>
          {data.map((item, index) => (
            <div
              key={index}
              ref={(el) => (blockRefs.current[index] = el)} // Безопасное присвоение ref
              data-index={index}
              className={`service-block ${index % 2 === 0 ? 'image-left' : 'image-right'} ${visibleItems[index] ? 'visible' : ''}`}
            >
              {/* Изображение с эффектом liquid glass */}
              <div className="service-image-wrapper">
                <img src={item.imageSrc} alt={item.title} className="service-image" />
              </div>

              {/* Контент: заголовок, текст, кнопка */}
              <div className="service-content">
                <h3 className="service-title">{item.title}</h3>
                <div
                  className="service-text"
                  dangerouslySetInnerHTML={{ __html: item.content }}
                />
                <button className="btn btn_size-s service-button" onClick={onClickButton}>
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </Overlay>
    </div>
  );
}