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
  // },{
  //   associate: function (models) {
  //     User.hasOne(models.Bookmark, {
  //       onDelete: 'CASCADE',
  //       hooks: true
  //     });
  //   }
  },{
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      // },
      // afterCreate: (bookmark, options) => {
      //   console.log(`\n\n\n ${options} After update model \n\n\n, ${bookmark}`);
      },
      beforeUpdate:async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      afterBulkCreate: (bookmark, options) => {
        console.log(`\n\n\n ${options} After update model \n\n\n, ${bookmark}`);
      }   
    }   
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
