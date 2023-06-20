import { useState, useEffect } from 'react';
import { MagnifyingGlass } from 'react-loader-spinner';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import PropTypes from 'prop-types';

import getImage from 'components/Services/Api';
import css from './ImageGallery.module.css';
import { Button } from 'components/Button/Button';

export const ImageGallery = ({ handleLoadMore, page, searchValue }) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    setImages([]);
  }, [searchValue]);

  useEffect(() => {
    if (searchValue === '') return;
    setIsLoading(true);

    getImage(searchValue, page)
      .then(resp => {
        if (resp.ok) {
          return resp.json();
        } else {
          throw new Error('Something wrong. Please, whrite correct request.');
        }
      })
      .then(newImages => {
        setImages(prevImages => [...prevImages, ...newImages.hits]);
        setTotalHits(newImages.totalHits);
      })
      .catch(err => alert(err))
      .finally(() => {
        setIsLoading(false);
      });
  }, [page, searchValue]);

  const isImages = images.length;

  return (
    <>
      {isImages > 0 && (
        <ul className={css.ImageGallery}>
          {images.map(image => {
            const id = image.id;
            return <ImageGalleryItem key={id} image={image} />;
          })}
        </ul>
      )}
      {isLoading && (
        <div className={css.loader}>
          <MagnifyingGlass />
        </div>
      )}
      {images.length > 0 && images.length < totalHits && (
        <Button handleLoadMore={handleLoadMore} curentPage={page} />
      )}
    </>
  );
};

ImageGallery.propTypes = {
  searchValue: PropTypes.string,
  page: PropTypes.number,
  showBtn: PropTypes.func,
};
