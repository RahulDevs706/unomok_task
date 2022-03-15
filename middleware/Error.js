const ErrorHandler = require('../utils/errorHandler.js');

module.exports = (err, req, res, next)=>{
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";

    // handling mongodb cast error
    if(err.name==="CastError"){
        const message = `Resourse not found. Invalid ${err.path}`
        err = new ErrorHandler(message, 400);
    }

    // handling mongodb duplicate key error

    if(err.code===11000){
        const message = `Duplicate ${Object.keys(err.keyValue)} entered`
        err = new ErrorHandler(message, 400);
    }

    // when general error returning
    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}