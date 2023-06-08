import { Link } from 'react-router-dom';
import style from './SeminarCard.module.css';

const Card = ({data}) => {

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
    // <div className={styles.seminarCard}>
    //   <h2 className="seminar-title">{data.seminarName}</h2>
    //   <p className="seminar-description">{data.Description}</p>
    //   <p className="seminar-date">Start Date: {data.startDay}</p>
    //   <p className="seminar-date">End Date: {data.endDay}</p>
    //   <Link to={`/seminars/${data.id}`}>Read More</Link>
    
    // </div>
  );
};

export default Card;