// import { Link } from "react-router-dom";
import "./../styles/style.css";
import Social from "./../components/Social";
import ButtonBack from "../components/ButtonBack";

function Contacts() {
    return (
        <>
            <footer id='contacts'>
                <div className='contacts'>Кoнтакты</div>
                <div className='words'>Я всегда рад новым проектам с вами</div>
                                      {/* <div className='sum2'> */}
                                          {/* <Link to='../'>
                                              <button className='click2'>Назад</button>
                                          </Link> */}
                                          <ButtonBack />
                                      {/* </div> */}
                
                <div className='Back_ID'>КЛЯВИН</div>
                <div className='connect'>Связь</div>
                <Social />
                {/* <div className='social'>
                    <ul style={{ liststyle: "none", paddingleft: "0px" }}>
                        <li>
                            <a style={{ color: "white" }} href='#'>
                                ТЕЛЕФОН
                            </a>
                        </li>
                        <li>
                            <a style={{ color: "white" }} href='#'>
                                ТЕЛЕГРАММ
                            </a>
                        </li>
                        <li>
                            <a style={{ color: "white" }} href='#'>
                                ПОЧТА
                            </a>
                        </li>
                    </ul>
                </div> */}
            </footer>
        </>
    );
}
export default Contacts;
