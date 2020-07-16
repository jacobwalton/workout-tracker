const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    // required: "Select cardio or resistance",
  },
  name: {
    type: String,
    trim: true,
    // required: "Enter a name for for your entry",
  },
  distance: {
    type: String,
    trim: true,
    // required: "Enter distance for cardio exercise",
  },
  weight: {
    type: String,
    trim: true,
    // required: "Enter a weight for resistance exercise",
  },
  sets: {
    type: Number,
    trim: true,
    // required: "Enter amount of sets",
  },

  reps: {
    type: Number,
    trim: true,
    // required: "Enter amount of reps",
  },
  duration: {
    type: Number,
    trim: true,
    // required: "Enter amount duration of exercise",
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
