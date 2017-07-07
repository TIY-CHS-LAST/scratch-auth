const jwt = require('jsonwebtoken')
const moment = require('moment')
const payload = {
  iss: 'http://theironyard.com',
  aud: 'students',
  sub: 'Test token',
  name: 'That is what is up',
  iat: moment().unix(),
  exp: moment().add('24', 'hours').unix()
}

const token = jwt.sign(payload, 'my secret')

const decoded = jwt.verify(token, 'my secret')

console.log('token', token)
console.log('decoded', JSON.stringify(decoded))
