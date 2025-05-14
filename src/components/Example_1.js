import "./../styles/style.css";
// import pic111 from "./../images/111.bmp";


function Example1 (props) {
          const { className, image, title, text } = props;

return (
    <div className={className}>
        <img className='my' src={image} alt='site' />
        <p>{title}</p>
        <p>{text}</p>
    </div>
);
}
export default Example1;