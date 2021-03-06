const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateLoginInput(data) {
  const errors = {};

  data.username = validText(data.username) ? data.username : '';
  data.password = validText(data.password) ? data.password : '';

  if (Validator.isEmpty(data.username)) {
    errors.username = 'Username is empty';
  }

  if (Validator.isEmpty(data.password)) {
    errors.password = 'Password is empty';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0,
  };
};
