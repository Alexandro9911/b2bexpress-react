import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './navMenuInvest.sass';
import {OpenModal} from "../../../../utils/modal.tsx";
import InvestorForm from "../../../Forms/InvestorForm/InvestorForm.tsx";

const NavMenuInvest: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('investors');
  const navigate = useNavigate();

  const buttonConfigs = [
    { id: 'aboutUs', text: 'О нас', path: '/', sectionId: 'aboutUs' },
    { id: 'services', text: 'Услуги', path: '/', sectionId: 'services' },
    { id: 'investors', text: 'Для инвесторов', path: '/invest', sectionId: 'none' },
    { id: 'feedback', text: 'Оставить отзыв', path: '/', sectionId: 'feedback' },
    { id: 'contacts', text: 'Контакты', path: '/', sectionId: 'contacts' },
    // { id: 'becomeInvestor', text: 'Стать инвестором', path: '/invest', sectionId: 'none2' },
  ];

  // Функция для скролла к разделу на главной странице
  const scrollToSectionOnMain = (sectionId: string) => {
    // Даем время на загрузку страницы
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = isFixed ? 80 : 130;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }, 300);
  };

  // Функция для обработки клика по пунктам меню
  const handleMenuClick = (btn: { id: string; text: string; path: string; sectionId: string }) => {
    setIsMobileMenuOpen(false); // Закрываем мобильное меню

    if (btn.id === 'none2') {
      // Для "Стать инвестором" - остаемся на текущей странице
      OpenModal(<InvestorForm id={"1"}/>)
    } else if (btn.id === 'investors') {
      // Для "Для инвесторов" - остаемся на текущей странице
      scrollToSection(btn.sectionId);
    } else {
      // Для остальных пунктов - переходим на главную и скроллим
      navigate(btn.path);
      scrollToSectionOnMain(btn.sectionId);
    }
  };

  // Функция для скролла к разделу на текущей странице
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = isFixed ? 80 : 130;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Обработчик скролла для изменения положения меню
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const headerHeight = document.querySelector('.header')?.clientHeight || 0;
      const menuElement = document.getElementById('navMenuInvest');

      if (menuElement) {
        if (scrollPosition > headerHeight + 50) {
          setIsFixed(true);
        } else {
          setIsFixed(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Закрываем меню при клике вне его (для мобильной версии)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('navMenuInvest');
      if (menu && !menu.contains(event.target as Node) && isMobileMenuOpen) {
        setIsMobileMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isMobileMenuOpen]);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      <div
        className={`nav-menu ${isFixed ? 'fixed' : ''}`}
        id="navMenuInvest"
      >
        <div className="desktop-nav">
          {buttonConfigs.map((btn) => (
            <button
              key={btn.id}
              data-section={btn.id}
              type="button"
              onClick={() => handleMenuClick(btn)}
              className={(activeSection === btn.id || btn.id === 'investors') ? 'active' : ''}
            >
              {btn.text}
            </button>
          ))}
          <button
            type="button"
            onClick={() => handleMenuClick({
              id: 'none2',
              text: 'Стать инвестором',
              path: '/invest',
              sectionId: 'none2'
            })}
          >
            Стать инвестором
          </button>
        </div>

        <div className="mobile-nav">
          <button
            className="hamburger-btn"
            aria-label="Меню"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>

          <button
            type="button"
            className={`mobile-calculate-btn ${activeSection === 'none2' ? 'active' : ''}`}
            onClick={() => handleMenuClick({
              id: 'none2',
              text: 'Стать инвестором',
              path: '/invest',
              sectionId: 'none2'
            })}
          >
            Стать инвестором
          </button>

          {/* Контейнер для выпадающего меню */}
          <div className="mobile-menu-container">
            <div className={`mobile-list-items ${isMobileMenuOpen ? 'open' : ''}`}>
              {buttonConfigs.map((btn) => (
                <button
                  key={btn.id}
                  data-section={btn.id}
                  type="button"
                  onClick={() => handleMenuClick(btn)}
                  className={activeSection === btn.id ? 'active' : ''}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={`nav-menu-placeholder ${isFixed ? 'active' : ''}`}></div>
    </>
  );
};

export default NavMenuInvest;