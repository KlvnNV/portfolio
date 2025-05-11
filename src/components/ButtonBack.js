import "./../styles/style.css";
import { Link } from "react-router-dom";

function ButtonBack ( ) {
return (
<div className='sum2'>                          <Link to='../'>
                              <button className='click2'>Назад</button>
                          </Link>
                                                      </div>
);
}
export default ButtonBack;