import "./../styles/style.css";
import { Link } from "react-router-dom";

import Example1 from "../components/Example_1";
import Example2 from "../components/Example_2";
import Example3 from "../components/Example_3";
import Example4 from "../components/Example_4";
import ButtonBack from "../components/ButtonBack";

function Projects() {
    return (
        <>
            <div id='about' className='Page_examples'>
                <div className='Progects'>Проекты достижений</div>
                <div className='sum'>Проектов 4</div>
                <Example1 />
                <Example2 />
                <Example3 />
                <Example4 />
                <Link to='../' className='sum2'>
                    <ButtonBack name='Назад' />
                </Link>

                <div className='back_portfolio'>портфолио</div>
            </div>
        </>
    );
}
export default Projects;
