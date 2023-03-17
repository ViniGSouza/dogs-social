import { useState } from 'react';
import { useFetch } from '../../Hooks/useFetch';
import { COMMENT_POST } from '../../api';
import { Error } from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

export const PhotoCommentsForm = ({ id, setComments }) => {
  const [comment, setComment] = useState('');
  const { request, error } = useFetch();

  async function handleSubmit(e) {
    e.preventDefault();
    const { url, options } = COMMENT_POST(id, {comment});
    const { response, json } = await request(url, options);
    if(response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        className={styles.textarea}
        id='comment'
        name='comment'
        placeholder='Comente...'
        value={comment}
        onChange={({ target }) => setComment(target.value) }
      />
      <button className={styles.button}>
      <svg width="43" height="31" viewBox="0 0 43 31" fill="none"
  xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd" d="M3.42021 12.2343C1.96462 11.8984 0.667944 13.2188 1.03021 14.6681L1.78522 17.6885C1.94601 18.3318 1.77754 19.013 1.33542 19.5071L0.861153 20.0372C-0.0521287 21.058 0.307727 22.674 1.56784 23.2108L17.1747 29.859C17.961 30.194 18.8734 29.9922 19.4452 29.3568L26.6015 21.4041C27.3694 20.5508 27.255 19.2387 26.3185 18.5749C25.7057 18.1405 24.9308 17.608 24.0003 17C22.168 15.8029 24.1684 12.9261 25.5476 11.2939C26.1527 10.5779 26.2747 9.54549 25.7778 8.75061L21.0936 1.25754C20.3875 0.128057 18.7953 -0.00853437 17.9072 0.984179L7.87358 12.199C7.38736 12.7424 6.64389 12.9782 5.93335 12.8142L3.42021 12.2343ZM21.286 16.0414C21.1883 15.1091 21.4388 14.2294 21.7213 13.5461C22.2879 12.1752 23.3008 10.8541 24.02 10.003C24.0612 9.95419 24.0814 9.89875 24.0856 9.85571C24.0876 9.83589 24.0857 9.82328 24.0845 9.81774C24.0835 9.81323 24.0826 9.8119 24.082 9.81085L19.3977 2.31772L9.36411 13.5325C8.39167 14.6194 6.90474 15.0909 5.48365 14.763L2.97051 14.1831L3.72552 17.2035C4.04711 18.4901 3.71017 19.8524 2.82593 20.8407L2.35166 21.3708L17.9585 28.019L25.056 20.1317C24.4799 19.7252 23.7615 19.2331 22.9064 18.6744C21.9265 18.0341 21.395 17.0815 21.286 16.0414Z" fill="#333333"/>
  <path d="M15.0003 16C15.0003 17.1046 14.1049 18 13.0003 18C11.8957 18 11.0003 17.1046 11.0003 16C11.0003 14.8955 11.8957 14 13.0003 14C14.1049 14 15.0003 14.8955 15.0003 16Z" fill="#333333"/>
  <g class="latir">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M33.3727 6.07171C33.8092 6.41004 33.8888 7.03818 33.5505 7.47471L29.8749 12.2171C29.5366 12.6536 28.9084 12.7332 28.4719 12.3949C28.0354 12.0565 27.9558 11.4284 28.2941 10.9919L31.9697 6.24951C32.3081 5.81299 32.9362 5.73338 33.3727 6.07171Z" fill="#333333"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M38.9358 19.9472C38.861 20.4944 38.3568 20.8774 37.8096 20.8027L31.8648 19.9907C31.3176 19.916 30.9346 19.4118 31.0094 18.8646C31.0841 18.3174 31.5883 17.9344 32.1355 18.0091L38.0803 18.8211C38.6275 18.8958 39.0105 19.4 38.9358 19.9472Z" fill="#333333"/>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M37.4801 12.6217C37.6889 13.1329 37.4438 13.7167 36.9325 13.9256L31.3782 16.1948C30.8669 16.4037 30.2831 16.1585 30.0743 15.6473C29.8654 15.136 30.1105 14.5522 30.6218 14.3433L36.1761 12.0741C36.6874 11.8653 37.2712 12.1104 37.4801 12.6217Z" fill="#333333"/>
  </g>
</svg>

      </button>
      <Error error={error} />
    </form>
  )

}