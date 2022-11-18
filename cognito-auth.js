const { Authenticator } = require('cognito-at-edge');
const config = require('./config.json');

const authenticator = new Authenticator(config.cognito);
exports.handler = async (request) => authenticator.handle(request);