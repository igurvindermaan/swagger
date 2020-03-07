const express = require('express');
const router = express.Router();
const app = express();
const productController = require('../controller/productcontroller');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const tokenValidation = require('../middleware/tokenvalidation')
// // Extended: https://swagger.io/specification/#infoObject
// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: 'Product Data Api',
//             description: "Products Api information",
//             contact: {
//                 name: "Gurvinder Maan"
//             },
//             servers: ["http://localhost:5002"]
//         }
//     },
//      //['.routes/*.js]
//      apis: ["productroutes.js"]
// }

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// //routes
// /**
//  * /products:
//  *  post:
//  *     description: Use to add Products,
//  *     responses:
//  *      '200':
//  *         description: A succeful response
//  */
router.post('/',
tokenValidation.validateToken,
productController.createProduct)   ;
router.get('/',
tokenValidation.validateToken,
productController.getAllProducts)
module.exports = router;