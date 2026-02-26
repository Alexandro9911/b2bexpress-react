import React, {useEffect, useRef, useCallback, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import './NavMenu.sass';
import { OpenModal } from '../../utils/modal.tsx';
import CalculationForm from '../Forms/CalculateForm/CalculationForm.tsx';

const NavMenu: React.FC = () => {
  const navMenuRef = useRef<HTMLDivElement>(null);
  const navPlaceholderRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);
  const [activeSection, setActiveSection] = useState('aboutUs');
  const [menuHeight, setMenuHeight] = useState(0);

  const calcButtonAction = () => {
    OpenModal(<CalculationForm />);
  };

  const onClickInvestButton = () => {
    navigate('/invest');
    scrollTo(0,0)
  };

  const buttonConfigs = [
    { id: 'aboutUs', text: 'О нас' },
    { id: 'services', text: 'Услуги' },
    { id: 'feedback', text: 'Оставить отзыв' },
    { id: 'contacts', text: 'Контакты' },
    { id: 'investors', text: 'Для инвесторов', actionButton: onClickInvestButton },
    { id: 'calculate', text: 'Рассчитать стоимость', actionButton: calcButtonAction },
  ];

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
    const scrollPosition = window.scrollY + navHeight + 20; // Уменьшаем отступ

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

    // Особый случай для первого раздела
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

    // Получаем актуальную высоту меню

    // Рассчитываем позицию с учетом высоты меню
    const offsetTop = targetSection.offsetTop;

    window.scrollTo({
      top: offsetTop + 150,
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

  // Обновляем высоту меню при изменении isFixed
  useEffect(() => {
    if (navMenuRef.current) {
      setMenuHeight(navMenuRef.current.clientHeight);
    }
  }, [isFixed]);

  // Закрываем меню при клике вне его (для мобильной версии)
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
            className="mobile-calculate-btn"
            onClick={calcButtonAction}
          >
            Рассчитать стоимость
          </button>

          {/* Контейнер для выпадающего меню */}
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