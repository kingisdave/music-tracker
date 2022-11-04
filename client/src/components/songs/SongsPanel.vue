<template>
  <panel-view title="Songs">
    <template v-slot:action>
      <v-btn
        :to="{name: 'songs-create'}"
        class="ma-2 primary accent-2"
        color="white"
        medium
        absolute
        right
        middle
      >
        <v-icon icon="mdi-plus" />
      </v-btn>

    </template>
    <div
      class="song"
      v-for="song in songs"
      :key="song.id"
    >
      <v-layout>
        <v-col cols="6">
          <div class="song-title">
            {{song.title}}
          </div>
          <div class="song-artist">
            {{song.artist}}
          </div>
          <div class="song-genre">
            {{song.genre}}
          </div>
          <v-btn
            :to="{
              name: 'song',
              params: {
                songId: song.id
              }
            }"
            color="primary"
          >
            View Song
          </v-btn>
        </v-col>
        <v-col cols="6">
          <img
            class="song-image"
            :src="song.albumImageUrl"
            alt="song.title"
          />
        </v-col>
      </v-layout>
    </div>
  </panel-view>
</template>

<script>
import SongsService from '@/services/SongService'
export default {
  data () {
    return {
      songs: null
    }
  },
  watch: {
    '$route.query.search': {
      immediate: true,
      async handler (value) {
        this.songs = (await SongsService.index(value)).data
      }
    }
  }
}
</script>

<style scoped>
  .song {
    padding: 15px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 1.6em;
  }
  .song-artist {
    font-size: 1.4em;
  }
  .song-album {
    font-size: 1.3em;
  }
  song-image{
    width: 60%;
    margin: 0 auto;
  }
</style>
