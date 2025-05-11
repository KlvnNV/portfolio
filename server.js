// server.js
const express = require('express');
const cors = require('cors');
const { Pool } = require('pg');  // Подключение клиента PostgreSQL

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

// Настройка подключения к PostgreSQL
const pool = new Pool({
  user: 'postgres',        // Имя пользователя
  host: 'localhost',       // Хост, если база на локальном компьютере
  database: 'myapp',       // Имя базы данных
  password: 'postgres',    // Ваш пароль для PostgreSQL
  port: 5432,              // Порт, по умолчанию 5432
});

// Получить все посты
// app.get('/api/posts', async (req, res) => {
//   try {
//     const result = await pool.query('SELECT * FROM posts');
//     res.json(result.rows);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Ошибка при получении данных');
//   }
// });

// Получить один пост по id
// app.get('/api/posts/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const result = await pool.query('SELECT * FROM posts WHERE id = $1', [id]);
//     if (result.rows.length === 0) {
//       return res.status(404).send('Пост не найден');
//     }
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Ошибка при получении поста');
//   }
// });

// Создать новый пост

// Обновить пост
// app.put('/api/posts/:id', async (req, res) => {
//   const { id } = req.params;
//   const { title, body } = req.body;
//   try {
//     const result = await pool.query(
//       'UPDATE posts SET title = $1, body = $2 WHERE id = $3 RETURNING *',
//       [title, body, id]
//     );
//     if (result.rows.length === 0) {
//       return res.status(404).send('Пост не найден');
//     }
//     res.json(result.rows[0]);
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Ошибка при обновлении поста');
//   }
// });

// Удалить пост
// app.delete('/api/posts/:id', async (req, res) => {
//   const { id } = req.params;
//   try {
//     const result = await pool.query('DELETE FROM posts WHERE id = $1 RETURNING *', [id]);
//     if (result.rows.length === 0) {
//       return res.status(404).send('Пост не найден');
//     }
//     res.status(204).send();
//   } catch (err) {
//     console.error(err);
//     res.status(500).send('Ошибка при удалении поста');
//   }
// });

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
