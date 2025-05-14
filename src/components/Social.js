import "./../styles/style.css";
import SocialLink from "./SocialLink";

function Social() {
    return (
        <div className='social'>
            <ul style={{ listStyleType: "none", paddingLeft: "0px" }}>
                <SocialLink name='ТЕЛЕФОН' />
                <SocialLink name='ТЕЛЕГРАММ' />
                <SocialLink name='ПОЧТА' />
            </ul>
        </div>
    );
}

export default Social;
