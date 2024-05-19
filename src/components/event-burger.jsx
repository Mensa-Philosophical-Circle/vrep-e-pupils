import clockImg from "../assets/Clock.png";
import calendarImg from "../assets/Calendar.png";
import profilePictureImg from "../assets/profilePicture.png";

export default function EventBurger({color, title, subTitle}) {
    return (
        <>
        <div className="main-burger">
            <div className="burger-color" style={{backgroundColor: color}}></div>
            <div className="burger-content">
                <h3>{title}</h3>
                <p className="sub-title-burger">{subTitle}</p>
                <div className="date">
                    <img src={calendarImg} alt="Calendar Icon" />
                    <p>March 20, 2021</p>
                </div>
                <div className="time">
                    <img src={clockImg} alt="Clock Icon" />
                    <p>9:00 - 10:00 AM</p>
                </div>
            </div>
        </div>
        </>
    )
}