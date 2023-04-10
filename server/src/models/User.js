const bcrypt = require('bcrypt')

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: DataTypes.STRING
  },{
  //   associate: function (models) {
  //     User.hasOne(models.Bookmark, {
  //       onDelete: 'CASCADE',
  //       hooks: true
  //     });
  //   }
//   , {
    freezeTableName: true,
    instanceMethods: {
        generateHash(password) {
            // return bcrypt.hash(password, bcrypt.genSaltSync(8));
            bcrypt.hash(password, 10, function(err, hash) {
              User.password = hash;  // Store hash in your password DB.
          });
        },
        validPassword(password) {
            return bcrypt.compare(password, this.password);
            bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
              // result == true
          });
        }
    }
  },{
    // hooks: {
    //   beforeCreate: async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSalt(10);
    //       user.password = await bcrypt.hash(user.password, salt);
    //     }
    //   },
    //   beforeUpdate:async (user) => {
    //     if (user.password) {
    //       const salt = await bcrypt.genSalt(10);
    //       user.password = await bcrypt.hash(user.password, salt);
    //     }
    //   }
    // }   
  });
 
  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  // User.associate = function (models) {
  //   User.hasOne(models.Bookmark, {
  //     through: Bookmark,
  //     onDelete: 'CASCADE',
  //     hooks: true
  //   });
  // };
  
  return User;
}
