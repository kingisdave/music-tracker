<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        <card-panel />
      </v-col>
      <v-col cols="12">
        <analytics-panel />
      </v-col>
    </v-row>

  </v-container>
</template>

<script>
import CardPanel from '@/components/dashboard/CardPanel.vue'
import AnalyticsPanel from '@/components/dashboard/AnalyticsPanel.vue'

export default {
  components: {
    CardPanel,
    AnalyticsPanel
  }
}
</script>

<style scoped>

</style>
