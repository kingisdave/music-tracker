<template>
  <v-card :rounded="rounded" :class="cardClass"
    class="px-3 py-4 m-1" theme="dark">
    <div class="d-flex flex-no-wrap justify-space-between">
      <v-avatar class="ma-2" size="40" rounded="0">
        <v-icon :size="iconSize" :icon="icon"></v-icon>
      </v-avatar>
      <div>
        <v-card-title class="text-xs-h6 text-md-h5">
          {{ title }}
        </v-card-title>
        <v-card-subtitle>
          {{ subtitle }}
        </v-card-subtitle>
      </div>
    </div>
  </v-card>
</template>

<script>
export default {
  props: [
    'rounded',
    'cardClass',
    'iconSize',
    'icon',
    'title',
    'subtitle',
  ]
};
</script>

<style scoped>
/* Additional styling if needed */
</style>
