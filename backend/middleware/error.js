const ErrorHandler = require("../utils/errorhandler")
 module.exports = (err,req,res,next)=>{
    err.statusCode = err.statusCode || 500,
    err.message = err.message || "Internal Server Error";

    //Wrong mongodb id error
    if (err.name == "CastError") {
        const message = `Resource not found, Invalid: ${err.path}`
        err = new ErrorHandler(message,400)
    }

    //Mongoose Duplicate Key Error
    if (err.code === 11000) {
        const message =   `Duplicate ${Object.keys(err.keyValue)} Entered `
        err = new ErrorHandler(message,400);
    }

    // JWT Error
    if (err.name === "JsonWebTokenError") {
        const message =   `Json Web Token is Invalid, Please try again `
        err = new ErrorHandler(message,400);
    }

    // JWT  Expired Error
    if (err.name === "TokenExpiredError") {
        const message =   `Json Web Token is Expired, Please try again `
        err = new ErrorHandler(message,400);
    }

    res.status(err .statusCode).json({
        success: false,
        message: err.message,
    })
 }