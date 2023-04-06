module.exports = (sequelize) => {
  const Bookmark = sequelize.define('Bookmark', {
    // userId: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // },
    // songId: {
    //   type: DataTypes.STRING,
    //   allowNull: true
    // }
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
  // Bookmark.associate = ({User, Song}) => {
  //   Bookmark.belongsTo(User, {
  //     foreignKey: 'UserId'
  //   });
  //   Bookmark.belongsTo(Song, {
  //     foreignKey: 'SongId'
  //   });
  // }
  Bookmark.associate = function (models) {
    Bookmark.belongsTo(models.User, {constraints: true});
    Bookmark.belongsTo(models.Song, {constraints: true});
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
