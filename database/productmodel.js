const mongoose = require('mongoose');
const randtoken = require('rand-token');


const productSchema = new mongoose.Schema({
    appname: String,
    appdescription: String,
    client_id: {
    	type: String,
    	default: function(){
    		return randtoken.generate(32)
    	}
    },
    client_secret: {
    	type: String,
    	default: function(){
    		return randtoken.generate(32)
    	}
    }
},{
    timestamps: true
});


module.exports = mongoose.model('Product', productSchema);