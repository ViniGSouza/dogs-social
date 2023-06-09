import styles from './FeedModal.module.css';
import { useFetch } from '../../Hooks/useFetch';
import { useEffect } from 'react';
import { PHOTO_GET } from '../../api';
import { Loading } from '../Helper/Loading';
import { Error } from '../Helper/Error';
import { PhotoContent } from '../Photo/PhotoContent';

export const FeedModal = ({ photo, setModalPhoto }) => {
  const {data, error, loading, request} = useFetch();

  useEffect(() => {
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options);
  }, [photo, request]);

  function handleOutsideClick (e) {
    if (e.target === e.currentTarget) setModalPhoto(null);
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error} />}
      {loading && <Loading />}
      {data && <PhotoContent data={data} /> }
    </div>
  )
}