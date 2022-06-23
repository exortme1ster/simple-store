const mongoose = require('mongoose')

const modelName = 'Rating'

const RatingSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true
  },
  rating: {
    type: Number,
    required: true
  } 
}, {
  timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

module.exports = mongoose.model(modelName, RatingSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name
