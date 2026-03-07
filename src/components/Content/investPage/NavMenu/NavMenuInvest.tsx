import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import './navMenuInvest.sass';
import { OpenModal } from "../../../../utils/modal.tsx";
import InvestorForm from "../../../Forms/InvestorForm/InvestorForm.tsx";
import SmallLogo from '../../../../assets/icons/small-logo.png';

const NavMenuInvest: React.FC = () => {
  const navMenuRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('investors');
  const [menuHeight, setMenuHeight] = useState(0);
  const [isHeaderActionVisible, setIsHeaderActionVisible] = useState(true);

  const buttonConfigs = [
    { id: 'aboutUs', text: 'О нас', path: '/', sectionId: 'aboutUs' },
    { id: 'services', text: 'Услуги', path: '/', sectionId: 'services' },
    { id: 'investors', text: 'Для инвесторов', path: '/invest', sectionId: 'none' },
    { id: 'feedback', text: 'Оставить отзыв', path: '/', sectionId: 'feedback' },
    { id: 'contacts', text: 'Контакты', path: '/', sectionId: 'contacts' },
  ];

  // Intersection Observer для отслеживания видимости кнопки в хедере
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Если кнопка НЕ видна в области просмотра — показываем дубль в меню
        setIsHeaderActionVisible(!entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0,
        rootMargin: '-100px 0px 0px 0px',
      }
    );

    const buttonElement = document.querySelector('.header') as HTMLButtonElement;
    if (buttonElement) {
      observer.observe(buttonElement);
    }

    return () => {
      if (buttonElement) {
        observer.unobserve(buttonElement);
      }
    };
  }, []);

  // Функция для скролла к разделу на главной странице
  const scrollToSectionOnMain = (sectionId: string) => {
    setTimeout(() => {
      const element = document.getElementById(sectionId);
      if (element) {
        const yOffset = isFixed ? 80 : 130;
        const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setActiveSection(sectionId);
      }
    }, 300);
  };

  // Функция для скролла к разделу на текущей странице
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = isFixed ? 80 : 130;
      const y = element.getBoundingClientRect().top + window.pageYOffset - yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Обработчик клика по пункту меню
  const handleMenuClick = (btn: { id: string; text: string; path: string; sectionId: string }) => {
    setIsMobileMenuOpen(false);

    if (btn.id === 'investors') {
      navigate(btn.path);
      scrollToSection(btn.sectionId);
    } else {
      navigate(btn.path);
      scrollToSectionOnMain(btn.sectionId);
    }
  };

  // Обновление активного пункта при скролле
  const updateActiveLink = useCallback(() => {
    const sections = document.querySelectorAll<HTMLElement>('.section-item');
    const navHeight = isFixed ? menuHeight : 0;
    const scrollPosition = window.scrollY + navHeight + 20;

    let currentSectionId: string | null = null;

    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      const top = rect.top + window.scrollY;
      const height = section.offsetHeight;
      const id = section.getAttribute('id');

      if (!id) return;

      const sectionStart = top - navHeight - 20;
      const sectionEnd = top + height - navHeight - 20;

      if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
        currentSectionId = id;
      }
    });

    if (!currentSectionId && window.scrollY < 100) {
      currentSectionId = 'investors';
    }

    if (currentSectionId) {
      setActiveSection(currentSectionId);
    }
  }, [isFixed, menuHeight]);

  // Обработчик скролла для фиксации меню
  const handleScroll = useCallback(() => {
    const navMenu = navMenuRef.current;
    const header = document.querySelector('.header');

    if (!navMenu || !header) return;

    const headerHeight = header.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerHeight + 50) {
      setIsFixed(true);
      setMenuHeight(navMenu.clientHeight);
    } else {
      setIsFixed(false);
      setMenuHeight(0);
    }
  }, []);

  // Эффекты для скролла и обновления активного пункта
  useEffect(() => {
    handleScroll();
    updateActiveLink();

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', updateActiveLink);
    window.addEventListener('resize', updateActiveLink);

    const timeoutId = setTimeout(updateActiveLink, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', updateActiveLink);
      window.removeEventListener('resize', updateActiveLink);
      clearTimeout(timeoutId);
    };
  }, [handleScroll, updateActiveLink]);

  // Обновление высоты меню при изменении его состояния
  useEffect(() => {
    if (navMenuRef.current) {
      setMenuHeight(navMenuRef.current.clientHeight);
    }
  }, [isFixed]);

  // Закрытие мобильного меню при клике вне
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
        ref={navMenuRef}
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
          <div className="actions-wrapper">
            {isHeaderActionVisible && (
              <>
                <div className='contacts-in-nav'>
                  <img src={SmallLogo} alt="Логотип"/>
                  <a href="tel:88004441098">Горячая линия: 8 (800) 444 10 98</a>
                </div>
              </>
            )}
            <button
              className="nav-menu-action"
              type="button"
              onClick={() => OpenModal(<InvestorForm id="1"/>)}
            >
              Стать инвестором
            </button>
          </div>
        </div>

        <div className="mobile-nav">
          <button
            className="hamburger-btn"
            aria-label="Меню"
            onClick={toggleMobileMenu}
          >
            ☰
          </button>


          <div className="actions-wrapper">
            {/*{window.innerWidth <= 600 &&*/}
            {/*  <button*/}
            {/*    className="nav-menu-action"*/}
            {/*    type="button"*/}
            {/*    onClick={() => OpenModal(<CalculationForm/>)}*/}
            {/*  >*/}
            {/*    Рассчитать стоимость*/}
            {/*  </button>*/}
            {/*}*/}
            {isHeaderActionVisible &&
                <div className='contacts-in-nav'>
                    <img src={SmallLogo} alt="Логотип"/>
                    <a href="tel:88004441098">8 (800) 444 10 98</a>
                </div>
            }
            <button
              className="nav-menu-action"
              type="button"
              onClick={() => OpenModal(<InvestorForm id={'1'}/>)}
            >
              Стать инвестором
            </button>
          </div>

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