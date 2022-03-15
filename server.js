const app = require('./app');

const PORT = process.env.PORT || 4000;

process.on("uncaughtException", err=>{
    console.log(`Error: ${err}`);
    console.log("Shutting down server due to uncaught exception");
    process.exit(1);
})

const connectDb = require('./config/database.js');
connectDb();

const server = app.listen(PORT, ()=>{
    console.log(`Server started on http://localhost:${PORT}`);
})


process.on('unhandledRejection', err=>{
    console.log(`Error: ${err}`);
    console.log("Shutting down the server due to unhandled promise rejection");

    server.close(()=>{
        process.exit(1);
    })
})