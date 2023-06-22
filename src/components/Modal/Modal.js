import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { VscChromeClose } from 'react-icons/vsc';
import PropTypes from 'prop-types';
// import { Backdrop, ModalBox, CloseBtn } from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ onClose, children }) => {
  useEffect(() => {
    const handleCloseEsc = evt => {
      if (evt.code === 'Escape') {
        onClose();
        return;
      }
    };
    document.addEventListener('keydown', handleCloseEsc);
    return () => {
      document.removeEventListener('keydown', handleCloseEsc);
    };
  }, [onClose]);

  const handelBackdropClick = evt => {
    if (evt.target === evt.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <div onClick={handelBackdropClick}>
      <div>
        <button onClick={() => onClose()}>
          <VscChromeClose />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

Modal.propTypes = {
  onClick: PropTypes.func,
};
