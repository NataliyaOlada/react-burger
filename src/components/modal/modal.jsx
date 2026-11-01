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
    <ModalOverlay onClick={onClose}>
      <div className={styles.modal}>
        <div className={styles.header}>
          <div className={styles.title}>{title ? title : ''}</div>
          <div className={styles.icon}>
            <CloseIcon type="primary" onClick={onClose} />
          </div>
        </div>
        {children}
      </div>
    </ModalOverlay>,
    modalRoot
  );
}

export default Modal;
