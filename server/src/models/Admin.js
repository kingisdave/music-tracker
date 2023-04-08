module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    title: {
      type: DataTypes.STRING,
      allowNull: true
    },
    firstName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    userName: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: false
    },
    profilePic: {
      type: DataTypes.STRING,
      allowNull: true
    },
    isSuper: {
      type: DataTypes.STRING,
      allowNull: true
    },
    password: DataTypes.STRING,
  })

  // Admin.associate = function (models) {
  //   Admin.hasOne(models.Bookmark, {
  //     onDelete: 'CASCADE'
  //   });
  // }

  return Admin
}
