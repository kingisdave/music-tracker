const bcrypt = require('bcryptjs')
// const Promise = require('bluebird')
// const bcrypt = Promise.promisifyAll(require('bcrypt-nodejs'))

// function hashPassword (user) {
//   const SALT_FACTOR = 8

//   if(!user.changed('password')) {
//     return;
//   }
//   return  bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => {
//       user.setDataValue('password', hash)
//     })
// }
function hashPassword (user) {
  const SALT_FACTOR = 10

//   if(!user.changed('password')) {
//     return;
//   }
    return bcrypt
      .genSalt(SALT_FACTOR, function(err, salt) {
        bcrypt
          .hash(user.password, salt, function(err, hash) {
            if (err) return;
            // Store hash in your password DB.
            user.password = hash;
          })
      })
      
//   return  bcrypt
//     .genSaltAsync(SALT_FACTOR)
//     .then(salt => bcrypt.hashAsync(user.password, salt, null))
//     .then(hash => {
//       user.setDataValue('password', hash)
//     })
}

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  },{
    hooks: {
      beforeCreate: hashPassword,
      beforeUpdate: hashPassword,
      beforeSave: hashPassword,
    }
    // hooks: {
    //   beforeCreate: (user, options) => {
       
    //   },
    //   afterValidate: (user, options) => {
    //     user.username = 'Toni';
    //   }
    // }
  });

  User.prototype.comparePassword = function (password) {
    bcrypt.compare(password, hashPassword, function(err, res) {
      if(!err) return;
      return res;
    })
  }
  // User.prototype.comparePassword = function (password) {
  //   return bcrypt.compareAsync(password, this.password) 
  // }
  return User;
}
