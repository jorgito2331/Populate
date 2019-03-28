const Person = require('../models/PersonSchema')

const getPerson = () => Person.find()

const getAllPerson = (_id) => Person.find({_id: _id})

const createPerson = (data) => Person.create(data)

module.exports = {
  getPerson,
  getAllPerson,
  createPerson
}
