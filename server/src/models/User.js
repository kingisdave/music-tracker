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
//  
  },{
  //   instanceMethods: {
      // beforeCreate: async (user) => {
      //   if (user.password) {
      //     const salt = await bcrypt.genSalt(10);
      //     user.password = await bcrypt.hash(user.password, salt);
      //   }
      // },
      // beforeUpdate: async (user) => {
      //   if (user.password) {
      //     const salt = await bcrypt.genSalt(10);
      //     user.password = await bcrypt.hash(user.password, salt);
      //   }
      // },
      associate: function (models) {
        User.hasOne(models.Bookmark, {
          onDelete: 'CASCADE',
          hooks: true
        });
      },
    // }
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
  // User.beforeCreate(async (user) => {
  //   if (user.password) {
  //     const salt = await bcrypt.genSalt(10);
  //     user.password = await bcrypt.hash(user.password, salt);
  //   }
  // });
  // User.beforeUpdate(async (user) => {
  //   if (user.password) {
  //     const salt = await bcrypt.genSalt(10);
  //     user.password = await bcrypt.hash(user.password, salt);
  //   }
  // });
  // Method 2 via the .addHook() method
  // User.addHook('beforeCreate','beforeUpdate', async (user) => {
  //   if (user.password) {
  //     const salt = await bcrypt.genSalt(10);
  //     user.password = await bcrypt.hash(user.password, salt);
  //   }
  // });
  // User.addHook('beforeUpdate', async (user) => {
  //   if (user.password) {
  //     const salt = await bcrypt.genSalt(10);
  //     user.password = await bcrypt.hash(user.password, salt);
  //   }
  // });
  // Method 3 via the direct method
  // User.beforeCreate(async (user) => {
  //   if (user.password) {
  //     const salt = await bcrypt.genSalt(10);
  //     user.password = await bcrypt.hash(user.password, salt);
  //   }
  // });
  // User.beforeUpdate(async (user) => {
  //   if (user.password) {
  //     const salt = await bcrypt.genSalt(10);
  //     user.password = await bcrypt.hash(user.password, salt);
  //   }
  // });
 
  User.prototype.validPassword = async function (password) {
    return await bcrypt.compare(password, this.password);
  };
  // User.associate = function (models) {
  //   User.hasOne(models.Bookmark, {
  //     onDelete: 'CASCADE',
  //     hooks: true
  //   });
  // };
  
  return User;
}
