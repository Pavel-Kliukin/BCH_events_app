import style from './Card.module.css';
import { Link } from 'react-router-dom';

const Card = ({data}) => {
 
  return (
    <div className={style.eventCard}>
      <h2 className="event-title">{data.eventName}</h2>
      <p className="event-description">{data.Description}</p>
      <p className="event-date">Date: {data.day}</p>
      <p className="event-time">Time: {data.startTime} - {data.endTime}</p>
      <Link to={`/events/${data.id}`}>Read More</Link>
    </div>
  );
};

export default Card;
