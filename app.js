const express = require('express');
const app = express();

const errorMiddleWare = require("./middleware/Error.js")
const cors = require("cors")
const dotenv = require("dotenv");
dotenv.config({path:"config/config.env"});

const bodyParser = require("body-parser");

const corsOptions ={
    AccessControlAllowMethod:'post',
    AccessControlAllowOrigin:"*",
    AccessControlAllowCredentials: true,
    origin:'*', 
    credentials:true,    
    optionSuccessStatus:200
}

app.use(cors(corsOptions));

app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));



// route imports
const user = require("./routes/UserRoutes.js")

app.use("/api/v1", user)


// middleware for error handling

app.use(errorMiddleWare);



if ( process.env.NODE_ENV == "production"){
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    })
}

module.exports = app;