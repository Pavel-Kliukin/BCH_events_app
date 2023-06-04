import { useParams } from "react-router-dom";

const EventDetails = ({ events, users }) => {
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
  
    return (
        <div>
        <h1>{event.eventName}</h1>
        <p>{event.Description}</p>
        <p>Date: {event.day}</p>
        <p>Time: {event.startTime} - {event.endTime}</p>
        <p>Participants:</p>
        <ul>
        {signedUsers.map(participant => (
          <li key={participant}>{participant}</li>
        ))}
      </ul>
      </div>
    );
  };

  export default EventDetails