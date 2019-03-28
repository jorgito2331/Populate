const Actions = require('../actions')

const CreatePerson = (_, data) => {
  const {name, lastName} = data
  return Actions.PersonActions.createPerson({name, lastName})
}

const CreateHouse = (_, data) => {
  const {path, persons} = data
  return Actions.PersonActions.createPerson({path, persons})
}

module.exports = {
  CreatePerson,
  CreateHouse
}