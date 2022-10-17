<template>
  <v-layout column>
    <panel-view title="Songs">
      <div v-for="song in songs"
        :key="song.id">
        {{song.title}} -
        {{song.artist}} -
        {{song.album}}
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
  async mounted () {
    // make a request on mount
    this.songs = (await SongsService.index()).data
    console.log('songs', this.songs)
  }
}
</script>

<style scoped>

</style>
