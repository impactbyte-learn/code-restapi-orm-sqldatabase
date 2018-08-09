const createError = require('http-errors')
const express = require('express')
const cookieParser = require('cookie-parser')
const logger = require('morgan')
const cors = require('cors')

const indexRouter = require('./api/index')
const usersRouter = require('./api/users')

const app = express()

app.use(cors()) // from cors
app.use(logger('dev')) // from morgan
app.use(express.json()) // replaced bodyParser.json()
app.use(
  express.urlencoded({
    extended: false
  }) // replaced bodyParser.urlencoded()
)
app.use(cookieParser())

app.use('/', indexRouter)
app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404))
})

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.send({
    err
  })
})

module.exports = app
