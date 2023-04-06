module.exports = (sequelize, DataTypes) => {
  const Bookmark = sequelize.define('Bookmark', {
    SongId: {
      type: DataTypes.STRING,
      allowNull: true
    },
    UserId: {
      type: DataTypes.STRING,
      allowNull: true
    }
  // },{
  //   associate: function (models) {
  //     Bookmark.belongsTo(models.User, {
  //         as: 'User',
  //         foreignKey: 'BookmarkId',
  //         targetKey: 'id',
  //         constraints: false
  //     });
  //     Bookmark.belongsTo(models.Song, {
  //         as: 'Song',
  //         foreignKey: 'BookmarkId',
  //         targetKey: 'id',
  //         constraints: false
  //     });
  //   }
  })
  Bookmark.associate = (models) => {
    Bookmark.belongsTo(models.User);
    Bookmark.belongsTo(models.Song);
  };
  // Bookmark.associate = function ({User, Song}) {
  //   Bookmark.belongsTo(User);
  //   Bookmark.belongsTo(Song);
  // }

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
