const jwt = require('jsonwebtoken')
module.exports = { ensureAuthenticated }

function ensureAuthenticated (request, response, next) {
  if (!request.headers.authorization) {
    return response.status(401).send({ message: 'Sorry you lose' })
  }
  const token = request.headers.authorization.split(' ')[1]
  if (!token) {
    return response.status(401).send({ message: 'Sorry you lose' })
  }
  const decoded = jwt.verify(token, 'dinosaur toe jam')
  request.user = decoded
  next()
  // [Bearer ,dskjkls3ejlkwejlke.slkdsjsflkjds.ljsdljfwdk]
}
