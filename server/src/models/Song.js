module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
    // id: {
    //   type: DataTypes.INTEGER,
    //   autoIncrement: true,
    //   allowNull: false,
    //   primaryKey: true,
    // },
    title: DataTypes.STRING,
    artist: DataTypes.STRING,
    genre: {
      type: DataTypes.STRING,
      allowNull: true
    },
    album: DataTypes.STRING,
    albumImageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    youtubeId: DataTypes.STRING,
    lyrics: DataTypes.TEXT,
    tab: DataTypes.TEXT
  });

  Song.associate = function (models) {
    Song.hasOne(models.Bookmark, {
      onDelete: 'CASCADE'
    });
  };
  
  return Song;
}
