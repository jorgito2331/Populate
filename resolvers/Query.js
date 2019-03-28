const Actions = require('../actions')

const Houses = (_) => {
  return Actions.HouseActions.getAllHouses()
  .then(houses => houses)
  .catch(err => err)
}

const House = (_,{ _id }) => {
  return Actions.HouseActions.getHouse(_id)
  .then(houses => houses)
  .catch(err => err)
}

const Persons = (_) => {
  return Actions.PersonActions.getAllPerson()
  .then(person => person)
  .catch(err => err)
}

const Person = (_,{ _id }) => {
  return Actions.PersonActions.getPerson(_id)
  .then(person => person)
  .catch(err => err)
}


module.exports = {
  Person,
  Persons,
  House,
  Houses
}