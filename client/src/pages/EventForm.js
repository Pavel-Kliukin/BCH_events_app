import React, { useState } from 'react';
import axios from 'axios';

const EventForm = () => {
  const [eventTitle, setEventTitle] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [events, setEvents] = useState([]);

  const [seminarName, setSeminarName] = useState("");
  const [seminarDescription, setSeminarDescription] = useState("");
  const [startDay, setStartDay] = useState("");
  const [endDay, setEndDay] = useState("");
  const [seminars, setSeminars] = useState([]);

  const handleSeminarNameChange = (e) => {
    setSeminarName(e.target.value);
  };
  
  const handleSeminarDescriptionChange = (e) => {
    setSeminarDescription(e.target.value);
  };
  
  const handleStartDayChange = (e) => {
    setStartDay(e.target.value);
  };
  
  const handleEndDayChange = (e) => {
    setEndDay(e.target.value);
  };

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
  
    const newSeminar = {
      seminarName: seminarName,
      Description: seminarDescription,
      startDay: startDay,
      endDay: endDay,
      events_ids: [],
    };
  
    try {
      const eventResponse = await axios.post('http://localhost:3001/events', newEvent);
      newSeminar.events_ids.push(eventResponse.data.id);
      const seminarResponse = await axios.post('http://localhost:3001/seminars', newSeminar);
      
      setEvents([...events, eventResponse.data]);
      setSeminars([...seminars, seminarResponse.data]);
      
      setEventTitle('');
      setStartDate('');
      setEndDate('');
      setEventDescription('');
  
      setSeminarName('');
      setSeminarDescription('');
      setStartDay('');
      setEndDay('');
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
  ...
          <div className="mb-3">
            <label className="form-label">Seminar Name:</label>
            <input className="form-control" type="text" value={seminarName} onChange={handleSeminarNameChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Seminar Description:</label>
            <input className="form-control" type="text" value={seminarDescription} onChange={handleSeminarDescriptionChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Seminar Start Day:</label>
            <input className="form-control" type="date" value={startDay} onChange={handleStartDayChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Seminar End Day:</label>
            <input className="form-control" type="date" value={endDay} onChange={handleEndDayChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Name:</label>
            <input className="form-control" type="text" value={eventTitle} onChange={handleEventTitleChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Description:</label>
            <input className="form-control" type="text" value={eventDescription} onChange={handleEventDescriptionChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event Start Day:</label>
            <input className="form-control" type="date" value={startDate} onChange={handleStartDateChange} />
          </div>
          <div className="mb-3">
            <label className="form-label">Event End Day:</label>
            <input className="form-control" type="date" value={endDate} onChange={handleEndDateChange} />
          </div>

          ...
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
