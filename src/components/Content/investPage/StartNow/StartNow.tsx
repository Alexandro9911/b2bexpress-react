import './startNow.sass';

export default function StartNow() {
  return (
    <section className="start-now">
      {/* Заголовок — по правой стороне */}
      <div className="start-now__header-wrapper">
        <h2 className="start-now__title">
          <span className="start-now__title-line">ПОЧЕМУ СТОИТ РЕШИТЬ СЕЙЧАС</span>
        </h2>
      </div>

      {/* Основной контент */}
      <div className="start-now__container">
        <div className="start-now__cards">
          <div className="start-now__card">
            <span className="start-now__card-icon">⏳</span>
            <p className="start-now__card-text">Через год условия могут измениться</p>
          </div>
          <div className="start-now__card">
            <span className="start-now__card-icon">⏳</span>
            <p className="start-now__card-text">Проценты по картам могут быть пересмотрены</p>
          </div>
          <div className="start-now__card">
            <span className="start-now__card-icon">⏳</span>
            <p className="start-now__card-text">Сейчас Вы заходите в действующий бизнес с историей</p>
          </div>
        </div>

        {/* Резюмирующий подзаголовок */}
        <div className="start-now__summary">
          <p className="start-now__summary-text">🚀 Лучший момент — пока другие думают.</p>
        </div>
      </div>
    </section>
  );
}