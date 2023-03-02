<template>
  <div class="px-1">
    <v-alert
      class="small mx-1"
      theme="dark"
      v-model="showError"
      closable
      close-label="Close Alert"
      color="#C51162"
      elevation="2"
    >
    <slot >
      No slot content
    </slot>
    </v-alert>
  </div>
</template>

<script>
  export default {
    props: ['showError'],
  
    data() {
      return {
        showError: false
      }
    }
  }
</script>
<style scoped>

</style>
