import './workersBlock.sass';
import SotrudnikImage from '../../../../assets/images/sotrudnik.png';
import Sotrudnik2Image from '../../../../assets/images/sotrudnik2.png';
import Sotrudnik3Image from '../../../../assets/images/sotrudnik3.png';
import Sotrudnik4Image from '../../../../assets/images/sotrudnik4.png';

export default function WorkersBlock() {
  const workers = [
    {
      name: ' Вислогузов Артем Сергеевич',
      contacts: {
        tel: {
          hrefVal: 'tel:+79215772638',
          label: 'Тел: +7 (921) 577-26-38'
        },
        email: {
          hrefVal: 'mailto:mir_logistiki04@bk.ru',
          label: 'Email: mir_logistiki04@bk.ru',
        },
      },
      image: SotrudnikImage,
      position: 'Руководитель отдела международной логистики'
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
    {
      name: 'Малыгин Иван Алексеевич',
      contacts: {
        tel: {
          hrefVal: 'tel:+79215763226',
          label: 'Тел:  +7 (921) 576-32-26'
        },
        email: {
          hrefVal: 'mailto:mir_logistiki05@bk.ru',
          label: 'Email: mir_logistiki05@bk.ru',
        },
      },
      image: Sotrudnik3Image,
      position: 'Руководитель Финансово-экономического отдела'
    },
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
    }
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