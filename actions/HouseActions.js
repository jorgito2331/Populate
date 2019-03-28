const House = require('../models/HouseSchema')

const getHouse = () => House.find()

const getAllHouses = (_id) => House.find({_id: _id})

module.exports = {
  getHouse,
  getAllHouses
}
