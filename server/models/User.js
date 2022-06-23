const mongoose = require('mongoose')

const modelName = 'User'

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  basket: {
    type: Array,
    required: true,
  }
}, {
  timestamps: { 
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
})

module.exports = mongoose.model(modelName, UserSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name
