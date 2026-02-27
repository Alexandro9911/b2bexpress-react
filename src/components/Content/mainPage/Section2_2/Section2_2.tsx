import './section2_2.sass'
import Button from '../../../common/button/Button.tsx'
import Section2_2_image from '../../../../assets/images/section2_2.jpg'

export default function Section2_2() {
  return (
    <div className="section2_2">
      <div className="documents-layout">
        <div className="documents-layout__image">
          <img src={Section2_2_image} alt="Пример документов" />
        </div>
        <div className="documents-info">
          <div className="documents-info__title">Пример документов</div>
          <div className="documents-info__text">
            <ul>
              <li>Договор</li>
              <li>Договор-заявка</li>
            </ul>
          </div>
          <div className="documents-info__action">
            <Button href="https://disk.yandex.ru/d/grjf9CGPqdwKHQ" classNames="btn btn_medium">
              Смотреть папку с документами
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}