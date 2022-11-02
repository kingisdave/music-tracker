<template>
  <v-form
    v-model="form"
    @submit.prevent="editSong"
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
          Update your song
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
      loading: false,
      form: false,
      // required (v) {
      //   return !!v || 'Field is required'
      // }
      required: (val) => !!val || 'Field is Required.'
      // rules: [v => v.length <= 500 || 'Max 25 characters'],
    }
  },
  methods: {
    async editSong () {
      if (!this.form) return
      this.loading = true
      setTimeout(() => (this.loading = false), 2000)

      const songId = this.$route.params.songId
      try {
        await SongService.put(this.song)
        this.$router.push({
          name: 'song',
          params: {
            songId: songId
          }
        })
      } catch (err) {
        console.log(err)
      }
    }
  },
  async mounted () {
    try {
      const songId = this.$route.params.songId
      this.song = (await SongService.show(songId)).data
    } catch (err) {
      console.log(err)
    }
  },
}
</script>

<style scoped>

</style>
