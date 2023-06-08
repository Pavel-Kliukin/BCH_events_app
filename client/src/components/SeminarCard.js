import { Link } from 'react-router-dom';
import style from './SeminarCard.module.css';

const Card = ({data}) => {

  // This is for styling 'seminarImg' div
  // The image will be set as a background of 'seminarImg div
  const divStyle = {
    backgroundImage: `url(${data.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
 
  return (
    <div className={style.seminarCard}>
        <div className={style.seminarTitle}>
          <p>{data.seminarName}</p>
        </div>
      <div className={style.seminarImg} style={divStyle}></div>
      <div className={style.seminarInfo}>
        <div className={style.infoBlocks}>
          <div className={style.leftBlock}>
            <p className={style.seminarStartDate}>Start date: {data.startDay}</p>
            <p className={style.seminarEndDate}>End date: {data.endDay}</p>
          </div>
          <div className={style.rightBlock}>
            <p className={style.seminarDescription}>{data.Description}</p>
            <div className={style.twoButtons}>
              <button>SUBSCRIBE</button>
              <Link to={`/seminars/${data.id}`}>
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