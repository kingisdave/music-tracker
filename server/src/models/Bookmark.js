module.exports = (sequelize) => {
  const Bookmark = sequelize.define('Bookmark', {
    // SongId: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // UserId: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // }
  })
  // Bookmark.associate = models => {
  //   Bookmark.belongsTo(models.Song)
  //   Bookmark.belongsTo(models.User)
  // }
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(User, {
      foreignKey: 'UserId'
    })
    Bookmark.belongsTo(Song, {
      foreignKey: 'SongId'
    })
  } 

  return Bookmark;
}
