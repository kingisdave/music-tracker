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
            height="200"
          /><br/>
          <div class="song-album">
            {{song.album}}
          </div>
        </v-col>
        <v-col
          class="d-flex align-end justify-center"
          cols="12">
          <v-btn
            rounded="lg"
            size="large"
            @click="navigateTo({
              name: 'song-edit',
              params: {
                songId: song.id
              }
            })"
            color="primary"
          >
            Edit Song
          </v-btn>
        </v-col>
      </v-row>
    </panel-view>
  </div>
</template>

<script>
export default {
  props: [
    'song'
  ],
  data () {
    return {
      alignments: ['end']
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
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
