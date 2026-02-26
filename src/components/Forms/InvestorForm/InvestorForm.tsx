import React, { useState, useEffect } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './investorForm.sass';

type Props = {
  id?: string;
};

export default function InvestorForm({ id }: Props) {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    direction: '',
    tariff: '',
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);

  // Устанавливаем направление при монтировании, если передан id
  useEffect(() => {
    if (id === '1') {
      setFormData(prev => ({ ...prev, direction: 'Мир Партнёрства (2 млн, автопарк)' }));
    } else if (id === '2') {
      setFormData(prev => ({ ...prev, direction: 'Мир Инвестиций (3 млн, автопарк)' }));
    } else if (id === '3') {
      setFormData(prev => ({ ...prev, direction: 'Мир Логистики (франшиза)' }));
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: false }));
    setShowSubmitError(false);
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData((prev) => ({ ...prev, phone: value || '' }));
    setErrors((prev) => ({ ...prev, phone: false }));
    setShowSubmitError(false);
  };

  const validateForm = () => {
    const newErrors = {
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      direction: !formData.direction.trim(),
      tariff: formData.direction === 'Мир Логистики (франшиза)' && !formData.tariff.trim(),
    };
    setErrors(newErrors);
    return !Object.values(newErrors).some(Boolean);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      setShowSubmitError(true);
      return;
    }

    try {
      const response = await fetch('/phpmailer/investor.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (result.success) {
        setIsSubmitted(true);
      } else {
        console.error('Ошибка: ' + result.message);
      }
    } catch (error) {
      console.error('Ошибка сети', error);
    }
  };

  if (isSubmitted) {
    return (
      <div className="investor-form submitted">
        <h2>Заявка отправлена</h2>
        <div className="success-image-container">
          <svg className="success-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="12" r="9" stroke="#4CAF50" strokeWidth="2"/>
            <path d="M8 12L10.5 14.5L16 9" stroke="#4CAF50" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <p className="success-text">Спасибо! Наш менеджер свяжется с вами в течение 15 минут</p>
      </div>
    );
  }

  const selectedType = formData.direction.includes('Мир') ? formData.direction.split(' ')[1] : '';

  return (
    <div className="investor-form">
      <form onSubmit={handleSubmit}>
        <h2>Стать инвестором</h2>
        <div className="subtitle">
          Оставьте заявку и мы расскажем подробнее о возможностях участия
        </div>

        {showSubmitError && (
          <div className="error-message">
            Пожалуйста, заполните все обязательные поля
          </div>
        )}

        <div className={`form-group ${errors.name ? 'error' : ''}`}>
          <input
            type="text"
            name="name"
            placeholder="Ваше имя"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className={`form-group ${errors.phone ? 'error' : ''}`}>
          <PhoneInput
            placeholder="(000) 000-00-00"
            value={formData.phone || ''}
            onChange={handlePhoneChange}
            defaultCountry="RU"
            limitMaxLength={true}
            autoComplete="tel"
            required
          />
        </div>

        <div className={`form-group ${errors.direction ? 'error' : ''}`}>
          <select
            name="direction"
            value={formData.direction}
            onChange={handleChange}
            required
            className="select-input"
          >
            <option value="">Выбрать направление</option>
            <option value="Мир Партнёрства (2 млн, автопарк)">Мир Партнёрства (2 млн, автопарк)</option>
            <option value="Мир Инвестиций (3 млн, автопарк)">Мир Инвестиций (3 млн, автопарк)</option>
            <option value="Мир Логистики (франшиза)">Мир Логистики (франшиза)</option>
          </select>
        </div>

        {formData.direction === 'Мир Логистики (франшиза)' && (
          <div className={`form-group ${errors.tariff ? 'error' : ''}`}>
            <select
              name="tariff"
              value={formData.tariff}
              onChange={handleChange}
              required
              className="select-input"
            >
              <option value="">Выбрать тариф</option>
              <option value="Базовый (500 тыс, 1 логист, 80%)">Базовый (500 тыс, 1 логист, 80%)</option>
              <option value="Оптимальный (900 тыс, 2 логиста, 85%)">Оптимальный (900 тыс, 2 логиста, 85%)</option>
              <option value="Максимальный (2 млн, 5 логистов, 90%)">Максимальный (2 млн, 5 логистов, 90%)</option>
            </select>
          </div>
        )}

        <button type="submit" className="btn btn_submit">
          Хочу в Мир {selectedType || '...'}
        </button>

        <div className="form-footer">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <a href="https://мл-спб.рф/privacy" target="_blank" rel="noopener noreferrer">
            политикой обработки персональных данных
          </a>
        </div>
      </form>
    </div>
  );
}