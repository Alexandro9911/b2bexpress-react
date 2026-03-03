import React from 'react'
import { useNavigate } from 'react-router-dom'
import './notFound.sass'
import NotFoundImage from '../../assets/images/404.jpg'

const NotFound: React.FC = () => {
  const navigate = useNavigate()

  return (
    <main className="nfpage" role="main" aria-labelledby="nfpage-title">
      <div
        className="nfpage__bg"
        style={{ backgroundImage: `url(${NotFoundImage})` }}
        aria-hidden="true"
      />
      <div className="nfpage__overlay" aria-hidden="true" />

      <div className="nfpage__content">
        <aside className="nfpage__card" aria-labelledby="nfpage-title">
          <h1 id="nfpage-title" className="nfpage__code">404</h1>
          <h2 className="nfpage__title">Ой, не тот маршрут...</h2>
          <p className="nfpage__desc">
            Страница не найдена. Идет пересчет маршрута.
          </p>

          <div className="nfpage__actions">
            <button
              type="button"
              className="nfpage__btn"
              onClick={() => navigate(-1)}
              title="Вернуться назад"
            >
              Назад
            </button>

            <button
              type="button"
              className="nfpage__btn nfpage__btn--primary"
              onClick={() => navigate('/')}
              title="На главную"
            >
              На главную
            </button>
          </div>
        </aside>
      </div>
    </main>
  )
}

export default NotFound