<template>
  <panel-view title="Search">
    <v-text-field
      label="Search by song Title, Artist, Genre, or Album "
      v-model="search"
    ></v-text-field>
  </panel-view>
</template>

<script>
import _ from "lodash"
export default {
  data () {
    return {
      search: ''
    }
  },
  watch: {
    search: _.debounce(async function (value) {
      const route = {
        name: 'songs'
      }
      if(this.search !== '') {
        route.query = {
          search: this.search
        }
      }
      this.$router.push(route)
    }, 600),
    '$route.query.search': {
      immediate: true,
      handler (value) {
        this.search = value;
      }
    }
  }
}
</script>

<style scoped>

</style>
