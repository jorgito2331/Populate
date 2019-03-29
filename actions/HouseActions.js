const House = require('../models/HouseSchema')

const getHouse = (_id) => House.find({ _id: _id }).populate('persons')

const getAllHouses = () => House.find().populate('persons')

const createHouse = (data) => House.create(data)

const addUserHouse = (_id, person) => House.findByIdAndUpdate(_id, { $addToSet: { persons: person } })

const removeUserHouse = (_id, person) => House.findByIdAndUpdate(_id, { $pull: { persons: person } }, {new: true})

module.exports = {
  getHouse,
  getAllHouses,
  createHouse,
  addUserHouse,
  removeUserHouse
}
