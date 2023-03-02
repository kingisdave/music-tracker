module.exports = (sequelize) => {
  const Bookmark = sequelize.define('Bookmark', {})
  // Bookmark.associate = models => {
  //   Bookmark.belongsTo(models.Song)
  //   Bookmark.belongsTo(models.User)
  // }
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User)
    Bookmark.belongsTo(models.Song)
  } 

  return Bookmark;
}
