const Person = require('../models/PersonSchema')

const getPerson = (_id) => Person.find({_id: _id})

const getAllPerson = () => Person.find()

const createPerson = (data) => Person.create(data)

module.exports = {
  getPerson,
  getAllPerson,
  createPerson
}
