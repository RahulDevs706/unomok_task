const User = require('../models/userModel');
const ErrorHandler = require("../utils/errorHandler")
const catchAsyncError = require("../middleware/catchAsyncError")

exports.createUser = catchAsyncError(async(req, res)=>{
    const data = req.body;

    await User.create(data).then(op=>{
       return res.status(201).json({
            success:true,
            message:"Successfuly created user, redirecting to homepage..."
        })
    })
})

exports.getUser = catchAsyncError(async(req,res)=>{
    const data= await User.find();

    res.status(200).json({
        success:true,
        data
    })
})