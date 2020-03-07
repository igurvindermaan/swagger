const Product = require('../database/productmodel');

module.exports.createProduct = async (serviceData) => {
    try{
        let product = new Product({...serviceData});
        return await product.save();
    }catch (error){
        console.log('something went wrong: Service: CreateProduct', error)
        throw new Error(error)
    }
}
module.exports.getAllProducts = async ({skip=0,limit=10})=>{
    try{
        let products = await Product.find({}).skip(parseInt(skip)).limit(parseInt(limit));
        return products;
    }catch (error){
        console.log('something went wrong: Service: getAllProducts', error)
        throw new Error(error)
    }
}