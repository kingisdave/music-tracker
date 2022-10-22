<template>
  <v-form
    v-model="form"
    @submit.prevent="createSong"
  >
    <v-layout>
      <v-col sm="auto"
        md="5">
        <panel-view
          title="Song Metadata">
          <v-text-field
            label="Title"
            v-model="song.title"
            :rules="[required]"
            clearable
          ></v-text-field>
          <v-text-field
            label="Artist"
            v-model="song.artist"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Genre"
            v-model="song.genre"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Album"
            v-model="song.album"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Album Image Url"
            v-model="song.albumImageUrl"
            :rules="[required]"
          ></v-text-field>
          <v-text-field
            label="Youtube Id"
            v-model="song.youtubeId"
            :rules="[required]"
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
            :rules="[required]"
          ></v-textarea>
          <v-textarea
            label="Lyrics"
            background-color="primary"
            color="primary"
            v-model="song.lyrics"
            :rules="[required]"
          ></v-textarea>
        </panel-view>

        <v-btn
          :disabled="!form"
          :loading="loading"
          block
          color="primary"
          type="submit"
        >
          Add New Song
        </v-btn>
      </v-col>
    </v-layout>
  </v-form>
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
      // error: null,
      form: false,
      // required (v) {
      //   return !!v || 'Field is required'
      // }
      required: (val) => !!val || 'Field is Required.'
      // rules: [v => v.length <= 500 || 'Max 25 characters'],
    }
  },
  methods: {
    async createSong () {
      // this.error = null
      // const validateAllFields = Object
      //   .keys(this.song)
      //   .every(key => !!this.song[key])
      // if (!validateAllFields) {
      //   // this.error = 'Please fill in all the required details'
      //   return
      // }
      if (!this.form) return
      this.loading = true

      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
      setTimeout(() => (this.loading = false), 2000)
    }
  }
}
</script>

<style scoped>

</style>
