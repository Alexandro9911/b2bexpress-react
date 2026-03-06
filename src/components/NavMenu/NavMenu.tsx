import React, { useEffect, useRef, useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavMenu.sass';
import { OpenModal } from '../../utils/modal.tsx';
import CalculationForm from '../Forms/CalculateForm/CalculationForm.tsx';
import InvestorForm from "../Forms/InvestorForm/InvestorForm.tsx";
import SmallLogo from "../../assets/icons/small-logo.png";

const NavMenu: React.FC = () => {
  const navMenuRef = useRef<HTMLDivElement>(null);
  const navPlaceholderRef = useRef<HTMLDivElement>(null);
  // const buttonRef = useRef<HTMLButtonElement>(null); // Ссылка на кнопку btn-header-action
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('aboutUs');
  const [menuHeight, setMenuHeight] = useState(0);
  const [isHeaderActionVisible, setIsHeaderActionVisible] = useState(true); // Новый стейт

  const onClickInvestButton = () => {
    navigate('/invest');
    scrollTo(0, 0);
  };

  const buttonConfigs = [
    { id: 'aboutUs', text: 'О нас' },
    { id: 'services', text: 'Услуги' },
    { id: 'investors', text: 'Для инвесторов', actionButton: onClickInvestButton },
    { id: 'feedback', text: 'Оставить отзыв' },
    { id: 'contacts', text: 'Контакты' },
  ];

  // Intersection Observer для отслеживания видимости кнопки
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Если кнопка НЕ видна в области просмотра — значит, она "скрыта", и нужно показать дубль в меню
        setIsHeaderActionVisible(!entry.isIntersecting);
      },
      {
        root: null, // viewport
        threshold: 0, // срабатывает, когда 10% кнопки видны
        rootMargin: '-100px 0px 0px 0px', // немного смещаем зону наблюдения
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

  const updateActiveLink = useCallback(() => {
    const navMenu = navMenuRef.current;
    const sections = document.querySelectorAll<HTMLElement>('.section-item');

    if (!navMenu) return;

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
      currentSectionId = 'aboutUs';
    }

    if (currentSectionId) {
      setActiveSection(currentSectionId);
    }
  }, [isFixed, menuHeight]);

  const handleNavClick = useCallback((btn: { id: string; text: string; actionButton?: () => void }) => {
    setIsMobileMenuOpen(false);

    if (btn.actionButton) {
      btn.actionButton();
      return;
    }

    const targetSection = document.getElementById(btn.id);
    if (!targetSection) {
      console.error(`Секция с id="${btn.id}" НЕ найдена в DOM`);
      return;
    }

    window.scrollTo({
      top: targetSection.offsetTop + 150,
      behavior: 'smooth',
    });
  }, []);

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

  useEffect(() => {
    if (navMenuRef.current) {
      setMenuHeight(navMenuRef.current.clientHeight);
    }
  }, [isFixed]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById('navMenu');
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
        id="navMenu"
        ref={navMenuRef}
      >
        <div className="desktop-nav">
          {buttonConfigs.map((btn) => (
            <button
              key={btn.id}
              data-section={btn.id}
              type="button"
              onClick={() => handleNavClick(btn)}
              className={activeSection === btn.id ? 'active' : ''}
            >
              {btn.text}
            </button>
          ))}
          <div className="actions-wrapper">
            {isHeaderActionVisible && (
              <>
                <div className='contacts-in-nav'>
                  <img src={SmallLogo}/>
                  <a href={"tel:88004441098"}>Горячая линия: 8 (800) 444 10 98</a>
                </div>
                <button
                  className="nav-menu-action"
                  type="button"
                  onClick={() => OpenModal(<CalculationForm/>)}
                >
                  Рассчитать стоимость
                </button>
              </>
            )}
            <button
              className="nav-menu-action"
              type="button"
              onClick={() => OpenModal(<InvestorForm id={'1'}/>)}
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


          <div className="menu-info">
            <div className="actions-wrapper">
              {(isHeaderActionVisible || window.innerWidth <= 600) && (
                <button
                  className="nav-menu-action"
                  type="button"
                  onClick={() => OpenModal(<CalculationForm/>)}
                >
                  Рассчитать стоимость
                </button>
              )}
              <button
                className="nav-menu-action"
                type="button"
                onClick={() => OpenModal(<InvestorForm id={'1'}/>)}
              >
                Стать инвестором
              </button>
            </div>
            {isHeaderActionVisible &&
              <div className='contacts-in-nav'>
                <a href={"tel:88004441098"}>Горячая линия: 8 (800) 444 10 98</a>
              </div>
            }
          </div>

          <div className="mobile-menu-container">
            <div className={`mobile-list-items ${isMobileMenuOpen ? 'open' : ''}`}>
              {buttonConfigs.map((btn) => (
                <button
                  key={btn.id}
                  data-section={btn.id}
                  type="button"
                  onClick={() => handleNavClick(btn)}
                  className={activeSection === btn.id ? 'active' : ''}
                >
                  {btn.text}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className={`nav-menu-placeholder ${isFixed ? 'active' : ''}`} ref={navPlaceholderRef}></div>
    </>
  );
};

export default NavMenu;