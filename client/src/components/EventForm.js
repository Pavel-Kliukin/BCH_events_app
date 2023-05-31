import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [eventTitle, setEventTitle] = useState('');
  const [eventDescription, setEventDescription] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [events, setEvents] = useState([]);

  const handleEventTitleChange = (event) => {
    setEventTitle(event.target.value);
  };

  const handleEventDateChange = (event) => {
    setEventDate(event.target.value);
  };

  const handleEventDescriptionChange = (event) => {
    setEventDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const eventData = {
      title: eventTitle,
      description: eventDescription,
      date: eventDate
    };

    axios
      .post('http://localhost:5000/events', eventData)
      .then((response) => {
        // Handle successful response
        console.log(response.data);
        // Refresh the events data
        fetchEvents();
      })
      .catch((error) => {
        // Handle error
        console.error(error);
      });

    // Clear the form inputs after submission
    setEventTitle('');
    setEventDate('');
    setEventDescription('');
  };

  const fetchEvents = () => {
    axios
      .get('http://localhost:5000/events')
      .then((response) => {
        // Set the events data in state
        setEvents(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    // Fetch events data when the component mounts
    fetchEvents();
  }, []);

  return (
    <div>
    <div className="container">
    <div className="row">
      <div className="col-md-6">
        <form onSubmit={handleSubmit}>
            <h1>Submit an event</h1>
          <div className="mb-3">
            <label className="form-label">Event Title:</label>
            <input className="form-control" type="text" value={eventTitle} onChange={handleEventTitleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Date:</label>
            <input className="form-control" type="date" value={eventDate} onChange={handleEventDateChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Description:</label>
            <input className="form-control" type="text" value={eventDescription} onChange={handleEventDescriptionChange} />
          </div>
          <button className="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  
  <br/>

    <div className="col-md-6">
      <h2>Events:</h2>
      <ul>
        {events.map((event) => (
          <li key={event._id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <p>{new Date(event.date).toLocaleDateString()}</p> {/* Displaying only the date */}
          </li>
        ))}
      </ul>
      </div>
    </div>
    </div>
  );
};

export default EventForm;
