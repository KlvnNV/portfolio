import { useState } from 'react';
import axios from 'axios';
import ButtonBack from '../../components/ButtonBack';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
if (!title || !body ) {
 alert('Заполните все поля!');
 return;
 };

    axios.post('http://localhost:5000/api/posts', { title, body })
      .then(response => {
        alert('Пост добавлен');
         window.location.reload();
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="input-field">
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div className="input-field">
      <textarea
        placeholder="Текст поста"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      </div>
            <ButtonBack type="submit" name='Добавить пост' />

      {/* <button type="submit" className='click2'>Добавить пост</button> */}
    </form>
  );
}

export default PostForm;