const Booking = require('../models/booking');

exports.createBooking = async (req, res) => {
  try {
    const booking = new Booking({
      user: req.user.id,
      room: req.body.room,
      date: req.body.date
    });
    await booking.save();
    res.status(201).json(booking);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id });
    res.json(bookings);
  } catch (err) {
    res.status(500).json(err.message);
  }
};
