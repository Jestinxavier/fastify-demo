const Sequelize = require('sequelize');
const sequelize = require('../configaration/Config');

const User = sequelize.define('User', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING
  }
});

// `sequelize.define` also returns the model
async function  name(firstName,lastName){
  await User.create({ firstName: firstName, lastName: lastName });
   return true
}

module.exports = {name,User}