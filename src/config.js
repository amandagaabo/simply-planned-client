require('dotenv').config();

exports.PORT = process.env.PORT || 8080;
exports.API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:3000';
