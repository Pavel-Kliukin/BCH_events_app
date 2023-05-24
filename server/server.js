const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const port = 5000; // or any other port number you prefer

// Enable CORS
app.use(cors());

// Middleware for parsing JSON request body
app.use(express.json());

// Connect to MongoDB
mongoose
  .connect('mongodb+srv://mahesh:dHWDQXNT7onCV5N8@clusterevent.wnhdxou.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error) => console.error(error));

// Define your event schema and model using Mongoose
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

const Event = mongoose.model('Event', eventSchema);

// Define a route to fetch events from the database
app.get('/events', (req, res) => {
    Event.find({})
      .then((events) => {
        res.json(events);
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('An error occurred while fetching events');
      });
  });

  // Route to insert events into the database
app.post('/events', (req, res) => {
    const eventsData = req.body;
  
    Event.insertMany(eventsData)
      .then(() => {
        res.status(201).send('Events inserted successfully');
      })
      .catch((error) => {
        console.error(error);
        res.status(500).send('An error occurred while inserting the events');
      });
  });
  
