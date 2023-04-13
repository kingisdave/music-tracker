module.exports = (sequelize) => {
  const Bookmark = sequelize.define('Bookmark', {})
  
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User, {
      constraints: false
    });
    Bookmark.belongsTo(models.Song);
  }

  return Bookmark;
}
