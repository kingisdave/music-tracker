<template>
  <v-container class="">
    <v-row no-gutters>
      <v-col sm="auto"
        md="6">
        <v-toolbar :elevation="3" flat dense dark color="primary" >
          <v-toolbar-title>{{title}}</v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <slot >
            No slot content defined
          </slot>
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: [
    'title'
  ]
}
</script>

<style scoped>

</style>
