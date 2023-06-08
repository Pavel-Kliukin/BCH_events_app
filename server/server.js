const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});

const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/my_database', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', function() {
  console.log("Successfully connected to MongoDB!");
});

const PostSchema = new mongoose.Schema({
  title: String,
  content: String,
}, { timestamps: true });

const Post = mongoose.model('Post', PostSchema);

app.get('/posts', async (req, res) => {
  const posts = await Post.find();
  res.json(posts);
});

app.post('/posts', async (req, res) => {
  const newPost = new Post(req.body);
  const savedPost = await newPost.save();
  res.json(savedPost);
});

app.get('/posts/:id', async (req, res) => {
  const foundPost = await Post.findById(req.params.id);
  res.json(foundPost);
});

app.patch('/posts/:id', async (req, res) => {
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true});
  res.json(updatedPost);
});

app.delete('/posts/:id', async (req, res) => {
  const deletedPost = await Post.findByIdAndDelete(req.params.id);
  res.json(deletedPost);
});


/* const express = require('express');
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
 */