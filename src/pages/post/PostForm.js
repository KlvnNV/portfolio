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
    axios.post('http://localhost:5000/api/posts', { title, body })
      .then(response => {
        alert('Пост добавлен');
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
      <div>
      <input
        type="text"
        placeholder="Заголовок"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div>
      <textarea
        placeholder="Текст поста"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
      </div>
      <button type="submit" className='click'>Добавить пост</button>
      {/* <Button type="submit" variant="outline-success" size="lg">Добавить пост</Button> */}
    </form>
  );
}

export default PostForm;