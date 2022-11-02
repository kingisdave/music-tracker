<template>
  <div>
    <panel-view
      title="Youtube Video">
      <iframe id="iframe-youtube"
        width="100%" height="350"
        :src="embedYoutubeId(youtubeId)"
        frameborder="0" allowfullscreen=""
      ></iframe>
    </panel-view>
  </div>
</template>

<script>
export default {
  props: [
    'youtubeId'
  ],
  methods: {
    embedYoutubeId (youtubeUrl) {
      let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
      if(youtubeUrl){
        let urlMatch = youtubeUrl.match(regExp);
        return (urlMatch && urlMatch[7].length == 11) ?
          `https://www.youtube.com/embed/${urlMatch[7]}` : false;
      } else{
        return `https://www.youtube.com`;
      }
    }

  }
}
</script>

<style scoped>
  iframe:focus {
    outline: none;
  }

</style>
