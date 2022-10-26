<template>
  <div>
    <panel-view
      title="Youtube">
      <iframe id="existing-iframe-example"
        width="640" height="360"
        src="https://www.youtube.com/embed/M7lc1UVf-VE?enablejsapi=1"
        frameborder="0"
        style="border: solid 4px #37474F"
      ></iframe>
    </panel-view>
  </div>
</template>

<script>
import PanelView from '@/components/PanelView'
export default {
  props: [
    'youtubeId'
  ],
  component: {
    PanelView
  }
}
</script>

<style scoped>
  iframe:focus {
    outline: none;
  }

  iframe[seamless] {
      display: block;
  }
</style>
