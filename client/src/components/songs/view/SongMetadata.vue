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
          class="d-flex justify-space-around"
          cols="12">
          <v-btn
            rounded="lg"
            size="large"
            theme="dark"
            color="success"
            :to="{
              name: 'song-edit',
              params () {
                return {
                  songId: song.id
                }
              }
            }"
          >
            Edit Song
          </v-btn>
          <v-btn
            v-if="isUserLoggedIn && !isBookmarked"
            rounded="lg"
            theme="dark"
            size="large"
            @click="addBookmark"
            color="secondary"
          >
            Bookmark
          </v-btn>
          <v-btn
            v-if="isUserLoggedIn && isBookmarked"
            rounded="lg"
            size="large"
            theme="dark"
            @click="unBookmark"
            color="secondary"
          >
            Unbookmark
          </v-btn>
        </v-col>
      </v-row>
    </panel-view>
  </div>
</template>

<script>
import BookmarkService from '@/services/BookmarkService'
import { mapState } from 'vuex'
export default {
  props: [
    'song'
  ],
  data () {
    return {
      isBookmarked: false
    }
  },
  computed: {
    ...mapState([
      'isUserLoggedIn'
    ])
  },
  async mounted () {
    if(!this.isUserLoggedIn) return;
    
    try {
      const bookmark = (await BookmarkService.index({
        userId: this.song.id,
        songId: this.$store.state.user.id,
        bookmarkType: 'song'
      })).data
      this.isBookmarked = !!bookmark
      console.log('bookmark ', this.isBookmarked)
    } catch (error) {
      console.log(error)
    }
  },
  methods: {
    async addBookmark () {
      try {
        await BookmarkService.post({
          userId: this.song.id,
          songId: this.$store.state.user.id,
        });        
      } catch (error) {
        console.log(error)
      }
    },
    async unBookmark () {
      try {
        await BookmarkService.delete({
          userId: this.song.id,
          songId: this.$store.state.user.id,
        });        
      } catch (error) {
        console.log(error)
      }
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
