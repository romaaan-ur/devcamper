const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const colors = require('colors');
const connectDB = require('./config/db');

// Load env vars
dotenv.config({ path: './config/config.env' });

connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

const app = express();

// Dev logging middleware
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

//app.use(logger);

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

const PORT = process.env.PORT || 5000;

const server = app.listen(
  PORT,
  console.log(
    `App listening on port ${process.env.NODE_ENV} mode on port ${PORT}`.green
      .bold
  )
);

// Handle unhandled rejections
process.on('unhandledRejection', (err, promise) => {
  console.log(`Error: ${err.message}.red`);
  // Close server & exit process
  server.close(() => process.exit(1));
});
