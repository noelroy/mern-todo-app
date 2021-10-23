// centralized error object that derives from Node’s Error
function AppError (name, httpCode, message, isOperational) {
  Error.call(this)
  Error.captureStackTrace(this)
  this.name = name
  this.httpCode = httpCode
  this.message = message
  this.isOperational = isOperational
}

AppError.prototype = Object.create(Error.prototype)
AppError.prototype.constructor = AppError

// error handler middleware
const handleError = (err, req, res, next) => {
  const error = { ...err }

  error.message = err.message

  // Add 503 mongo error

  console.log(error)

  res.status(error.httpCode || 500).json({
    success: false,
    error: error.message || 'Server Error'
  })
}

module.exports = { AppError, handleError }
