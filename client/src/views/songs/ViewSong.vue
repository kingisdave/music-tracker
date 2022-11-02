<template>
  <v-layout>
    <v-row>
      <v-col cols="12"
        md="6">
        <song-metadata
          :song="song"
        />
      </v-col>
      <v-col cols="12"
        md="6">
        <youtube-video
          :youtubeId="song.youtubeId"
        />
      </v-col>
      <v-col cols="12"
        md="6">
        <song-lyrics
          :songLyrics="song.lyrics"
        />
      </v-col>
      <v-col cols="12"
        md="6">
        <song-tab
          :songTab="song.tab"
        />
      </v-col>
    </v-row>
  </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
import PanelView from '@/components/PanelView'
import YoutubeVideo from '@/components/viewSong/YoutubeVideo.vue'
import SongMetadata from '@/components/viewSong/SongMetadata.vue'
import SongLyrics from '@/components/viewSong/SongLyrics.vue'
import SongTab from '@/components/viewSong/SongTab.vue'
import CommentTab from '@/components/comment/CommentTab.vue'

export default {
  data () {
    return {
      song: {}
      // songId: this.$route.params.id
    }
  },
  // computed: {
  //   loadedMemory () {
  //     return this.$store.getters.memory(this.songId)
  //   }
  // },
  async mounted () {
    const songId = this.$route.params.songId
    // const songId = this.$store.state.route.params.songId
    this.song = (await SongService.show(songId)).data
    console.log(this.song)
  },
  components: {
    PanelView,
    YoutubeVideo,
    SongMetadata,
    SongLyrics,
    SongTab,
    CommentTab
  }
}
</script>

<style scoped>
  textarea {
    width: 100%;
    height: 600px;
    border: none;
  }
</style>
