<template>
  <v-container-fluid>
    <v-row
      class="mb-2"
      no-gutters
    >
      <v-col cols="12">
        <search-song-panel />
      </v-col>
      <v-col cols="12">
        <songs-panel />
      </v-col>
    </v-row>
  </v-container-fluid>
</template>

<script>
import SongsPanel from '@/components/songs/SongsPanel'
import SearchSongPanel from '@/components/songs/SearchSongPanel'
export default {
  components: {
    SongsPanel,
    SearchSongPanel
  },
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
