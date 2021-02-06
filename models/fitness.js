const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const FitnessSchema = new Schema({

  exercises: [
  {
  type: {
    type: String,
    trim: true,
    required: "What type of exercise are you doing?"
  },

  name: {
    type: String,
    trim: true,
    required: "Enter an exercise name"
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

  distance: {
    type: Number,
  }

  }],

  date: {
    type: Date,
    default: Date.now()
  },

  
});
//need one more thing here to get duration working
const Fitness = mongoose.model("Fitness", FitnessSchema);

module.exports = Fitness;