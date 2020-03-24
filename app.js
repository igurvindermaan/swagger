const express = require('express');
const dotEnv  = require('dotenv');
const cors = require('cors');
const app = express();
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const dbConncection = require('./database/connection')
const YAML = require('yamljs');
const swaggerDocument = YAML.load('./swagger.yaml');
const oauthserver = require('oauth2-server');


dotEnv.config();


dbConncection();
//cors
app.use(cors());

//request payload middleware 
app.use(express.json());
app.use(express.urlencoded({extended: true}));



// // Extended: https://swagger.io/specification/#infoObject
// const swaggerOptions = {
//     swaggerDefinition: {
//         info: {
//             title: 'Customer API',
//             description: "Customer API information",
//             contact: {
//                 name: "Gurvinder maan"
//             },
//             servers: ["http://localhost:5000"]
//         }
//     },
//     //['.routes/*.js]
//     apis: ["app.js"]
// }

// const swaggerDocs = swaggerJsDoc(swaggerOptions);
// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocs));


// //routes
// /**
//  * @swagger
//  * /customers:
//  *  get:
//  *    description: Use to request all customers
//  *    responses:
//  *     '200':
//  *      
//  *  description: A successfull response
//  */

// app.get('/customers', (req,res)=>{
//     res.send('customer results')
// })
// /**
//  * @swagger
//  * /customer:
//  *  put: 
//  *    description: Use to update a customers
//  *    responses:
//  *       '201':
//  *          description: A successful response
//  */
app.use('/api/v1/product', require('./routes/productroutes'));
app.use('/api/v1/user', require('./routes/userRoutes'))
//API Documentation
if (process.env.NODE_ENV != 'production') {
    app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
  }
 app.get('/', (req,res,next) => {
    res.send('Hello from Node Server');
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server listening on port ${port}`);
})