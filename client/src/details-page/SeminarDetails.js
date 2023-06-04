import { useParams, Link } from "react-router-dom";

const SeminarDetails = ({ events, seminars }) => {
    const { seminarId } = useParams();
    const seminar = seminars.find(seminar => seminar.id === parseInt(seminarId));
  
    if (!seminar) {
      return <div>Event not found</div>;
    }

    const childEvents = events.filter((event) =>
    seminar.events_ids.includes(event.id)
  );
  
    return (
        <div>
        <h1>{seminar.seminarName}</h1>
        <p>{seminar.Description}</p>
        <p>Start Date: {seminar.startDay}</p>
        <p>End Date: {seminar.endDay}</p>
       
        {childEvents && (
        <div>
          <p>This seminar hosts:</p>
          <ul>
            {childEvents.map((childEvent) => (
              <li key={childEvent.id}>
                <Link to={`/events/${childEvent.id}`}>
                  {childEvent.eventName}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
      </div>
    );
  };

  export default SeminarDetails