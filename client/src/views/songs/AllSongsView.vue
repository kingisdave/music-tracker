<template>
  <v-layout column>
    <panel-view title="Songs">
      <template v-slot:action>
        <v-btn
          @click="navigateTo({name: 'songs-create'})"
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
              @click="navigateTo({
                name: 'song',
                params: {
                  songId: song.id
                }
              })"
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
  </v-layout>
</template>

<script>
import SongsService from '@/services/SongService'
import PanelView from '@/components/PanelView'
export default {
  components: {
    PanelView
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    // make a request on mount
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
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
