const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const secureRandom = require('secure-random')

const token = secureRandom(256, { type: 'Buffer' })

const token = jwt.sign({ foo: 'bar' }, 'shhhhh');

const exp = Math.floor(Date.now() / 1000) + (60 * 60)

const createToken = ({ id, email, password}) => {
  const payload = {
    id,
    email,
    password,
    exp
  }

  return jwt.sign(payload, token)
}

const login = ({ email, password, passwordTest }) => {
  return new Promise((resolver, reject) => {

    //traerUsuario
    bcrypt.compare(password, passwordTest, (err, isValid) => {
      if (err) reject(err)
      isValid ? resolve(createToken({_, email, password})) : reject(new Error('Error'))
    })
  })
}

module.exports = {
  login
}