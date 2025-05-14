import { Link } from "react-router-dom";
import photo from "./../images/photo.jpg";
import "./../styles/style.css";
import BigText from "../components/BigText";

function First() {
    return (
        <>
            <header>
                <div>
                    <div>
                        <img className='my_photo' src={photo} alt='foto' />
                    </div>
                    <div>Клявин Николай</div>
                </div>
                <nav>
                    <Link to='/' className='P_active'>Главная</Link>
                    <Link to='/projects'>Проекты</Link>
                    <Link to='/contacts'>Контакты</Link>
                </nav>
            </header>
            <div className='Page_main'>
                <BigText className='portfolio' name='портфолио'/>
                
                <div className='Main_text'>
                    Занимаюсь разработкой макета простого сайта-портфолио для
                    представления своей работы, достижений или увлечений
                </div>
                <div className='click'>
                    <Link to='/apppost'>
                        <button className='click' >Обсудить</button>
                    </Link>
                </div>
            </div>
        </>
    );
}
export default First;
