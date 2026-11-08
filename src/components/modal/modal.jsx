import { CloseIcon } from '@krgaa/react-developer-burger-ui-components';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import ModalOverlay from '@components/modal-overlay/modal-overlay.jsx';

import styles from './modal.module.css';

function Modal({ children, title, showModal, onClose }) {
  const modalRoot = document.getElementById('react-modals');

  useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === 'Escape') {
        onClose();
      }
    }
    if (showModal) {
      document.addEventListener('keydown', handleEscClose);
      return () => {
        document.removeEventListener('keydown', handleEscClose);
      };
    }
  }, [showModal]);

  return createPortal(
    <>
      <div className={styles.modal}>
        <h3 className={`${styles.title} text text_type_main-large pl-10 pt-10 pb-1`}>
          {title}
        </h3>
        <button className={styles.icon}>
          <CloseIcon onClick={onClose} type="primary" />
        </button>
        {children}
      </div>
      <ModalOverlay onClick={onClose} />
    </>,
    modalRoot
  );
}

export default Modal;
