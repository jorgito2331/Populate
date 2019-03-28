const Person = require('../models/PersonSchema')

const getPerson = () => Person.find()

const getAllPerson = (_id) => Person.find({_id: _id})

module.exports = {
  getPerson,
  getAllPerson
}
