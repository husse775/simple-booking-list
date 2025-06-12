const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  room: String,
  date: Date
});

module.exports = mongoose.model('Booking', bookingSchema);
