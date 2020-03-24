const express = require('express');
const router = express.Router();
const app = express();
const productController = require('../controller/productcontroller');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const tokenValidation = require('../middleware/tokenvalidation')

router.post('/',
tokenValidation.validateToken,
productController.createProduct)   ;

router.get('/',
tokenValidation.validateToken,
productController.getAllProducts)
module.exports = router;