import style from './Card.module.css';

const Card = ({data}) => {
 
  return (
    <div className={style.eventCard}>
      <h2 className="event-title">{data.eventName}</h2>
      <p className="event-description">{data.Description}</p>
      <p className="event-date">Date: {data.day}</p>
      <p className="event-time">Time: {data.startTime} - {data.endTime}</p>
    {/*   <p className="event-participants">Participants: {data.signedUsers.join(', ')}</p> */}
    
    </div>
  );
};

export default Card;
