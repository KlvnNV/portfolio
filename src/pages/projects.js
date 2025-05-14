import "./../styles/style.css";
import { Link } from "react-router-dom";

import Example1 from "../components/Example_1";
import ButtonBack from "../components/ButtonBack";
import BigText from "../components/BigText";
import pic111 from "./../images/111.bmp";
import pic222 from "./../images/222.bmp";
import pic333 from "./../images/333.bmp";
import pic444 from "./../images/444.bmp";

function Projects() {
    return (
        <>
            <div id='about' className='Page_examples'>
                <div className='Progects'>Проекты достижений</div>
                <div className='sum'>Проектов 4</div>
                <Example1 className="Example_1" image={pic111} title='Сайт-портфолио' text='Использование HTML, CSS и Figma'/>
                <Example1 className="Example_2" image={pic222} title='Программирование' text='Использование языков С и JavaScript'/>
                <Example1 className="Example_3" image={pic333} title='Базы данных' text='Использование PostgreSQL'/>
                <Example1 className="Example_4" image={pic444} title='WEB-приложение' text='Использование Node.js и React'/>
                <Link to='../' className='sum2'>
                    <ButtonBack name='Назад' />
                </Link>
                <BigText className='back_portfolio' name='портфолио'/>

            </div>
        </>
    );
}
export default Projects;
