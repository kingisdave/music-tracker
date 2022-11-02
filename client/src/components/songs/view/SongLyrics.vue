<template>
  <div>
    <panel-view
      title="Song Lyrics"
    >
      <textarea
        readonly
        v-model="songLyrics"
      ></textarea>
    </panel-view>
  </div>
</template>

<script>
export default {
  props: [
    'songLyrics'
  ]

}
</script>

<style scoped>
  textarea {
    width: 100%;
    height: 600px;
    border: none;
  }
</style>
