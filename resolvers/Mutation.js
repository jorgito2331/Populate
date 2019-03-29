const Actions = require('../actions')

const CreatePerson = (_, {data}) => {
  const {name, lastName} = data
  return Actions.PersonActions.createPerson({name, lastName})
}

const CreateHouse = (_, {data}) => {
  const {path, persons} = data
  return Actions.HouseActions.createHouse({path, persons})
}

const AddUserHouse = (_, {data}) => {
  const {_id, persons} = data
  return Actions.HouseActions.addUserHouse(_id, persons._id)
}

const RemoveUserHouse = (_, {data}) => {
  const {_id, persons} = data
  return Actions.HouseActions.removeUserHouse(_id, persons.id)
}

module.exports = {
  CreatePerson,
  CreateHouse,
  AddUserHouse,
  RemoveUserHouse
}