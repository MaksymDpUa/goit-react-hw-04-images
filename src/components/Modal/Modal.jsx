import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ closeModal, largeImage, alt }) => {
  
    useEffect(() => {
    const handlePressEsc = e => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handlePressEsc);
    return () => {
      window.removeEventListener('keydown', handlePressEsc);
    };
  }, [closeModal]);

    
  const handleOverlayClick = e => {
    if (e.currentTarget === e.target) closeModal();
  };

    
  return (
    <div className={css.overlay} onClick={handleOverlayClick}>
      <div className={css.modal}>
        <img src={largeImage} alt={alt} className={css.image} />
      </div>
    </div>
  );
};

Modal.propTypes = {
  alt: PropTypes.string,
  closeModal: PropTypes.func,
  largeImage: PropTypes.string,
};
