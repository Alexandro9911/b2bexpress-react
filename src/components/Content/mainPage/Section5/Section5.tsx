import './section5.sass';
import { useState } from 'react';
import ImageSlider from '../../../ImageSlider/ImageSlider.tsx';

import Live1Img from '../../../../assets/images/live/live1.jpg';
import Live2Img from '../../../../assets/images/live/live2.jpg';
import Live3Img from '../../../../assets/images/live/live3.jpg';
import Live4Img from '../../../../assets/images/live/live4.jpg'; // босс2 заглавная 2 ряд
import Live5Img from '../../../../assets/images/live/live5.jpg';
import Live6Img from '../../../../assets/images/live/live6.jpg';
import Live7Img from '../../../../assets/images/live/live7.jpg';
import Live8Img from '../../../../assets/images/live/live8.jpg';
import Live9Img from '../../../../assets/images/live/live9.jpg';
import Live10Img from '../../../../assets/images/live/live10.jpg';
import Live11Img from '../../../../assets/images/live/live11.jpg'; // босс 1 заглавная 1 ряд
import Live12Img from '../../../../assets/images/live/live12.jpg';
import Live14Img from '../../../../assets/images/live/live14.jpg';
import Live15Img from '../../../../assets/images/live/live15.jpg';
import Live16Img from '../../../../assets/images/live/live16.jpg';  // вратарь
import Live17Img from '../../../../assets/images/live/live17.jpg';
import Live18Img from '../../../../assets/images/live/live18.jpg';  // вратарь
import Live19Img from '../../../../assets/images/live/live19.jpg'; // вратарь заглавная 3 ряд
import Live20Img from '../../../../assets/images/live/live20.jpg';

function ZoomableImage({ src, alt }: { src: string; alt: string }) {
  const [zoomed, setZoomed] = useState(false);

  const handleClick = () => setZoomed(true);
  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setZoomed(false);
  };

  return (
    <>
      <div className="section5__single-image-wrapper" onClick={handleClick}>
        <img src={src} alt={alt} className="section5__single-image" loading="lazy" />
      </div>

      {zoomed && (
        <div className="section5__lightbox" onClick={handleClose}>
          <div className="section5__lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button className="section5__lightbox-close" onClick={handleClose} aria-label="Закрыть">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="32" height="32">
                <path
                  d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"
                  fill="white"
                />
              </svg>
            </button>
            <img src={src} alt={alt} className="section5__lightbox-image" />
          </div>
        </div>
      )}
    </>
  );
}

export default function Section5() {
  const slider1Images = [Live4Img, Live1Img, Live2Img, Live3Img, Live5Img];
  const slider2Images = [Live11Img, Live7Img, Live8Img, Live9Img, Live10Img, Live17Img];
  const slider3Images = [Live20Img, Live12Img, Live14Img, Live15Img, Live6Img];
  const singleImages = [Live16Img, Live18Img, Live19Img];

  return (
    <div className="section5">
      <div className="section5__container">
        <h2 className="section5__title block-title">Жизнь компании</h2>
        <div className="section5__block section5__block-text-left section5__block-first">
          <div className="section5__text">
            <p>
              «МИР ЛОГИСТИКИ» — многогранная организация, нацеленная на поддержку детского,
              юношеского и взрослого спорта. Мы с радостью участвуем в финансировании и организации
              соревнований различного уровня. Надеемся, что наш пример послужит толчком для
              спонсирования спорта как молодым предпринимателям, так и крупным компаниям.
            </p>
            <p>
              На данный момент мы выступаем спонсором хоккейной команды «Бастион 1703». При нашей
              поддержке команда принимала участие в международных соревнованиях в Сербии, в городе
              Белграде, а также постоянно выступает в региональной хоккейной лиге.
            </p>
            <p>
              В составе «Бастиона 1703» играют три сотрудника нашей компании, включая генерального
              директора «МИР ЛОГИСТИКИ». Мы не просто выделяем финансирование — мы сами выходим на
              лёд и участвуем в организации турниров.
            </p>
          </div>
          <div className="section5__slider section5__slider-large">
            <ImageSlider
              images={slider1Images}
              autoPlayInterval={20000}
              aspectRatio="3 / 4"
              minHeight="450px"
            />
          </div>
        </div>

        <div className="section5__block section5__block-text-right">
          <div className="section5__slider section5__slider-large">
            <ImageSlider
              images={slider2Images}
              autoPlayInterval={20000}
              aspectRatio="3 / 4"
              minHeight="450px"
            />
          </div>
          <div className="section5__text additional-mardin">
            <h3 className="section5__subtitle">Приглашение к партнёрству</h3>
            <p>
              «МИР ЛОГИСТИКИ» приглашает российский бизнес стать партнёрами и спонсорами хоккейной
              команды «Бастион 1703».
            </p>
            <p>Мы предлагаем размещение вашей рекламы:</p>
            <ul className="section5__list">
              <li>на игровой форме,</li>
              <li>на баннерах во время выездных соревнований,</li>
              <li>в информационных и фото-материалах команды.</li>
            </ul>
          </div>
        </div>

        <div className="section5__single-images-row">
          {singleImages.map((img, index) => (
            <ZoomableImage key={index} src={img} alt={`Фото ${index + 1}`} />
          ))}
        </div>

        <div className="section5__block section5__block-text-left">
          <div className="section5__text">
            <p>
              География выездных игр очень широкая. У команды есть своё объединение болельщиков и
              путешественников — фан-кэмп, который организует поездки на матчи и создаёт движение
              вокруг клуба.
            </p>
            <p>
              «Бастион 1703» регулярно выезжает на товарищеские встречи между фан-кэмпами разных
              городов:
            </p>
            <ul className="section5__list section5__list-cities">
              <li>Москва (регулярно)</li>
              <li>Череповец</li>
              <li>Кировск</li>
              <li>Иваново</li>
              <li>Псков</li>
              <li>Смоленск</li>
              <li>Минск</li>
            </ul>
            <p>
              Таким образом, ваш бизнес получает узнаваемость по всей стране и даже за рубежом.
            </p>
          </div>
          <div className="section5__slider section5__slider-medium">
            <ImageSlider
              images={slider3Images}
              autoPlayInterval={20000}
              aspectRatio="3 / 4"
              minHeight="350px"
            />
          </div>
        </div>

        <div className="section5__cta">
          <p>
            «МИР ЛОГИСТИКИ» нацелен на формирование здоровой нации и приглашает российский бизнес
            своим участием развивать спорт. Неважно, какой вид спорта вам близок — важен сам принцип:
            мы поддерживаем тех, кто не боится двигаться вперёд, кто идёт навстречу новым вызовам,
            новым высотам и новым победам.
          </p>
          <p className="section5__cta-highlight">Присоединяйтесь. Вместе мы сильнее.</p>
        </div>
      </div>
    </div>
  );
}