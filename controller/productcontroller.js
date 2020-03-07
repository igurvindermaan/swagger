const productService = require('../service/productService')
const constants = require('../constants')
module.exports.createProduct= async(req,res) => {
    let response = {...constants.defaultServerResponse}

    try{
        const responseFromService = await productService.createProduct(req.body);
        response.status = 200;
        response.message = ' product created successfully';
        response.body = responseFromService;
    }catch(error){
        console.log('something went wrong: controller: createproduct', error);
        response.message = 'error.message';
    }
    return res.status(response.status).send(response);
}
module.exports.getAllProducts= async (req,res) => {
    let response = {...constants.defaultServerResponse}
    try{
        const responseFromService = await productService.getAllProducts(req.query);
        response.status = 200;
        response.message = ' product fetched successfully';
        response.body = responseFromService;
    }catch(error){
        console.log('something went wrong: controller: getAllProducts', error);
        response.message = 'error.message';
    }
    return res.status(response.status).send(response);
}