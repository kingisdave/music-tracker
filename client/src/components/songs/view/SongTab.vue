<template>
  <div>
    <panel-view
      title="Song Tab"
    >
      <textarea
        readonly
        v-model="songTab"
      ></textarea>
    </panel-view>
  </div>
</template>

<script>
export default {
  props: [
    'songTab'
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
