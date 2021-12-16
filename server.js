const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const cors = require('cors');


// Load env vars
dotenv.config({ path: './config/config.env' });


const exam = require('./routes/exam')
const auth = require('./routes/auth');
const connectDB = require('./config/db');
const app = express();
connectDB();
app.use(express.json());
app.use(cors())

app.use('/api/v1/auth',auth)
app.use('/exam', exam)


const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold
  )
);