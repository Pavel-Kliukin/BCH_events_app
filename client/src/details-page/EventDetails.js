import { useParams, Link } from "react-router-dom";
import style from './EventDetails.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import combinedDB from '../combinedDB.json';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

L.Icon.Default.imagePath = '../node_modules/leaflet';

const EventDetails = ({ users, seminars }) => {
  const { eventId } = useParams();
  const events = combinedDB.events;
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
              {event.location && (
                <div style={{ height: '400px', width: '400px' }}>
                  <MapContainer center={[event.location.lat, event.location.lng]} zoom={13} style={{ height: '100%', width: '100%' }}>
                    <TileLayer
                      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    />
                    <Marker position={[event.location.lat, event.location.lng]}>
                      <Popup>
                        {event.eventName}
                      </Popup>
                    </Marker>
                  </MapContainer>
                </div>
              )}
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

export default EventDetails;
