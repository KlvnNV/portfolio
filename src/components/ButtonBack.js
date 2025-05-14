import "./../styles/style.css";

function ButtonBack(props) {
    const { onClick, name } = props;
    return (
        <div>
            <button className='click2' onClick={onClick}>
                {name}
            </button>
        </div>
    );
}
export default ButtonBack;
