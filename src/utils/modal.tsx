import { createRoot, type Root } from "react-dom/client";
import type {ModalComponent} from "../types/modal";
import Modal from "../components/Modal/Modal";

let modalRoot: HTMLDivElement | null = null;
let root: Root | null = null;

/**
 * Открывает модальное окно
 */
export const OpenModal = (content: ModalComponent): void => {
  // Закрываем предыдущее
  CloseModal();

  modalRoot = document.createElement("div");
  modalRoot.id = "modal-root";
  document.body.appendChild(modalRoot);


  document.body.style.overflow = "hidden";

  root = createRoot(modalRoot);

  root.render(
    <Modal onClose={CloseModal}>
      {content}
    </Modal>
  );
};

/**
 * Закрывает текущую модалку
 */
export const CloseModal = (): void => {
  if (root) {
    root.render(null);
    root = null;
  }

  if (modalRoot && document.body.contains(modalRoot)) {
    document.body.removeChild(modalRoot);
  }
  modalRoot = null;

  document.body.style.overflow = "";
};