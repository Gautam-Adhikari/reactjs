import express from "express";
import 'dotenv/config'
import connectDB from "./db/connectDB.js";
import productRouter from "./db/routes/productRouter.js";

const app = express();

// routes
app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Store API</h1>");
});

//product route
app.use('/api/v1/products', productRouter)    //setup the middleware

const PORT  = process.env.PORT || 3000;


(async () =>{     //iffe function is a nameless function used to call without calling function
    try {
        await connectDB(process.env.MONGO_URL);
        console.log('Database is connected')
        app.listen(PORT,()=>{
            console.log(`Server is running at Port ${PORT}`)
        })
    } catch (error) {
        console.log("Error",error);
    }
})();
