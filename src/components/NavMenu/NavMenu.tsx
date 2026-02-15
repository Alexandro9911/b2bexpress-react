import { useEffect, useRef, useCallback } from 'react';
import './NavMenu.sass';
import {OpenModal} from "../../utils/modal.tsx";

const NavMenu: React.FC = () => {
  const navMenuRef = useRef<HTMLDivElement>(null);
  const navPlaceholderRef = useRef<HTMLDivElement>(null);

  const calcButtonAction = () => {
    OpenModal(<div>текст</div>)
  }

  const buttonConfigs = [
    { id: 'aboutUs', text: 'О нас' },
    { id: 'services', text: 'Услуги' },
    { id: 'feedback', text: 'Оставить отзыв' },
    { id: 'contacts', text: 'Контакты' },
    { id: 'live', text: 'Жизнь компании' },
    { id: 'none', text: 'Рассчитать стоимость', actionButton: calcButtonAction},
  ];

  const handleScroll = useCallback(() => {
    const navMenu = navMenuRef.current;
    const navPlaceholder = navPlaceholderRef.current;
    const header = document.querySelector('.header');

    if (!navMenu || !header || !navPlaceholder) return;

    const headerHeight = header.clientHeight;
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > headerHeight) {
      navMenu.classList.add('fixed');
      navPlaceholder.style.display = 'none';
    } else {
      navMenu.classList.remove('fixed');
      navPlaceholder.style.display = 'none';
    }
  }, []);

  const updateActiveLink = useCallback(() => {
    const navMenu = navMenuRef.current;
    const sections = document.querySelectorAll<HTMLElement>('.section-item');

    if (!navMenu) return;

    const navHeight = navMenu.classList.contains('fixed') ? navMenu.clientHeight : 0;
    const scrollPosition = window.scrollY + navHeight;

    let currentSectionId: string | null = null;

    // 🔥 Если прокрутки нет — считаем первую кнопку активной
    if (scrollPosition < 10) {
      currentSectionId = 'aboutUs';
    } else {
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (!id) return;

        const sectionStart = id === 'aboutUs' ? top : top - 50;
        const sectionEnd = top + height - (id === 'aboutUs' ? 0 : 100);

        if (scrollPosition >= sectionStart && scrollPosition < sectionEnd) {
          currentSectionId = id;
        }
      });
    }

    document.querySelectorAll('#navMenu button').forEach(btn => {
      btn.classList.remove('active');
    });

    if (currentSectionId) {
      const activeBtn = document.querySelector<HTMLElement>(
        `#navMenu button[data-section="${currentSectionId}"]`
      );
      if (activeBtn) {
        activeBtn.classList.add('active');
      }
    }
  }, []);

  const handleNavClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    // Приводим тип, чтобы гарантировать доступ к dataset
    const button = (e.target as HTMLElement).closest('button[data-section]');

    if (!button || !(button instanceof HTMLElement)) return;

    const targetId = button.dataset.section; // Теперь ошибка исчезла

    const targetSection = document.getElementById(targetId!);

    if (!targetSection) {
      console.error(`Секция с id="${targetId}" НЕ найдена в DOM`);
      return;
    }

    const offsetTop = targetSection.offsetTop + 180;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth',
    });
  }, []);

  useEffect(() => {
    const navPlaceholder = navPlaceholderRef.current;
    if (navPlaceholder) {
      navPlaceholder.className = 'nav-menu-placeholder';
    }

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

  return (
    <>
      <div
        className="nav-menu"
        id="navMenu"
        ref={navMenuRef}
        onClick={handleNavClick}
      >
        {buttonConfigs.map((btn) => (
          <button
            key={btn.id}
            data-section={btn.id}
            type="button"
            onClick={btn.actionButton}
          >
            {btn.text}
          </button>
        ))}
      </div>
      <div ref={navPlaceholderRef}></div>
    </>
  );
};

export default NavMenu;