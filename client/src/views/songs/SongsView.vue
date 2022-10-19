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

</style>
