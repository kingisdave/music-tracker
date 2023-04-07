module.exports = (sequelize) => {
  const Bookmark = sequelize.define('Bookmark', {})
  // Bookmark.associate = (models) => {
  //   Bookmark.belongsTo(models.User, {
  //     foreignKey: "userId",
  //     as: "user",
  //   });
  //   Bookmark.belongsTo(models.Song, {
  //     foreignKey: "songId",
  //     as: "song"
  //   });
  // };
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.Song);
    // Bookmark.belongsTo(models.User);
  }

  return Bookmark;
}

// module.exports = (sequelize) => {
//   const Bookmark = sequelize.define('Bookmark', {
//     // SongId: {
//     //   type: DataTypes.STRING,
//     //   allowNull: true
//     // },
//     // UserId: {
//     //   type: DataTypes.STRING,
//     //   allowNull: true
//     // }
//   })
//   // Bookmark.associate = models => {
//   //   Bookmark.belongsTo(models.Song)
//   //   Bookmark.belongsTo(models.User)
//   // }
//   Bookmark.associate = function (models) {
//     Bookmark.belongsTo(models.User, {
//       foreignKey: 'UserId'
//     })
//     Bookmark.belongsTo(models.Song, {
//       foreignKey: 'SongId'
//     })
//   } 

//   return Bookmark;
// }
