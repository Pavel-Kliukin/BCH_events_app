import { Link } from 'react-router-dom';
import styles from './SeminarCard.module.css';

const Card = ({data}) => {
 
  return (
    <div className={styles.seminarCard}>
      <h2 className="seminar-title">{data.seminarName}</h2>
      <p className="seminar-description">{data.Description}</p>
      <p className="seminar-date">Start Date: {data.startDay}</p>
      <p className="seminar-date">End Date: {data.endDay}</p>
      <Link to={`/seminars/${data.id}`}>Read More</Link>
    
    </div>
  );
};

export default Card;