module.exports = (sequelize, DataTypes) => {
  const Song = sequelize.define('Song', {
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
  })

  return Song;
}
