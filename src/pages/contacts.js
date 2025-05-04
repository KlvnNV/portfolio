import "./../styles/style.css";

function Contacts() {
    return (
        <>
            <footer id='contacts'>
                <div className='contacts'>Кoнтакты</div>
                <div className='words'>Я всегда рад новым проектам с вами</div>
                <div className='Back_ID'>КЛЯВИН</div>
                <div className='connect'>Связь</div>
                <div className='social'>
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
                </div>
            </footer>
        </>
    );
}
export default Contacts;
