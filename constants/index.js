module.exports = {
    defaultServerResponse: {
        status: 400,
        message: '',
        body: {}
    },
    productMessage: {
     PRODUCT_FETCHED: 'Product Fetched Succefully'
    },
    userMessage: {
        SIGNUP_SUCCESS: 'Signup Success',
        LOGIN_SUCCESS: 'Login Success',
        DUPLICATE_EMAIL: 'User Already Exists with given email',
        USER_NOT_FOUND: 'User Not Found',
        INVALID_PASSWORD: 'Incorrect password'
    },
    requestValidationMessage: {
        BAD_REQUEST: 'Invalid Fields',
        TOKEN_MISSING: 'TOken missing from header'
    }
}