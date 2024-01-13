import express from "express";
import cors from "cors";
import morgan from "morgan";
import connect from "./database/connection.js";
import router from "./router/route.js";

const app = express();

// middlewares
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by");  //less hackers know about our stack.

const port = 8000;

// HTTP GET request.
app.get('/', (req,res)=>{
res.status(201).json("Home GET Request");
});


//API Routes.
app.use('/api', router)


// start server once we have a valid connection.
// connect().then(()=>{
    try {
        app.listen(port, ()=>{
            console.log(`Server connected to http://localhost:${port}`);
        }); 
    } catch (error) {
        console.log("Cannont connect to the server.");
        
    }
// }).catch(error=>{
//     console.log("Invalid database connection.");
// })
