const express = require('express');
const mongoose = require('mongoose');
const { resolve } = require('path');
const bodyParser = require('body-parser');
const BlogPost = require('./models/Schema');

const app = express();
const port = 3010;

// Middleware for serving static files
app.use(express.static('static'));

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Connect to MongoDB
mongoose.connect('mongodb+srv://Jannat:jannat10175168@jannat.5n3xo.mongodb.net/done')
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.post('/create', async (req, res) => {
  try {
    const blogPost = new BlogPost(req.body);
    await blogPost.save();
    res.send({"message":"Hurray! New blog saved to Database successfully"});
  } catch (error) {
    res.send({"message":"Could not save the new blog to database", error: error.message});
  }
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
