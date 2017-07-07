const jwt = require('jsonwebtoken')
const moment = require('moment')

// create a payload
const payload = {
  iss: 'http://theironyard.com',
  aud: 'TIY Engineers',
  sub: 'george-washington',
  name: 'George Washington',
  email: 'george@statesman.com',
  roles: [ 'admin', 'member' ],
  iat: moment().unix(),
  exp: moment().add('24', 'hours').unix()
}
// encrypt payload to make a token, with a secret
const token = jwt.sign(payload, 'dinosaur toe jam')
// decrypt token to extract payload
console.log('token *********', token)
// console log both token and decrypted payload
const decoded = jwt.verify(token, 'dinosaur toe jam')
console.log('bad token??', decoded)
