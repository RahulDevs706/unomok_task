const mongoose = require("mongoose")

const UserSchema = new mongoose.Schema({
    fName:{
        type:String,
        required:[true, "Please enter your First Name"],
        minlength:[3, "First name should be atleast of 3 characters"],
        maxlength:[10, "First name cannot exceed more than 10 characters"]
    },

    lName:{
        type:String,
        required:[true, "Please enter your Last Name"],
        minlength:[3, "Last name should be atleast of 3 characters"],
        maxlength:[10, "Last name cannot exceed more than 10 characters"]

    },

    email:{
        type:String,
        required:[true, 'Please enter your Email'],
        unique:[true, "Email address already in use"],
    },
    
    dob:{
        type:Date,
        required:[true, "Please enter your Date of Birth"],
    },

    description:{
        type:String,
    }
})

module.exports =   mongoose.models.User || mongoose.model("User", UserSchema);