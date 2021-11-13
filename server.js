const express = require('express');
const mongoose = require('mongoose');

const app = express();

app.use(express.json());

// db config
const db = require('./config/keys').mongoURI;

// connect to MongoDB
mongoose
  .connect(db)
  .then(() => console.log('MongoDB Connected....'))
  .catch((err) => console.log(err));

const port = process.env.PORT || 3001;

app.listen(port, () => console.log(`Server started on port ${port}`));
