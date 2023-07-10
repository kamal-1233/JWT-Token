const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
      case 422: // Replace with the appropriate validation error status code
        res.status(statusCode).json({
          title: "Validation Failed",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case 404: // Replace with the appropriate not found error status code
        res.status(statusCode).json({
          title: "Not Found",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case 401: // Replace with the appropriate unauthorized error status code
        res.status(statusCode).json({
          title: "Unauthorized",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case 403: // Replace with the appropriate forbidden error status code
        res.status(statusCode).json({
          title: "Forbidden",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      case 500: // Replace with the appropriate server error status code
        res.status(statusCode).json({
          title: "Server Error",
          message: err.message,
          stackTrace: err.stack,
        });
        break;
      default:
        console.log("No error, all good!");
        break;
    }
  };
  
  module.exports = errorHandler;
  