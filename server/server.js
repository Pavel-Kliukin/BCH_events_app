const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

// Setting up express
const app = express();
app.use(cors());
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose
  .connect(`mongodb://mongo:27017/test`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected Successfully'))
  .catch((err) => console.error('Database Connection Failed', err));

// Create a schema for events
const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
});

// Create a model for events
const Event = mongoose.model('Event', eventSchema);

// Define routes
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

app.get('/events', async (req, res) => {
  const events = await Event.find();
  res.send(events);
});

app.post('/events', async (req, res) => {
  console.log(req.body); //log the request data

  const newEvent = new Event({
    title: req.body.title,
    description: req.body.description,
    date: req.body.date,
  });
  const savedEvent = await newEvent.save();
  res.send(savedEvent);
});

// Port listening
const port = 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));
