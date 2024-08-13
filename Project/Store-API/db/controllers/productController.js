import product from "../../models/product.js";
export const getAllProducts = async(req,res) => {
    try {
        console.log(req.query);
        const prds = await product.find(req.query);
        res.status(200).json({nbHits: prds.length, data: prds});
    } catch (error) {
        console.log(error)
    }
};
export const getAllProductsStatic = async (req,res) => {
    try {
        //Select * from Products
        // const prds = await product.find();
        const prds = await product.find({ featured: true});
        res.status(200).json({nbHits: prds.length, data: prds})
    } catch (error) {
        console.log(error)
    }
}