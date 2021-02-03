const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({
  exerciseName: {
    type: String,
    trim: true,
    required: "Enter an exercise name"
  },

  type: {
    type: String,
    trim: true,
    required: "What type of exercise are you doing?"
  },

  weight: {
    type: Number
  },

  sets: {
    type: Number
  },

  reps: {
    type: Number
  },

  duration: {
    type: Number,
    required: "How many minutes did you work out?",
    default: 0
  },

  date: {
    type: Date,
    default: Date.now()
  },

  
});

const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;