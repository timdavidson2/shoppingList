const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const items = require('./routes/api/items');

const app = express();

app.use(express.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected....'))
  .catch((err) => console.log(err));

// use routes
app.use('/api/items', items);

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirName, 'client', 'build', 'index.html'));
  });
}

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server started on port ${port}`));
