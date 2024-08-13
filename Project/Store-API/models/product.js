import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name:{
        type: String,
        required: [true, "Please enter product name : "]
    },
    price: {
        type: Number,
        required: [true, "Enter price : "]
    },
    featured: {
        type: Boolean,
        default: false
    },
    rating: {
        type: Number,
        default: 4.5
    },
    createdAt: {
        type: Date,
        default: Date.now()
    },
    company: {
        type: String,
        enum: {
            values: ['ikea','nilkamal','durian','pepperfry'],
            message: "{VALUE} is not supported"
        }
    }
})

export default mongoose.model("product", productSchema);