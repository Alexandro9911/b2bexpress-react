import "./section1_1.sass";

export default function Section1_1() {
  return (
    <div className="container-content">
      <div className="section1">
        <div className="section1__title">
          Наше видение - быть ключевым партнером в комплексной логистике по России и Международным направлениям, осуществляя высокое качество обслуживания.
        </div>
        <div className="section1__content">
          <p>
            ООО «Мир Логистики» создано с целью реконструкции логистики в Российской Федерации, в СНГ и странах ближней Азии.
          </p>

          <p>
            Также мы первые в России запустили всем знакомую систему «CASHBACK» в мире логистики.
          </p>

          <p>
            Для того, чтобы воспользоваться бонусом «CASHBACK»<br/> до 10 %, необходимо всего лишь связаться
          </p>

          <p className="contact-info">
            по горячей линии{" "}
            <a href="tel:88004441098" className="contact-link">
              8 (800) 444 10 98
            </a>,
            <br />
            {" "}или электронной почте{" "}
            <a href="mailto:mir_logistiki01@bk.ru" className="contact-link">
              mir_logistiki01@bk.ru
            </a>
            <br />
            {" "}и сделать первый заказ.
          </p>

          <p>
            После чего мы автоматически зачисляем бонусы на Ваш лицевой счет, которым Вы можете воспользоваться в любую из последующих поездок.
          </p>
        </div>
      </div>
    </div>
  );
}