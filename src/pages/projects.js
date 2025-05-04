
import pic111 from "./../images/111.bmp";
import pic222 from "./../images/222.bmp";
import pic333 from "./../images/333.bmp";
import pic444 from "./../images/444.bmp";
import "./../styles/style.css";

function Projects() {
	return (
        <>
        <div id="about" className="Page_examples">
        <div className="Progects">Проекты достижений</div>
        <div className="sum">Проектов 4</div>
        <div className="Example_1">
          <img className="my" src={pic111} alt="site" />
          <p>Сайт-портфолио</p> 
          <p>Использование HTML, CSS и Figma</p>
        </div>
        <div className="Example_2">
          <img src={pic222} alt="c and js" />
          <p>Программирование</p> 
          <p>Использование языков С и JavaScript</p> 
        </div>
        <div className="Example_3">
          <img className="my" src={pic333} alt="sql" />
          <p>Базы данных</p> 
          <p>Использование PostgreSQL</p>
        </div>
        <div className="Example_4">
          <img src={pic444} alt="react" />
          <p>WEB-приложение</p> 
          <p>Использование Node.js и React</p>
        </div>
        <div className="back_portfolio">портфолио</div>
      </div>
      </>
	);
}
export default Projects;
