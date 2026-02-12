import './section1_3.sass';
import About1 from '../../../assets/images/about-us-1.png';
import About2 from '../../../assets/images/about-us-2.png';
import About3 from '../../../assets/images/about-us-3.png';

export default function Section1_3(){
  return (
    <>
      <div className="section1_2">
        <div className="section1_2__title">
          О нас
        </div>
        <div className="section1_2__content">
          ООО «Поволжское Транспортное Объединение» – это 3 линейных руководителя,
          более 30-ти внимательных и пунктуальных Логистов, а так же отдел международной
          логистики, финансово - экономический отдел, дирекция по развитию, собственная
          служба безопасности, а так же сотни объединенных партнеров во всех сегментах
          бизнеса связанных с логистикой, такие как стоянки, склады, порты, АЗС, СТО и.д.
          Мы контролируем каждый метр транспортировки Вашего груза.
        </div>
      </div>
      <div className="section1_2__images">
        <div className="wrapper">
          <div className="image-container">
            <img src={About1} alt="картинка 1"/>
            <img src={About2} alt="картинка 2"/>
            <img src={About3} alt="картинка 3"/>
          </div>
        </div>
      </div>
      <div className="section1_2__digits">
        <div className="digits__title">Наши показатели в цифрах: </div>
        <div className="digits__items">
          <div className="digit-item">
            <div className="digit-item__title"> {'>'} 1 574 000</div>
            <div className="digit-item__subtext">АВТОТРАНСПОРТОМ - более чем на 1.574.000 км.</div>
          </div>
          <div className="digit-item">
            <div className="digit-item__title"> {'>'} 731 000</div>
            <div className="digit-item__subtext">ЖЕЛЕЗНОДОРОЖНЫМИ ПУТЯМИ - более чем 731.000 км.</div>
          </div>
          <div className="digit-item">
            <div className="digit-item__title"> {'>'} 74 000</div>
            <div className="digit-item__subtext">МОРСКИМИ КОНТЕЙНЕРАМИ – более чем 74,000 м.миль.</div>
          </div>
        </div>
      </div>
    </>
  )
}