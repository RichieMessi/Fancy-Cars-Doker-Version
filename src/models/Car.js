const mongoose    = require('mongoose')
const CarSchema = mongoose.Schema({
  id: {
    type: Number,
    required: true,
  },
  img: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  make: {
    type: String,
    required: true
  },
  model: {
    type: String,
    required: true
  },
  year: {
    type: Number,
    required: true
  },
  availability: {
    type: Boolean,
    required: true
  }
})


mongoose.model('Car', CarSchema)