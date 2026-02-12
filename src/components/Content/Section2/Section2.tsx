import CardWithButton from "../../Cards/CardWithButton/CardWithButton.tsx";
import AutoImage from '../../../assets/images/auto-transport.jpg';
import SpecialTechImage from '../../../assets/images/special-technic.jpg';
import TrainImage from '../../../assets/images/train.jpg';
import CourierImage from '../../../assets/images/Courier.jpg';
import ShipImage from '../../../assets/images/ship.jpg';
import PlaneImage from '../../../assets/images/plane.jpg';
import Section2Image from '../../../assets/images/section2.jpg';
import React from "react";
import Overlay from "../../common/Overlay/Overlay.tsx";
import './Section2.sass'
import {OpenModal} from "../../../utils/modal.tsx";
import Caruselle from "../../Caruselle/Caruselle.tsx";

export default function Section2() {

  const data = [
    {
      imageSrc: AutoImage,
      buttonStyle: '',
      buttonText: 'Рассчитать стоимость',
      title: 'Авто',
      content: `<ul><li>Тентованные, бортовые прицепы(с конниками и без) до 30 тонн.</li><li>Контейнеровозы, лесовозы, автовозы.</li><li>Рефрижераторы, термобудки до 20 тонн.</li><li>Фуры с низкорамными платформами, тралы, телескопические фуры с выдвигающейся платформой до 90 тонн.</li><li>Самосвалы до 40 тонн.</li></ul>`
    },

    {
      imageSrc: SpecialTechImage,
      buttonStyle: '',
      buttonText: 'Рассчитать стоимость',
      title: 'Cпецтехника',
      content: `Бульдозеры<br>Манипуляторы до 5 тонн<br>Автокраны до 100 тонн<br>Экскаваторы (гусеничные, колёсные)`
    },
    {
      imageSrc: TrainImage,
      buttonStyle: '',
      buttonText: 'Рассчитать стоимость',
      title: 'ЖД',
      content: `<ul><li>Для транспортировки грузов используются только те вагоны и контейнеры, которые полностью отвечают требованиям безопасности и способны обеспечить надежную перевозку груза.</li><li> Полная независимость от погодных условий.</li><li>Высочайший уровень безопасности.</li></ul>`
    },
    {
      imageSrc: CourierImage,
      buttonStyle: '',
      buttonText: 'Рассчитать стоимость',
      title: 'Курьерская доставка',
      content: `Доставка курьером от двери до двери в любой точки России, стран СНГ, а так же Китая. Оформление заказа он-лайн, или по телефону горячей линии. Наши курьеры работают 24/7.`
    },
    {
      imageSrc: ShipImage,
      buttonStyle: '',
      buttonText: 'Рассчитать стоимость',
      title: 'Морские',
      content: `Морские контейнерные перевозки – это быстро и очень выгодно при импорте, или экспорте товара. Наша компания позволяет за день рассчитать стоимость перевозки, а так же подобрать самый короткий, надежный и выгодный маршрут. `
    },
    {
      imageSrc: PlaneImage,
      buttonStyle: '',
      buttonText: 'Рассчитать стоимость',
      title: 'Авиа',
      content: `Доставку можно скомбинировать с авто или жд перевозкой, по территории России. Таким образом осуществить доставку под ключ.<br>Мы предлагаем несколько вариантов авиа доставки грузов из стран Азии и СНГ в Россию через Владивосток в любую точку России, а так же экспорт за рубеж.`
    },

  ]

  const onClickButton = (e: React.MouseEvent<HTMLButtonElement>) => {
    OpenModal(<div>Это моя модалка</div>)
  }

  const renderCards = () => {
    return data.map((item, index) => {
      return (
        <CardWithButton
          imageSrc={item.imageSrc}
          buttonAction={onClickButton}
          buttonStyle="btn btn_size-s"
          buttonText={item.buttonText}
          title={item.title}
          key={`card-with-button_${index}`}
        >
          {item.content}
        </CardWithButton>
      )
    })
  }



  return (
    <div className="content-section section2">
      <Overlay
        imageSrc={Section2Image}
      >
        <>
          <div className="title">Услуги</div>
          <div className="cards-grid">
            {renderCards()}
          </div>
        </>
      </Overlay>
    </div>
  )
}