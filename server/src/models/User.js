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
    hooks: {
      beforeCreate: async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      },
      beforeUpdate:async (user) => {
        if (user.password) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      }   
    }   
  });
  // User.associate = (models) => {
  //   User.hasOne(models.Bookmark, {
  //     onDelete: 'CASCADE',
  //     constraints: true
  //   });
  // };

  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  
  User.associate = function (models) {
    User.hasOne(models.Bookmark, {
      onDelete: 'CASCADE',
      constraints: true
    });
  }

  return User;
}
