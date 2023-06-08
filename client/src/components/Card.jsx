import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({data,seminars}) => {

  // Find the corresponding seminar for this event
const seminar = seminars.find(s => s.id === data.parentalSeminar);


  // This is for styling 'eventImg' div
  // The image will be set as a background of 'eventImg div
  const divStyle = {
    backgroundImage: `url(${data.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
 
  return (
    <div className={style.eventCard}>
      <div className={style.eventImg} style={divStyle}></div>
      <div className={style.eventInfo}>
        <div className={style.eventTitle}>
          <p>{data.eventName}</p>

          <div className={style.titleEllipse}>
            {seminar ? (
              <Link to={`/seminars/${seminar.id}`}>
                <text>{seminar.seminarName}</text>
              </Link>
            ) : (
              <text>Seminar not found</text>
            )}
          </div>

        </div>

        <div className={style.infoBlocks}>
          <div className={style.leftBlock}>
            <p className={style.eventDate}>Date: {data.day}</p>
            <p className={style.eventTime}>Time: {data.startTime} - {data.endTime}</p>
          </div>
          <div className={style.rightBlock}>
            <p className={style.eventDescription}>{data.Description}</p>
            <div className={style.twoButtons}>
              <button>SUBSCRIBE</button>
              <Link to={`/events/${data.id}`}>
                <div className={style.ReadMore}>READ MORE</div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
