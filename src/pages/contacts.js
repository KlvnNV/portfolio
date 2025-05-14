import "./../styles/style.css";
import { Link } from "react-router-dom";

import Social from "./../components/Social";
import ButtonBack from "../components/ButtonBack";

function Contacts() {
    return (
        <>
            <footer id='contacts'>
                <div className='contacts'>Кoнтакты</div>
                <div className='words'>Я всегда рад новым проектам с вами</div>
                <Link to='../' className='sum2'>
                    <ButtonBack name='Назад' />
                </Link>
                <div className='Back_ID'>КЛЯВИН</div>
                <div className='connect'>Связь</div>
                <Social />
            </footer>
        </>
    );
}
export default Contacts;
