import React, { useEffect, useRef } from "react";
import "./modal.sass";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export default function Modal({ children, onClose }: Props) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOutsideClick = (e: MouseEvent) => {
      if (
        overlayRef.current === e.target ||
        (modalRef.current && !modalRef.current.contains(e.target as Node))
      ) {
        onClose();
      }
    };

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("mousedown", handleOutsideClick);
    document.addEventListener("keydown", handleEsc);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal-overlay" ref={overlayRef}>
      <div className="modal-content" ref={modalRef}>
        <button
          className="modal-close-button"
          onClick={onClose}
          aria-label="Закрыть"
        >
          ×
        </button>
        <div className="modal-inner">
          {children}
        </div>
      </div>
    </div>
  );
}