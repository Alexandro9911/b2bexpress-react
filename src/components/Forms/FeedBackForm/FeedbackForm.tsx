import React, { useState } from 'react';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import './feedback.sass';
import AutoImage from '../../../assets/icons/truck_black.png';

export default function FeedbackForm() {
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    review: '',
  });

  const [errors, setErrors] = useState({
    company: false,
    name: false,
    phone: false,
    review: false,
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSubmitError, setShowSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      company: !formData.company.trim(),
      name: !formData.name.trim(),
      phone: !formData.phone.trim(),
      review: !formData.review.trim(),
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
      const response = await fetch('/phpmailer/feedback.php', {
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
      <div className="feedback-form submitted">
        <h2>Отзыв отправлен</h2>
        <div className="success-image-container">
          <img src={AutoImage} alt="Грузовик" className="success-image" />
        </div>
        <p className="success-text">Спасибо! нам важно мнение каждого</p>
      </div>
    );
  }

  return (
    <div className="feedback-form">
      <form onSubmit={handleSubmit}>
        <h2>Оставьте отзыв</h2>
        {showSubmitError && (
          <div className="error-message">
            Пожалуйста, заполните все обязательные поля
          </div>
        )}
        <div className={`form-group ${errors.company ? 'error' : ''}`}>
          <input
            type="text"
            name="company"
            placeholder="Название компании"
            value={formData.company}
            onChange={handleChange}
            required
          />
        </div>
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
            value={formData.phone}
            onChange={handlePhoneChange}
            defaultCountry="RU"
            limitMaxLength={true}
            required
          />
        </div>
        <div className={`form-group ${errors.review ? 'error' : ''}`}>
          <textarea
            name="review"
            placeholder="Оставьте отзыв"
            value={formData.review}
            onChange={handleChange}
            maxLength={500}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn_submit">
          Отправить
        </button>
        <div className="form-footer">
          Нажимая кнопку, вы соглашаетесь с{' '}
          <a href="https://мл-спб.рф/privacy.html" target="_blank" rel="noopener noreferrer">
            политикой обработки персональных данных
          </a>
        </div>
      </form>
    </div>
  );
}