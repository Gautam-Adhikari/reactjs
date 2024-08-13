import 'dotenv/config';
import connectDB from './db/connectDB.js';
import product from './models/product.js';
import jsonProduct from './products.json' assert {type: "json"};

const insertProduct  = async() => {
    try {
        await connectDB(process.env.MONGO_URL);
        await product.deleteMany();
        await product.create(jsonProduct);
        console.log("Product inserts successfully");
        process.exit(0);
    } catch (error) {
        console.log(error)
    }
}
insertProduct();