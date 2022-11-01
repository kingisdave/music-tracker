<template>
  <div>
    <panel-view
      title="Youtube Video">
      <iframe id="iframe-youtube"
        width="640" height="360"
        :src="embedYoutubeId(youtubeId)"
        frameborder="0"
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
  },
  methods: {
    embedYoutubeId (youtubeUrl) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      let urlMatch = youtubeUrl.match(regExp);
      return (urlMatch && urlMatch[7].length == 11) ?
        `https://www.youtube.com/embed/${urlMatch[7]}` : false;
    }

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
