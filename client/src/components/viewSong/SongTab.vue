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
import PanelView from '@/components/PanelView'
export default {
  props: [
    'songTab'
  ],
  components: {
    PanelView
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
