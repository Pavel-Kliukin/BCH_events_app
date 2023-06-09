import { useParams, Link } from "react-router-dom";
import style from './SeminarDetails.module.css'
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";

const SeminarDetails = ({ events, seminars }) => {
    const { seminarId } = useParams();
    const seminar = seminars.find(seminar => seminar.id === parseInt(seminarId));
  
    if (!seminar) {
      return <div>Event not found</div>;
    }

    const childEvents = events.filter((event) =>
    seminar.events_ids.includes(event.id)
  );

  // This is for styling 'seminarImg' div
  // The image will be set as a background of 'seminarImg div
  const divStyle = {
    backgroundImage: `url(${seminar.imgUrl})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }
  
    return (
        <div>
          <Header />
            <div className={style.seminarBody}>
              <div className={style.seminarInfo}>
                <div className={style.seminarImg} style={divStyle}></div>
                <div className={style.titleAndDescription}>
                  <h1>{seminar.seminarName}</h1>
                  <div className={style.description}>
                    {seminar.Description}
                  </div>
                  <div className={style.bottomBox}>
                    <div className={style.dates}>
                      <p><b>Start Day:</b> {seminar.startDay}</p>
                      <p><b>End Day:</b> {seminar.endDay}</p>
                    </div>
                    <button>SUBSCRIBE</button>
                  </div>
                </div>
              </div>
              
            
              {childEvents && (
                <div>
                  <div className={style.hostBox}>
                    <div className={style.hostText}>
                      <h2>This seminar hosts:</h2>
                    </div>
                  </div>
                  <div className={style.eventsContainer}>
                    {childEvents.map((eventData) => (
                        <Card key={eventData.id} data={eventData} seminars={seminars} />
                    ))}
                  </div> 
                </div>
              )}
            </div>
        <Footer />
      </div>
    );
  };

  export default SeminarDetails