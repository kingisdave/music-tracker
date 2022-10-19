<template>
  <v-layout>
    <v-col sm="auto"
        md="5">
      <panel-view title="Song Metadata">
        <v-text-field
          label="Title"
          required
          :rules="[required]"
          v-model="song.title"
        ></v-text-field>
        <v-text-field
          label="Artist"
          v-model="song.artist"
        ></v-text-field>
        <v-text-field
          label="Genre"
          v-model="song.genre"
        ></v-text-field>
        <v-text-field
          label="Album"
          v-model="song.album"
        ></v-text-field>
        <v-text-field
          label="Album Image Url"
          v-model="song.albumImageUrl"
        ></v-text-field>
        <v-text-field
          label="Youtube Id"
          v-model="song.youtubeId"
        ></v-text-field>
      </panel-view>
    </v-col>
    <v-col sm="auto"
      md="7"
    >
      <panel-view title="Song Structure">
        <v-textarea
          label="Tab"
          background-color="primary"
          color="primary"
          v-model="song.tab"
        ></v-textarea>
        <v-textarea
          label="Lyrics"
          background-color="primary"
          color="primary"
          v-model="song.lyrics"
        ></v-textarea>
      </panel-view>

      <v-btn
        block
        color="primary"
        @click="createSong">
        Add New Song
      </v-btn>
    </v-col>
  </v-layout>
</template>

<script>
import PanelView from '@/components/PanelView'
import SongService from '@/services/SongService'

export default {
  components: {
    PanelView
  },
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !value || 'Required.'
      // rules: [v => v.length <= 500 || 'Max 25 characters'],
    }
  },
  methods: {
    async createSong () {
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>

</style>
