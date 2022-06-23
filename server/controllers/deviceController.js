const uuid = require('uuid')
const path = require('path')
const Device = require('../models/Device')

  
const create = async(req, res) => {
  try{
    console.log(req.body)
    const {name, price, type, brand, title, description} = req.body
    const {img} = req.files
    let fileName = uuid.v4() + '.jpg'
    img.mv(path.resolve(__dirname,  '..', 'static', fileName))
  
    const device = await Device.create({name: name, price: price, ratings: [], img: fileName, type: type, brand: brand, title: title, description: description})
    return res.json(device)
  } catch (err) {
      console.error(err)
  }
}

const getAll = async (req, res) => {

}

const getOne = async (req, res) => {

}

module.exports = {
  create,
  getAll,
  getOne,
}
