import "./../styles/style.css";
import Social from "./../components/Social";
import ButtonBack from "../components/ButtonBack";

function Contacts() {
    return (
        <>
            <footer id='contacts'>
                <div className='contacts'>Кoнтакты</div>
                <div className='words'>Я всегда рад новым проектам с вами</div>
                <ButtonBack />
                
                <div className='Back_ID'>КЛЯВИН</div>
                <div className='connect'>Связь</div>
                <Social />
            </footer>
        </>
    );
}
export default Contacts;
