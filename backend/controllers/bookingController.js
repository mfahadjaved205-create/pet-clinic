const Booking = require('../models/Booking');
const User = require('../models/User');

// Create booking (user must be logged in)
const createBooking = async (req, res) => {
  try {
    const { petName, petType, service, date, time, notes } = req.body;

    if (!petName || !service || !date || !time) {
      return res.status(400).json({ message: 'Please fill all required fields' });
    }

    // Get logged-in user's info
    const user = await User.findById(req.userId);
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Slot number = overall sequence across all bookings
    const totalBookings = await Booking.countDocuments();
    const slotNumber = totalBookings + 1;

    const booking = await Booking.create({
      user: user._id,
      ownerName: user.name,
      email: user.email,
      petName,
      petType,
      service,
      date,
      time,
      notes,
      slotNumber,
    });

    res.status(201).json(booking);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all bookings (sorted by slot number)
const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find().sort({ slotNumber: 1 });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createBooking, getBookings };