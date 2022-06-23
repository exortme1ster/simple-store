const mongoose = require('mongoose')

const modelName = 'Device'

const DeviceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
    
  },
  ratings: {
    type: Array,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  brand: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  }, 
  description: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model(modelName, DeviceSchema, modelName) // * 1st - model name, 2nd - schema name, 3d - collection name
