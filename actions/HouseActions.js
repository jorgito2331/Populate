const House = require('../models/HouseSchema')

const getHouse = () => House.find().populate('persons')

const getAllHouses = (_id) => House.find({_id: _id}).populate('persons')

const createHouse = (data) => house.create(data)

module.exports = {
  getHouse,
  getAllHouses,
  createHouse
}
