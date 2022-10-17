module.exports = (sequelize, DataTypes) => {
  const Admin = sequelize.define('Admin', {
    title: DataTypes.STRING,
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    userName: {
      type: DataTypes.STRING,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    profilePic: DataTypes.STRING,
    isSuper: DataTypes.STRING,
    password: DataTypes.STRING
  })
  return Admin
}
