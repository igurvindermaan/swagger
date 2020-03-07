const userModel = require('../database/userModel');
const constants = require('../constants/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

module.exports.signup = async ({email,password}) => {
    try{
      const user = await userModel.findOne({email});
      if (user) {
        throw new Error(constants.userMessage.DUPLICATE_EMAIL)
      }
      password = await bcrypt.hash(password, 12);
      const newUser = new userModel({email,password});
      let result = await newUser.save();
      return result;
    }catch (error){
        console.log('something went wrong: Service: signup', error)
        throw new Error(error)
    }   

}

module.exports.login = async ({email,password}) => {
    try{
      const user = await userModel.findOne({email});
      if (!user) {
        throw new Error(constants.userMessage.USER_NOT_FOUND)
      }
     const isValid = await bcrypt.compare(password, user.password);

     if (!isValid) {
            throw new Error(constants.userMessage.INVALID_PASSWORD)
     }
     const token = jwt.sign({id: user._id}, process.env.SECRET_KEY || 'my-secret-key');

     return { token};
    }catch (error){
        console.log('something went wrong: Service: login', error)
        throw new Error(error)
    }   
}