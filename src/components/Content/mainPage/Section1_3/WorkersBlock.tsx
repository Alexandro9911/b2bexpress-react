import './workersBlock.sass';
import Sotrudnik2Image from '../../../../assets/images/sotrudnik2.png';
import Sotrudnik4Image from '../../../../assets/images/sotrudnik4.png';

export default function WorkersBlock() {
  const workers = [
    {
      name: 'Мудров Александр Андреевич',
      contacts: {
        tel: {
          hrefVal: 'tel:+79217778005',
          label: 'Тел: +7 (921) 777-80-05'
        },
        email: {
          hrefVal: 'mailto:mir_logistiki2@mail.ru',
          label: 'Email: mir_logistiki2@mail.ru',
        },
      },
      image: Sotrudnik4Image,
      position: 'Руководитель отдела внутренней логистики'
    },
    {
      name: 'Дружинников Александр Сергеевич ',
      contacts: {
        email: {
          hrefVal: 'mailto:mir_logistiki07@bk.ru',
          label: 'Email: mir_logistiki07@bk.ru',
        },
      },
      image: Sotrudnik2Image,
      position: 'Руководитель отдела по работе с партнерами'
    },
  ];

  return (
    <div className="workers-block">
      <div className="workers-grid">
        {workers.map((worker, index) => (
          <div key={index} className="worker-card">
            <div className="worker-image-container">
              <img
                src={worker.image}
                alt={worker.name}
                className="worker-image"
              />
            </div>
            <div className="worker-info">
              <h3 className="worker-name">{worker.name}</h3>
              <p className="worker-position"><span>{worker.position}</span></p>
              <p className="worker-contact">
                {worker.contacts.tel &&
                  <>
                    <a href={worker.contacts.tel.hrefVal}>{worker.contacts.tel.label}</a>
                    ,
                  </>
                }
                {worker.contacts.email &&
                    <a href={worker.contacts.email.hrefVal}> {worker.contacts.email.label}</a>
                }
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}