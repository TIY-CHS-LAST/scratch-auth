const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const cakeRoutes = require('./cake')
app.use(bodyParser.json())

app.set('port', process.env.PORT || 3000)

app.use('/api/cakes', cakeRoutes)

app.listen(app.get('port'), () => {
  console.log(`Server listening on ${app.get('port')}`)
})
