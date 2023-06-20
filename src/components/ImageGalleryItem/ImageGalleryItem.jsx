import { useState } from 'react';
import { Modal } from 'components/Modal/Modal';
import PropTypes from 'prop-types';
import css from './ImageGalleryItem.module.css';

export const ImageGalleryItem = ({ image }) => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const alt = image.tags;
  const webformatURL = image.webformatURL;
  const largeImageURL = image.largeImageURL;

  return (
    <li className={css.ImageGalleryItem}>
      <img
        src={webformatURL}
        alt={alt}
        className={css.ImageGalleryItemImage}
        onClick={() => openModal(largeImageURL, alt)}
      />
      {showModal && (
        <Modal closeModal={closeModal} alt={alt} largeImage={largeImageURL} />
      )}
    </li>
  );
};

ImageGalleryItem.propTypes = {
  images: PropTypes.array,
};
