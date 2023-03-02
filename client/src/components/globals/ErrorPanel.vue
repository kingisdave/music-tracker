<template>
  <div class="px-1">
    <v-alert
      v-bind="$attrs" 
      v-on="$listeners"
      class="small mx-1"
      theme="dark"
      closable
      close-label="Close Alert"
      color="#C51162"
      elevation="2"
    >
    <slot>
      No slot content
    </slot>
    </v-alert>
  </div>
</template>

<script>
  export default {
    props: ['showError']  
  }
</script>
<style scoped>

</style>
