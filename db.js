require('dotenv').config();
const mongoose = require('mongoose');


const mongoUrl = process.env.DB_URL_LOCAL;
//const mongoUrl=process.env.DB_URL;

// mongoose.connect(mongoUrl, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });
mongoose.connect(mongoUrl)

const db = mongoose.connection;

// Attach event listeners
db.on('connected', () => {
  console.log("Connected to MongoDB server");
});

db.on('error', (err) => {
  console.log('MongoDB connection error:', err);
});

db.on('disconnected', () => {
  console.log("MongoDB server disconnected");
});

module.exports = db;
