import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './CalculationForm.sass';
import { registerLocale } from 'react-datepicker';
import { ru } from 'date-fns/locale/ru';
registerLocale('ru', ru);

export default function CalculationForm() {
  const [formData, setFormData] = useState({
    cargo: '',
    from: '',
    to: '',
    weight: '',
    volume: '',
    date: null as Date | null,
    name: '',
    phone: '',
  });

  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
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

  const handleDateChange = (date: Date | null) => {
    setFormData((prev) => ({ ...prev, date }));
    setErrors((prev) => ({ ...prev, date: false }));
    setShowSubmitError(false);
  };

  const validateForm = () => {
    const newErrors = {
      cargo: !formData.cargo.trim(),
      from: !formData.from.trim(),
      to: !formData.to.trim(),
      weight: !formData.weight.trim(),
      volume: !formData.volume.trim(),
      date: !formData.date,
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
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
      const response = await fetch('/phpmailer/calculation.php', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          date: formData.date ? new Date(formData.date).toISOString().split('T')[0] : null,
        }),
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
      <div className="calculation-form submitted">
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

  return (
    <div className="calculation-form">
      <form onSubmit={handleSubmit}>
        <h2>Рассчитать стоимость</h2>
        <div className="subtitle">
          Благодарим за доверие. Наши менеджеры рассчитают стоимость перевозки в течение 15 минут!
        </div>
        {showSubmitError && (
          <div className="error-message">
            Пожалуйста, заполните все обязательные поля
          </div>
        )}
        <div className={`form-group ${errors.cargo ? 'error' : ''}`}>
          <input
            type="text"
            name="cargo"
            placeholder="Что нужно перевезти?"
            value={formData.cargo}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`form-group ${errors.from ? 'error' : ''}`}>
          <input
            type="text"
            name="from"
            placeholder="Откуда: полное наименование области (город, деревня, поселок, село)"
            value={formData.from}
            onChange={handleChange}
            required
          />
        </div>
        <div className={`form-group ${errors.to ? 'error' : ''}`}>
          <input
            type="text"
            name="to"
            placeholder="Куда: полное наименование области (город, деревня, поселок, село)"
            value={formData.to}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-row">
          <div className={`form-group half ${errors.weight ? 'error' : ''}`}>
            <input
              type="number"
              name="weight"
              placeholder="Вес"
              value={formData.weight}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
            />
          </div>
          <div className={`form-group half ${errors.volume ? 'error' : ''}`}>
            <input
              type="number"
              name="volume"
              placeholder="м³ (кубометры)"
              value={formData.volume}
              onChange={handleChange}
              required
              min="0"
              step="0.1"
            />
          </div>
        </div>
        <div className="form-row">
          <div className={`form-group half ${errors.date ? 'error' : ''}`}>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              dateFormat="dd.MM.yyyy"
              placeholderText="Дата загрузки"
              className={`date-picker-input ${errors.date ? 'error' : ''}`}
              popperPlacement="bottom-start"
              required
              minDate={new Date()}
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
              locale="ru"
            />
          </div>
          <div className={`form-group half ${errors.name ? 'error' : ''}`}>
            <input
              type="text"
              name="name"
              placeholder="Имя"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className={`form-group ${errors.phone ? 'error' : ''}`}>
          <PhoneInput
            placeholder="(000) 000-00-00"
            value={formData.phone}
            onChange={handlePhoneChange}
            defaultCountry="RU"
            limitMaxLength={true}
            inputComponent={(props) => (
              <input {...props} className={`phone-input ${errors.phone ? 'error' : ''}`} />
            )}
            required
          />
        </div>
        <button type="submit" className="btn btn_submit">
          Рассчитать
        </button>
        <div className="form-footer">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <a href="/privacy" target="_blank" rel="noopener noreferrer">
            политикой обработки персональных данных
          </a>
        </div>
      </form>
    </div>
  );
}