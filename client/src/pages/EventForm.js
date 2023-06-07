import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);

  const handleEventTitleChange = (e) => {
    setEventTitle(e.target.value);
  };

  const handleStartDateChange = (e) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e) => {
    setEndDate(e.target.value);
  };

  const handleEventDescriptionChange = (e) => {
    setEventDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newEvent = {
      title: eventTitle,
      startDate: startDate,
      endDate: endDate,
      description: eventDescription,
    };

    try {
      const response = await axios.post('http://localhost:3001/events', newEvent);
      setEvents([...events, response.data]);
      setEventTitle('');
      setStartDate('');
      setEndDate('');
      setEventDescription('');
    } catch (error) {
      console.error(error);
    }
  };

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
                <label className="form-label">Start Date:</label>
                <input className="form-control" type="date" value={startDate} onChange={handleStartDateChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">End Date:</label>
                <input className="form-control" type="date" value={endDate} onChange={handleEndDateChange} />
              </div>
              <div className="mb-3">
                <label className="form-label">Event Description:</label>
                <input className="form-control" type="text" value={eventDescription} onChange={handleEventDescriptionChange} />
              </div>
              <button className="btn btn-primary" type="submit">Submit</button>
            </form>
          </div>
        </div>

        <br />

        <div className="col-md-6">
          <h2>Events:</h2>
          <ul>
            {events.map((event) => (
              <li key={event._id}>
                <h3>{event.title}</h3>
                <p>{event.description}</p>
                <p>{new Date(event.startDate).toLocaleDateString()}</p>
                <p>{new Date(event.endDate).toLocaleDateString()}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default EventForm;
