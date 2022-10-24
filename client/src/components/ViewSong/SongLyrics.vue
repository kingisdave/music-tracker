<template>
  <div>
    <panel-view
      title="Lyrics">
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

</style>
