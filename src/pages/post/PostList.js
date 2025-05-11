import { useState, useEffect } from "react";
import axios from "axios";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    // Обработчик удаления поста
    const handleDeletePost = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/api/posts/${id}`);
      // Запрашиваем заново данные с сервера после успешного удаления
      axios.get('http://localhost:5000/api/posts')
        .then(response => {
          setPosts(response.data); 
          alert('Пост удален');
        })
        .catch(error => {
          console.error('Ошибка при перезагрузке:', error);
        });
        } catch (error) {
            console.error("Ошибка при удалении:", error);
        }
    };

    useEffect(() => {
        axios.get("http://localhost:5000/api/posts")
            .then((response) => {
                setPosts(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Ошибка:", error);
            });
    }, []);

    if (loading) return <p>Загрузка...</p>;

    return (
        <div>
            <h2>Список постов</h2>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                        <button className='click2' onClick={() => handleDeletePost(post.id)}>
                            Удалить
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default PostList;
