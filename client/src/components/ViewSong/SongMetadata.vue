<template>
  <div>
    <panel-view
      title="Song Metadata">
      <v-row>
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
        </v-col>
        <v-col cols="6">
          <img
            :src="song.albumImageUrl"
            alt="preview"
            height="100"
          /><br/>
          <div class="song-album">
            {{song.album}}
          </div>
        </v-col>
      </v-row>
    </panel-view>
  </div>
</template>

<script>
import PanelView from '@/components/PanelView'
export default {
  props: [
    'song'
  ],
  component: {
    PanelView
  }
}
</script>

<style scoped>
  .song-title {
    font-size: 1.6em;
  }
  .song-artist {
    font-size: 1.4em;
  }
  .song-album {
    font-size: 1.3em;
  }
  song-image {
    width: 60%;
    margin: 0 auto;
  }
</style>
