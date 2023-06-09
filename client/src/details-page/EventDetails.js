import React, { useCallback, useState, useEffect } from 'react';
import { useParams, Link } from "react-router-dom";
import { GoogleMap, useJsApiLoader,Marker } from '@react-google-maps/api';
import style from './EventDetails.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import combinedDB from '../combinedDB.json';

const EventDetails = ({ users, seminars }) => {
  const { eventId } = useParams();
  const events = combinedDB.events;
  const event = events.find(event => event.id === parseInt(eventId));

  const [map, setMap] = useState(null);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  const onLoad = useCallback(function callback(mapInstance) {
    setMap(mapInstance);
  }, []);
  

  const onUnmount = useCallback(function callback() {
    setMap(null);
  }, []);

  // Get the names of signed users
  const signedUsers = event.signedUsers.map(userId => {
    const user = users.find(user => user.id === parseInt(userId));
    return user ? user.name : `User with ID: ${userId}`;
  });

  // This is for styling 'eventImg' div
  // The image will be set as a background of 'eventImg' div
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
              <div className={style.poll}>
               <div className={style.pollText}>
                We want to know your opinion about this upcoming event. Please, take our survey!
               </div>
               <div className={style.pollButtonBox}>
                <button>POLL</button>
               </div>
              </div>
            </div>
            <div className={style.rightSide}>
              {parentalSeminar && (
                <div className={style.parentalSeminar}>
                  This event is a part of the{'\u00A0'}
                  <Link to={`/seminars/${parentalSeminar.id}`}>
                    <div className={style.seminarNameBox}>
                      {parentalSeminar.seminarName}
                    </div>
                  </Link>
                </div>
              )}
              <div className={style.description}>
                {event.Description}
              </div>
              
              <div className={style.signButtonBox}>
                <button>ATTEND</button>
              </div>
              <div className={style.locationBox}>
                <div className={style.location}>
                  <b>Location:</b> {event.location.address}
                </div>

                <div className={style.map}>
                  {event.location && isLoaded && (
                    <GoogleMap
                      mapContainerStyle={{ height: '300px', width: '500px', borderRadius: '10px' }}
                      center={event.location}
                      zoom={13} // adjust this as needed
                      onLoad={onLoad}
                      onUnmount={onUnmount}
                    >
                      <Marker position={event.location} />
                    </GoogleMap>
                  )}
                </div>

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
