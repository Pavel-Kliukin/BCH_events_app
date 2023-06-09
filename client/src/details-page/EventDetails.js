import { useParams, Link } from "react-router-dom";
import style from './EventDetails.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";

const EventDetails = ({ events, users, seminars }) => {
    const { eventId } = useParams();
    const event = events.find(event => event.id === parseInt(eventId));
  
    if (!event) {
      return <div>Event not found</div>;
    }

    // Get the names of signed users
    const signedUsers = event.signedUsers.map(userId => {
    const user = users.find(user => user.id === parseInt(userId));
    return user ? user.name : `User with ID: ${userId}`;
  });

   // This is for styling 'eventImg' div
  // The image will be set as a background of 'eventImg div
  const divStyle = {
    backgroundImage: `url(${event.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }

  const parentalSeminar = seminars.find(
    (seminar) => seminar.id === event.parentalSeminar
  );
  
    return (
      <div>
        <Header />
        <div className={style.eventBody}>
          <div className={style.eventBox}>
            <div className={style.eventTitle}>
              <h2>{event.eventName}</h2>
            </div>
            <div className={style.eventData}>

              <div className={style.leftSide}>
                <div className={style.eventImg} style={divStyle}></div>
                <div className={style.dateTimeBox}>
                  <p>Date: {event.day}</p>
                  <p>Time: {event.startTime} - {event.endTime}</p>
                </div>
                <p>Participants: {signedUsers.length}</p>
              </div>

              <div className={style.rightSide}>
                {parentalSeminar && (
                  <div className={style.parentalSeminar}>
                    This event is hosted by:{'\u00A0'}
                    <Link to={`/seminars/${parentalSeminar.id}`}>
                      <div className={style.seminarNameBox}>
                        {parentalSeminar.seminarName}
                      </div>
                    </Link>
                  </div>
                )}
                <br />
                <p>{event.Description}</p>
                <div className={style.signButtonBox}>
                  <button>SIGN IN</button>
                </div>
              </div>

            </div>

          </div>
        </div>
      <Footer />
      </div>
    );
  };

  export default EventDetails