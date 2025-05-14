import "./../styles/style.css";
// import { Link } from "react-router-dom";

function ButtonBack(props) {
    const { onClick, name } = props;
    return (
        <div /*className='sum2'*/>
            {/* <Link to='../'> */}
                <button className='click2' onClick={onClick}>{name}</button>
            {/* </Link> */}
        </div>
    );
}
export default ButtonBack;
