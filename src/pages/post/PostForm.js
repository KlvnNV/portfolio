import { useState } from 'react';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';
// import InputGroup from 'react-bootstrap/InputGroup';

function PostForm() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
if (!title || !body ) {
 alert('Заполните все поля!');
 return;
 }

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
{/* <InputGroup className="mb-3" data-bs-theme="dark">
        <InputGroup.Text id="basic-addon1">Заголовок</InputGroup.Text>
        <Form.Control
          aria-label="Username"
          aria-describedby="basic-addon1"
          value={title}
        onChange={(e) => setTitle(e.target.value)}
        />
      </InputGroup>  
      <InputGroup className="mb-3" data-bs-theme="dark">
        <InputGroup.Text>Текст поста</InputGroup.Text>
        <Form.Control as="textarea" aria-label="With textarea"         value={body}
        onChange={(e) => setBody(e.target.value)}
/>
      </InputGroup>     */}
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
      <button type="submit" className='click2'>Добавить пост</button>
    </form>
  );
}

export default PostForm;