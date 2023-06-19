import { ImageGallery } from 'components/ImageGallery/ImageGallery';
import { Searchbar } from 'components/Searchbar/Searchbar';
import {useState } from 'react';
import css from './App.module.css';

export const App = () => {
  const [searchValue, setSearchValue] = useState('');
  const [page, setPage] = useState(1);
const [isShowLoadMore, setIsShowLoadMore] = useState(false)

  const showBtn = () => setIsShowLoadMore(true);
  
  const hideBtn = ()=> setIsShowLoadMore(false);  
  
  const resetPage = () => setPage(1);

  const onSubmit = searchValue => setSearchValue( searchValue );

  const handleLoadMore = nextPage => setPage(nextPage);


    return (
      <div className={css.App}>
        <Searchbar onSubmit={onSubmit}
          resetPage={resetPage}
        />
        <ImageGallery
          searchValue={searchValue}
          page={page}
          showBtn={showBtn}
          hideBtn={hideBtn}
          handleLoadMore={handleLoadMore}
          curentPage={page}
        />  
      </div>
    );
  
}
